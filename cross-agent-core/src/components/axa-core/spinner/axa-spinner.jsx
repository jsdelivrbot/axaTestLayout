import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * axaStyle: Additional Classes
 * message: Spinner message
 */

export default class AxaSpinner extends Component {
  render() {
    return (
      <div className={`loading-spinner is-active ${this.props.axaStyle}`}>
        <div className="loading-spinner-animation" />
        <div className="loading-spinner-caption">{this.props.message}</div>
      </div>
    );
  }
}

/*Component.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};*/
