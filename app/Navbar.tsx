'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa6";
import classNames from 'classnames';

const Navbar = () => {

    const currentPath = usePathname();

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" }
    ]

    return (
        <nav className='flex space-x-4 items-center border-b mt-2 mb-5 px-5 h-14 '>
            <Link href="/"><FaBug /></Link>
            <ul className='flex space-x-3'>
                {links.map(link => {
                    return (
                        <li key={link.href}> <Link
                            // `${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-800 transition-colors`}
                            className={classNames({
                                'text-zinc-500': link.href !== currentPath,
                                'text-zinc-800': link.href === currentPath,
                                'hover:text-zinc-900 transition-colors': true
                            })}
                            href={link.href}>{link.label}</Link>
                        </li>
                    )
                })}
                {/* <li> <Link className='text-zinc-500 hover:text-zinc-800 transition-colors' href="/issue">Issue</Link></li> */}
            </ul >
        </nav >
    )
}

export default Navbar