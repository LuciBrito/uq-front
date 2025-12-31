import { Outlet } from "react-router-dom";
import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";

export default function MainLayout() {
  return (
    <>
      <LandingHeader />
            <Outlet />

      <LandingFooter />
    </>
  );
}
