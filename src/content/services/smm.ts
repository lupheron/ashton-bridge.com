import CampaignIcon from '@mui/icons-material/Campaign'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import InsightsIcon from '@mui/icons-material/Insights'
import ScienceIcon from '@mui/icons-material/Science'
import AssessmentIcon from '@mui/icons-material/Assessment'
import type { ServiceDetailContent } from './types'

export const smmServiceDetail: ServiceDetailContent = {
  slug: 'smm',
  metaTitle: 'SMM Targeting & HR System Management | Ashton-Bridge',
  metaDescription:
    'Data-driven social campaigns for logistics: Facebook, Instagram, LinkedIn, audience targeting, and performance tracking.',
  heroTitle: 'SMM Targeting & HR System Management',
  heroSubtitle:
    'Grow your company’s online presence with data-driven social media campaigns. We handle audience targeting, ad creative, and performance tracking so you reach the right drivers and partners.',
  HeroIcon: CampaignIcon,
  features: [
    {
      title: 'Audience Targeting',
      description:
        'Trucking-specific segments: owner-operators, lease drivers, company drivers — plus region, equipment, and job type.',
      Icon: TrackChangesIcon,
    },
    {
      title: 'Ad Creative & Design',
      description:
        'Scroll-stopping creative tailored to logistics and hiring, aligned with your brand and campaign goals.',
      Icon: DesignServicesIcon,
    },
    {
      title: 'Performance Tracking',
      description:
        'Clear metrics on spend, reach, and conversions so you always know what’s working.',
      Icon: InsightsIcon,
    },
    {
      title: 'A/B Testing',
      description:
        'Structured tests on audiences and creative to improve results over time.',
      Icon: ScienceIcon,
    },
    {
      title: 'Retargeting Campaigns',
      description:
        'Re-engage people who already showed interest so fewer qualified leads slip away.',
      Icon: CampaignIcon,
    },
    {
      title: 'Monthly Reporting',
      description:
        'Plain-language summaries and recommendations — not just dashboards you have to decode.',
      Icon: AssessmentIcon,
    },
  ],
  steps: [
    {
      title: 'Share Your Goals',
      description: 'We learn your hiring targets, lanes, and what “qualified” means for your fleet.',
    },
    {
      title: 'We Build the Plan',
      description: 'Campaign structure, audiences, creative, and tracking are set up for your market.',
    },
    {
      title: 'Launch & Optimize',
      description: 'Ads go live; we monitor daily and tune bids, audiences, and creative weekly.',
    },
    {
      title: 'Report & Scale',
      description: 'You get clear reporting and a roadmap to scale what’s working.',
    },
  ],
  pricingPlans: [
    {
      badge: 'Full package',
      featured: true,
      name: 'Complete marketing & hiring package',
      price: '$5,000',
      priceNote:
        'Full hiring infrastructure — not just ads. Campaigns, pipeline, dashboards, and safety onboarding in one system.',
      bullets: [
        'Facebook Ads setup and management',
        'Trucking-specific targeting (Owner-Operators, Lease Drivers, Company Drivers)',
        'Region, equipment type, and job type targeting (OTR / Regional / Local)',
        'Ongoing weekly optimization to reduce cost per hire',
        'Recruitment board to manage all driver applications in one place',
        'Automatic application delivery from Facebook Ads (no manual entry)',
        'Full visibility of every driver’s status (new, contacted, approved, hired, rejected)',
        'Advanced dashboards for owners and managers',
        'Safety onboarding integration and document tracking',
        'Visibility from first application → safety-approved, hired & starter load',
        'Better coordination between recruiting, safety, and management',
      ],
    },
    {
      badge: 'Custom',
      name: 'Professional suite — custom scope',
      priceNote:
        'Scoped to your campaigns, markets, and hiring goals. We’ll shape scope and investment after a short discovery call.',
      bullets: [
        'Mix and match ads, recruiting board, dashboards, and onboarding depth',
        'Priced to your fleet size, regions, and integration needs',
        'Clear proposal after we understand lanes, volume, and timelines',
        'Same team and quality bar as our standard packages',
      ],
    },
  ],
  cta: {
    heading: 'Ready to grow your online presence?',
    subtext: 'Book a consultation and we’ll map a plan to your lanes and hiring goals.',
  },
}
