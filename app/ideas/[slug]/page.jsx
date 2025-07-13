'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

export default function IdeaDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://suitmedia-backend.suitdev.com/api/ideas?append[]=small_image&append[]=medium_image&filters[slug]=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data?.data?.length) setPost(data.data[0])
      })
      .catch(console.error)
  }, [slug])

  if (!post) return <p className="text-center mt-20 text-gray-500">Loading...</p>

  return (
    <>
      <Header />
      <Banner />
      <section className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{new Date(post.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <img
          src={post.medium_image?.[0]?.url || '/placeholder.jpg'}
          alt={post.title}
          className="w-full rounded-md mb-6 object-cover max-h-[400px]"
        />
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content || '<p>No content available.</p>' }} />
        </div>
      </section>
    </>
  )
}
