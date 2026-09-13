import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import Hero from "@/components/Hero";
import NoticeBoard from "@/components/NoticeBoard";

export const dynamic = "force-dynamic";

export default async function NoticesPage() {
  const payload = await getPayload({ config: configPromise });
  
  const now = new Date().toISOString();
  
  const result = await payload.find({
    collection: 'notices',
    where: {
      isPublished: { equals: true },
      or: [
        { publishDate: { exists: false } },
        { publishDate: { less_than_equal: now } }
      ]
    },
    sort: '-createdAt',
    limit: 100
  });
  
  const notices = result.docs;

  // Extract unique types from the active notices to build dynamic filter buttons
  const availableTypes = Array.from(new Set(notices.map(n => n.type)));

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Hero 
        bgImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80"
        tagline="Notice Board"
        title="Official Announcements"
        subtitle="Stay updated with the latest news, exam schedules, and official notices from the college administration."
      />

      <NoticeBoard initialNotices={notices} availableTypes={availableTypes} />
    </div>
  );
}
