import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * axaStyle: Additional Classes
 * message: Message to display
 * btnLabel: Call to action
 */

import AxaBtnGhostWhite from "../btns/axa-btn-ghost-white";

export default class AxaAlertCorp extends Component {
  render() {

    return (
      <div
        className={`alert top-content-bar top-content-bar--corporate ${this.props.axaStyle}`}
        role="alert"
      >
        <div className="top-content-bar-message">{this.props.message}</div>
        <AxaBtnGhostWhite type="" label={this.props.btnLabel} link="" axaStyle="top-content-bar-btn" />
      </div>
    );
  }
}

/*Component.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};*/
