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
          <SectionTitle title="Домашка" />
        </Col>
        <Col xl={6}>
          <SectionDesc>
						Работа учителя над домашним заданием проходит по логике: мы выбираем группу, урок, к которому прилагается домашнее задание, ученика и смотрим его прикреплённое домашнее задание. Ставим оценку.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  );
};
