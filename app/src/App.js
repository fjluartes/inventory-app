import { React } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import RequireAuth from "./components/PrivateRoute";
import useAuth from "./components/useAuth";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route
          path="/inventory"
          element={
            <RequireAuth redirectTo="/">
              <Dashboard />
            </RequireAuth>
          }
        /> */}
        <Route path="/inventory" element={<Dashboard />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/inventory" : "/"} />} />
      </Routes>
    </>
  );
}
