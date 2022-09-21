import React from 'react'
import { sm, md, lg, baseStyle } from './styles'

type OnClickType = React.MouseEvent<HTMLButtonElement, MouseEvent>

interface IButton {
    label?: string | null | undefined
    children?: JSX.Element | JSX.Element[] | string | null | undefined
    onClick?: (e: OnClickType) => void
    className?: string | null | undefined
    size?: 'sm' | 'md' | 'lg'
}

const Button: React.FC<IButton> = ({ label, children, onClick, className, size }) => {
    return (
        <button
            className={`${baseStyle} ${size === 'sm' ? sm : size === 'lg' ? lg : md} px-4 py-1 bg-green-400 text-green-800 ${className}`}
            onClick={(e) => onClick ? onClick(e) : null}
        >
            {label || children}
        </button>
    )
}

export default Button
