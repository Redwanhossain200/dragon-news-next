import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-black to-slate-800 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className="mt-4 text-lg">Page not found</p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black transition-all">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
