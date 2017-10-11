import React, { Component } from "react";

import AxaBannerAxa from "../banner/axa-banner";

import AxaLayoutContainer from "../layout/axa-layout-container";
import AxaLayoutRow from "../layout/axa-layout-row";
import AxaLayoutCol from "../layout/axa-layout-col";

import AxaBtnGhostWhite from "../btns/axa-btn-ghost-white";

let bannerData = {
  title: "This is a Banner Title",
  lead:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis dolor quis eros convallis ultrices. Vestibulum tempor venenatis magna, sit amet elementum metus interdum quis.",
  overlay: "semi",
  btn: {
    type: "lg",
    axaStyle: "",
    label: "Call to Action",
    icon: "",
    link: ""
  },
  img: "/assets/images/bg-coffe-time.jpg",
  picture: [
    {
      srcset: "/assets/images/image1.jpg",
      media: "(min-width: 1200px)"
    },
    {
      srcset: "/assets/images/image2.jpg",
      media: "(min-width: 992px)"
    },
    { srcset: "/assets/images/image3.jpg", media: "(min-width: 768px)" }
  ]
};

export default class AxaBannerDemo extends Component {
  render() {
    return (
      <AxaLayoutContainer fluid="fuild">
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-5 pl-3 ">
            <h5>AXA Banner demo</h5>
            <span>AxaBannerAxa</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="">
            <AxaBannerAxa data={bannerData}>
              <AxaBtnGhostWhite
                type={bannerData.btn.type}
                label={bannerData.btn.label}
                link={bannerData.btn.link}
                axaStyle={bannerData.btn.axaStyle}
                icon={bannerData.btn.icon}
              />
            </AxaBannerAxa>
          </AxaLayoutCol>
        </AxaLayoutRow>
      </AxaLayoutContainer>
    );
  }
}
