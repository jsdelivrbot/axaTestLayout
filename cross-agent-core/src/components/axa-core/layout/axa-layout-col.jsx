import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * classAttr: Additional Classes
 * children: Internal Content
 */

export default class AxaLayoutCol extends Component {
  render() {
    let classAttr = "";
    
        if (this.props.classAttr) {
          classAttr = this.props.classAttr;
        }
    
        return (
          <div className={`col ${classAttr}`}>
             {this.props.children}
          </div>
          );
  }
}
