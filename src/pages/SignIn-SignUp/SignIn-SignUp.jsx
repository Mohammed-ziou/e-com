import React from "react";

import "./SignIn-SignUp.scss";
import SignIn from "./../../components/SignIn/SignIn";
import SignUp from "./../../components/SignUp/SignUp";

class SignInSignUp extends React.Component {
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUp;
