'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
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
            <input
              type="password"
              placeholder="Enter your password"
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full px-5 outline-none"
              {...register('password', {
                required: 'Password field is required',
              })}
            />
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
