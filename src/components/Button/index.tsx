import React from 'react'

interface IButton {
    color?: string | null | undefined
    label?: string | null | undefined
    rounded?: string | null | undefined
    children?: JSX.Element | JSX.Element[] | string | null | undefined
}

const Button: React.FC<IButton> = (props) => {
    return (
        <button
            className={`px-6 py-2 
            text-${props.color ? props.color : 'neutral'}-500 
            bg-${props.color ? props.color : 'neutral'}-100
            hover:bg-${props.color ? props.color : 'neutral'}-200
            transition-all duration-300 text-center font-medium rounded-${
                props.rounded ? props.rounded : 'none'
            }`}
        >
            {props.label || props.children}
        </button>
    )
}

export default Button
