import React, { Component } from "react";

class MoviesHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="title-wrapper">
        <div className="card-title">Movies</div>
      </div>
    );
  }
}

export default MoviesHeader;
