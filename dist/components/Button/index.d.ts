import React from 'react';
declare type OnClickType = React.MouseEvent<HTMLButtonElement, MouseEvent>;
interface IButton {
    label?: string | null | undefined;
    children?: JSX.Element | JSX.Element[] | string | null | undefined;
    onClick?: (e: OnClickType) => void;
    className?: string | null | undefined;
    size?: 'sm' | 'md' | 'lg';
}
declare const Button: React.FC<IButton>;
export default Button;
