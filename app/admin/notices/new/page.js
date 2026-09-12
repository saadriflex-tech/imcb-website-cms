import { prisma } from "@/lib/prisma";
import NoticeForm from "@/components/NoticeForm";

export const dynamic = "force-dynamic";

export default async function NewNoticePage() {
  // Fetch existing distinct notice types so the user can see what already exists
  const notices = await prisma.notice.findMany({
    select: { type: true },
    distinct: ['type'],
  });
  
  const existingTypes = notices.map(n => n.type);

  return (
    <NoticeForm existingTypes={existingTypes} />
  );
}
