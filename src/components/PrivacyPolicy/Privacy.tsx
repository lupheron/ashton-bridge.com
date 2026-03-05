"use client";
import React from 'react'
import Link from 'next/link'

const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'collect', label: 'Information We Collect' },
    { id: 'use', label: 'How We Use Your Information' },
    { id: 'share', label: 'Sharing Your Information' },
    { id: 'storage', label: 'Data Storage & Security' },
    { id: 'cookies', label: 'Cookies & Tracking' },
    { id: 'rights', label: 'Your Rights' },
    { id: 'children', label: "Children's Privacy" },
    { id: 'changes', label: 'Changes to This Policy' },
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

const Privacy = () => {
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
                <h1 className="text-4xl md:text-5xl font-black mb-3">Privacy Policy</h1>
                <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: '#8ca5be' }}>
                    Your privacy matters to us. This policy explains how Ashton-Bridge collects, uses, and protects your personal information.
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
                <main className="min-w-0 flex flex-col gap-0">

                    {/* 1. Introduction */}
                    <section id="intro" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={1} /> Introduction
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Welcome to Ashton-Bridge. We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard information about you when you use our platform, website, and services.
                        </p>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            By accessing or using Ashton-Bridge, you agree to the practices described in this policy. If you do not agree with any part of this policy, please discontinue use of our services.
                        </p>
                        <HighlightBox>
                            Ashton-Bridge operates as a multi-service platform serving truck drivers, logistics companies, IT service seekers, and vehicle maintenance customers. This policy applies to all users across all services we offer.
                        </HighlightBox>
                    </section>

                    {/* 2. Information We Collect */}
                    <section id="collect" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={2} /> Information We Collect
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            We collect information that you provide to us directly, information collected automatically when you use our platform, and information from third parties where applicable.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Information You Provide</h3>
                        <BulletList items={[
                            'Full name, email address, phone number, and account credentials when you register',
                            'Driver license details, CDL class, and professional experience for driver profiles',
                            'Company name, business registration details, and fleet information for company accounts',
                            'Payment information when you access premium features or services',
                            'Messages and communications you send through our platform',
                            'Profile photos and documents you upload to your account',
                        ]} />
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Information Collected Automatically</h3>
                        <BulletList items={[
                            'IP address, browser type, and device information',
                            'Pages visited, features used, and time spent on the platform',
                            'Location data when permitted by your device settings',
                            'Cookies and similar tracking technologies',
                        ]} />
                    </section>

                    {/* 3. How We Use */}
                    <section id="use" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={3} /> How We Use Your Information
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            We use the information we collect for legitimate business purposes that serve both you and the Ashton-Bridge community.
                        </p>
                        <BulletList items={[
                            'To create and manage your account and verify your identity',
                            'To match truck drivers with companies based on qualifications and availability',
                            'To facilitate communication between drivers and employers on the platform',
                            'To provide IT services, vehicle parts, and mechanic referrals tailored to your needs',
                            'To send you service notifications, updates, and relevant job alerts',
                            'To process transactions and send billing confirmations',
                            'To improve our platform, fix bugs, and develop new features',
                            'To comply with legal obligations and protect against fraud or misuse',
                        ]} />
                        <p className="text-sm leading-relaxed mt-3" style={{ color: '#8ca5be' }}>
                            We do not sell your personal information to third parties for their own marketing purposes. Your data is used exclusively to operate and improve the Ashton-Bridge platform.
                        </p>
                    </section>

                    {/* 4. Sharing */}
                    <section id="share" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={4} /> Sharing Your Information
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Ashton-Bridge does not sell or rent your personal information. We may share your data only in the following limited circumstances:
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Between Platform Users</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            When a driver applies for a position or a company expresses interest in a driver, relevant profile information is shared between those parties to facilitate the hiring process. You control what information appears on your public profile.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Service Providers</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            We work with trusted third-party providers for services such as hosting, payment processing, email delivery, and analytics. These providers are contractually obligated to protect your data and may only use it to provide services on our behalf.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Legal Requirements</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            We may disclose information when required by law, court order, or government authority, or when we believe disclosure is necessary to protect the rights, property, or safety of Ashton-Bridge, our users, or the public.
                        </p>
                        <HighlightBox>
                            In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of the business transaction. We will notify you before your data is transferred and becomes subject to a different privacy policy.
                        </HighlightBox>
                    </section>

                    {/* 5. Storage */}
                    <section id="storage" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={5} /> Data Storage & Security
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            We take the security of your personal data seriously. Ashton-Bridge uses industry-standard technical and organizational measures to protect your information from unauthorized access, loss, or disclosure.
                        </p>
                        <BulletList items={[
                            'All data transmissions are encrypted using SSL/TLS protocols',
                            'Passwords are stored using strong one-way hashing algorithms',
                            'Access to user data is restricted to authorized personnel only',
                            'We conduct regular security reviews and vulnerability assessments',
                        ]} />
                        <p className="text-sm leading-relaxed mt-3" style={{ color: '#8ca5be' }}>
                            We retain your personal information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time.
                        </p>
                    </section>

                    {/* 6. Cookies */}
                    <section id="cookies" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={6} /> Cookies & Tracking
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Ashton-Bridge uses cookies and similar technologies to enhance your experience, analyze usage, and remember your preferences.
                        </p>
                        <h3 className="text-base font-bold mt-5 mb-2" style={{ color: '#e8edf2' }}>Types of Cookies We Use</h3>
                        <BulletList items={[
                            <><span style={{ color: '#e8edf2', fontWeight: 600 }}>Essential cookies</span> — Required for the platform to function correctly. Cannot be disabled.</>,
                            <><span style={{ color: '#e8edf2', fontWeight: 600 }}>Analytics cookies</span> — Help us understand how users interact with the platform so we can improve it.</>,
                            <><span style={{ color: '#e8edf2', fontWeight: 600 }}>Preference cookies</span> — Remember your settings and choices for a personalized experience.</>,
                        ]} />
                        <p className="text-sm leading-relaxed mt-3" style={{ color: '#8ca5be' }}>
                            You can control cookie settings through your browser preferences. Disabling certain cookies may affect the functionality of the platform.
                        </p>
                    </section>

                    {/* 7. Rights */}
                    <section id="rights" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={7} /> Your Rights
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Depending on your location, you may have certain rights regarding your personal information. Ashton-Bridge respects these rights and provides tools to exercise them.
                        </p>
                        <BulletList items={[
                            <><span style={{ color: '#e8edf2', fontWeight: 600 }}>Access</span> — You have the right to request a copy of the personal data we hold about you.</>,
                            <><span style={{ color: '#e8edf2', fontWeight: 600 }}>Correction</span> — You can update or correct inaccurate information through your account settings at any time.</>,
                            <><span style={{ color: '#e8edf2', fontWeight: 600 }}>Deletion</span> — You may request that we delete your personal data. We will comply unless retention is required by law.</>,
                            <><span style={{ color: '#e8edf2', fontWeight: 600 }}>Portability</span> — You may request a machine-readable copy of your data to transfer to another service.</>,
                            <><span style={{ color: '#e8edf2', fontWeight: 600 }}>Objection</span> — You may object to certain types of data processing, including direct marketing.</>,
                            <><span style={{ color: '#e8edf2', fontWeight: 600 }}>Withdraw Consent</span> — Where processing is based on consent, you may withdraw it at any time without affecting prior processing.</>,
                        ]} />
                        <p className="text-sm leading-relaxed mt-3" style={{ color: '#8ca5be' }}>
                            To exercise any of these rights, please contact us at{' '}
                            <a href="mailto:drenixit@gmail.com" className="no-underline hover:underline" style={{ color: '#4a9eff' }}>drenixit@gmail.com</a>.
                            We will respond within 30 days.
                        </p>
                    </section>

                    {/* 8. Children */}
                    <section id="children" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={8} /> Children's Privacy
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            Ashton-Bridge is a professional platform intended for users who are 18 years of age or older. We do not knowingly collect personal information from individuals under the age of 18.
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: '#8ca5be' }}>
                            If we become aware that a minor has created an account or submitted personal information, we will take immediate steps to delete that information and close the account. If you believe a minor has provided us with personal information, please contact us immediately.
                        </p>
                    </section>

                    {/* 9. Changes */}
                    <section id="changes" className="pb-10 mb-10" style={{ borderBottom: '1px solid #1e3a52' }}>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={9} /> Changes to This Policy
                        </h2>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#8ca5be' }}>
                            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make significant changes, we will notify you by email or by posting a prominent notice on the platform.
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: '#8ca5be' }}>
                            The "Last updated" date at the top of this page reflects the most recent revision. We encourage you to review this policy periodically. Your continued use of Ashton-Bridge after any changes constitutes your acceptance of the updated policy.
                        </p>
                    </section>

                    {/* 10. Contact */}
                    <section id="contact" className="pb-4">
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <SectionNumber n={10} /> Contact Us
                        </h2>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: '#8ca5be' }}>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please reach out to us.
                        </p>
                        <div className="rounded-2xl p-8 text-center" style={{ background: '#0e2238', border: '1px solid #1e3a52' }}>
                            <h3 className="text-lg font-bold mb-2" style={{ color: '#e8edf2' }}>Get in touch with our team</h3>
                            <p className="text-sm mb-4" style={{ color: '#8ca5be' }}>We're here to help and committed to addressing your privacy concerns promptly.</p>
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
                        { href: '/privacy', label: 'Privacy Policy', active: true },
                        { href: '/terms', label: 'Terms of Service' },
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

export default Privacy