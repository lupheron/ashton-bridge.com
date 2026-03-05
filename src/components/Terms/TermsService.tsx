"use client";
import React from 'react'
import Link from 'next/link'

const sections = [
    { id: 'agreement', label: 'Agreement to Terms' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'accounts', label: 'User Accounts' },
    { id: 'services', label: 'Platform Services' },
    { id: 'conduct', label: 'User Conduct' },
    { id: 'content', label: 'User Content' },
    { id: 'intellectual', label: 'Intellectual Property' },
    { id: 'payments', label: 'Payments & Fees' },
    { id: 'termination', label: 'Termination' },
    { id: 'disclaimers', label: 'Disclaimers' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'governing', label: 'Governing Law' },
    { id: 'contact', label: 'Contact Us' },
]

const SectionNumber = ({ n }: { n: number }) => (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-md border text-xs font-black flex-shrink-0"
        style={{ background: 'rgba(74,158,255,0.12)', borderColor: 'rgba(74,158,255,0.25)', color: '#4a9eff' }}>
        {n}
    </span>
)

const HighlightBox = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-xl p-5 my-4"
        style={{ background: 'rgba(74,158,255,0.07)', border: '1px solid rgba(74,158,255,0.2)' }}>
        <p className="text-sm leading-relaxed" style={{ color: '#e8edf2' }}>{children}</p>
    </div>
)

const WarningBox = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-xl p-5 my-4"
        style={{ background: 'rgba(255,180,50,0.07)', border: '1px solid rgba(255,180,50,0.25)' }}>
        <p className="text-sm leading-relaxed" style={{ color: '#f0c060' }}>{children}</p>
    </div>
)

const BulletList = ({ items }: { items: (string | React.ReactNode)[] }) => (
    <ul className="flex flex-col gap-2 my-3">
        {items.map((item, i) => (
            <li key={i} className="text-sm leading-relaxed pl-5 relative" style={{ color: '#8ca5be' }}>
                <span className="absolute left-0 text-xs" style={{ color: '#4a9eff' }}>→</span>
                {item}
            </li>
        ))}
    </ul>
)

const TermsService = () => {
    return (
        <div className="min-h-screen font-[Roboto,sans-serif]" style={{ backgroundColor: '#071626', color: '#e8edf2' }}>

            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px] backdrop-blur-md"
                style={{ background: 'rgba(7,22,38,0.95)', borderBottom: '1px solid #1e3a52' }}>
                <Link href="/" className="text-xl font-black no-underline" style={{ color: '#e8edf2' }}>
                    Ashton<span style={{ color: '#4a9eff' }}>Bridge</span>
                </Link>
                <Link href="/" className="text-sm flex items-center gap-1 transition-colors no-underline"
                    style={{ color: '#8ca5be' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4a9eff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8ca5be')}>
                    ← Back to Home
                </Link>
            </nav>

            {/* HERO */}
            <div className="pt-36 pb-14 px-[5%] text-center" style={{ background: 'linear-gradient(180deg, #0e2238 0%, #071626 100%)', borderBottom: '1px solid #1e3a52' }}>
                <span className="inline-block text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1 mb-4"
                    style={{ color: '#4a9eff', background: 'rgba(74,158,255,0.1)', border: '1px solid rgba(74,158,255,0.2)' }}>
                    Legal
                </span>
                <h1 className="text-4xl md:text-5xl font-black mb-3">Terms of Service</h1>
                <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: '#8ca5be' }}>
                    Please read these terms carefully before using Ashton-Bridge. By accessing our platform, you agree to be bound by the following terms and conditions.
                </p>
                <span className="inline-block mt-4 text-xs px-3 py-1 rounded-md"
                    style={{ color: '#8ca5be', background: 'rgba(255,255,255,0.04)', border: '1px solid #1e3a52' }}>
                    Last updated: January 1, 2026
                </span>
            </div>

            {/* LAYOUT */}
            <div className="max-w-[1100px] mx-auto px-[5%] py-14 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">

                {/* SIDEBAR TOC */}
                <aside className="hidden md:block">
                    <div className="sticky top-24">
                        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#8ca5be' }}>On this page</p>
                        <ul className="flex flex-col gap-0.5">
                            {sections.map(s => (
                                <li key={s.id}>
                                    <a href={`#${s.id}`}
                                        className="block text-sm px-3 py-1.5 rounded-md border-l-2 border-transparent transition-all no-underline leading-snug"
                                        style={{ color: '#8ca5be' }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.color = '#4a9eff'
                                            e.currentTarget.style.background = 'rgba(74,158,255,0.06)'
                                            e.currentTarget.style.borderLeftColor = '#4a9eff'
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.color = '#8ca5be'
                                            e.currentTarget.style.background = 'transparent'
                                            e.currentTarget.style.borderLeftColor = 'transparent'
                                        }}>
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* CONTENT */}
                <main className="min-w-0">

                    {/* 1. Agreement */}
                    <section id="agreement" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={1} /> Agreement to Terms
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Ashton-Bridge ("Company," "we," "us," or "our") governing your access to and use of the Ashton-Bridge platform, website, and all related services.
                        </p>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            By registering an account, browsing our website, or using any of our services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our platform.
                        </p>
                        <HighlightBox>
                            We reserve the right to modify these Terms at any time. Continued use of the platform following any changes constitutes your acceptance of the revised Terms. We will always notify you of material changes via email or a platform notice.
                        </HighlightBox>
                    </section>

                    {/* 2. Eligibility */}
                    <section id="eligibility" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={2} /> Eligibility
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            To use Ashton-Bridge, you must meet the following eligibility requirements:
                        </p>
                        <BulletList items={[
                            'You must be at least 18 years of age',
                            'You must have the legal capacity to enter into a binding agreement',
                            'You must not be barred from receiving services under applicable laws',
                            'You must provide accurate and truthful information during registration',
                            'You must not have a previously terminated Ashton-Bridge account due to a violation of these Terms',
                        ]} />
                        <p className="text-sm leading-relaxed mt-3" style={{ color: '#8ca5be' }}>
                            By creating an account, you represent and warrant that you meet all of the above eligibility requirements.
                        </p>
                    </section>

                    {/* 3. Accounts */}
                    <section id="accounts" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={3} /> User Accounts
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            When you register on Ashton-Bridge, you are responsible for maintaining the security and confidentiality of your account credentials.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Account Security</h3>
                        <BulletList items={[
                            'Keep your password secure and do not share it with any third party',
                            'Notify us immediately at drenixit@gmail.com if you suspect unauthorized access to your account',
                            'You are responsible for all activity that occurs under your account',
                            'Ashton-Bridge will not be liable for any loss resulting from unauthorized use of your account',
                        ]} />
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Account Accuracy</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            You agree to provide accurate, current, and complete information when creating your account. Providing false information, including fake driver credentials or fabricated company details, is strictly prohibited and may result in immediate account termination.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>One Account Per User</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#8ca5be' }}>
                            Each individual or company may maintain only one active account. Creating multiple accounts to circumvent restrictions or bans is prohibited.
                        </p>
                    </section>

                    {/* 4. Services */}
                    <section id="services" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={4} /> Platform Services
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Ashton-Bridge provides a range of services designed to serve the logistics and IT industries.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Driver Placement & Company Staffing</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Ashton-Bridge acts as a marketplace connecting truck drivers seeking employment with logistics companies seeking qualified drivers. We facilitate introductions and communication but are not a party to any employment agreement formed between users. All hiring decisions, employment terms, and agreements are made solely between the driver and the company.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>IT Services</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            We offer IT solutions including website development, software support, and technical consulting. Specific terms for IT engagements will be outlined in separate service agreements when applicable.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Vehicle Parts & Mechanics</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            We provide referrals to vehicle part suppliers and mechanics. Ashton-Bridge does not directly supply parts or perform repairs and does not guarantee any specific outcome or quality of third-party services.
                        </p>
                        <HighlightBox>
                            Ashton-Bridge reserves the right to add, modify, suspend, or discontinue any service at any time with reasonable notice. We will do our best to notify users of significant service changes in advance.
                        </HighlightBox>
                    </section>

                    {/* 5. Conduct */}
                    <section id="conduct" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={5} /> User Conduct
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            All users of Ashton-Bridge are expected to act in good faith and in accordance with these Terms. The following behaviors are strictly prohibited:
                        </p>
                        <BulletList items={[
                            'Posting false, misleading, or fraudulent information in your profile or job listings',
                            'Harassing, threatening, or abusing other users on the platform',
                            'Attempting to bypass, hack, or disrupt the platform\'s systems or security',
                            'Scraping, copying, or redistributing platform content without written permission',
                            'Using the platform for any illegal purpose or in violation of applicable laws',
                            'Impersonating another person or organization',
                            'Sending unsolicited commercial messages or spam to other users',
                            'Discriminating against users on the basis of race, gender, religion, nationality, or other protected characteristics',
                        ]} />
                        <WarningBox>
                            ⚠️ Violations of these conduct rules may result in immediate suspension or permanent termination of your account, at our sole discretion, without prior notice.
                        </WarningBox>
                    </section>

                    {/* 6. Content */}
                    <section id="content" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={6} /> User Content
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Users may submit content to the platform including profile information, job postings, messages, reviews, and documents ("User Content"). By submitting User Content, you agree that:
                        </p>
                        <BulletList items={[
                            'You own or have the right to share the content you submit',
                            'Your content does not violate any third-party rights, including intellectual property or privacy rights',
                            'Your content is accurate to the best of your knowledge',
                            'You grant Ashton-Bridge a non-exclusive, royalty-free license to display and use your content to operate the platform',
                        ]} />
                        <p className="text-sm leading-relaxed mt-3" style={{ color: '#8ca5be' }}>
                            Ashton-Bridge does not claim ownership of your User Content. We reserve the right to remove any content that violates these Terms or is otherwise deemed harmful to the platform or its users.
                        </p>
                    </section>

                    {/* 7. Intellectual Property */}
                    <section id="intellectual" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={7} /> Intellectual Property
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            All content on the Ashton-Bridge platform that is not User Content — including the logo, branding, design, text, software, and graphics — is the exclusive property of Ashton-Bridge and is protected by applicable intellectual property laws.
                        </p>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            You may not reproduce, distribute, modify, or create derivative works from any Ashton-Bridge content without our express written permission. The Ashton-Bridge name, logo, and product names are trademarks of Ashton-Bridge. Nothing in these Terms grants you any right to use our trademarks.
                        </p>
                    </section>

                    {/* 8. Payments */}
                    <section id="payments" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={8} /> Payments & Fees
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Certain features and services on Ashton-Bridge may require payment. By using any paid features, you agree to the following:
                        </p>
                        <BulletList items={[
                            'All fees are stated in USD unless otherwise specified',
                            'Payments are processed through secure third-party payment providers',
                            'You authorize us to charge your payment method for any fees incurred',
                            'All sales are final unless otherwise stated in a specific service agreement',
                            'We reserve the right to change pricing with 30 days advance notice to affected users',
                        ]} />
                        <p className="text-sm leading-relaxed mt-3" style={{ color: '#8ca5be' }}>
                            Basic access to the Ashton-Bridge driver-company matching platform is currently free. Premium features, IT service contracts, and other specialized services may be subject to separate pricing agreements.
                        </p>
                    </section>

                    {/* 9. Termination */}
                    <section id="termination" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={9} /> Termination
                        </h2>
                        <h3 className="text-base font-bold mt-2 mb-2" style={{ color: '#e8edf2' }}>Termination by You</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            You may close your account at any time by contacting us at drenixit@gmail.com. Upon termination, your profile will be removed from public view and your data will be handled in accordance with our Privacy Policy.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Termination by Ashton-Bridge</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            We reserve the right to suspend or permanently terminate your account if you violate these Terms, engage in fraudulent activity, or if we determine your actions are harmful to other users or the platform. In cases of serious violations, termination may occur without prior notice.
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: '#8ca5be' }}>
                            Upon termination, your right to use the platform immediately ceases. Any outstanding obligations — including payment for services rendered — survive termination.
                        </p>
                    </section>

                    {/* 10. Disclaimers */}
                    <section id="disclaimers" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={10} /> Disclaimers
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Ashton-Bridge provides its platform and services on an "as is" and "as available" basis. We make no warranties, express or implied, including but not limited to:
                        </p>
                        <BulletList items={[
                            'The accuracy or completeness of any information on the platform',
                            'That the platform will be uninterrupted, error-free, or secure at all times',
                            'The suitability of any driver or company profile for a particular purpose',
                            'The outcome of any employment or service agreement made between users',
                            'The quality or reliability of any third-party services accessed through the platform',
                        ]} />
                        <p className="text-sm leading-relaxed mt-3" style={{ color: '#8ca5be' }}>
                            Ashton-Bridge is a facilitating platform. We do not employ drivers and we do not guarantee job placement. All employment decisions are made independently by the parties involved.
                        </p>
                    </section>

                    {/* 11. Liability */}
                    <section id="liability" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={11} /> Limitation of Liability
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            To the fullest extent permitted by law, Ashton-Bridge and its founders, employees, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the platform.
                        </p>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            This includes, but is not limited to, damages resulting from loss of data, loss of revenue, loss of employment opportunities, or harm resulting from interactions between platform users.
                        </p>
                        <WarningBox>
                            ⚠️ In no event shall Ashton-Bridge's total liability to you for all claims exceed the amount you paid to Ashton-Bridge in the twelve (12) months preceding the claim, or $100 USD — whichever is greater.
                        </WarningBox>
                    </section>

                    {/* 12. Governing Law */}
                    <section id="governing" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={12} /> Governing Law
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising out of or in connection with these Terms that cannot be resolved informally shall be submitted to binding arbitration or resolved in the courts of competent jurisdiction.
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: '#8ca5be' }}>
                            We encourage users to contact us directly to resolve any disputes before pursuing formal legal action. We are committed to working in good faith to reach a fair resolution.
                        </p>
                    </section>

                    {/* 13. Contact */}
                    <section id="contact" className="pb-4">
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={13} /> Contact Us
                        </h2>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: '#8ca5be' }}>
                            If you have any questions about these Terms of Service, need clarification on any section, or wish to report a violation, please contact us using the information below.
                        </p>
                        <div className="rounded-2xl p-8 text-center" style={{ background: '#0e2238', border: '1px solid #1e3a52' }}>
                            <h3 className="text-lg font-bold mb-2" style={{ color: '#e8edf2' }}>Questions about our Terms?</h3>
                            <p className="text-sm mb-4" style={{ color: '#8ca5be' }}>Our team is ready to help clarify anything in this document.</p>
                            <p className="text-sm mb-2" style={{ color: '#8ca5be' }}>
                                📧{' '}<a href="mailto:drenixit@gmail.com" className="font-semibold no-underline hover:underline" style={{ color: '#4a9eff' }}>drenixit@gmail.com</a>
                            </p>
                            <p className="text-sm mb-2" style={{ color: '#8ca5be' }}>📍 20 Mirzo Ulugbek, Samarkand, Uzbekistan</p>
                            <p className="text-sm" style={{ color: '#8ca5be' }}>📞 +1 (123) 456-7890</p>
                        </div>
                    </section>

                </main>
            </div>

            {/* FOOTER */}
            <footer className="flex justify-between items-center flex-wrap gap-4 px-[5%] py-7" style={{ background: '#0e2238', borderTop: '1px solid #1e3a52' }}>
                <p className="text-sm" style={{ color: '#8ca5be' }}>© 2026 Ashton-Bridge. All rights reserved.</p>
                <div className="flex gap-6">
                    {[
                        { href: '/', label: 'Home' },
                        { href: '/privacy', label: 'Privacy Policy' },
                        { href: '/terms', label: 'Terms of Service', active: true },
                    ].map(link => (
                        <Link key={link.href} href={link.href}
                            className="text-sm no-underline transition-colors"
                            style={{ color: link.active ? '#4a9eff' : '#8ca5be' }}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </footer>

        </div>
    )
}

export default TermsService