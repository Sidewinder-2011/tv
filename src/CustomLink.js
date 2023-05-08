import React from "react";
import { Link } from "react-router-dom";
import { withFocusable, withNavigation } from "react-tv-navigation";

export default function Navlink({ url, text }) {
  return (
    <Link to={url} class="nav-link">
      {text}
    </Link>
  );
}
