import connect from "@/dbconfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import organisation from "@/models/organisationModel";
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";



connect()
export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const{organisation_name,email,password} = reqBody
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)
        
        const isUserExist = await organisation.findOne({email})
        if(isUserExist && isUserExist.isVerified){
            return NextResponse.json({error:"Account Already Exist"},{status:400})
        }
        if(isUserExist && !isUserExist.isVerified){
            await organisation.findOneAndDelete({email})
        }
        const user = new organisation({
            organisation_name,
            email,
            password:hashedPassword
        })
        const savedUser = await user.save()
        console.log(savedUser)
        const mailResponse = await sendEmail({email, emailType: 'VERIFY', userId:savedUser._id})
        return NextResponse.json({message:"OTP Sent successfully", success:true})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}