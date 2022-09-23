import React from 'react'
import { sm, md, lg, baseStyle } from './styles'

type OnClickType = React.MouseEvent<HTMLButtonElement, MouseEvent>

interface IButton {
    color?: string | null | undefined
    label?: string | null | undefined
    rounded?: string | null | undefined
    children?: JSX.Element | JSX.Element[] | string | null | undefined
    onClick?: (e: OnClickType) => void
    className?: string | null | undefined
    size?: 'sm' | 'md' | 'lg'
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
