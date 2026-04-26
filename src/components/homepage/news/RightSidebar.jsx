'use client';
import React from 'react';
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import swimming from '@/assets/swimming.png';
import classes from '@/assets/class.png';
import playground from '@/assets/playground.png';
import bgImg from '@/assets/bg.png';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

const RightSidebar = () => {
  const handleGoogleSignin = async () => {
    await authClient.signIn.social({ provider: 'google' });
  };
  const handleGithubSignin = async () => {
    await authClient.signIn.social({ provider: 'github' });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">Login With</h2>
        <button
          onClick={handleGoogleSignin}
          className="btn btn-outline btn-info w-full normal-case">
          <FaGoogle /> Login With Google
        </button>
        <button
          onClick={handleGithubSignin}
          className="btn btn-outline w-full normal-case">
          <FaGithub /> Login With Github
        </button>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-4">Find Us On</h2>
        <div className="flex flex-col">
          <button className="flex btn justify-start rounded-none bg-transparent items-center gap-3 border border-gray-200 rounded-t-lg w-full px-4">
            <div className="bg-gray-100 p-2 rounded-full text-blue-600">
              <FaFacebook />
            </div>
            Facebook
          </button>
          <button className="flex btn justify-start rounded-none bg-transparent items-center gap-3 border-x border-b border-gray-200 w-full px-4">
            <div className="bg-gray-100 p-2 rounded-full text-blue-400">
              <FaTwitter />
            </div>
            Twitter
          </button>
          <button className="flex btn justify-start rounded-none bg-transparent items-center gap-3 border border-gray-200 border-t-0 rounded-b-lg w-full px-4">
            <div className="bg-gray-100 p-2 rounded-full text-pink-500">
              <FaInstagram />
            </div>
            Instagram
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg text-center md:text-left">
        <h2 className="font-bold text-lg mb-4">Q-Zone</h2>
        <div className="space-y-4">
          <Image
            src={swimming}
            alt="Swimming"
            className="w-full h-auto mx-auto"
          />
          <Image src={classes} alt="Class" className="w-full h-auto mx-auto" />
          <Image
            src={playground}
            alt="Playground"
            className="w-full h-auto mx-auto"
          />
        </div>
      </div>

      <div
        className="bg-cover bg-center min-h-[350px] flex items-center justify-center text-white text-center p-6 rounded"
        style={{ backgroundImage: `url(${bgImg.src})` }}>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
            Create an Amazing Newspaper
          </h2>
          <p className="text-xs text-gray-300 mb-6">
            Discover thousands of options, easy to customize layouts, and much
            more.
          </p>
          <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-xl px-8">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
