import Link from 'next/link'

const cardShell =
  'group flex flex-col h-full rounded-[35px] border border-blue-900 bg-primary p-8 sm:p-10 ' +
  'relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-text/50 ' +
  'hover:shadow-[0_12px_40px_-12px_rgba(74,158,255,0.35)]'

const pillClass =
  'text-xs font-medium text-text/90 bg-text/10 border border-text/25 rounded-full px-3 py-1'

type ListingService = {
  id: string
  comingSoon?: boolean
  href?: string
  status: string
  statusClass: string
  title: string
  description: string
  tags: readonly string[]
}

const services: ListingService[] = [
  {
    id: 'smm',
    href: '/services/smm',
    status: 'ACTIVE',
    statusClass: 'bg-transparent text-text border-text/50',
    title: 'SMM Targeting & HR System Management',
    description:
      "Grow your company's online presence with data-driven social media campaigns. We handle audience targeting, ad creation, and performance tracking across Facebook, Instagram, LinkedIn, and more.",
    tags: ['Facebook Ads', 'Instagram', 'LinkedIn', 'Audience Targeting', 'Analytics'],
  },
  {
    id: 'hr',
    comingSoon: true,
    status: 'COMING SOON',
    statusClass: 'bg-[#d1ca9d]/10 text-[#f59e0b] border-[#f59e0b]/30',
    title: 'HR Recruiting & Staffing',
    description:
      'A professional recruiting solution that connects logistics companies with the right people fast. Browse qualified drivers, manage applications, and fill your fleet with confidence.',
    tags: ['Driver Matching', 'CDL Verification', 'Direct Hire', 'Fleet Staffing', 'Profiles'],
  },
]

function ServiceCardContent({ service }: { service: ListingService }) {
  const fadeOnHover = service.comingSoon ? 'group-hover:opacity-0 transition-opacity duration-300' : ''

  return (
    <div className={`relative z-10 flex flex-col h-full ${fadeOnHover}`}>
      <div className="flex items-start justify-between gap-4 mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-text transition-colors duration-300">
          {service.title}
        </h2>
        <span
          className={`shrink-0 text-xs font-bold uppercase tracking-wider rounded-full border px-3 py-1 ${service.statusClass}`}
        >
          {service.status}
        </span>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-6">{service.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {service.tags.map(tag => (
          <span key={tag} className={pillClass}>
            {tag}
          </span>
        ))}
      </div>
      {service.href ? (
        <span className="text-text text-sm font-semibold tracking-wide mt-auto">Learn More →</span>
      ) : (
        <span className="text-gray-500 text-sm font-medium tracking-wide mt-auto">Coming soon</span>
      )}
    </div>
  )
}

export default function ServicesListingView() {
  return (
    <div className="font-roboto text-white px-4 sm:px-8 lg:px-12 pb-12">
      <header className="ab-page-enter max-w-3xl mx-auto text-center mb-14 md:mb-16" style={{ animationDelay: '0ms' }}>
        <span className="inline-block text-text border border-text/40 tracking-[0.2em] bg-secondary/50 rounded-[35px] py-1.5 px-4 text-xs font-bold mb-6">
          OUR SERVICES
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight mb-5">
          Built for logistics growth
        </h1>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          Ashton-Bridge combines <span className="text-gray-400">SMM targeting and HR System Management</span> with{' '}
          <span className="text-gray-400">HR recruiting and staffing</span> — so you can attract the right audience
          and hire the right drivers with one partner.
        </p>
      </header>

      <div
        className="ab-page-enter grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        style={{ animationDelay: '90ms' }}
      >
        {services.map(service =>
          service.comingSoon ? (
            <div
              key={service.id}
              className={`${cardShell} cursor-default`}
              role="note"
              aria-label={`${service.title} — coming soon`}
            >
              <ServiceCardContent service={service} />
              <div
                className="absolute inset-0 z-20 rounded-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 liquid-button flex items-center justify-center pointer-events-none"
                style={{ border: 'none', outline: 'none' }}
              >
                <span className="text-2xl md:text-3xl font-bold text-white tracking-wide">Coming soon</span>
              </div>
            </div>
          ) : (
            <Link key={service.id} href={service.href!} className={`${cardShell} cursor-pointer`}>
              <ServiceCardContent service={service} />
            </Link>
          )
        )}
      </div>
    </div>
  )
}
