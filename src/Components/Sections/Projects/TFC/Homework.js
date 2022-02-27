import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionDesc,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeworkBg = "/images/TFC/homework-bg.jpg";

export const Homework = () => {
  return (
    <SectionLayout id="tfc-homework" Footer={() => <ImageWrapper src={HomeworkBg} className="system-img" />}>
      <Row className="tfc-homework-items">
        <Col xl={6}>
          <SectionTitle title="Homework" />
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
