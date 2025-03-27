import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, message, serviceType, poolSize } = body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using Gmail instead of Yahoo for testing
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address - will be set in .env
        pass: process.env.EMAIL_PASSWORD, // Gmail app password - will be set in .env
      },
    });

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your dad's email
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Pool Service Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Pool Size:</strong> ${poolSize}</p>
        ${message ? `<p><strong>Additional Information:</strong> ${message}</p>` : ''}
        <p>Please contact this customer soon to discuss their pool maintenance needs.</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}