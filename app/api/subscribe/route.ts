import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email } = await request.json();

  // Basic email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: Number(process.env.EMAIL_SERVER_PORT) === 465,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
  });

  const mailOptions = {
    from: `"Newsletter Subscription" <${process.env.EMAIL_SERVER_USER}>`, // Sender address
    to: process.env.EMAIL_TO, // Your receiving email address
    subject: 'New Newsletter Subscriber',
    text: `A new user has subscribed to your newsletter with the email: ${email}`,
    html: `<p>A new user has subscribed to your newsletter:</p>
           <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>`,
  };

  try {
    // No need to verify connection every time, but good for debugging
    // await transporter.verify(); 

    const info = await transporter.sendMail(mailOptions);
    console.log('Subscription notification sent: %s', info.messageId);
    // Respond to the frontend that the subscription was successful
    return NextResponse.json({ success: true }); 

  } catch (error) {
    console.error('Error sending subscription notification:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    // Respond to the frontend that there was an error
    return NextResponse.json({ error: `Failed to process subscription: ${errorMessage}` }, { status: 500 });
  }
}
