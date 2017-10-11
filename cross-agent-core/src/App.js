import React, { Component } from "react";

import AxaLayoutContainer from "./components/axa-core/layout/axa-layout-container";
import AxaLayoutRow from "./components/axa-core/layout/axa-layout-row";
import AxaLayoutCol from "./components/axa-core/layout/axa-layout-col";

import AxaBtnDemo from "./components/axa-core/demos/axa-btn-demo";
import AxaAlertDemo from "./components/axa-core/demos/axa-alert-demo";
import AxaLayoutDemo from "./containers/axa-core/demos/axa-layout-demo";
import AxaSpinnerDemo from "./components/axa-core/spinner/axa-spinner";
import AxaBannerDemo from "./components/axa-core/demos/axa-banner-demo";

class App extends Component {
  render() {
    return (
      <AxaLayoutContainer fluid="fuild">
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="header-brand">
            <h3>AXA React Branding demos</h3>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="header-brand pt-5 mt-5">
            <h4>AXA React Alert Demos</h4>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaAlertDemo />

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="header-brand pt-5 mt-5">
            <h4>AXA React Spinner Demos</h4>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaSpinnerDemo axaStyle="" message="Loading Cats!!!..."/>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="header-brand pt-5 mt-5">
            <h4>AXA React Banner Demos</h4>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaBannerDemo />

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="header-brand pt-5 mt-5">
            <h4>AXA React Button Demos</h4>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaBtnDemo />

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="header-brand pt-5 mt-5">
            <h4>AXA React Layout Demo</h4>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaLayoutDemo />
      </AxaLayoutContainer>
    );
  }
}

export default App;
