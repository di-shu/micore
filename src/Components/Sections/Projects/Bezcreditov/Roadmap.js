import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionDesc,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const roadmapImg = "/images/Bezcreditov/roadmap.png";

export const Roadmap = () => {
  return (
      <SectionLayout id="bezcreditov-roadmap">
        <Row className="bezcreditov-roadmap-items">
          <Col xl={6}>
            <SectionTitle title="Roadmap" isContentWhite />
          </Col>
          <Col xl={6}>
            <SectionDesc isContentWhite>
							Firstly we broke the project down into a roadmap and prioritized it. The most important thing was to get the first applications.
            </SectionDesc>
          </Col>
        </Row>
				<ImageWrapper src={roadmapImg} className="roadmap-img"/>
      </SectionLayout>
  );
};
