import * as React from "react";
import { Routes, Route } from "react-router-dom";
import SignInSide from "./pages/SignInSide";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
