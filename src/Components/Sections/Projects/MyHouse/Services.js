import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServicesBg = "/images/MyHouse/services-bg.jpg";

export const Services = () => {
  return (
    <>
      <SectionLayout id="my-house-services" Footer={() => <ImageWrapper src={ServicesBg} className="services-img" />}>
        <Row className="my-house-services-items">
          <Col xl={6}>
            <SectionTitle title="Услуги" />
          </Col>
          <Col xl={6}>
            <SectionDesc>
              На страницах услуг мы рассказали о комплексном подходе в ремонте и
              строительстве объектов. Показали пакеты цен компании и примеры
              работ.
            </SectionDesc>
          </Col>
        </Row>
      </SectionLayout>
    </>
  );
};
