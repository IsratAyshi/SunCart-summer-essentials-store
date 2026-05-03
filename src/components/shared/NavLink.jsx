"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ children, href }) => {

    const pathName = usePathname();

    const isActive = (pathName === href);

    return (
        <Link href={href}
            className={`${isActive ? "text-[#FF7F50] border-b border-[#FF7F50]" : ""}`}>
            {children}
        </Link>
    );
};

export default NavLink;