import type { ReactNode } from 'react'
import Header from '@/src/components/Header/Header'
import Link from 'next/link'

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-[1920px] mx-auto font-roboto px-[40px] py-5 bg-[radial-gradient(ellipse_at_50%_0%,#33627d_0%,transparent_600px),radial-gradient(circle_at_0%_0%,#24475c_0%,transparent_810px),radial-gradient(circle_at_100%_0%,#24475c_0%,transparent_810px)]">
        <div className="px-50">
          <Header />
        </div>
        <div className="bg-[linear-gradient(to_bottom,#33627d_0px,var(--color-primary)_320px,var(--color-primary)_calc(100%-320px),#24475c_100%)] rounded-[35px] py-10 mt-10 sm:mt-16">
          {children}
        </div>
        <footer className="mt-10 pb-8 px-50 text-center text-gray-500 text-sm">
          <Link href="/" className="text-text hover:underline">
            ← Back to home
          </Link>
          <span className="mx-3 text-gray-600">·</span>
          <span>© {new Date().getFullYear()} Ashton-Bridge</span>
        </footer>
      </div>
    </div>
  )
}
