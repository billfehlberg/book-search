import React, { Component } from "react";

import "./NoMatch.css";

class NoMatch extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>No Match </h2>
        </div>
        <p className="App-intro">
          url entered does not render a page
        </p>
      </div>
    );
  }
}

export default NoMatch;
