import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * type: Size of button  {lg,sm} 
 * axaStyle: Additional Classes
 * label: Btn Call to action
 * icon: icons to Display
 */

export default class AxaLink extends Component {
  render() {
    return (
      <a className={`axa-arrow-link-blue  ${this.props.axaStyle}`}>
        {this.props.label} <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <use xlinkHref={`../../../assets/icons/icons.svg#${this.props.icon}`} />
        </svg>
      </a>
    );
  }
}

/*Component.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};*/
