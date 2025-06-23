import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useUser,
} from "@clerk/clerk-react";

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
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Prevent infinite loop by checking current route
    if (!isLoaded) return;

    if (isSignedIn && location.pathname === "/") {
      navigate("/dashboard");
    }

    if (!isSignedIn && location.pathname !== "/" && location.pathname.startsWith("/dashboard")) {
      navigate("/");
    }
  }, [isSignedIn, isLoaded, navigate, location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <main className="flex-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <SignedIn>
                <Dashboard />
              </SignedIn>
            }
          />
          <Route
            path="/my-tasks"
            element={
              <SignedIn>
                <MyTasks />
              </SignedIn>
            }
          />
          <Route
            path="/add-task"
            element={
              <SignedIn>
                <AddTask />
              </SignedIn>
            }
          />
          <Route
            path="/completed-tasks"
            element={
              <SignedIn>
                <CompletedTask />
              </SignedIn>
            }
          />
          <Route
            path="/deleted-tasks"
            element={
              <SignedIn>
                <DeletedTask />
              </SignedIn>
            }
          />

          {/* Optional Fallback Redirect if needed */}
          <Route
            path="/dashboard"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
