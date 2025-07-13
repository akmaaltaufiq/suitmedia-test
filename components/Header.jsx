'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [show, setShow] = useState(true)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShow(y < lastY || y < 50)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  const navItems = ['Work', 'About', 'Services', 'Idea', 'Career', 'Contact']

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-[#e76021]/90 backdrop-blur-md transition-transform duration-500 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
  <Image
    src="/logo.png"
    alt="Logo"
    width={55}
    height={55}
    className="scale-150"
  />
</Link>
        <nav>
          <ul className="flex items-center gap-8 text-white font-medium">
            {navItems.map((item) => {
              const href = item === 'Idea' ? '/' : `/${item.toLowerCase()}`
              const isActive = pathname === href
              return (
                <li key={item} className="relative group">
                  <Link href={href} className="px-1 py-1">
                    <span
                      className={`transition-opacity ${
                        isActive ? 'opacity-100 font-semibold' : 'opacity-90'
                      }`}
                    >
                      {item}
                    </span>
                  </Link>
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    } group-hover:w-full`}
                  />
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
