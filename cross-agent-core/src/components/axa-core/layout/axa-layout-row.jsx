import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * classAttr: Additional Classes
 * children: Internal Content
 */

export default class AxaLayoutRow extends Component {
  render() {
    let classAttr = "";

    if (this.props.classAttr) {
      classAttr = this.props.classAttr;
    }

  return (
  <div className={`row ${classAttr}`}>
  {this.props.children}
  </div>
  );
  }
}
