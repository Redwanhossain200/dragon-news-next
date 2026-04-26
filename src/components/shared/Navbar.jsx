'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="container mx-auto px-4 mt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="hidden md:block flex-1"></div>

        <ul className="flex items-center text-gray-700 gap-4 md:gap-5 font-bold order-2 md:order-1">
          <li>
            <NavLink href={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink href={'/about-us'}>About</NavLink>
          </li>
          <li>
            <NavLink href={'/carer'}>Career</NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-3 flex-1 justify-center md:justify-end order-1 md:order-2 w-full md:w-auto">
          {isPending ? (
            <span className="loading loading-bars loading-md text-[#F75B5F]"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <h2 className="hidden sm:block font-semibold text-[#403f3f] text-sm">
                Hello, {user?.name}
              </h2>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-[#F75B5F] ring-offset-base-100 ring-offset-2">
                  <Image
                    src={user?.image || userAvatar}
                    alt={'User'}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <button
                onClick={async () => await authClient.signOut()}
                className="btn btn-sm md:btn-md bg-[#403f3f] text-white border-none px-4 md:px-8">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Image src={userAvatar} alt="Guest" width={35} height={35} />
              <Link
                href={'/login'}
                className="btn btn-sm md:btn-md bg-[#403f3f] text-white border-none px-6 md:px-8">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
