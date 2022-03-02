import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionDesc,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dashboard1 = "/images/TFC/Dashboard1.jpg";
const Dashboard2 = "/images/TFC/Dashboard2.jpg";

const SectionFooter = () => (
  <Row className="dashboard-bottom-wrapper">
    <Col xs={12} md={6}>
      <ImageWrapper src={Dashboard1} className="dashboard-image-1" />
    </Col>
    <Col xs={12} md={6}>
      <ImageWrapper src={Dashboard2} className="dashboard-image-2" />
    </Col>
  </Row>
);

export const Dashboard = () => {
  return (
    <SectionLayout id="tfc-dashboard" Footer={SectionFooter}>
      <Row className="tfc-dashboard-items">
        <Col xl={6}>
          <SectionTitle title="Дашборд" />
        </Col>
        <Col xl={6}>
          <SectionDesc>
						На студенческий дашборд мы разместили самые популярные с точки зрения использования функции. Предстоящие уроки, последние оценки и домашние задания. Для преподавателя главное работать по расписанию. Кроме того, мы дали учителю возможность писать заметки прямо на дашборде.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  );
};
