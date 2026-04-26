'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    console.log(data);
    const { email, name, password, photo } = data;
    console.log(name, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: '/',
    });

    console.log(res, error);
    if (error) {
      alert(error.message);
    } else if (res) {
      alert('SignUp Successful');
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] m-10 max-w-5xl flex justify-center items-center bg-slate-100 py-10">
      <div className="bg-white p-14 rounded-sm shadow-sm w-full max-w-150">
        <h2 className="font-bold text-3xl text-center text-[#403F3F] mb-10">
          Register your account
        </h2>

        <hr className="mb-10 border-gray-200" />

        <form className="space-y-6" onSubmit={handleSubmit(handleRegisterFunc)}>
          <div className="form-control">
            <label className="label p-0 mb-3">
              <span className="label-text font-semibold text-lg text-[#403F3F]">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full px-5 outline-none"
              {...register('name', { required: 'Name field is required' })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label p-0 mb-3">
              <span className="label-text font-semibold text-lg text-[#403F3F]">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo"
              className="input bg-[#F3F3F3] border-none rounded-md h-14 w-full px-5 outline-none"
              {...register('photo', { required: 'Photo field is required' })}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
