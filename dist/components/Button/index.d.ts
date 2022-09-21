import React from 'react';
interface IButton {
    color?: string | null | undefined;
    size?: string | null | undefined;
    label?: string | null | undefined;
    children?: JSX.Element | JSX.Element[] | string | null | undefined;
}
declare const Button: React.FC<IButton>;
export default Button;
