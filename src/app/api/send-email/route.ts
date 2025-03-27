// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, message, serviceType, poolSize, recaptchaToken } = body;

    // First, verify the reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed - no token provided' },
        { status: 400 }
      );
    }

    // Verify the token with Google's reCAPTCHA API
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const recaptchaResult = await recaptchaResponse.json();

    // Check if verification was successful
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) { // reCAPTCHA v3 provides a score from 0.0 to 1.0
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed - you might be a bot' },
        { status: 400 }
      );
    }

    // If verification passed, create a transporter for email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using Gmail instead of Yahoo for testing
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address - set in .env
        pass: process.env.EMAIL_PASSWORD, // Gmail app password - set in .env
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