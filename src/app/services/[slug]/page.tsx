import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetailView from '@/src/components/services/ServiceDetailView'
import { getServiceDetail, getServiceSlugs } from '@/src/content/services/registry'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getServiceSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getServiceDetail(slug)
  if (!page) return { title: 'Service' }
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const content = getServiceDetail(slug)
  if (!content) notFound()
  return <ServiceDetailView content={content} />
}
