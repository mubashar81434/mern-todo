import { Routes, Route } from "react-router-dom";

import {
  AddTask,
  CompletedTask,
  Dashboard,
  Landing,
  NotFound,
  MyTasks,
  DeletedTask,
} from "./pages/xyz.js";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="">
        <main className="flex-1">
          <Routes>
            {/* Public routes */}

            <Route path="/" element={<Landing />} />

            <Route path="*" element={<NotFound />} />

            {/* Protected routes */}

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-tasks" element={<MyTasks />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/completed-tasks" element={<CompletedTask />} />
            <Route path="/deleted-tasks" element={<DeletedTask />} />
            <Route path="/settings" element={<AddTask />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
