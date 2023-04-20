import React from "react";
import "./FeaturesPage.css";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import feature2 from "./assets/amico.png"
import feature1 from "./assets/pana.png"
import feature3 from "./assets/bro.png"
import logo from "./assets/logo.png"
import vector from "./assets/vector.png"
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";


export default function FeaturesPage() {

  const { ref: profileRef, inView: profileIsVisible } = useInView();
  const { ref: profileRef2, inView: profileIsVisible2 } = useInView();
  const { ref: profileRef3, inView: profileIsVisible3 } = useInView();
  const { ref: textRef, inView: textIsVisible } = useInView();
  const { ref: textRef2, inView: textIsVisible2 } = useInView();
  const { ref: textRef3, inView: textIsVisible3 } = useInView();
  
  return (
    <>
      <AnimatedFadeInPage>
      <img src={logo} alt="Game Library" className="w-[20%] mx-[1rem] lg:w-[10%]"/>
        <div className="flex flex-col items-center">
        <div className="FeaturesPage flex flex-col items-center lg:flex-row-reverse lg:w-[80%] lg:items-center lg:justify-center lg:h-[100vh]">
<div className="flex flex-col items-center mx-[2rem] mt-[3rem] lg:mt-[2rem] lg:mx-[0rem]">
<img src={feature1} alt="Game Library" ref={profileRef} className={profileIsVisible ? "showhead" : "head"}/>
<h2 className="text-2xl my-[1rem]">Game Library And Storefronts</h2>
<p ref={textRef} className={textIsVisible ? "showtext text-center" : "text"}>Zojatech Gaming Offers A Diverse And Expanding Game Library With Easy Browsing And Purchasing Options. Enjoy The Latest Titles And Classic Favourites, All Backed By Our Secure Cloud Saving Service. Join Us Now To Discover Your Next Gaming Adventure. </p>
<button className="flex items-center justify-center text-[#022882] my-[1rem]"><p>Learn More </p><svg width="20px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#022882"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#022882"></path></g></svg></button>
</div>
<div className="flex flex-col items-center mx-[2rem] my-[2rem] lg:mx-[3rem] lg:mt-[-2rem] lg:my-[0rem]">
<img src={feature2} alt="Game Library" ref={profileRef2} className={profileIsVisible2 ? "showhead" : "head"}/>
<h2 className="text-2xl my-[1rem]">Cloud Saves</h2>
<p ref={textRef2} className={textIsVisible2 ? "showtext text-center" : "text"}>At Zojatech Gaming, We Understand The Frustration Of Losing Progress In Your Favourite Games. With Our Cloud Saving Service, You Can Enjoy Your Games Without Worry, Knowing That Your Progress Is Securely Stored And Easily Retrievable</p>
<button className="flex items-center justify-center text-[#022882] my-[1rem]"><p>Learn More </p><svg width="20px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#022882"></path></g></svg></button>
</div>
<div className="flex flex-col items-center mx-[2rem] lg:m-[0rem]">
<img src={feature3} alt="Game Library" ref={profileRef3} className={profileIsVisible3 ? "showhead" : "head"}/>
<h2 className="text-2xl my-[1rem]">Play With Your Friends</h2>
<p ref={textRef3} className={textIsVisible3 ? "showtext text-center" : "text"}>Zojatech Gaming Has A Great Multiplayer Platform. This Feature Allows Players To Connect And Play With Other Individuals Online, Creating A More Social And Engaging Gaming Experience </p>
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
