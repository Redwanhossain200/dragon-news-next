'use client';
import React from 'react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

const AboutUsPage = () => {
  const handleNotify = () => {
    toast.success("Thanks! We'll notify you when we launch.", {
      style: {
        border: '1px solid #403F3F',
        padding: '16px',
        color: '#403F3F',
        borderRadius: '10px',
      },
      iconTheme: {
        primary: '#F75B5F',
        secondary: '#FFFAEE',
      },
    });
  };

  return (
    <div className="bg-gray-50 container mx-auto mt-7 py-8 md:py-12 px-4 animate-fade-in">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#403F3F] mb-4 tracking-tight">
            About{' '}
            <span className="text-[#F75B5F] inline-block hover:rotate-2 transition-transform">
              Dragon News
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We deliver the most authentic and timely news from around the world,
            empowering our readers with knowledge and truth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-stretch mb-12 md:mb-20">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-[#F75B5F] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#403F3F] mb-4">
              Our Mission
            </h2>
            <p className="text-[#706F6F] leading-relaxed text-sm md:text-base">
              At Dragon News, our mission is to provide unbiased journalism. In
              an era of misinformation, we strive to be the most trusted source
              for politics, sports, entertainment, and technology news.
            </p>
          </div>

          <div className="bg-[#403F3F] p-6 md:p-8 rounded-xl shadow-lg text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
            <h2 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#F75B5F] transition-colors">
              Why Choose Us?
            </h2>
            <ul className="space-y-3 opacity-90 text-sm md:text-base">
              {[
                'Real-time updates',
                'Verified sources only',
                'User-centric experience',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 transform transition-transform duration-300 hover:translate-x-2">
                  <span className="text-green-400">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-12 md:py-16 bg-white rounded-3xl border border-dashed border-gray-300 px-6 text-center shadow-sm transition-all hover:border-[#F75B5F]/50 group relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F75B5F]/5 rounded-full blur-3xl group-hover:bg-[#F75B5F]/10 transition-colors"></div>

          <div className="relative z-10">
            <span className="inline-block bg-[#F75B5F]/10 text-[#F75B5F] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest animate-pulse">
              Coming Soon
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#403F3F] mb-3">
              Experience the Full Potential
            </h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              We're building an interactive team showcase and a deep dive into
              our 10-year journey. Stay tuned for the big reveal!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto bg-[#403F3F] hover:bg-black text-white px-8 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg font-medium text-center">
                Back to Home
              </Link>
              <button
                onClick={handleNotify}
                className="w-full sm:w-auto border border-gray-200 hover:border-[#F75B5F] hover:text-[#F75B5F] px-8 py-3 rounded-xl transition-all font-medium active:scale-95">
                Notify Me
              </button>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-50 flex justify-center gap-6 text-gray-400">
              <span className="text-xs uppercase tracking-tighter">
                Follow our progress:
              </span>
              <div className="flex gap-4">
                {['FB', 'TW', 'IG', 'LI'].map((social) => (
                  <span
                    key={social}
                    className="hover:text-[#F75B5F] cursor-pointer transition-colors font-bold text-xs">
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
