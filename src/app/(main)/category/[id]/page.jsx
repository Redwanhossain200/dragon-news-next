import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 container mx-auto my-10 px-4">
      <div className="md:col-span-3 order-1">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className="md:col-span-6 order-2">
        <h2 className="font-bold mb-5 text-lg">News By Category</h2>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => <NewsCard key={n._id} news={n} />)
          ) : (
            <h2 className="text-2xl md:text-4xl uppercase text-gray-600 font-bold my-7 text-center">
              No news found!
            </h2>
          )}
        </div>
      </div>

      <div className="md:col-span-3 order-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
