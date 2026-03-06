import React from 'react'

interface InputDefaultProps {
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    customClasses?: string;
    name?: string;
    required?: boolean;
    label?: string;
}

const InputDefault = ({ type, placeholder, value, onChange, customClasses, name, required, label }: InputDefaultProps) => {
    return (
        <div className='w-full flex flex-col justify-center gap-1'>
            <label
                htmlFor={name}
                className='text-white font-bold text-md tracking-[1px]'
            >
                {label} :
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${customClasses} w-full h-[45px] bg-secondary border-none py-2 px-5 rounded-[5px] outline-none`}
                name={name}
                required={required}
            />
        </div>
    )
}

export default InputDefault