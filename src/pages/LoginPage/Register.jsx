import React from "react";
import "./LoginPage.css";
import logo from "../LoginPage/asset/logo.png";
import facebook from "../LoginPage/asset/facebook.png";
import google from "../LoginPage/asset/google.png";
import mac from "../LoginPage/asset/mac.png";
import { AiOutlineArrowLeft } from "react-icons/Ai";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

export default function LoginPage() {
  return (
    <>
      <AnimatedFadeInPage>
        <main className="LoginPage">
          <div className="bgImage">
            <div className="imgMobile">
              <img src={logo} />
            </div>
            <div className="logo">
              <div>
                <img src={logo} className="img" />
                <p>
                  Let's explore and enjoy the fun in the new Zojatech Gaming
                  platform today
                </p>
              </div>
            </div>
            <div className="register">
              <div className="registerContent">
                <p className="signUp">Sign Up</p>
                <div className="mobileReg">
                  <div>
                    <a href="#">
                      <AiOutlineArrowLeft className="arrow" />
                    </a>
                    <p className="reg">
                      <a href="#">Log In</a>
                    </p>
                  </div>
                  <p className="logIn">
                    <a href="#">Register</a>
                  </p>
                </div>
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
                      <label for="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                      ></input>
                    </div>

                    <div className="col-75">
                      <label for="password">Password</label>
                      <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Password"
                      ></input>
                    </div>

                    <div className="col-75">
                      <label for="con-password">Confirm Password</label>
                      <input
                        type="text"
                        id="con_password"
                        name="con_password"
                        placeholder="Confirm Password"
                      ></input>
                    </div>

                    <div className="checkbox">
                      <input type="checkbox"></input>
                      <label className="aggrement">
                        I agree to the <span><a href="#">terms of service</a></span>{" "} and
                        <span> <a href="#">privacy policy</a></span>.
                      </label>
                    </div>

                    <div className="col-75">
                      <input type="submit" value="Register"></input>
                    </div>
                  </form>
                </div>

                <hr className="tBreak" />
                <p className="LogIn">
                  I already have an account.{" "}
                  <span>
                    <a href="#"> Log in</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
}
