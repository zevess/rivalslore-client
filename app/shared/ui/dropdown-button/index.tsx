import { Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import type { INavItem } from '~/widgets/header/model/types'

interface Props {
    className?: string,
    items: INavItem[]
}

export const DropdownButton: React.FC<Props> = ({ className, items }) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen])

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative block md:hidden" ref={dropdownRef}>
            <button
                className={`p-4 text-white ${isOpen && "rotate-90"}`}
                onClick={handleMenuToggle}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <Menu />
            </button>

            <div
                className={`absolute right-0 w-fit bg-black p-4 ${isOpen ? 'flex' : 'hidden'} flex-col gap-3`}>
                {items.map((item, index) => (
                    <a
                        href={item.url}
                        key={index}
                        className='text-white font-semibold uppercase hover:text-yellow-400 transition duration-200'
                        onClick={handleLinkClick}
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    )
}
