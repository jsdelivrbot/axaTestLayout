import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * type: Size of button  {lg,sm} 
 * axaStyle: Additional Classes
 * label: Btn Call to action
 */

export default class AxaBtnArrowGhost extends Component {
  render() {
    let btnType = "";

    if ("lg" === this.props.type) {
      btnType = "btn-lg";
    }
    if ("sm" === this.props.type) {
      btnType = "btn-sm";
    }

    return (
      <button type="button" className={`btn btn-ghost btn-icon-arrow ${btnType} ${this.props.axaStyle}`}>
        {this.props.label} <svg
          className="icon btn-icon btn-icon-blue"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <use xlinkHref={`../../../assets/icons/icons.svg#btn-arrow`} />
        </svg>
      </button>
    );
  }
}

/*Component.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};*/
