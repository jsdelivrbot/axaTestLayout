import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * type: Size of button  {lg,sm} 
 * axaStyle: Additional Classes
 * label: Btn Call to action
 * icon: Icon to display
 */

export default class AxaLinkLeft extends Component {
  render() {
    return (
      <a className={`axa-arrow-link-blue  ${this.props.axaStyle}`}>
       <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <use xlinkHref={`../../../assets/icons/icons.svg#${this.props.icon}`} />
        </svg> {this.props.label}</a>
    );
  }
}

/*Component.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};*/
