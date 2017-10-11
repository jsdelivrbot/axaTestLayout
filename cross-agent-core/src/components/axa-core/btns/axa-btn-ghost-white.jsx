import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * type: Size of button  {lg,sm} 
 * axaStyle: Additional Classes
 * label: Btn Call to action
 */

export default class AxaBtnGhostWhite extends Component {
  render() {
    let btnType = "";

    if ("lg" === this.props.type) {
      btnType = "btn-lg";
    }
    if ("sm" === this.props.type) {
      btnType = "btn-sm";
    }

    return (
      <button type="button" className={`btn ${btnType} btn-ghost btn-ghost-white  ${this.props.axaStyle}`}>
        {this.props.label}
      </button>
    );
  }
}

/*Component.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};*/
