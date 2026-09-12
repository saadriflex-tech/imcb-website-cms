import { prisma } from "@/lib/prisma";
import Hero from "@/components/Hero";
import NoticeBoard from "@/components/NoticeBoard";

export const dynamic = "force-dynamic";

export default async function NoticesPage() {
  const notices = await prisma.notice.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Hero 
        bgImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80"
        tagline="Notice Board"
        title="Official Announcements"
        subtitle="Stay updated with the latest news, exam schedules, and official notices from the college administration."
      />

      <NoticeBoard initialNotices={notices} />
    </div>
  );
}
