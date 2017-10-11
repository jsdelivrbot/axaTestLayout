import React, { Component } from "react";

import AxaBtnAxa from "../btns/axa-btn-axa";
import AxaBtnGhost from "../btns/axa-btn-ghost";
import AxaBtnGhostWhite from "../btns/axa-btn-ghost-white";
import AxaBtnAxaSplit from "../btns/axa-btn-axa-split";
import AxaBtnAxaFallback from "../btns/axa-btn-axa-fallback";
import AxaBtnArrowAxa from "../btns/axa-btn-arrow-axa";
import AxaBtnArrowGhost from "../btns/axa-btn-arrow-ghost";
import AxaLink from "../btns/axa-link";
import AxaLinkLeft from "../btns/axa-link-left";

import AxaLayoutContainer from "../layout/axa-layout-container";
import AxaLayoutRow from "../layout/axa-layout-row";
import AxaLayoutCol from "../layout/axa-layout-col";

export default class AxaBtnDemo extends Component {
  render() {
    return (
      <AxaLayoutContainer>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-5 pl-3 ">
            <h5>AXA Button demos</h5>
            <span>AxaBtnAxa</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-3 pl-3 ">
            <AxaBtnAxa type="lg" label="Large AXA Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3 ">
            <AxaBtnAxa type="" label="Default AXA Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3 ">
            <AxaBtnAxa type="sm" label="Small AXA Btn" link="" />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-5 pl-3 ">
            <h5>Ghost Button demos</h5>
            <span>AxaBtnGhost</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnGhost type="lg" label="Large Ghost Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnGhost type="" label="Default Ghost Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnGhost type="sm" label="Small Ghost Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3" />
        </AxaLayoutRow>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-5 pl-3 ">
            <h5>Ghost Dark BG Button demos</h5>
            <span>AxaBtnGhostWhite</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow classAttr="grey-bg ">
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnGhostWhite type="lg" label="Large Ghost White Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnGhostWhite type="" label="Default Ghost White Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnGhostWhite type="sm" label="Small Ghost White Btn" link="" />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-5 pl-3 ">
            <h5>Icon Button demos</h5>
            <span>AxaBtnAxaSplit</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnAxaSplit
              type="lg"
              label="Split Large Icon Button SVG"
              link=""
              icon="check-circle"
            />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnAxaSplit
              type=""
              label="Split Default Icon Button SVG"
              link=""
              icon="burger"
            />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnAxaSplit
              type="sm"
              label="Split Small Icon Button SVG"
              link=""
              icon="youtube"
            />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnAxaFallback
              type="lg"
              label="Split Large Icon Button SVG"
              link=""
              icon="desktop"
            />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnAxaFallback
              type=""
              label="Split Default Icon Button SVG"
              link=""
              icon="calendar"
            />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnAxaFallback
              type="sm"
              label="Split Small Icon Button SVG"
              link=""
              icon="download"
            />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-5 pl-3 ">
            <h5>Arrow Button demos</h5>
            <span>AxaBtnArrowAxa</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnArrowAxa type="lg" label="Large Arrow Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnArrowAxa type="" label="Default Arrow Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnArrowAxa type="sm" label="Small Arrow Btn" link="" />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnArrowGhost type="lg" label="Large Ghost Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnArrowGhost type="" label="Default Ghost Btn" link="" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaBtnArrowGhost type="sm" label="Small Ghost Btn" link="" />
          </AxaLayoutCol>
        </AxaLayoutRow>

        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-5 pl-3 ">
            <h5>Links icon demos</h5>
            <span>AxaLink</span>
            <hr />
          </AxaLayoutCol>
        </AxaLayoutRow>
        <AxaLayoutRow>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaLink label="link with Icon desktop" link="" icon="desktop" />
            <br />
            <AxaLink label="link with Icon " link="" icon="btn-arrow" />
            <br />
            <AxaLink label="link with Icon calendar " link="" icon="calendar" />
          </AxaLayoutCol>
          <AxaLayoutCol classAttr="pt-3 pl-3">
            <AxaLinkLeft
              label="link with Icon desktop"
              link=""
              icon="desktop"
            />
            <br />
            <AxaLinkLeft label="link with Icon " link="" icon="btn-arrow" />
            <br />
            <AxaLinkLeft
              label="link with Icon calendar "
              link=""
              icon="calendar"
            />
          </AxaLayoutCol>
        </AxaLayoutRow>
      </AxaLayoutContainer>
    );
  }
}
