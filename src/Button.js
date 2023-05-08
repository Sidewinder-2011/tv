import React from "react";

const Button = ({ setFocus, start }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        setFocus(start);
      }}
    >
      Back To First Item!
    </button>
  );
};

export default Button;
