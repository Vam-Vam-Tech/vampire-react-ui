import React from 'react';
interface IInput {
    label?: string | null | undefined;
    children?: JSX.Element | JSX.Element[] | string | null | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string | null | undefined;
    placeholder?: string | undefined;
    size?: 'sm' | 'md' | 'lg';
}
declare const Input: React.FC<IInput>;
export default Input;
