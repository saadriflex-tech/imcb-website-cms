import { prisma } from "@/lib/prisma";
import ClientHome from "@/components/ClientHome";

export const dynamic = "force-dynamic";

export default async function Page() {
  let latestNotices = [];
  try {
    // Fetch the 3 most recent published notices from the database
    latestNotices = await prisma.notice.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: 'desc' },
      take: 3
    });
  } catch (error) {
    console.error("Failed to fetch notices for ticker:", error);
  }

  return <ClientHome latestNotices={latestNotices} />;
}
