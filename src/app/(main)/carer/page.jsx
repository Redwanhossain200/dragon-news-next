import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dragon News - Career',
};

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

  return (
    <div className="bg-gray-50 container mx-auto mt-7 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#403F3F] mb-4 leading-tight">
            Join the <span className="text-[#F75B5F]">Dragon News</span> Team
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Become a part of the fastest-growing news platform. We are looking
            for passionate individuals to help us shape the future of
            journalism.
          </p>
        </div>

        <div className="space-y-4 mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#403F3F]">
            Open Positions
          </h2>
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-5 md:p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#F75B5F] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#403F3F]">
                  {job.title}
                </h3>
                <div className="flex gap-3 mt-1 text-xs md:text-sm text-gray-500 font-medium">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <button className="btn btn-sm md:btn-md bg-[#F75B5F] hover:bg-[#d44d51] text-white border-none rounded-md px-6 w-full md:w-auto">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#403F3F] rounded-2xl p-6 md:p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don't see a fit?
          </h2>
          <p className="opacity-80 mb-8 max-w-xl mx-auto text-sm md:text-base">
            If you're passionate about news and tech but don't see a matching
            role, send us your CV anyway. We're always looking for great talent!
          </p>
          <a
            href="mailto:career@dragon-news.com"
            className="inline-block bg-white text-[#403F3F] font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors w-full md:w-auto">
            Email Your CV
          </a>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-[#F75B5F] font-medium transition-colors text-sm">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarerPage;
