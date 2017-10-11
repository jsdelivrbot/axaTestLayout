import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * type: Size of button  {lg,sm} 
 * axaStyle: Additional Classes
 * label: Btn Call to action
 * icon: icon to display
 */

export default class AxaBtnAxaSplit extends Component {
  render() {
    let btnType = "";

    if ("lg" === this.props.type) {
      btnType = "btn-lg";
    }
    if ("sm" === this.props.type) {
      btnType = "btn-sm";
    }
    return (
      <button type="button" className={`btn ${btnType} btn-split-icon btn-axa  ${this.props.axaStyle}`}>
        {this.props.label}
        <svg
          className="icon btn-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <use xlinkHref={`../../../assets/icons/icons.svg#${this.props.icon}`} />
        </svg>
      </button>
    );
  }
}

/*Component.propTypes = {
  svg: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};*/
