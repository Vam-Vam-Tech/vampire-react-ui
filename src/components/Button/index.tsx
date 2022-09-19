import React from 'react'

interface IButton {
    label?: string | null | undefined
    children?: JSX.Element | JSX.Element[] | string | null | undefined
}

const Button: React.FC<IButton> = (props) => {
    return <button className='px-2 py-1 text-red-600 bg-red-200'>{props.label || props.children}</button>
}

export default Button
