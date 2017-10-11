import React, { Component } from "react";
//import PropTypes from "prop-types";

/**
 * Title: Title
 * Lead: Message
 * overlay: Overlay type [semi, gradient, none]
 * btn: Button Object
 * btn.type: Size of button  {lg,sm} 
 * btn.axaStyle: Additional Classes
 * btn.label: Btn Call to action
 * btn.icon: icon to display
 * img: image to display as string
 * pic: Array of objects media querys [{src,media}]
 * video: Video to display [{src,type}]  
 */

export default class AxaAlert extends Component {
  picture() {

    let img;
    let srcsetAux;

    // if picture element is used
    if (this.props.data.picture !==undefined && this.props.data.picture.length > 0) {
      let aux = 0;
      srcsetAux = this.props.data.picture.map(pic => {
        aux++;
        return <source srcSet={pic.srcset} media={pic.media} key={aux} />;
      });
    }

    // if default image
    if (this.props.data.img!==undefined ) {
      img = this.props.data.img;
      return (
        <picture src={img} alt={this.props.data.title}>
          {srcsetAux}
          <source srcSet={img} />
          <img
            className="banner-bg-media"
            src={img}
            alt={this.props.data.title}
          />
        </picture>
      );
    } else {
      return;
    }
  }

  video() {
    let srcsetAux;

    if (this.props.data.video !==undefined && this.props.data.video.length > 0) {
      let aux = 0;
      srcsetAux = this.props.data.video.map(vid => {
        aux++;
        return <source src={vid.src} type={vid.type} key={aux}/>;
      });
      return <video className="banner-bg-media">{srcsetAux}</video>;
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="banner">
        <div className="banner-bg">
          {this.picture()}
          {this.video()}
        </div>
        <div className={`banner-overlay ${this.props.data.overlay}`} />
        <div className="banner-content">
          <div className="container">
            <p className="banner-title">{this.props.data.title}</p>
            <p className="banner-lead">{this.props.data.lead}</p>
            <div className="banner-actions">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
