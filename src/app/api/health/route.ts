import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const serviceCount = await prisma.service.count();
    return NextResponse.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      services: serviceCount,
      environment: process.env.NODE_ENV,
    });
  } catch (error) {
    return NextResponse.json({
      status: "degraded",
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
    }, { status: 500 });
  }
}
