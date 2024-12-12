// src/hooks.server.ts
import { createClient } from '$lib/prismicio'
import type { Handle } from '@sveltejs/kit'
import type { CookieSerializeOptions } from 'cookie'

export const handle: Handle = async ({ event, resolve }) => {
  // Get the preview ref from either cookie
  const previewRef = event.cookies.get('io.prismic.preview') || event.cookies.get('io.prismic.previewSession')

  const client = createClient({ fetch: event.fetch })

  // If we have a preview ref, update the client to use it
  if (previewRef) {
    client.enableAutoPreviewsFromReq(event.request)
  }

  // Initialize Prismic client with preview data
  event.locals.prismic = {
    client,
    previewData: previewRef ? { ref: previewRef } : null
  }

  // Resolve with preview data if available
  const response = await resolve(event)
  return response
}