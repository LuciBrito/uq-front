import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

import { Historia } from "./Historia";
import MainLayout from "./MainLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/historia" element={<Historia />} />
      </Route>
    </Routes>

  );
}