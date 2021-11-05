import React from "react";

import "./Button.scss";

const Button = ({ children, isGoogleSign, ...otherprops }) => {
  return (
    <button
      className={`${isGoogleSign ? "google-sign-in" : ""} custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;
