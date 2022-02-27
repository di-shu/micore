import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionDesc,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LandingImg = "/images/Bezcreditov/landing-img.png";

export const Landing = () => {
  return (
      <SectionLayout id="bezcreditov-landing">
        <SectionTitle title="Landing Page" isContentWhite />
				<div className="landing-content">
					<div className="landing-content__text">
						<p>Navigation with anchors on the landing page and switching to an account</p>
						<p>The first block with the main message and unique selling proposition</p>
						<p>Company’s description with the ability to watch a video about no loans</p>
						<p>Services with the option to purchase</p>
						<p>Description of the stages of the company's work</p>
						<p>Savings calculator when contacting a no loans company</p>
						<p>Frequently asked Questions (FAQ)</p>
						<p>Company contacts</p>
					</div>
					<ImageWrapper src={LandingImg} className="landing-content__img" />
				</div>
      </SectionLayout>
  );
};
