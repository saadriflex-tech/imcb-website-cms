import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const email = "admin@imcbg104.edu.pk";
    const password = "Admin_Pakistan_G-10/4";

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Upsert ensures we either create the user or update it if it already exists
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        password: hashedPassword,
        role: "admin",
        name: "Super Admin",
      },
      create: {
        email,
        password: hashedPassword,
        role: "admin",
        name: "Super Admin",
      },
    });

    return NextResponse.json({ success: true, message: "Admin user created/updated successfully!" });
  } catch (error) {
    console.error("Setup Admin Error:", error);
    return NextResponse.json({ error: "Failed to setup admin user" }, { status: 500 });
  }
}
