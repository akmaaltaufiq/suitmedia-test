import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Suitmedia Ideas',
  description: 'Magang Berdampak 2025',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  )
}
