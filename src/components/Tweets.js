import React, { Component } from "react";
import "../App.css";

class Tweets extends Component {
  render() {
    return (
      <>
        {this.props.tweets &&
          this.props.tweets.map((t) => {
            return <div className="border-bottom tweet">{t}</div>;
          })}
      </>
    );
  }
}

export default Tweets;
