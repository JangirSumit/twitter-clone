import React, { Component } from "react";
import "./App.css";

export class App extends Component {
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
            class="form-control"
            id="tweet-text"
            rows="3"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="text-right">
          <button type="button" class="btn btn-info tweet-btn">
            Tweet
          </button>
        </div>
        <div className="grey-v-gap"></div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
