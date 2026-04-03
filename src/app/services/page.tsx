import type { Metadata } from 'next'
import ServicesListingView from '@/src/components/services/ServicesListingView'

export const metadata: Metadata = {
  title: 'Our Services | Ashton-Bridge',
  description:
    'SMM targeting and advertising plus HR recruiting and staffing for logistics companies — learn more about each service.',
}

export default function ServicesPage() {
  return <ServicesListingView />
}
