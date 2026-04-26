import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const news = await getNewsDetailsById(id);

  return {
    title: news ? news.title : 'Dragon News - News Details',
    description: news
      ? news.excerpt
      : 'Read the latest news and updates on Dragon News',
  };
};

const NewsDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const news = await getNewsDetailsById(id);

  if (!news) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-gray-500">
        <div className="text-center">
          <h1 className="text-2xl font-bold">404</h1>
          <p>News not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 my-6 md:my-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-1 lg:col-span-8">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm">
            <figure className="mb-6">
              <Image
                src={news.image_url}
                alt={news.title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-md transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </figure>

            <h1 className="text-xl md:text-3xl font-bold text-black mb-5 leading-tight">
              {news.title}
            </h1>

            <div className="text-gray-700 leading-relaxed space-y-4 mb-8 text-sm md:text-[15px]">
              <p className="whitespace-pre-line">{news.details}</p>
            </div>

            <div className="border-t border-gray-300 pt-6 mt-6">
              <Link
                href={`/category/${news.category_id}`}
                className="inline-block w-full md:w-auto">
                <button className="w-full md:w-auto bg-rose-600 cursor-pointer hover:bg-rose-700 text-white font-medium px-6 py-3 rounded flex items-center justify-center gap-2 transition text-sm md:text-[15px]">
                  <FaArrowLeft className="text-sm" />
                  All news in this category
                </button>
              </Link>
            </div>
          </div>
        </div>

        <aside className="col-span-1 lg:col-span-4">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
