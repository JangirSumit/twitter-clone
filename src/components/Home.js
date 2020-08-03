/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Tweets from "./Tweets";

class Home extends Component {
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
          <div className="w-100 align-top">
            <div className="w-100">
              <img
                alt="logo"
                className="App-logo"
                src={process.env.PUBLIC_URL + "/images/logo512.png"}
              />
            </div>
            <a href="#" className="btn btn-sm btn-block text-left rounded-pill">
              Home
            </a>
            <a
              href="#"
              className="btn  btn-sm btn-block text-left rounded-pill"
            >
              Explore
            </a>
            <a
              href="#"
              className="btn  btn-sm btn-block text-left rounded-pill"
            >
              Notifications
            </a>
            <a
              href="#"
              className="btn  btn-sm btn-block text-left rounded-pill"
            >
              Messages
            </a>
            <a
              href="#"
              className="btn  btn-sm btn-block text-left rounded-pill"
            >
              Profile
            </a>
          </div>
        </div>
        <div className="col-md-6 align-self-stretch border-left border-right padding-0">
          <header className="App-header">
            <p className="font-weight-bold">Home</p>
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
          <div className="tweets w-100">
            <Tweets tweets={this.state.tweets} />
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

export default Home;
