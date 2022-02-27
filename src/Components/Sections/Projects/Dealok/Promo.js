import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PromoImg = "/images/Dealok/promo-img.png";

export const Promo = () => {
  return (
    <SectionLayout id="dealok-promo">
      <Row className="dealok-promo-title">
        <Col xl={8}>
          <SectionTitle title="Promo Page" />
        </Col>
        <Col xl={8}>
          <SectionDesc>
            Поскольку, чтобы оставлять заявки на заказы пользователю свою
            квалификацию прикрепив документы, на промо страницах мы расписали
            логику работы проекта.
          </SectionDesc>
        </Col>
      </Row>
      <ImageWrapper src={PromoImg} className="promo-img" />
    </SectionLayout>
  );
};
