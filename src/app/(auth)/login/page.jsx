'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: '/',
    });
    console.log(res, error);
  };

  return (
    <div className="container mx-auto min-h-[80vh] m-10 max-w-5xl flex justify-center items-center bg-slate-100 py-10">
      <div className="bg-white p-14 rounded-sm shadow-sm w-full max-w-150">
        <h2 className="font-bold text-3xl text-center text-[#403F3F] mb-10">
          Login your account
        </h2>

        <hr className="mb-10 border-gray-200" />

        <form className="space-y-6" onSubmit={handleSubmit(handleLoginFunc)}>
          <div className="form-control">
            <label className="label p-0 mb-3">
              <span className="label-text font-semibold text-lg text-[#403F3F]">
                Email address
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full px-5 outline-none"
              {...register('email', { required: 'Email field is required' })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label p-0 mb-3">
              <span className="label-text font-semibold text-lg text-[#403F3F]">
                Password
              </span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full px-5 outline-none"
                {...register('password', {
                  required: 'Password field is required',
                })}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 text-gray-500 text-xl"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="btn w-full text-white bg-[#403F3F] hover:bg-black border-none rounded-xl h-14 text-lg font-semibold mt-4">
            Login
          </button>
        </form>

        <p className="mt-8 text-center font-semibold text-[#706F6F]">
          Don't Have An Account?{' '}
          <Link href={'/register'} className="text-[#F75B5F] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
