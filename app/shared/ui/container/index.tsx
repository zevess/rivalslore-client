import React, { type PropsWithChildren } from 'react'
import { cn } from '~/shared/lib/utils';

interface Props {
    className?: string
}

export const Container: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
    //max-w-[1280px] pt-14 pb-14 
    return (
        <div className="flex-1 w-full bg-slate-700 [background-image:radial-gradient(rgba(255,255,255,0.171)_2px,transparent_0)] bg-[length:30px_30px] bg-[-5px_-5px]">
            <div className={cn('mx-auto w-full px-2 pt-4 pb-4 mb-6 relative flex flex-col ', className)}>
                {children}
            </div>
        </div>
    )
}