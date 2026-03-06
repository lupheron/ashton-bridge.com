import React from 'react'
import InputDefault from '../../FormElements/Input/InputDefault'
import DefaultButton from '../../Button/DefaultButton'

const QuoteForm = () => {
    return (
        <div className='py-5 px-10  text-white'>
            <h1 className='text-xl font-bold text-text tracking-[3px] text-center'>GET A QUOTE</h1>
            <form action="" className='w-full flex flex-col items-center justify-center gap-7 px-5 py-2'>
                <InputDefault type='text' value='' label='Name' required onChange={() => { }} />
                <InputDefault type='email' value='' label='Email' required onChange={() => { }} />
                <InputDefault type='text' value='' label='Phone' required onChange={() => { }} />
                <InputDefault type='text' value='' label='Company Name' required onChange={() => { }} />
                <InputDefault type='text' value='' label='Telegram Username' onChange={() => { }} />
                <DefaultButton text='Get A Quote' customClasses='w-full h-12 text-lg text-white font-bold tracking-[1px] border-o rounded-[5px]' />
            </form>
        </div>
    )
}

export default QuoteForm