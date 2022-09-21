import React from 'react'

interface ISpinner {
    label: string | null | undefined
    children: JSX.Element | JSX.Element[] | null | undefined
}

const Spinner: React.FC<ISpinner> = ({ label, children }) => {
    return (
        <div className='w-[78px] h-[53px]'>
            <div className='w-[24px] h-[24px]'>
                <span className='border' />
                <span className='border' />
            </div>
            {label || children}
        </div>
    )
}

export default { Spinner }
