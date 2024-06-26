import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionDesc,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WarframesImg = "/images/TFC/warframes.png";

export const Warframes = () => {
  return (
      <SectionLayout id="tfc-warframes" Footer={() => <ImageWrapper src={WarframesImg} className="warframes-img" />}>
        <Row className="tfc-warframes-items">
          <Col xl={6}>
            <SectionTitle title="Варфреймы" isContentWhite />
          </Col>
          <Col xl={6}>
            <SectionDesc isContentWhite>
							Мы выбрали низкоточные прототипы, чтобы сэкономить время, прежде чем показывать структуру, сетку и логику элементов.
            </SectionDesc>
          </Col>
        </Row>
      </SectionLayout>
  );
};
