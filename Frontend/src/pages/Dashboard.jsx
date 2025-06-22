import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Dashboard = () => {

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex">

      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col  transition-all duration-300">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Dashboard Overview</h2>

          {/* Task Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl ">
              <h3 className="text-lg font-medium mb-2">Total Tasks</h3>
              <p className="text-3xl font-bold">42</p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
              <h3 className="text-lg font-medium mb-2">Completed</h3>
              <p className="text-3xl font-bold text-green-500">28</p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
              <h3 className="text-lg font-medium mb-2">Pending</h3>
              <p className="text-3xl font-bold text-yellow-500">14</p>
            </div>
          </div>

          {/* Recent Activity / Placeholder */}
          <section className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No recent activity to show yet. Start by adding tasks!
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
