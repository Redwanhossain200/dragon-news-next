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
      className={`transition-all duration-300 py-1 ${
        isActive
          ? 'text-[#F75B5F] font-bold border-b-2 border-[#F75B5F]'
          : 'text-gray-700 hover:text-[#F75B5F]'
      }`}>
      {children}
    </Link>
  );
};

export default NavLink;
