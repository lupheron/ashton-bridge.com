"use client"
import React, { useMemo, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Box, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CommentCardProps {
  review: string;
  writer: string;
  profile_img?: string;
  company_name: string;
  rating: number;
}

const CommentCard = ({ review, writer, profile_img, company_name, rating }: CommentCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  // Helper to get initials if no image
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
  const maxPreviewChars = 100
  const isLongReview = review.length > maxPreviewChars
  const previewReview = useMemo(
    () => (isLongReview ? review.slice(0, maxPreviewChars).trimEnd() : review),
    [isLongReview, review]
  )

  return (
    <>
      <div className='w-[280px] sm:w-[350px] md:w-[420px] lg:w-[450px] h-[330px] sm:h-[300px] md:h-[310px] bg-[#0d1b2a] border border-[#4a9eff]/30 rounded-[25px] p-5 sm:p-6 md:p-8 text-white flex flex-col justify-between transition-all duration-300 hover:border-[#4a9eff]/60'>
        <div>
          <div className='flex gap-1 mb-5'>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-600'} style={{ fontSize: '20px' }} />
            ))}
          </div>
          <p
            className='text-[18px] italic leading-relaxed text-gray-200 overflow-hidden'
            style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}
          >
            &quot;{previewReview}
            {isLongReview ? (
              <>
                {' '}
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline text-text hover:text-white underline underline-offset-2 cursor-pointer"
                  aria-label={`Read full review from ${writer}`}
                >
                  (...)
                </button>
              </>
            ) : null}
            &quot;
          </p>
        </div>

        <div className='flex items-center gap-4 mt-6 pt-3 border-t border-white/10'>
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

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='[&_.MuiBackdrop-root]:backdrop-blur-md [&_.MuiBackdrop-root]:bg-black/55'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'min(680px, 92vw)',
            maxHeight: '88vh',
          }}
          className='rounded-[30px] bg-secondary border border-white/10 px-5 sm:px-7 py-6 sm:py-7 overflow-y-auto shadow-2xl'
        >
          <button
            type='button'
            onClick={() => setIsOpen(false)}
            className='absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/80 text-white hover:bg-primary transition-colors'
            aria-label='Close full review'
          >
            <CloseIcon fontSize='small' />
          </button>

          <div className='flex gap-1 mb-5'>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-600'} style={{ fontSize: '22px' }} />
            ))}
          </div>
          <p className='text-[20px] italic leading-relaxed text-gray-200 pr-1'>
            &quot;{review}&quot;
          </p>
          <div className='flex items-center gap-4 mt-7 pt-4 border-t border-white/10'>
            {profile_img ? (
              <img src={profile_img} alt={writer} className='w-14 h-14 rounded-full object-cover' />
            ) : (
              <div className='w-14 h-14 rounded-full bg-[#1b2d42] flex items-center justify-center text-[#4a9eff] font-bold text-lg border border-[#4a9eff]/20'>
                {getInitials(writer)}
              </div>
            )}
            <div>
              <h4 className='text-[20px] font-bold text-white'>{writer}</h4>
              <p className='text-gray-400 text-sm'>{company_name}</p>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default CommentCard