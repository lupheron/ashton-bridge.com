import type { ServiceDetailContent } from './types'
import { smmServiceDetail } from './smm'
// HR: import { hrServiceDetail } from './hr' and add `hr: hrServiceDetail` when the product is live.

const map: Record<string, ServiceDetailContent> = {
  smm: smmServiceDetail,
}

export function getServiceDetail(slug: string): ServiceDetailContent | null {
  return map[slug] ?? null
}

export function getServiceSlugs(): string[] {
  return Object.keys(map)
}
