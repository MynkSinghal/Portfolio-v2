import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log("🚀 API route hit - contact form submission");
  console.log("🔑 API Key present:", !!process.env.RESEND_API_KEY);
  console.log("🔑 API Key length:", process.env.RESEND_API_KEY?.length || 0);

  try {
    const { name, email, message } = await request.json();
    console.log("📝 Form data received:", { name, email, message });

    // Validate required fields
    if (!name || !email || !message) {
      console.log("❌ Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    console.log("📧 Attempting to send email with Resend...");

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // You'll change this to your domain later
      to: ["singhal2004mayank@gmail.com"], // Replace with your actual email
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    });

    console.log("📬 Resend response:", { data, error });

    if (error) {
      console.error("❌ Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error },
        { status: 500 },
      );
    }

    console.log("✅ Email sent successfully!");
    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("💥 API error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error },
      { status: 500 },
    );
  }
}
