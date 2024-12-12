// src/hooks.server.ts
import { createClient } from '$lib/prismicio'
import type { Handle } from '@sveltejs/kit'
import type { CookieSerializeOptions } from 'cookie'

export const handle: Handle = async ({ event, resolve }) => {
  const previewRef = event.cookies.get('io.prismic.preview') || event.cookies.get('io.prismic.previewSession')

  const domain = event.url.hostname === 'localhost' ? 'localhost' : '.reddoorla.com'

  const cookieOptions: CookieSerializeOptions & { 
    path: string;
    domain: string;
  } = {
    path: '/',
    secure: true,
    sameSite: 'none',
    httpOnly: true,
    domain: domain
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