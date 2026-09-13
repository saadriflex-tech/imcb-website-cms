import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import ClientHome from "@/components/ClientHome";

export const dynamic = "force-dynamic";

export default async function Page() {
  let latestNotices = [];
  try {
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
      limit: 3
    });
    
    latestNotices = result.docs;
  } catch (error) {
    console.error("Failed to fetch notices for ticker:", error);
  }

  return <ClientHome latestNotices={latestNotices} />;
}
