import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * classAttr: Additional Classes
 * children: Internal Content
 * fluid: set if container is fuild [fluid]
 */

export default class AxaLayoutContainer extends Component {
  render() {
    let containerType = "container";

    if (this.props.fluid==='fuild') {
      containerType = "container-fluid";
    }
    return (
      <div className={containerType}>
        {this.props.children}
      </div>
    );
  }
}
