import { prisma } from "@/lib/prisma";
import NoticeForm from "@/components/NoticeForm";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditNoticePage({ params }) {
  const { id } = params;

  // Fetch the specific notice
  const notice = await prisma.notice.findUnique({
    where: { id },
  });

  if (!notice) {
    notFound();
  }

  // Fetch existing distinct notice types
  const allNotices = await prisma.notice.findMany({
    select: { type: true },
    distinct: ['type'],
  });
  
  const existingTypes = allNotices.map(n => n.type);

  return (
    <NoticeForm initialData={notice} existingTypes={existingTypes} />
  );
}
