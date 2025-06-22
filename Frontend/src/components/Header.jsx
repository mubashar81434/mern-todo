import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import {
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="bg-white dark:bg-black text-black dark:text-white w-full px-6 py-4  flex items-center justify-between transition-colors duration-300 dark:border-gray-700 border-gray-100 border-b">
      <h1 className="text-2xl font-semibold">My Todo App</h1>
      <DarkModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
