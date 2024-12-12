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
    sameSite: 'none',  // Set to 'none' to allow cross-site
    httpOnly: true,
    domain: domain
  }

  // Handle all potential cookies that need cross-site access
  const cookies = event.cookies.getAll()
  cookies.forEach(cookie => {
    if (cookie.name.includes('dd_cookie_test') || 
        cookie.name.includes('prismic')) {
      event.cookies.set(cookie.name, cookie.value, cookieOptions)
    }
  })

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