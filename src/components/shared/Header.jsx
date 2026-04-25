import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className="items-center text-center py-8 space-y-2">
      <div className="flex justify-center">
        <Image src={logo} alt="Logo" width={300} height={200} />
      </div>
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p className="font-medium text-lg">
        {format(new Date(), 'EEEE, MMMM do, yyyy')}
      </p>
    </div>
  );
};

export default Header;
