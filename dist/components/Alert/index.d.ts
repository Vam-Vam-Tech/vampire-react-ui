import React from 'react';
interface IAlert {
    type?: string | null | undefined;
    children: React.ReactNode;
}
declare const Alert: React.FC<IAlert>;
export default Alert;
