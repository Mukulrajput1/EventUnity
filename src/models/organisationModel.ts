import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
    organisation_name: {type:String,required: [true, "please provide email"]},
    email: { type: String, required: [true, "please provide email"], unique: true },
    isVerified : {type: Boolean, default: false},
    password: { type: String, required: [true, "please provide password"] },
    otp : {type:Number, default: 0 },
    otpExpiry : Date,
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,
  });
  
  const organisation = mongoose.models.organisations || mongoose.model("organisations", organisationSchema);
  
  export default organisation;