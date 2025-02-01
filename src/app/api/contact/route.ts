import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use 'Gmail', 'SendGrid', 'SMTP', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email app password (not your personal password)
      },
    });

    // Email content
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "sujanadiga1507@gmail.com", // Replace with your desired email
      subject: "New Contact Form Website",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
