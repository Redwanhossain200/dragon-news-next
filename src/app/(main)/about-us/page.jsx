import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dragon News - About Us',
};

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 container mx-auto mt-7 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#403F3F] mb-4">
            About <span className="text-[#F75B5F]">Dragon News</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We deliver the most authentic and timely news from around the world,
            empowering our readers with knowledge and truth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-stretch mb-12 md:mb-20">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-[#F75B5F] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-[#403F3F] mb-4">
              Our Mission
            </h2>
            <p className="text-[#706F6F] leading-relaxed text-sm md:text-base">
              At Dragon News, our mission is to provide unbiased journalism. In
              an era of misinformation, we strive to be the most trusted source
              for politics, sports, entertainment, and technology news.
            </p>
          </div>

          <div className="bg-[#403F3F] p-6 md:p-8 rounded-xl shadow-lg text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <ul className="space-y-3 opacity-90 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span> Real-time updates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span> Verified sources only
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span> User-centric
                experience
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center py-8 md:py-10 bg-white rounded-2xl border border-dashed border-gray-300 px-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#403F3F] mb-2 italic">
            Full Experience Coming Soon!
          </h3>
          <p className="text-gray-500 mb-6 text-sm md:text-base">
            We are working hard to bring you more features, including our team
            bios and company history.
          </p>
          <Link
            href="/"
            className="btn bg-[#403F3F] hover:bg-black text-white px-8 rounded-lg border-none">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
