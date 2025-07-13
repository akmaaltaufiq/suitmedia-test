'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Card({ post, index }) {
  const [err, setErr] = useState(false)

  const img = post.small_image?.[0]?.url || ''
  const placeholder = index % 2 === 0 ? '/placeholder.jpg' : '/placeholder2.jpg'
  const src = err || !img ? placeholder : img

  const formattedDate = new Date(post.published_at).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const detailUrl = `/ideas/${post.slug || post.id}`

  return (
    <Link href={detailUrl} className="block w-full max-w-[300px] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <img
        src={src}
        alt={post.title}
        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        onError={() => setErr(true)}
      />
      <div className="p-4 flex flex-col">
        <p className="text-xs text-gray-500 mb-1">{formattedDate}</p>
        <h2 className="font-semibold text-sm text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-3">
          {post.title}
        </h2>
      </div>
    </Link>
  )
}
