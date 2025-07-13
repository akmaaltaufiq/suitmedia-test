'use client'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxPagesToShow = 5
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
  let endPage = startPage + maxPagesToShow - 1

  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(1, endPage - maxPagesToShow + 1)
  }

  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  const goToFirst = () => onPageChange(1)
  const goToPrev = () => onPageChange(currentPage - 1)
  const goToNext = () => onPageChange(currentPage + 1)
  const goToLast = () => onPageChange(totalPages)

  return (
    <div className="flex justify-center items-center gap-1 mt-8 flex-wrap">
      <button
        onClick={goToFirst}
        disabled={currentPage === 1}
        className="px-3 py-2 border rounded disabled:opacity-50 hover:bg-orange-500 hover:text-white transition"
      >
        ⏮
      </button>

      <button
        onClick={goToPrev}
        disabled={currentPage === 1}
        className="px-3 py-2 border rounded disabled:opacity-50 hover:bg-orange-500 hover:text-white transition"
      >
        ◀
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border rounded ${
            page === currentPage
              ? 'bg-orange-500 text-white font-semibold'
              : 'hover:bg-orange-100'
          } transition`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={goToNext}
        disabled={currentPage === totalPages}
        className="px-3 py-2 border rounded disabled:opacity-50 hover:bg-orange-500 hover:text-white transition"
      >
        ▶
      </button>

      <button
        onClick={goToLast}
        disabled={currentPage === totalPages}
        className="px-3 py-2 border rounded disabled:opacity-50 hover:bg-orange-500 hover:text-white transition"
      >
        ⏭
      </button>
    </div>
  )
}
