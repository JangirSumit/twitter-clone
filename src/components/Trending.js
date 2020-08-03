import React, { Component } from "react";

class Trending extends Component {
  render() {
    return (
      <div className="w-100 rounded trendings">
        <h5 className="border-bottom p-bottom-10">What's happening</h5>
        <div className="w-100 border-bottom p-bottom-10">
          <strong>#IndiaFightsCovid19</strong>
          <br />
          <small className="text-muted">1,786 Tweets</small>
          <br />
        </div>
        <div className="w-100 border-bottom p-bottom-10">
          <strong>#USElections</strong>
          <br />
          <small className="text-muted">9,876 Tweets</small>
          <br />
        </div>
      </div>
    );
  }
}

export default Trending;
