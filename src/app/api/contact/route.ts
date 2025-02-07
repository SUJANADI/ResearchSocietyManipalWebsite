import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();


    const transporter = nodemailer.createTransport({
      service: "Gmail", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });


    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "sujanadiga1507@gmail.com", 
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
