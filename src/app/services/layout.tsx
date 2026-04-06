import type { ReactNode } from 'react'
import Header from '@/src/components/Header/Header'
import Link from 'next/link'

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-[1920px] mx-auto font-roboto px-2 sm:px-4 md:px-6 lg:px-10 py-5 bg-[radial-gradient(ellipse_at_50%_0%,#33627d_0%,transparent_600px),radial-gradient(circle_at_0%_0%,#24475c_0%,transparent_810px),radial-gradient(circle_at_100%_0%,#24475c_0%,transparent_810px)]">
        <div className="px-1 sm:px-2 md:px-4">
          <Header />
        </div>
        <div className="bg-primary rounded-[35px] py-10 mt-10 sm:mt-16">
          {children}
        </div>
        <footer className="mt-10 pb-8 px-4 sm:px-8 md:px-12 text-gray-500 text-sm">
          <div className="flex flex-col items-start text-left sm:items-center sm:text-center justify-center gap-2">
            <Link href="/" className="text-text hover:underline">
              ← Back to home
            </Link>
            <span>© {new Date().getFullYear()} Ashton-Bridge</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
