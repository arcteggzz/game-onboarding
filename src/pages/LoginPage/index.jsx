import React from "react";
import "./LoginPage.css";
import logo from "../LoginPage/asset/logo.png";
import facebook from "../LoginPage/asset/facebook.png";
import google from "../LoginPage/asset/google.png";
import mac from "../LoginPage/asset/mac.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {

const [onboarding, setonboarding] = useState("Log in");

  return (
    <>
      <AnimatedFadeInPage>
        <main className="bg-[url(../LoginPage/asset/bgImage.png)] h-[100vh] loginpage">
          <img src={logo} className="w-[25%] lg:hidden mb-[5rem] p-[1rem]" />
          {onboarding === "Log in" ? <div className="lg:hidden bg-white p-[1.5rem] rounded-t-[30px]">
            <div className="flex justify-between">
            <svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#000000"></path> </g></svg>
              <p className="text-[#022882]" onClick={() => {
              setonboarding("Register")
            }}>Register</p>
            </div>
            <h2 className="my-[1rem] text-xl">Log In</h2>
            <form>
              <p className="opacity-50%">Email</p>
              <input type="email" id="email" name="email" placeholder="Please Enter Email" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem]"/>
              <p className="mt-[1rem] opacity-[50%]">Password</p>
              <input type="password" id="email" name="email" placeholder="Please Enter Your Password" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem]"/>
            <div className="flex my-[1rem] justify-between">
            <div className="flex">
              <input type="checkbox"/>
              <p className="ml-[0.3rem]">Remember me</p>
            </div>
            <p className="text-[#022882]">Forgot Password?</p>
            </div>
            <Link to="/coming-soon">
            <input type="submit" value="Log In" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem] mb-[1rem] bg-[#022882] text-white"/>
            </Link>
            </form>
            <p className="text-center">I dont have an account. <span className="text-[#022882] font-bold" onClick={() => {
              setonboarding("Register")
            }}>Register?</span></p>
          </div>
 : ""}
        {onboarding === "Register" ? <div className="lg:hidden bg-white p-[1.5rem] rounded-t-[30px]">
            <div className="flex justify-between">
            <svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#000000"></path> </g></svg>
              <p className="text-[#022882]" onClick={() => {
              setonboarding("Log in")
            }}>Log In</p>
            </div>
            <h2 className="my-[1rem] text-xl">Register</h2>
            <form>
              <p className="opacity-[50%]">Email</p>
              <input type="email" id="email" name="email" placeholder="Please Enter Email" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem]"/>
              <p className="mt-[1rem] opacity-[50%]">Password</p>
              <input type="password" id="email" name="email" placeholder="Please Enter Your Password" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem]"/>
              <p className="mt-[1rem] opacity-[50%]">Confirm Password</p>
              <input type="password" id="email" name="email" placeholder="Confirm Your Password" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem]"/>
            
            <div className="flex my-[1rem] justify-center">
              <input type="checkbox"/>
              <p className="ml-[0.3rem]">I argree to the <span className="text-[#022882]">terms of service</span> and <span className="text-[#022882]">privacy policy</span></p>
            </div>
            <Link to="/coming-soon">
            <input type="submit" value="Log In" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem] mb-[1rem] bg-[#022882] text-white"/>
            </Link>
            </form>
            <p className="text-center">I already have an account. <span onClick={() => {
              setonboarding("Log in")
            }} className="text-[#022882] font-bold">Log In?</span></p>
          </div> : ""}  

          {onboarding === "Log in" ? <div className="hidden px-[2rem] lg:flex justify-center items-center h-[100vh]">
            <div className="w-[40%]">
            <img src={logo} className="w-[45%] p-[1rem]" />
            <p className="text-white max-w-md">
                  Let's explore and enjoy the fun in the new Zojatech Gaming
                  platform today
                </p>
            </div>
          <div className="bg-white p-[1.5rem] h-[500px] rounded-[10px]">
            <div className="flex justify-between">
              <p className="text-xl text-center w-[100%]" onClick={() => {
              setonboarding("Register")
            }}>Log In</p>
            </div>
           <div className="flex items-center mt-[1rem] justify-center">
           <img src={facebook} className="w-[10%] mb-[5rem]" />
           <img src={google} className="w-[10%] mx-[1rem] mb-[5rem]" />
           <img src={mac} className="w-[10%] mb-[5rem]" />
           </div>
           <div className="flex items-center justify-center mt-[-3.5rem] mb-[1rem]">
            <div className="w-[30%] h-[1px] bg-black opacity-[50%]"></div>
            <p className="mx-[1rem]">Or Continue With</p>
            <div className="w-[30%] h-[1px] bg-black opacity-[50%]"></div>
           </div>
            <form >
              <input type="email" id="email" name="email" placeholder="Email" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem]"/>
              <input type="password" id="email" name="email" placeholder="Password" className="border w-[100%] mt-[1rem] rounded-[10px] p-[0.5rem]"/>
            <div className="flex my-[1rem] justify-center">
            <p className="text-[#000b80]">Forgot Password</p>
            </div>
            <Link to="/coming-soon">
            <input type="submit" value="Log In" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem] mb-[1rem] bg-[#000b80] text-white"/>
            </Link>
            </form>
            <p className="text-center">I dont have an account. <span className="text-[#000b80] font-bold" onClick={() => {
              setonboarding("Register")
            }}>Register?</span></p>
          </div>
          </div>
 : ""}

{onboarding === "Register" ? <div className="hidden px-[2rem] lg:flex justify-center items-center h-[100vh]">
            <div className="w-[40%]">
            <img src={logo} className="w-[45%] p-[1rem]" />
            <p className="text-white max-w-md">
                  Let's explore and enjoy the fun in the new Zojatech Gaming
                  platform today
                </p>
            </div>
          <div className="bg-white p-[1.5rem] h-[550px] rounded-[10px]">
            <div className="flex justify-between">
              <p className="text-xl text-center w-[100%]" onClick={() => {
              setonboarding("Register")
            }}>Sign Up</p>
            </div>
           <div className="flex items-center mt-[1rem] justify-center">
           <img src={facebook} className="w-[10%] mb-[5rem]" />
           <img src={google} className="w-[10%] mx-[1rem] mb-[5rem]" />
           <img src={mac} className="w-[10%] mb-[5rem]" />
           </div>
           <div className="flex items-center justify-center mt-[-3.5rem] mb-[1rem]">
            <div className="w-[30%] h-[1px] bg-black opacity-[50%]"></div>
            <p className="mx-[1rem]">Or Continue With</p>
            <div className="w-[30%] h-[1px] bg-black opacity-[50%]"></div>
           </div>
            <form >
              <input type="email" id="email" name="email" placeholder="Email" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem]"/>
              <input type="password" id="email" name="email" placeholder="Password" className="border w-[100%] mt-[1rem] rounded-[10px] p-[0.5rem]"/>
              <input type="password" id="email" name="email" placeholder="Confirm Password" className="border w-[100%] mt-[1rem] rounded-[10px] p-[0.5rem]"/>
            <div className="flex my-[1rem] justify-center">
            <p className="text-[#000b80]">Forgot Password</p>
            </div>
      <Link to="/coming-soon">
      <input type="submit" value="Register" className="border mt-[0.3rem] w-[100%] rounded-[10px] p-[0.5rem] mb-[1rem] bg-[#000b80] text-white"/>
      
      </Link>

            </form>
            <p className="text-center">I already have an account. <span className="text-[#000b80] font-bold" onClick={() => {
              setonboarding("Log in")
            }}>Log In</span></p>
          </div>
          </div>
 : ""}
 
        </main>
      </AnimatedFadeInPage>
    </>
  );
}

{
  /* <div className="logo">
              <div>
                <img src={logo} className="imgMobile" />
                <p>
                  Let's explore and enjoy the fun in the new Zojatech Gaming
                  platform today
                </p>
              </div>
            </div>
            <div className="register">
              <div className="registerContent">
                <p className="signUp">Sign Up</p>
                <div className="socials">
                  <a href="#">
                    <img src={google} className="imgGroup" />
                  </a>
                  <a href="#">
                    <img src={facebook} className="imgGroup" />
                  </a>
                  <a href="#">
                    <img src={mac} className="imgGroup" />
                  </a>
                </div>

                <div className="optionSection">
                  <div className="option">
                    <p>
                      <span>
                        <small>Or Continue With</small>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="container">
                  <form>
                    <div className="col-75">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                      ></input>
                    </div>

                    <div className="col-75">
                      <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Password"
                      ></input>
                    </div>

                    <div className="col-75">
                      <input
                        type="text"
                        id="con_password"
                        name="con_password"
                        placeholder="Confirm Password"
                      ></input>

                      <div className="col-75">
                        <input type="submit" value="Register"></input>
                      </div>
                    </div>
                  </form>
                </div>

                <hr className="tBreak" />
                <p className="LogIn">
                  I already have an account.{" "}
                  <span>
                    <a href="#">Log in</a>
                  </span>
                </p>
              </div>
            </div> */
}
