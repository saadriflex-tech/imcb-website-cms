import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { title, type, content, isPublished, publishDate } = body;

    const notice = await prisma.notice.update({
      where: { id },
      data: {
        title,
        type,
        content,
        isPublished,
        publishDate: publishDate ? new Date(publishDate) : null,
      },
    });

    return NextResponse.json(notice, { status: 200 });
  } catch (error) {
    console.error("Failed to update notice:", error);
    return NextResponse.json({ error: "Failed to update notice." }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await prisma.notice.delete({
      where: { id },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to delete notice:", error);
    return NextResponse.json({ error: "Failed to delete notice." }, { status: 500 });
  }
}
