import React from "react";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import "./SplashScreenPage.css";
import logo from "./assets/logo.png"
import character from "./assets/character.png"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreenPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/features")
    }, 5000)
  }, []);
  

  return (
    <>
      <AnimatedFadeInPage>
        <div className="SplashScreenPage w-[100vw] h-[100vh] flex items-center justify-center">
<img src={logo} alt="Logo" className="w-[120.52px] landingloader"/>
<div className="absolute hidden lg:block top-[40%] left-[0]">
        <img src={character} alt="Logo" className="w-[400px]"/>
        </div>
        </div>
      </AnimatedFadeInPage>
    </>
  );
}
