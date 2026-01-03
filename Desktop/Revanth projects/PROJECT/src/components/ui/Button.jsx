import React from 'react';
import clsx from 'clsx';
import '../../styles/global.css'; // Ensure styles are loaded if used standalone

export const Button = ({
    children,
    variant = 'primary',
    className,
    isLoading,
    ...props
}) => {
    const baseClass = 'btn';
    const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';

    return (
        <button
            className={clsx(baseClass, variantClass, className, { 'opacity-50 cursor-not-allowed': isLoading || props.disabled })}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
};
