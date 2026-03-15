import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Workout from "./pages/Workout";
import WorkoutHistory from "./pages/WorkoutHistory";
import Diet from "./pages/Diet";
import WaterTracker from "./pages/WaterTracker";
import Calories from "./pages/Calories";
import Exercises from "./pages/Exercises";
import AIDiet from "./pages/AIDiet";

function Layout() {

  const location = useLocation();

  const hideNavbarRoutes = [
    "/signup",
    "/login",
    "/dashboard",
    "/profile",
    "/workout",
    "/aidiet",
    "/exercises",
    "/calories",
    "/water",
    "/diet",
    "/history"
  ];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/workout"
          element={
            <ProtectedRoute>
              <Workout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <WorkoutHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/diet"
          element={
            <ProtectedRoute>
              <Diet />
            </ProtectedRoute>
          }
        />

        <Route
          path="/water"
          element={
            <ProtectedRoute>
              <WaterTracker />
            </ProtectedRoute>
          }
        />

        <Route
          path="/calories"
          element={
            <ProtectedRoute>
              <Calories />
            </ProtectedRoute>
          }
        />

        <Route
          path="/exercises"
          element={
            <ProtectedRoute>
              <Exercises />
            </ProtectedRoute>
          }
        />

        <Route
          path="/aidiet"
          element={
            <ProtectedRoute>
              <AIDiet />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

function App() {
  return (
      <Layout />
  );
}

export default App;