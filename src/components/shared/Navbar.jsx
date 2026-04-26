'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div className="flex-1"></div>

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

      <div className="flex items-center gap-2 flex-1 justify-end">
        {user ? (
          <>
            <h2 className="font-semibold text-[#403f3f]">
              Hello, {user?.name}
            </h2>
            <Image
              src={user?.image || userAvatar}
              alt={'User Avatar'}
              width={40}
              height={40}
              className="rounded-full"
            />
            <button
              onClick={async () => await authClient.signOut()}
              className="btn bg-[#403f3f] text-white px-8 rounded-none border-none">
              Logout
            </button>
          </>
        ) : (
          <>
            <Image src={userAvatar} alt="Guest" width={40} height={40} />
            <Link
              href={'/login'}
              className="btn bg-[#403f3f] text-white px-8 rounded-none border-none">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
