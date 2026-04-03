import GroupsIcon from '@mui/icons-material/Groups'
import HubIcon from '@mui/icons-material/Hub'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ForumIcon from '@mui/icons-material/Forum'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import AssignmentIcon from '@mui/icons-material/Assignment'
import type { ServiceDetailContent } from './types'

export const hrServiceDetail: ServiceDetailContent = {
  slug: 'hr',
  metaTitle: 'HR Recruiting & Staffing | Ashton-Bridge',
  metaDescription:
    'Professional recruiting for logistics: driver matching, verified profiles, applicant tracking, and fleet staffing.',
  heroTitle: 'HR Recruiting & Staffing',
  heroSubtitle:
    'A professional recruiting solution that connects logistics companies with the right people fast. Browse qualified drivers, manage applications, and fill your fleet with confidence.',
  HeroIcon: GroupsIcon,
  features: [
    {
      title: 'Smart Driver Matching',
      description:
        'Surface candidates by route type, experience, equipment, and location — not just keywords.',
      Icon: HubIcon,
    },
    {
      title: 'Verified Profiles',
      description:
        'CDL class, history, and availability in one place so recruiters spend time on real fits.',
      Icon: VerifiedUserIcon,
    },
    {
      title: 'Applicant Dashboard',
      description:
        'Every application in one pipeline with status, notes, and next steps visible to your team.',
      Icon: DashboardIcon,
    },
    {
      title: 'Direct Communication',
      description:
        'Reach drivers without middlemen; keep conversations and decisions in one thread.',
      Icon: ForumIcon,
    },
    {
      title: 'Hiring Analytics',
      description:
        'See funnel health, time-to-hire, and sources so you can invest where it pays off.',
      Icon: AnalyticsIcon,
    },
    {
      title: 'Fleet Staffing Plans',
      description:
        'Align open seats, regions, and urgency so hiring stays ahead of dispatch needs.',
      Icon: AssignmentIcon,
    },
  ],
  steps: [
    {
      title: 'Create Company Profile',
      description: 'Add fleet details, lanes, and roles you hire for so matching starts accurate.',
    },
    {
      title: 'Browse Qualified Drivers',
      description: 'Filter verified profiles by CDL, experience, and availability.',
    },
    {
      title: 'Connect Directly',
      description: 'Message and schedule with candidates — no opaque handoffs.',
    },
    {
      title: 'Hire & Onboard',
      description: 'Move hires into onboarding with status and documents tracked in one place.',
    },
  ],
  pricingPlans: [
    {
      name: 'Professional recruiting suite',
      badge: 'Custom',
      priceNote: 'Scoped to your fleet size, markets, and hiring volume. We’ll quote after a short discovery call.',
      bullets: [
        'Smart matching to qualified drivers',
        'Verified profiles (CDL, experience, availability)',
        'Applicant dashboard and pipeline visibility',
        'Direct company ↔ driver communication',
        'Hiring analytics and funnel reporting',
        'Fleet staffing planning support',
        'Optional integration with safety onboarding workflows',
      ],
    },
  ],
  cta: {
    heading: 'Ready to build your team?',
    subtext: 'Tell us your open roles and regions — we’ll show how recruiting fits your operation.',
  },
}
