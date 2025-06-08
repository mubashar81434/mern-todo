import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "../components/xyz.js";
const Landing = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white w-full min-h-screen flex flex-col justify-center items-center px-6 transition-colors duration-300">
      <DarkModeToggle className={"absolute top-10 right-10"} size={25}/>
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Organize Your Tasks Like a Pro
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
          Welcome to your personal task manager. Keep track of your to-dos, stay
          productive, and hit your goals — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/tasks"
            className="bg-black text-white dark:bg-white dark:text-black font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            Get Started <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="border border-gray-300 dark:border-gray-600 text-black dark:text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Learn More <PlayCircle size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
