import React from "react";
import "./LoginPage.css";
import logo from "../LoginPage/asset/logo.png";
import facebook from "../LoginPage/asset/facebook.png";
import google from "../LoginPage/asset/google.png";
import mac from "../LoginPage/asset/mac.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

export default function LoginPage() {
  return (
    <>
      <AnimatedFadeInPage>
        <main className="LoginPage">
          <div className="bgImage">
            <div className="logo">
              <div>
                <img src={logo} className="imgMobile" />
                <img src={logo} className="img" />
                <p>
                  Let's explore and enjoy the fun in the new Zojatech Gaming
                  platform today
                </p>
              </div>
            </div>
            <div className="register">
              <div className="registerContent">
                <p className="signUp">Log In</p>
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
                        placeholder="Username"
                      ></input>
                    </div>

                    <div className="col-75">
                      <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Password"
                      ></input>

                      <div className="col-75">
                        <input type="submit" value="Log In"></input>
                      </div>

                      <p className="LogIn mt-[20px">
                        <span>
                          <a href="#">Forgot Password</a>
                        </span>
                      </p>
                    </div>
                  </form>
                </div>

                <hr className="tBreak" />
                <p className="LogIn">
                  I don’t have an account.{" "}
                  <span>
                    <a href="/create-account">Register?</a>
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
