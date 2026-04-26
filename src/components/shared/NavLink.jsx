'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative py-1 ${
        isActive
          ? 'text-[#F75B5F] font-bold'
          : 'text-gray-700 hover:text-[#F75B5F]'
      }`}>
      <span className="relative">
        {children}
        <span
          className={`absolute left-0 -bottom-1 h-0.5 bg-[#F75B5F] transition-all duration-300 ${
            isActive ? 'w-full' : 'w-0 hover:w-full'
          }`}></span>
      </span>
    </Link>
  );
};

export default NavLink;
