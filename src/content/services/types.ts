import type { ComponentType, CSSProperties } from 'react'

export type ServiceIconProps = { className?: string; style?: CSSProperties }

export type ServiceFeature = {
  title: string
  description: string
  Icon: ComponentType<ServiceIconProps>
}

export type ServiceStep = {
  title: string
  description: string
}

export type ServicePricingPlan = {
  name: string
  /** If omitted or empty, the large price line is hidden (e.g. custom / TBD plans). */
  price?: string
  priceNote: string
  bullets: string[]
  /** Stronger border / glow */
  featured?: boolean
  /** Small pill above the title (e.g. "Full package", "Custom") */
  badge?: string
}

export type ServiceDetailContent = {
  slug: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  HeroIcon: ComponentType<ServiceIconProps>
  features: ServiceFeature[]
  steps: ServiceStep[]
  pricingPlans: ServicePricingPlan[]
  cta: {
    heading: string
    subtext: string
  }
}
