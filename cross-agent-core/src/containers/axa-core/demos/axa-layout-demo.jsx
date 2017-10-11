import React, { Component } from "react";
import { connect } from "react-redux";

/* Layout */
import AxaLayoutContainer from "../../../components/axa-core/layout/axa-layout-container";
import AxaLayoutRow from "../../../components/axa-core/layout/axa-layout-row";
import AxaLayoutCol from "../../../components/axa-core/layout/axa-layout-col";

/* Btns */
import AxaBtnAxa from "../../../components/axa-core/btns/axa-btn-axa";
import AxaBtnGhost from "../../../components/axa-core/btns/axa-btn-ghost";
import AxaBtnGhostWhite from "../../../components/axa-core/btns/axa-btn-ghost-white";
import AxaBtnAxaSplit from "../../../components/axa-core/btns/axa-btn-axa-split";
import AxaBtnAxaFallback from "../../../components/axa-core/btns/axa-btn-axa-fallback";
import AxaBtnArrowAxa from "../../../components/axa-core/btns/axa-btn-arrow-axa";
import AxaBtnArrowGhost from "../../../components/axa-core/btns/axa-btn-arrow-ghost";
import AxaLink from "../../../components/axa-core/btns/axa-link";
import AxaLinkLeft from "../../../components/axa-core/btns/axa-link-left";

class AxaLayoutDemo extends Component {
  renderLayout(items = this.props.layout) {
    let aux = "";
    return items.map(item => {
      switch (item.type) {
        case "AxaLayoutContainer": {
          if (item.content.length > 0) {
            aux = this.renderLayout(item.content);
          }
          return (
            <AxaLayoutContainer key={item.id} fuild={item.attr}>
              {aux}
            </AxaLayoutContainer>
          );

        }
        case "AxaLayoutRow": {
          if (item.content.length > 0) {
            aux = this.renderLayout(item.content);
          }
          return (
            <AxaLayoutRow key={item.id} classAttr={item.attr}>
              {aux}
            </AxaLayoutRow>
          );

        }
        case "AxaLayoutCol": {
          if (item.content.length > 0) {
            aux = this.renderLayout(item.content);
          }
          return (
            <AxaLayoutCol key={item.id} classAttr={item.attr}>
              {aux}
            </AxaLayoutCol>
          );


        }
        case "AxaBtnArrowAxa": {
          return (
            <AxaBtnArrowAxa
              key={item.id}
              type={item.attr.type}
              label={item.attr.label}
              link={item.attr.link}
              icon={item.attr.icon}
            >
              {aux}
            </AxaBtnArrowAxa>
          );

        }
        case "AxaBtnArrowGhost": {
          return (
            <AxaBtnArrowGhost
              key={item.id}
              type={item.attr.type}
              label={item.attr.label}
              link={item.attr.link}
              icon={item.attr.icon}
            >
              {aux}
            </AxaBtnArrowGhost>
          );

        }
        case "AxaBtnAxaFallback": {
          return (
            <AxaBtnAxaFallback
              key={item.id}
              type={item.attr.type}
              label={item.attr.label}
              link={item.attr.link}
              icon={item.attr.icon}
            >
              {aux}
            </AxaBtnAxaFallback>
          );

        }
        case "AxaBtnAxaSplit": {
          return (
            <AxaBtnAxaSplit
              key={item.id}
              type={item.attr.type}
              label={item.attr.label}
              link={item.attr.link}
              icon={item.attr.icon}
            >
              {aux}
            </AxaBtnAxaSplit>
          );

        }
        case "AxaBtnAxa": {
          return (
            <AxaBtnAxa
              key={item.id}
              type={item.attr.type}
              label={item.attr.label}
              link={item.attr.link}
              icon={item.attr.icon}
            >
              {aux}
            </AxaBtnAxa>
          );

        }
        case "AxaBtnGhost": {
          return (
            <AxaBtnGhost
              key={item.id}
              type={item.attr.type}
              label={item.attr.label}
              link={item.attr.link}
              icon={item.attr.icon}
            >
              {aux}
            </AxaBtnGhost>
          );

        }
        case "AxaBtnGhostWhite": {
          return (
            <AxaBtnGhostWhite
              key={item.id}
              type={item.attr.type}
              label={item.attr.label}
              link={item.attr.link}
              icon={item.attr.icon}
            >
              {aux}
            </AxaBtnGhostWhite>
          );

        }
        case "AxaLinkLeft": {
          return (
            <AxaLinkLeft
              key={item.id}
              type={item.attr.type}
              label={item.attr.label}
              link={item.attr.link}
              icon={item.attr.icon}
            >
              {aux}
            </AxaLinkLeft>
          );

        }
        case "AxaLink": {
          return (
            <AxaLink
              key={item.id}
              type={item.attr.type}
              label={item.attr.label}
              link={item.attr.link}
              icon={item.attr.icon}
            >
              {aux}
            </AxaLink>
          );

        }

        default: {
          return "";

        }
      }
    });
  }

  render() {
    return <div>{this.renderLayout()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    layout: state.layout
  };
}

export default connect(mapStateToProps)(AxaLayoutDemo);
