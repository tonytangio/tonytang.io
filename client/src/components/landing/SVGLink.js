import React, { Component } from "react";
import SVG from "react-inlinesvg";

class SVGLink extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        <SVG src={this.props.SVG} className="svg-link" />
      </a>
    );
  }
}

export default SVGLink;
