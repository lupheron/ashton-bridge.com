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
    variant?: 'default' | 'quote';
}

const InputDefault = ({ type, placeholder, value, onChange, customClasses, name, required, label, variant = 'default' }: InputDefaultProps) => {
    const isQuote = variant === 'quote';

    return (
        <div className={`w-full flex flex-col justify-center ${isQuote ? 'gap-2' : 'gap-1'}`}>
            {label && (
                <label
                    htmlFor={name}
                    className={
                        isQuote
                            ? 'text-gray-300 font-medium text-sm tracking-wide'
                            : 'text-white font-bold text-md tracking-[1px]'
                    }
                >
                    {label}{!isQuote && ' :'}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${customClasses} w-full py-2 px-5 outline-none transition-all duration-200
                    ${isQuote ? 'h-[50px]' : 'h-[45px]'}
                    ${isQuote
                        ? 'bg-tertiary/80 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-text/50 focus:ring-2 focus:ring-text/20'
                        : 'bg-secondary border-none rounded-[5px]'
                    }`}
                name={name}
                required={required}
            />
        </div>
    )
}

export default InputDefault