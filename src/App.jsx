import { lazy } from "react";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ComingSoon from "./pages/comingsoon";

//pages
// import SplashScreenPage from "./pages/SplashScreenPage";
// import FeaturesPage from "./pages/FeaturesPage";
// import LoginPage from "./pages/LoginPage";
// import CreateAccountPage from "./pages/CreateAccountPage";

//lazyLoading for pages
const SplashScreenPage = lazy(() => import("./pages/SplashScreenPage/"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage/"));
const LoginPage = lazy(() => import("./pages/LoginPage/"));
const CreateAccountPage = lazy(() => import("./pages/CreateAccountPage/"));

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SplashScreenPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
