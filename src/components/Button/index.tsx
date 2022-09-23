import React from 'react'
import { sm, md, lg, baseStyle } from './styles'

type OnClickType = React.MouseEvent<HTMLButtonElement, MouseEvent>

interface IButton {
    label?: string
    children?: JSX.Element | JSX.Element[] | string
    onClick?: (e: OnClickType) => void
    className?: string | null | undefined
    size?: 'sm' | 'md' | 'lg'
}


const Button: React.FC<IButton> = (props) => {
    return (
        <button
            className={`${baseStyle} ${size === 'sm' ? sm : size === 'lg' ? lg : md} px-4 py-1 ${className}`}
            onClick={(e) => onClick ? onClick(e) : null}
        >
            {props.label || props.children}
        </button>
    )
}

export default Button
