import React, { Component } from "react";

import AxaAlertCorp from "../alerts/axa-alert-corporate";
import AxaAlert from "../alerts/axa-alert";
import AxaAlertWarning from "../alerts/axa-alert-warning";

import AxaLayoutContainer from "../layout/axa-layout-container";
import AxaLayoutRow from "../layout/axa-layout-row";
import AxaLayoutCol from "../layout/axa-layout-col";

export default class AxaAlertDemo extends Component {
  render() {
    return (
      <AxaLayoutContainer  fluid="fuild">
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-5 pl-3 ">
            <h5>AXA Alert Corproate demo</h5>
            <span>AxaAlertCorp</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pl-3 ">
            <AxaAlertCorp axaStyle="" message="This is a Corporate Alert" btnLabel="Know More" link="" />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-2 pl-3 ">
            <h5>AXA Alert Default demo</h5>
            <span>AxaAlert</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pl-3 ">
            <AxaAlert axaStyle="" message="This is a default Alert" btnLabel="Know even More" link="" />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-2 pl-3 ">
            <h5>AXA Alert Warning demo</h5>
            <span>AxaAlertWarning</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pl-3 ">
            <AxaAlertWarning axaStyle="" message="This is a Warning Alert" btnLabel="Danger! Will Robinson Danger!" link="" />
          </AxaLayoutCol>
        </AxaLayoutRow>
      </AxaLayoutContainer>
    );
  }
}
