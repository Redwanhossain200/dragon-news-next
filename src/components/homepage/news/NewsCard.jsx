import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm border border-gray-200 rounded-md overflow-hidden mb-6">
      <div className="flex justify-between items-center bg-slate-100 p-3 md:p-4">
        <div className="flex items-center gap-3">
          <Image
            src={news.author?.img || '/default-avatar.png'}
            alt={news.author?.name || 'Author'}
            width={40}
            height={40}
            className="rounded-full w-8 h-8 md:w-10 md:h-10 object-cover"
          />
          <div>
            <h2 className="font-semibold text-xs md:text-sm">
              {news.author?.name}
            </h2>
            <p className="text-[10px] md:text-xs text-gray-500">
              {news.author?.published_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-lg md:text-xl text-gray-600">
          <CiShare2 className="cursor-pointer hover:text-blue-500" />
          <CiBookmark className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      <div className="card-body p-4 md:p-5">
        <h2 className="card-title text-lg md:text-xl font-bold mb-3 leading-tight">
          {news.title}
        </h2>
        <figure className="mb-4">
          <Image
            src={news.image_url}
            alt={news.title}
            width={800}
            height={450}
            className="w-full h-auto object-cover rounded-sm"
          />
        </figure>
        <p className="text-gray-500 text-xs md:text-sm line-clamp-3 md:line-clamp-4 mb-4">
          {news.details}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-1 text-orange-500 font-medium text-xs md:text-sm">
              <IoIosStar />
              <span>{news.rating?.number || 0}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-xs md:text-sm">
              <FaEye />
              <span>{news.total_view || 0}</span>
            </div>
          </div>
          <Link
            href={`/news/${news._id}`}
            className="text-[#F75B5F] text-xs md:text-sm font-semibold hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
