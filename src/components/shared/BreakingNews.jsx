import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    _id: '1',
    title: 'Breaking News: Major Event Unfolds in the City',
  },
  {
    _id: '2',
    title: 'Breaking News: New Policy Announced by the Government',
  },
  {
    _id: '3',
    title: 'Breaking News: Sports Team Wins Championship',
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto">
      <button className="btn bg-red-500 text-white transition-all duration-300 hover:bg-red-600 hover:scale-105">
        Latest News
      </button>
      <Marquee pauseOnHover={true} speed={90}>
        {news.map((n) => {
          return <span key={n._id}>{n.title}</span>;
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
