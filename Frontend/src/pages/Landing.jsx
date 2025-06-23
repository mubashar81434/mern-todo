import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "../components/xyz.js";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Landing = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white w-full min-h-screen flex flex-col justify-center items-center px-6 transition-colors duration-300">
      {/* Header */}
      <header className="absolute top-6 left-6 flex gap-4">
        <SignedOut>
          <SignInButton mode="redirect">
            <span className="text-black dark:text-white font-medium border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-full cursor-pointer">
              Sign In
            </span>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </header>

      {/* Theme Toggle */}
      <DarkModeToggle className="absolute top-6 right-6" size={25} />

      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Organize Your Tasks Like a Pro
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
          Welcome to your personal task manager. Keep track of your to-dos, stay
          productive, and hit your goals — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <div className="border rounded-full py-2 px-4 flex items-center justify-center gap-2 group cursor-pointer border-gray-300 dark:border-gray-600">
            <SignInButton mode="redirect">
              <span className="text-black dark:text-white font-medium">
                Get Started
              </span>
            </SignInButton>
            <ArrowRight
              size={15}
              className="transform transition duration-300 group-hover:scale-125 border border-black p-[1px] font-medium dark:border-white rounded-full"
            />
          </div>

          <Link
            to="/about"
            className="border border-gray-300 dark:border-gray-600 text-black dark:text-white font-medium py-2 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Learn More <PlayCircle size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
