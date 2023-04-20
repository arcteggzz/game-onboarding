import React from "react";
import "./FeaturesPage.css";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import feature2 from "./assets/amico.png"
import feature1 from "./assets/pana.png"
import feature3 from "./assets/bro.png"
import logo from "./assets/logo.png"
import vector from "./assets/Vector.png"
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const AnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(animatedRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Change this to change when the animation fires
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? "showhead" : "head"
      }`}
      ref={animatedRef}
    >
      {children}
    </div>
  );
};

const TextAnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(animatedRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Change this to change when the animation fires
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? "showtext text-center" : "text"
      }`}
      ref={animatedRef}
    >
      {children}
    </div>
  );
};


export default function FeaturesPage() {
  
  return (
    <>
      <AnimatedFadeInPage>
      <img src={logo} alt="Logo" className="w-[20%] mx-[1rem] lg:w-[10%]"/>
        <div className="flex flex-col items-center">
        <div className="FeaturesPage flex flex-col items-center lg:flex-row-reverse lg:w-[80%] lg:items-center lg:justify-center lg:h-[100vh]">

{/*////////////////// GAME LIBRARY FEATURE ////////////////// */}

<div className="flex flex-col items-center mx-[2rem] mt-[3rem] lg:mt-[2rem] lg:mx-[0rem]">
<AnimatedDiv>
<img src={feature1} alt="Game Library"/>
</AnimatedDiv>
<h2 className="text-2xl my-[1rem]">Game Library And Storefronts</h2>
<TextAnimatedDiv>
<p>Zojatech Gaming Offers A Diverse And Expanding Game Library With Easy Browsing And Purchasing Options. Enjoy The Latest Titles And Classic Favourites, All Backed By Our Secure Cloud Saving Service. Join Us Now To Discover Your Next Gaming Adventure. </p>
</TextAnimatedDiv>
<button className="flex items-center justify-center text-[#022882] my-[1rem]"><p>Learn More </p><svg width="20px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#022882"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#022882"></path></g></svg></button>
</div>


{/*////////////////// CLOUD SAVES FEATURE ////////////////// */}

<div className="flex flex-col items-center mx-[2rem] my-[2rem] lg:mx-[3rem] lg:mt-[-2rem] lg:my-[0rem]">
<AnimatedDiv>
<img src={feature2} alt="Cloud Saves"/>
</AnimatedDiv>
<h2 className="text-2xl my-[1rem]">Cloud Saves</h2>
<TextAnimatedDiv>
<p>At Zojatech Gaming, We Understand The Frustration Of Losing Progress In Your Favourite Games. With Our Cloud Saving Service, You Can Enjoy Your Games Without Worry, Knowing That Your Progress Is Securely Stored And Easily Retrievable</p>
</TextAnimatedDiv>
<button className="flex items-center justify-center text-[#022882] my-[1rem]"><p>Learn More </p><svg width="20px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#022882"></path></g></svg></button>
</div>


{/*////////////////// MULTI-PLAYER FEATURE ////////////////// */}

<div className="flex flex-col items-center mx-[2rem] lg:m-[0rem]">
<AnimatedDiv>
<img src={feature3} alt="Multiplayer"/>
</AnimatedDiv>
<h2 className="text-2xl my-[1rem]">Play With Your Friends</h2>
<TextAnimatedDiv>
<p>Zojatech Gaming Has A Great Multiplayer Platform. This Feature Allows Players To Connect And Play With Other Individuals Online, Creating A More Social And Engaging Gaming Experience </p>
</TextAnimatedDiv>
<button className="flex items-center justify-center text-[#022882] my-[1rem]"><p>Learn More </p><svg width="20px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#022882"></path></g></svg></button>
</div>
        </div>
        <Link to="/login" className="bg-[#000b80] w-[100%] py-[1rem] flex flex-col items-end lg:hidden">
        <button className="flex mx-[1rem] rounded-[5px] items-center justify-center bg-[white] text-[#022882] my-[1rem] border px-[1.2rem] py-[0.3rem]"><p>Continue</p><svg width="20px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#022882"></path></g></svg></button>
        </Link>
        </div>
<div className="hidden relative lg:block mt-[-8rem]">
<img src={vector} alt="Game Library"/>
<Link to="/login">
<button className="flex absolute top-[30%] left-[85%] mx-[1rem] rounded-[5px] items-center justify-center bg-[white] text-[#022882] my-[1rem] border px-[1.2rem] py-[0.3rem]"><p>Continue</p><svg width="20px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#022882"></path></g></svg></button></Link>
</div>
      </AnimatedFadeInPage>
    </>
  );
}
