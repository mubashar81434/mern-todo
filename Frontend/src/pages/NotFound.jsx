import React from 'react';
import { Link } from 'react-router-dom'; // Remove if not using react-router
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-gray-800 dark:text-white px-4">
      <AlertCircle className="text-red-500 dark:text-red-400 mb-4" size={64} />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-center mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
