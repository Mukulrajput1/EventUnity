import nodemailer from 'nodemailer'
import organisation from '@/models/organisationModel'
import bcryptjs from 'bcryptjs'
import otpGenerator from 'otp-generator'

export const sendEmail = async ({email,emailType, userId}:any)=>{
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(),10)
        const otp =  otpGenerator.generate(6, { upperCaseAlphabets: false,lowerCaseAlphabets: false, specialChars: false })
        if( emailType === 'VERIFY'){
            await organisation.findByIdAndUpdate(userId,{otp : otp,otpExpiry: Date.now() + 300000})
        }
        else if(emailType === 'FORGOT'){
            await organisation.findByIdAndUpdate(userId,{forgotPasswordToken : hashedToken,forgotPasswordTokenExpiry: Date.now() + 3600000})
        }
        
        var transport = nodemailer.createTransport({
          host: "smtp.titan.email",
          port: 587,
          secure:false,
          auth: {
            user: "admin@mukultech.online",
            pass: "SUM5555@"
          }
        });
          const mailOptions = {
            from: "admin@mukultech.online",
            to : email,
            subject: emailType==='VERIFY'?"Verify OTP": "Reset Your Password",
            html: `<p>${emailType==='VERIFY'?`Your OTP is : ${otp}`:"Click <a href = ${process.env.DOMAIN}/resetpassword?token=${hashedToken}>Here</a> to Reset Your Password or copy the url given below. <br> resetpassword?token=${hashedToken} "}</p>`
          }
          const mailresponse = await transport.sendMail(mailOptions);
          return mailresponse
        } catch (error:any) {
        throw new Error(error.message)
    }
}