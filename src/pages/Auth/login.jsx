import React from "react";
import Button from "react-bootstrap/Button";
import { Text } from "components";

// or less ideally

import { useNavigate } from "react-router-dom";

import Footer from "components/Footer";

const Login = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="login-form">
        <div className="login-container">
          <h1 className="login-header">login</h1>

          <div className="form-input">
            <input placeholder="Email" id="email" type="email"></input>

            <input
              placeholder="Enter password"
              id="password"
              type="password"
            ></input>

            <div className="signUp-Link">
              <Text
                size="txtOpenSansRomanRegular16Gray900cc"
                onClick={() => navigate("/register")}
              >
                Don't have an account ?Signup
              </Text>
            </div>

            <Button className="loginBtn">Login</Button>
          </div>
        </div>
      </div>

      <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full" />
    </React.Fragment>
  );
};

export default Login;
