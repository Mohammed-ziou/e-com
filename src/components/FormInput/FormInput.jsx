import React from "react";

import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherprops }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherprops} />
      {label ? (
        <label
          className={`${
            otherprops.value.length ? "shrink" : null
          } form-input-label`}
          htmlFor=""
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
