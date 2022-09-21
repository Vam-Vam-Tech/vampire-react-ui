import React from 'react'

interface IButton {
    color?: string | null | undefined
    size?: string | null | undefined
    label?: string | null | undefined
    children?: JSX.Element | JSX.Element[] | string | null | undefined
}

const Button: React.FC<IButton> = (props) => {
    return (
        <button
            className={`px-6 py-2 
            text-${props.color ? props.color : 'neutral'}-600 
            bg-${props.color ? props.color : 'neutral'}-100 
            text-center rounded-md`}
        >
            {props.label || props.children}
        </button>
    )
}

export default Button
