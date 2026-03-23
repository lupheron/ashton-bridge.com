import React from 'react'

interface DefaultButtonProps {
    text: string;
    onClick?: () => void;
    customClasses?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const DefaultButton = ({ text, onClick, customClasses, type = 'button', disabled = false }: DefaultButtonProps) => {
    return (
        <button type={type} disabled={disabled} className={`bg-secondary text-white px-4 py-2 rounded cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${customClasses}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default DefaultButton