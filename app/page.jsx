'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [sort, setSort] = useState('-published_at')
  const [total, setTotal] = useState(0)

  useEffect(() => {
    axios
      .get(`https://suitmedia-backend.suitdev.com/api/ideas`, {
        params: {
          'page[number]': page,
          'page[size]': perPage,
          'append[]': ['small_image', 'medium_image'],
          sort,
        },
      })
      .then((res) => {
        setPosts(res.data.data)
        setTotal(res.data.meta.total)
      })
      .catch(console.error)
  }, [page, perPage, sort])

  const totalPages = Math.ceil(total / perPage)

  return (
    <>
      <Header />
      <Banner />
      <section className="max-w-6xl mx-auto px-6 py-8">
        {/* Filter Section */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <p className="text-gray-700 text-sm">
            Showing {(page - 1) * perPage + 1}-{Math.min(page * perPage, total)} of {total}
          </p>
          <div className="flex gap-4">
            <select
              className="border rounded px-3 py-1 focus:outline-none focus:ring focus:border-orange-300"
              value={perPage}
              onChange={(e) => {
                setPerPage(+e.target.value)
                setPage(1)
              }}
            >
              {[10, 20, 50].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
            <select
              className="border rounded px-3 py-1 focus:outline-none focus:ring focus:border-orange-300"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value)
                setPage(1)
              }}
            >
              <option value="-published_at">Newest</option>
              <option value="published_at">Oldest</option>
            </select>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <Card key={p.id} post={p} index={i} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </section>
    </>
  )
}
