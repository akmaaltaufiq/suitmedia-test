'use client'
import { useEffect, useRef } from 'react'

export default function Banner() {
  const imgRef = useRef()

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative h-[320px] md:h-[400px] overflow-hidden mt-[80px]">
      {/* Gambar Banner + Parallax */}
      <div ref={imgRef} className="absolute inset-0 z-0 transition-transform duration-300 will-change-transform">
        <img
          src="/banner1.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Teks */}
      <div className="relative z-10 h-full bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Ideas</h1>
        <p className="mt-2 text-lg md:text-lg">Where all our great things begin</p>
      </div>

      {/* Potongan Miring Bagian Bawah */}
      <div className="absolute bottom-0 left-0 w-full h-20 z-20 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full block">
          <polygon points="0,100 100,0 100,100" fill="white" />
        </svg>
      </div>
    </div>
  )
}
