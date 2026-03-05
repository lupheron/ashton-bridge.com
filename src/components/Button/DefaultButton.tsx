import React from 'react'

interface DefaultButtonProps {
    text: string;
    onClick?: () => void;
    customClasses?: string;
}

const DefaultButton = ({ text, onClick, customClasses }: DefaultButtonProps) => {
    return (
        <button className={`bg-secondary text-white px-4 py-2 rounded cursor-pointer ${customClasses}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default DefaultButton