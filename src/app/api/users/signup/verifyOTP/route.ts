import { NextRequest,NextResponse } from "next/server";
import organisation from "@/models/organisationModel";

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {otp,email} = reqBody
        const user = await organisation.findOne({email,otp, otpExpiry: {$gt: Date.now()}})
        if(!user){
            return NextResponse.json({error: "Invalid OTP"},{status:400})
        }
        user.isVerified = true
        user.otp = undefined
        user.otpExpiry = undefined
        await user.save()

        return NextResponse.json({message: "Account Successfully Created", success:true})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}