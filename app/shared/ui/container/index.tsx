import React, { type PropsWithChildren } from 'react'
import { cn } from '~/shared/lib/utils';
import { Header } from '~/widgets/header';

interface Props {
    className?: string
}

export const Container: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
    //max-w-[1280px] pt-14 pb-14
    return (
        <div className="flex-1 w-full bg-slate-600">
            <div className={cn('mx-auto w-full px-2 pt-4 relative flex flex-col', className)}>
                {children}
            </div>
        </div>
    )
}
