import React from 'react';

export const BentoItem = ({
    className,
    title,
    description,
    header,
    icon,
    link,
    children
}) => {
    const ContentWrapper = link ? 'a' : 'div';
    const wrapperProps = link ? { href: link, target: "_blank", rel: "noreferrer" } : {};

    return (
        <ContentWrapper
            {...wrapperProps}
            className={`
        row-span-1 rounded-3xl group/bento 
        bg-surface border border-white/5 
        hover:border-white/10 hover:bg-surfaceHighlight
        transition duration-200 
        flex flex-col justify-between overflow-hidden
        ${link ? 'cursor-pointer' : ''} 
        ${className}
      `}
        >
            {/* Header Image/Content Area */}
            {header && (
                <div className="flex flex-1 w-full h-full min-h-[6rem] overflow-hidden rounded-t-3xl">
                    {header}
                </div>
            )}

            {/* Text Content Area */}
            <div className="p-6 transition duration-200 group-hover/bento:translate-x-1">
                {(icon || title || description) && (
                    <>
                        {icon}
                        <div className="font-bold text-primary mb-1 mt-2 text-lg">
                            {title}
                        </div>
                        <div className="font-normal text-secondary text-sm leading-relaxed">
                            {description}
                        </div>
                    </>
                )}
                {children}
            </div>
        </ContentWrapper>
    );
};
