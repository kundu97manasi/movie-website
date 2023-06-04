import React, { Component } from "react";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.Poster, this.props.Title);
    return (
      <div className="card">
        <img
          className="card-img"
          src={this.props.Poster}
          alt={this.props.Title}
        />
        <div className="text"> {this.props.Title} </div>
      </div>
    );
  }
}

export default Cards;
