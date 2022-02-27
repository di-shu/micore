import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionDesc,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Grade1 = "/images/TFC/Grade1.jpg";
const Grade2 = "/images/TFC/Grade2.jpg";

const SectionFooter = () => (
  <Row className="grade-bottom-wrapper">
    <Col xs={12} md={6}>
      <ImageWrapper src={Grade1} className="grade-image-1" />
    </Col>
    <Col xs={12} md={6}>
      <ImageWrapper src={Grade2} className="grade-image-2" />
    </Col>
  </Row>
);

export const Grade = () => {
  return (
    <SectionLayout id="tfc-grade" Footer={SectionFooter}>
      <Row className="tfc-grade-items">
        <Col xl={6}>
          <SectionTitle title="Оценка" isContentWhite />
        </Col>
        <Col xl={6}>
          <SectionDesc isContentWhite>
            Для каждого из уроков учитель может присваивать ученикам статусы «присутствует» или «отсутствует», а также оценку за урок. А оценки за уроки, домашние задания и тесты студент получает в своем кабинете.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  );
};
