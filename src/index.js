import React from "react";
import ReactTV, { renderOnAppLoaded } from "react-tv";
import { withNavigation, withFocusable } from "react-tv-navigation";

import CustomHorizontalList from "./CustomHorizontalList";

import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import NavLink from "./CustomLink";

const FocusableNavLink = withFocusable(NavLink);

function App(props) {
  return (
    <Router>
      <div>
        <nav className="navbar  navbar-expand-lg">
          <span class="navbar-brand mb-0 h1">React-TV Template</span>
          <ul className="navbar-nav">
            <li className="nav-item" key="home">
              <FocusableNavLink
                focusPath="Home"
                url="/"
                text="Home"
              ></FocusableNavLink>
            </li>
            <li className="nav-item" key="about">
              <FocusableNavLink
                focusPath="About"
                url="/about"
                text="About"
              ></FocusableNavLink>
            </li>
            <li className="nav-item" key="dash">
              <FocusableNavLink
                focusPath="Dashboard"
                url="/dashboard"
                text="Dashboard"
              ></FocusableNavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="focus-info">
          You're focused on: {props.currentFocusPath}
        </div>
        <hr />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        This is a simple react-tv demo with focusable elements, navigation,
        routing and data fetching with axios from TMDB
      </p>
    </div>
  );
}

function Dashboard() {
  const trendingUrl =
    "https://api.themoviedb.org/3/trending/all/day?api_key=a3446939c6cc28c9a30277aef01ee685";
  return (
    <div>
      <h2>Dashboard</h2>
      <CustomHorizontalList url={trendingUrl} />
    </div>
  );
}

const AppWithNavigation = renderOnAppLoaded(withNavigation(App));

ReactTV.render(<AppWithNavigation />, document.querySelector("#root"));
