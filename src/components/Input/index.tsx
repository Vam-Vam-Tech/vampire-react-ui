import React, { Fragment } from 'react'
import { sm, md, lg, baseStyle } from './styles'


interface IInput {
    label?: string | null | undefined
    children?: JSX.Element | JSX.Element[] | string | null | undefined
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string | null | undefined
    placeholder?: string | undefined
    size?: 'sm' | 'md' | 'lg'
}

const Input: React.FC<IInput> = ({ label, children, onChange, className, placeholder, size }) => {
    return (
      <Fragment>
        <p className='mb-1 text-gray-600'>{label}</p>
        <input
            className={`${baseStyle} ${size === 'sm' ? sm : size === 'lg' ? lg : md} px-2 py-2 bg-transparent text-gray-500 border border-red-400 rounded-md text-sm outline-none ${className}`}
            onChange={(e) => onChange ? onChange(e) : null} placeholder={placeholder}
        />
        <span className='text-xs text-red-500'>{children}</span>
      </Fragment>
      
    )
}

export default Input
