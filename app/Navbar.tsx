import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa6";
const Navbar = () => {

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Issue", href: "/issue" }
    ]

    return (
        <nav className='flex space-x-4 items-center border-b mt-2 mb-5 px-5 h-14 '>
            <Link href="/"><FaBug /></Link>
            <ul className='flex space-x-3'>
                {links.map(link => {
                    return (
                        <li> <Link key={link.href}
                            className='text-zinc-500 hover:text-zinc-800 transition-colors'
                            href={link.href}>{link.label}</Link></li>
                    )
                })}
                {/* <li> <Link className='text-zinc-500 hover:text-zinc-800 transition-colors' href="/issue">Issue</Link></li> */}
            </ul >
        </nav>
    )
}

export default Navbar