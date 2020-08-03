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
      <div
        className="row align-items-center container"
        style={{ margin: "auto" }}
      >
        <div className="col-md-3">
          <div className="d-flex align-items-start flex-column justify-content-start">
            <a href="#" className="p-2 btn btn-sm btn-block text-left">
              Home
            </a>
            <a href="#" className="p-2 btn  btn-sm btn-block text-left">
              Explore
            </a>
          </div>
        </div>
        <div className="col-md-6 align-self-stretch border-left border-right padding-0">
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
              className="btn btn-info rounded-pill tweet-btn"
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
        <div className="col-md-3">
          <div className="d-flex align-items-start">
            <input
              className="form-control rounded-pill p-2"
              type="text"
              placeholder="Search Twitter"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
