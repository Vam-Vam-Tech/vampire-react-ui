import React from 'react';
declare type OnClickType = React.MouseEvent<HTMLButtonElement, MouseEvent>;
interface IButton {
    label?: string;
    children?: JSX.Element | JSX.Element[] | string;
    onClick?: (e: OnClickType) => void;
    className?: string | null | undefined;
    size?: 'sm' | 'md' | 'lg';
}
declare const Button: React.FC<IButton>;
export default Button;
