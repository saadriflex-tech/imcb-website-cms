import configPromise from '@/payload.config';
import { RootPage } from '@payloadcms/next/views';

export default function Page({ params, searchParams }) {
  return RootPage({ config: configPromise, params, searchParams });
}
