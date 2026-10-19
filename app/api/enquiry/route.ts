import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  phone: z.string().min(10, "Please enter a valid phone number").max(16),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service or program of interest"),
  preferredDate: z.string().optional().or(z.literal("")),
  participants: z.string().optional().or(z.literal("")),
  message: z.string().min(5, "Please provide a brief message or describe your health requirement").max(1000),
  honeypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check for bots
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation error",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = validationResult.data;

    // Server-side logging of enquiry
    console.log("=== NEW ENQUIRY RECEIVED ===");
    console.log(`Name: ${data.fullName}`);
    console.log(`Phone: ${data.phone}`);
    console.log(`Email: ${data.email || "Not provided"}`);
    console.log(`Service: ${data.service}`);
    console.log(`Preferred Date: ${data.preferredDate || "Flexible"}`);
    console.log(`Participants: ${data.participants || "1"}`);
    console.log(`Message: ${data.message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);

    // If SMTP environment variables are configured, email dispatch can be triggered here.
    // In production without SMTP keys, it logs securely and provides confirmation + WhatsApp prefilled link.
    const whatsappText = encodeURIComponent(
      `Hello Prathama Kalari Retreat! My name is ${data.fullName}. I submitted an enquiry for ${data.service}.${
        data.preferredDate ? ` Preferred Date: ${data.preferredDate}.` : ""
      } Message: ${data.message}`
    );

    const whatsappUrl = `https://wa.me/919344882346?text=${whatsappText}`;

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. Our team at Prathama Kalari will contact you shortly.",
      referenceId: `PK-${Date.now().toString().slice(-6)}`,
      whatsappUrl,
    });
  } catch (err) {
    console.error("Enquiry submission error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please contact us via WhatsApp or phone directly." },
      { status: 500 }
    );
  }
}
