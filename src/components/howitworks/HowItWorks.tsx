"use client"
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ComputerIcon from '@mui/icons-material/Computer';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const steps = [
    {
        title: "Create Your Profile",
        description: "Sign up in minutes. Drivers add their license details and experience. Companies fill in their location, fleet size, and staffing needs.",
    },
    {
        title: "Browse or Post Opportunities",
        description: "Drivers browse available jobs from verified companies. Companies review qualified driver profiles and reach out directly.",
    },
    {
        title: "Connect & Confirm",
        description: "Match, communicate, and finalize agreements through the platform. Our tools make the process smooth for both sides.",
    },
    {
        title: "Grow with Additional Services",
        description: "Once on board, access our IT services, vehicle parts network, and other marketplace tools to keep your operations running strong.",
    }
]

const platformOverview = [
    {
        icon: LocalShippingIcon,
        title: "Driver Network",
        description: "1,240+ registered CDL drivers",
        status: 'Live'
    },
    {
        icon: ApartmentIcon,
        title: "Company Directory",
        description: "200+ freight companies onboard",
        status: 'Live'
    },
    {
        icon: ComputerIcon,
        title: "IT Projects",
        description: "Websites, apps, tech support",
        status: 'Active'
    },
    {
        icon: PrecisionManufacturingIcon,
        title: "Parts & Mechanics",
        description: "On-demand repair network.",
        status: 'Active'
    },
    {
        icon: AddBusinessIcon,
        title: "Marketplace",
        description: "Multi-service hub expanding",
        status: 'Soon'
    }
]

const HowItWorks = () => {
    return (
        <div>
            <div className='w-[1825px] h-[767px] bg-secondary px-70 flex items-center justify-center gap-20 mt-40 border-1 rounded-[35px]'>
                <div className='flex flex-col items-center justify-center text-white'>
                    <div>
                        <h1 className='text-[45px] font-bold text-white leading-tight'>Getting started is simple and fast</h1>
                    </div>
                    <ArrowDownwardIcon className='text-white mt-20 rounded-full p-2 bg-primary liquid-button' fontSize="inherit" style={{ fontSize: '60px' }} />
                    <h1 className='text-[60px] bg-primary px-10 py-2 rounded-[35px] text-white mt-10 liquid-button'>COMING SOON</h1>
                </div>
            </div>
            <div className='hidden px-70 flex items-center justify-center gap-20 mt-40'>
                <div>
                    <div>
                        <h4 className='text-text font-bold tracking-wider uppercase text-sm mb-2'>HOW IT WORKS</h4>
                        <h1 className='text-[45px] font-bold text-white leading-tight'>Getting started is simple <br /> and fast</h1>
                        <p className='text-gray-400 mt-2'>Whether you're a driver looking for work or a company building a team, Ashton-Bridge gets you there in just a few steps.</p>
                    </div>
                    <div className='mt-10'>
                        {steps.map((step, index) => (
                            <div key={index} className='flex items-center justify-between gap-5'>
                                <div className='w-12 h-12 flex-shrink-0 bg-transparent border border-text rounded-full flex items-center justify-center'>
                                    <span className='text-text font-bold'>{index + 1}</span>
                                </div>
                                <div>
                                    <div className='flex items-center gap-5 py-7'>
                                        <div>
                                            <h3 className='text-xl font-bold text-white'>{step.title}</h3>
                                            <p className='text-gray-400 text-sm mt-2'>{step.description}</p>
                                        </div>
                                    </div>
                                    {index !== steps.length - 1 && <hr className='w-full h-[1px] border-none bg-white/10' />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-200 p-10 text-white bg-secondary rounded-[15px] '>
                    <h4 className='text-gray-400 font-bold tracking-wider uppercase text-sm mb-2'>PLATFORM OVERVIEW</h4>
                    <h1 className='text-[25px] font-bold text-white leading-tight'>Your Operations at a Glance</h1>

                    <div className='mt-5'>
                        {platformOverview.map((item, index) => (
                            <div key={index} className='flex items-center justify-between border-b border-gray-400'>
                                <div className='flex items-center gap-5 py-7'>
                                    <div className='w-10 h-10 bg-transparent border border-text rounded-full flex items-center justify-center'>
                                        <item.icon className='text-text' />
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-white'>{item.title}</h3>
                                        <p className='text-gray-400 text-sm mt-2'>{item.description}</p>
                                    </div>
                                </div>
                                <button className={`w-24 py-1.5 px-3 text-sm font-medium rounded-[35px] border cursor-default transition-all duration-300
                                ${item.status === 'Soon'
                                        ? 'bg-[#d1ca9d]/10 text-[#f59e0b] border-[#f59e0b]/30'
                                        : 'bg-transparent text-text border-text/50'
                                    }`}>
                                    {item.status}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks