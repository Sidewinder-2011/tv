import React, { useState } from "react";
import { withFocusable } from "react-tv-navigation";
import Poster from "./Poster";
import Button from "./Button";
import axios from "axios";

const FocusablePoster = withFocusable(Poster);
const FocusableButton = withFocusable(Button);

class CustomHorizontalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      this.setState({ ...this.state, isFetching: true });
      const response = await axios.get(this.props.url);
      this.setState({ data: response.data, isFetching: false });
    } catch (err) {
      console.log(err.mesage);
    }
  }

  render() {
    try {
      let res;
      if (this.state.isFetching) {
        res = <div>Loading..</div>;
      } else {
        res = (
          <div className="posters">
            {!this.state.isFetching &&
              this.state.data.results
                .slice(0, 5)
                .map(({ title, original_name, poster_path, backdrop_path }) => {
                  const key = title || original_name;
                  return (
                    <div>
                      <FocusablePoster
                        onEnterPress={(e) => {
                          alert(key);
                        }}
                        key={key}
                        focusPath={key}
                        src={`https://image.tmdb.org/t/p/w200/${
                          poster_path || backdrop_path
                        }`}
                      />
                    </div>
                  );
                })}
            <FocusableButton
              focusPath={`button${
                this.state.data.results[0].title ||
                this.state.data.results[0].original_name
              }`}
              start={
                this.state.data.results[0].title ||
                this.state.data.results[0].original_name
              }
            />
          </div>
        );
      }
      return res;
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default CustomHorizontalList;
