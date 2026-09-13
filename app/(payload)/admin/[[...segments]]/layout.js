import configPromise from '@/payload.config';
import { RootLayout } from '@payloadcms/next/layouts';

import '@payloadcms/next/css';

export default function Layout({ children }) {
  return RootLayout({ config: configPromise, children });
}
