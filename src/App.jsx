import { Route, Routes } from "react-router-dom";
import SplashScreenPage from "./pages/SplashScreenPage";
import FeaturesPage from "./pages/FeaturesPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreenPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </>
  );
}

export default App;
