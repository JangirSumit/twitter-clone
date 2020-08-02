import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    };
  }

  onTweet = () => {
    this.setState(
      {
        tweets: [
          ...this.state.tweets,
          document.getElementById("tweet-text").value,
        ],
      },
      () => {
        document.getElementById("tweet-text").value = "";
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            alt="logo"
            className="App-logo"
            src={process.env.PUBLIC_URL + "/images/logo512.png"}
          />
        </header>
        <div className="tweet-textbox">
          <textarea
            className="form-control"
            id="tweet-text"
            rows="3"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="button"
            className="btn btn-info tweet-btn"
            onClick={this.onTweet}
          >
            Tweet
          </button>
        </div>
        <div className="grey-v-gap"></div>
        <div className="tweets">
          {this.state.tweets.map((t) => (
            <div>{t}</div>
          ))}
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
