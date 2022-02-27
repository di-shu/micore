import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ObjectBg = "/images/MyHouse/object-bg.jpg";

export const Objects = () => {
  return (
    <>
      <SectionLayout id="my-house-objects" Footer={() => <ImageWrapper src={ObjectBg} className="objects-img" />}>
        <Row className="my-house-objects-items">
          <Col xl={6}>
            <SectionTitle title="Объекты" />
          </Col>
          <Col xl={6}>
            <SectionDesc>
              Мы разработали подробную посадочную страницу для каждого из
              объектов. Реализовали управления каждого блока страницы через
              админку.
            </SectionDesc>
          </Col>
        </Row>
      </SectionLayout>
    </>
  );
};