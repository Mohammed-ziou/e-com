import React from "react";

import "./Button.scss";

const Button = ({ children, isGoogleSign, black, ...otherprops }) => {
  return (
    <button
      className={`${black ? "black" : ""} ${
        isGoogleSign ? "google-sign-in" : ""
      } custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;
