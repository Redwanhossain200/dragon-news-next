'use client';
import React from 'react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

const CarerPage = () => {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Remote',
    },
    {
      id: 2,
      title: 'Senior News Editor',
      type: 'Full-time',
      location: 'Dhaka, BD',
    },
    { id: 3, title: 'Content Writer', type: 'Part-time', location: 'Remote' },
  ];

  const handleApply = (jobTitle) => {
    toast.success(`Application submitted for ${jobTitle}!`, {
      style: {
        border: '1px solid #F75B5F',
        padding: '16px',
        color: '#403F3F',
        borderRadius: '10px',
      },
      iconTheme: { primary: '#F75B5F', secondary: '#FFFAEE' },
    });
  };

  return (
    <div className="bg-gray-50 container mx-auto mt-7 py-8 md:py-12 px-4 animate-fade-in">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#403F3F] mb-4 leading-tight">
            Join the{' '}
            <span className="text-[#F75B5F] inline-block hover:rotate-2 transition-transform duration-300">
              Dragon News
            </span>{' '}
            Team
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Become a part of the fastest-growing news platform. We are looking
            for passionate individuals to help us shape the future of
            journalism.
          </p>
        </div>

        <div className="space-y-4 mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#403F3F] mb-6">
            Open Positions
          </h2>
          {jobs.map((job, index) => (
            <div
              key={job.id}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
              }}
              className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#F75B5F] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer animate-fade-in opacity-0">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#403F3F]">
                  {job.title}
                </h3>
                <div className="flex gap-3 mt-1 text-xs md:text-sm text-gray-500 font-medium">
                  <span className="bg-gray-50 px-2 py-0.5 rounded border border-gray-100 text-[#F75B5F]">
                    {job.type}
                  </span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <button
                onClick={() => handleApply(job.title)}
                className="btn btn-sm md:btn-md bg-[#F75B5F] hover:bg-[#d44d51] text-white border-none rounded-md px-8 w-full md:w-auto transition-all transform active:scale-95 shadow-md">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div
          className="bg-[#403F3F] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden group bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1698047681432-006d2449c631?w=800&auto=format&fit=crop&q=60')`,
          }}>
          <div className="absolute inset-0 bg-[#2c2c2cac] opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't see a fit?
            </h2>
            <p className="opacity-90 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              If you're passionate about news and tech but don't see a matching
              role, send us your CV anyway. We're always looking for great
              talent!
            </p>
            <a
              href="mailto:career@dragon-news.com"
              className="inline-block bg-white/10 text-white border border-white/30 font-bold py-3.5 px-10 rounded-lg hover:backdrop-blur-xs hover:text-black transition-all transform hover:scale-105 active:scale-95 shadow-lg">
              Email Your CV
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-gray-500 border py-2 px-6 hover:text-[#F75B5F] font-medium transition-all inline-flex items-center justify-center gap-2 text-sm hover:-translate-x-1">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarerPage;
