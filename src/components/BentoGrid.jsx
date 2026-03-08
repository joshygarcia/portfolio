import React from 'react';

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={`grid auto-rows-[minmax(180px,auto)] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </div>
    );
};
