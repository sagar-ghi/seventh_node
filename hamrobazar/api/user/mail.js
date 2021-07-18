// import nodemailer from 'nodemailer'

// let testAccount = await nodemailer.createTestAccount();

// const transporter=nodemailer.createTransport({
//     host: "smtp.gmail.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
// })

// export const onForgotPassword=async()=>{
//     try{
//     const result=await transporter.sendMail({
//         from:'admin@kathford.com',
//         to:"trainer.csit@kathford.edu.np",
//         subject:'This is a test mail from kathford',
//         text:"Bla bla",
//         html:`<h1>Test Mail</h1><br>This is a test mail from kathford`
//     })

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
// return 'Success'
// }catch(ex){
//     console.log(ex)
//     return 'Failure'

// }
// }

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
export const onForgotPassword = async (token, to) => {
  try {
    await sendgrid.send({
      from: "admin@kathford.com",
      to,
      subject: "Forgot Password",
      text: "Bla bla",
      html: `
      <h1>
      Password Reset Link
      </h1>
      <p>Please click on this link to reset your password </p>
      <a href=${`http://localhost:5000/forgot-password?token=${token}`}>Click me</a>
      
      <br>`,
    });
  } catch (ex) {
    console.log(ex);
  }
};
