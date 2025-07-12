// app/layout.tsx
import './globals.css'
import Nav from './components/Nav'    // ← note the single “./”
import Script from 'next/script'

export const metadata = {
  title: 'Life Coach Locator',
  description: 'Find the perfect coach for your life goals',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="calendly-script"
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans bg-gray-50 text-gray-900">
        <Nav />

        <main className="mt-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
}
