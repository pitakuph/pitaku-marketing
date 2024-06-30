import { NextResponse } from 'next/server'
import nodemailer, { Transporter } from 'nodemailer';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

const transporter: Transporter = nodemailer.createTransport({
  SES: { ses, aws: AWS },
});

export async function POST(req: Request) {  


  const requestData:any = await req.json();
  console.log("DIEM");
  console.log(requestData);

  const mailOptions = {
    from: process.env.EMAIL_FROM, // Verified email address or domain
    to: requestData?.to,
    subject: requestData?.subject,
    text: requestData?.text,
    html: requestData?.html,
  };

  console.log(mailOptions);

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error sending email' })
  }
}
