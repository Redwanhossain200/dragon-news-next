import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-15">
      {/* Left side: All Categories */}
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      {/* Middle: All News */}
      <div className="col-span-6">
        <h2 className="font-bold mb-5 text-lg">News By Category</h2>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => {
              return <NewsCard key={n._id} news={n}></NewsCard>;
            })
          ) : (
            <h2 className="text-4xl uppercase text-gray-600 font-bold my-7 text-center">
              Now news found!
            </h2>
          )}
        </div>
      </div>

      {/* Right side: Social Icons */}
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
