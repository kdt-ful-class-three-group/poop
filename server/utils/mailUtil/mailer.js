import nodemailer from 'nodemailer';
import dotenv from "dotenv";


dotenv.config()



const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PW,
  },
});


export const sendEmail = async (to, code) => {
  const mailOptions = {
    from: process.env.EMAIL_ID,
    to: to,
    text: `인증번호는 ${code}입니다.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}