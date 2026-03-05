"use client"
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

interface CommentCardProps {
  review: string;
  writer: string;
  profile_img?: string;
  company_name: string;
  rating: number;
}

const CommentCard = ({ review, writer, profile_img, company_name, rating }: CommentCardProps) => {
  // Helper to get initials if no image
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  return (
    <div className='w-[450px] min-h-[300px] bg-[#0d1b2a] border border-[#4a9eff]/30 rounded-[25px] p-8 text-white flex flex-col justify-between transition-all duration-300 hover:border-[#4a9eff]/60'>
      <div>
        <div className='flex gap-1 mb-6'>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-600'} style={{ fontSize: '20px' }} />
          ))}
        </div>
        <p className='text-[18px] italic leading-relaxed text-gray-200'>
          "{review}"
        </p>
      </div>

      <div className='flex items-center gap-4 mt-8'>
        {profile_img ? (
          <img src={profile_img} alt={writer} className='w-14 h-14 rounded-full object-cover' />
        ) : (
          <div className='w-14 h-14 rounded-full bg-[#1b2d42] flex items-center justify-center text-[#4a9eff] font-bold text-lg border border-[#4a9eff]/20'>
            {getInitials(writer)}
          </div>
        )}
        <div>
          <h4 className='text-[19px] font-bold text-white'>{writer}</h4>
          <p className='text-gray-400 text-sm'>{company_name}</p>
        </div>
      </div>
    </div>
  )
}

export default CommentCard