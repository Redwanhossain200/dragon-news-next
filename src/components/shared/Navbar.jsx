import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink href={'/about-us'}>About</NavLink>
        </li>
        <li>
          <NavLink href={'/carer'} className={'text-yellow-500'}>
            Career
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <Image
          src={userAvatar}
          alt={'User Avatar'}
          width={40}
          height={40}></Image>
        <button className="btn bg-[#403f3f] text-white px-8">
          <Link href={'/login'}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
