import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">All Categories</h2>
      <ul className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 no-scrollbar">
        {categories.news_category.map((category) => (
          <li
            key={category.category_id}
            className={`${
              activeId === category.category_id
                ? 'bg-purple-500 text-white'
                : 'bg-gray-100 md:bg-transparent text-gray-600'
            } rounded-md font-bold text-center text-sm md:text-md whitespace-nowrap md:whitespace-normal border border-gray-200 md:border-none`}>
            <Link
              href={`/category/${category.category_id}`}
              className="block px-5 py-3 md:p-3">
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
