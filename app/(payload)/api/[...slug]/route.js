import configPromise from '@/payload.config';
import { REST_GET, REST_POST, REST_DELETE, REST_OPTIONS, REST_PATCH, REST_PUT } from '@payloadcms/next/routes';

export const GET = REST_GET({ config: configPromise });
export const POST = REST_POST({ config: configPromise });
export const DELETE = REST_DELETE({ config: configPromise });
export const OPTIONS = REST_OPTIONS({ config: configPromise });
export const PATCH = REST_PATCH({ config: configPromise });
export const PUT = REST_PUT({ config: configPromise });
