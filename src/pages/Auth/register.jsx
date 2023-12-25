import React from "react";
import Button from "react-bootstrap/Button";
import { Text } from "components";

// or less ideally

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="registration-form">
        <div className="registration-container">
          <h1 className="reg-header">registration</h1>

          <div className="form-input">
            <input placeholder="First Name" id="fname" type="text"></input>

            <input placeholder="Surname" id="sname" type="text"></input>

            <input placeholder="Email" id="name" type="email"></input>

            <input
              placeholder="Enter password"
              id="password"
              type="password"
            ></input>

            <div className="alreadyMember">
              <Text
                size="txtOpenSansRomanRegular16Gray900cc"
                onClick={() => navigate("/login")}
              >
                Already have an account ?Login
              </Text>
            </div>

            <Button className=" btn btn-primary sm">Signup</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
