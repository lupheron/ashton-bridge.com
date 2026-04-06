'use client'

import Link from 'next/link'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import type { ServiceDetailContent } from '@/src/content/services/types'
import ServiceConsultationButton from './ServiceConsultationButton'

type Props = {
  content: ServiceDetailContent
}

const cardHover =
  'transition-all duration-300 hover:-translate-y-1 hover:border-text/50 hover:shadow-[0_12px_40px_-12px_rgba(74,158,255,0.35)]'

export default function ServiceDetailView({ content }: Props) {
  const HeroIcon = content.HeroIcon

  return (
    <div className="font-roboto text-white pb-8 px-3 sm:px-5 md:px-6">
      <div className="ab-page-enter mb-10" style={{ animationDelay: '0ms' }}>
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 text-text text-sm font-semibold tracking-wide ml-1 sm:ml-2 liquid-button w-14 h-14 rounded-[35px] border-none"
        >
          ← 
        </Link>
      </div>

      {/* Hero */}
      <header
        className="ab-page-enter flex flex-col items-center text-center px-4 sm:px-8 mb-16 md:mb-20"
        style={{ animationDelay: '70ms' }}
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-text/40 bg-primary shadow-[0_0_40px_rgba(74,158,255,0.12)]">
          <HeroIcon className="text-text" style={{ fontSize: 40 }} />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight max-w-3xl">
          {content.heroTitle}
        </h1>
        <p className="mt-5 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          {content.heroSubtitle}
        </p>
      </header>

      {/* Features */}
      <section
        className="ab-page-enter mb-16 md:mb-20 px-2 sm:px-4"
        style={{ animationDelay: '120ms' }}
      >
        <h4 className="text-text font-bold tracking-wider uppercase text-sm mb-2 text-center">
          What&apos;s Included
        </h4>
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10 md:mb-12">
          Everything we deliver for this service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {content.features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className={`rounded-[35px] border border-blue-900 bg-primary p-8 flex flex-col gap-4 ${cardHover}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-text/35 bg-secondary/80">
                <Icon className="text-text" style={{ fontSize: 26 }} />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        className="ab-page-enter mb-16 md:mb-20 rounded-[35px] border border-white/10 bg-tertiary/90 px-6 py-12 sm:px-10 sm:py-14 shadow-[0_0_40px_rgba(74,158,255,0.08)] max-w-6xl mx-auto"
        style={{ animationDelay: '180ms' }}
      >
        <h4 className="text-text font-bold tracking-wider uppercase text-sm mb-2">How It Works</h4>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 md:mb-14">Your path from start to scale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {content.steps.map((step, index) => (
            <div key={step.title} className="relative pt-4">
              <span
                className="pointer-events-none select-none absolute -top-2 left-0 text-[4.5rem] sm:text-[5rem] font-bold leading-none text-white/[0.06]"
                aria-hidden
              >
                {index + 1}
              </span>
              <div className="relative z-10 pl-1">
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="ab-page-enter mb-16 md:mb-20" style={{ animationDelay: '220ms' }}>
        <p className="text-text font-bold tracking-wider uppercase text-xs mb-2 text-center">Pricing</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10 md:mb-12">
          {content.pricingPlans.length > 1 ? 'Choose your plan' : 'Investment'}
        </h2>
        <div className="flex flex-col gap-8 items-center max-w-6xl mx-auto">
          {content.pricingPlans.map(plan => {
            const pill =
              plan.badge ?? (plan.featured ? 'Full package' : null)
            return (
            <div
              key={plan.name}
              className={`w-full max-w-[46rem] rounded-[35px] border bg-secondary/60 p-8 sm:p-10 md:p-12 text-center ${cardHover} ${
                plan.featured
                  ? 'border-text/50 shadow-[0_0_50px_-10px_rgba(74,158,255,0.35)] ring-1 ring-text/25'
                  : 'border-text/20'
              }`}
            >
              {pill && (
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-text mb-3 px-3 py-1 rounded-full border border-text/40 bg-text/10">
                  {pill}
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{plan.name}</h3>
              {plan.price ? (
                <p className="text-4xl sm:text-5xl font-bold text-text mb-3">{plan.price}</p>
              ) : null}
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{plan.priceNote}</p>
              <ul className="text-left space-y-3 mb-10">
                {plan.bullets.map(line => (
                  <li key={line} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                    <CheckCircleOutlineIcon className="text-text shrink-0 mt-0.5" style={{ fontSize: 20 }} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <ServiceConsultationButton customClasses="w-full sm:w-auto min-w-[220px] h-12 text-base font-semibold text-white rounded-[35px] bg-text hover:bg-text/90 transition-all duration-300 shadow-lg shadow-text/25 px-10 border-0" />
              </div>
            </div>
            )
          })}
        </div>
      </section>

      {/* CTA banner — solid bg so parent layout gradient doesn’t bleed through */}
      <section
        className={`ab-page-enter rounded-[35px] border border-text/20 bg-secondary px-8 py-12 sm:px-12 sm:py-14 text-center ${cardHover} max-w-6xl mx-auto`}
        style={{ animationDelay: '280ms' }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{content.cta.heading}</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          {content.cta.subtext}
        </p>
        <ServiceConsultationButton customClasses="min-w-[200px] h-12 text-base font-semibold text-white rounded-[35px] bg-text hover:bg-text/90 transition-all duration-300 px-10 border-0" />
      </section>
    </div>
  )
}
