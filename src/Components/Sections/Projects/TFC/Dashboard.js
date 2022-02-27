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
            Цветовое палитра представлена тремя цветами: лазурный бирюзовый -
            цвет морской волны, темно-коричневый - выделяет шрифтовую часть,
            изумрудный морской - используется в качестве фона.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  );
};
