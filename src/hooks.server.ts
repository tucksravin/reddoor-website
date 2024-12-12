// src/hooks.server.ts
import { createClient } from '$lib/prismicio'
import type { Handle } from '@sveltejs/kit'
import type { CookieSerializeOptions } from 'cookie'

export const handle: Handle = async ({ event, resolve }) => {
  const previewRef = event.cookies.get('io.prismic.preview') || event.cookies.get('io.prismic.previewSession')

  const cookieOptions: CookieSerializeOptions & { 
    path: string;
    partitioned?: boolean;
  } = {
    path: '/',
    secure: true,
    sameSite: 'none',  // Changed from 'lax' to 'none' for cross-site
    httpOnly: true,
    partitioned: true  // Add partitioned attribute
  }

  if (previewRef) {
    event.cookies.set('io.prismic.preview', previewRef, cookieOptions)
    event.cookies.set('io.prismic.previewSession', previewRef, cookieOptions)
  }

  const client = createClient({ fetch: event.fetch })
  
  if (previewRef) {
    client.enableAutoPreviewsFromReq(event.request)
  }

  event.locals.prismic = {
    client,
    previewData: previewRef ? { ref: previewRef } : null
  }

  return resolve(event)
}