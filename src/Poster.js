import React from "react";

const Poster = ({ focused, setFocus, focusPath, src }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w200/";
  focused = focused ? "focused" : "unfocused";
  return (
    <div
      className="poster"
      onClick={() => {
        setFocus();
      }}
    >
      <img src={src} />
    </div>
  );
};
export default Poster;
