export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get('url')

  if (!imageUrl) {
    return new Response('Missing URL parameter', { status: 400 })
  }

  const res = await fetch(imageUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
  })

  if (!res.ok) {
    return new Response('Failed to fetch image', { status: res.status })
  }

  const contentType = res.headers.get('content-type') || 'image/jpeg'
  const imageBuffer = await res.arrayBuffer()

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400',
    },
  })
}