import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, location } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: "Name and at least email or phone number are required." },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email: email || "direct-inquiry@vejarafacility.com",
        phone: phone || "+971",
        service: service || "General Facility Management",
        message: message || "",
        location: location || "Dubai / UAE",
        status: "NEW",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully. Our team will contact you shortly.",
      inquiryId: inquiry.id,
    });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit quote inquiry. Please contact us directly." },
      { status: 500 }
    );
  }
}
