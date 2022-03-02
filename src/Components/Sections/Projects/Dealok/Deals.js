import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DealsImg1 = "/images/Dealok/deals-1.png";
const DealsImg2 = "/images/Dealok/deals-2.png";
const DealsImg3 = "/images/Dealok/deals-3.png";

const DealsImages = () => (
  <div className="container-plus">
    <ImageWrapper src={DealsImg1} className="deals-img-1" />
    <ImageWrapper src={DealsImg2} className="deals-img-2" />
    <ImageWrapper src={DealsImg3} className="deals-img-3" />
  </div>
);

export const Deals = () => {
  return (
    <SectionLayout id="dealok-deals" Footer={DealsImages}>
      <Row className="dealok-deals-title">
        <Col xl={8}>
          <SectionTitle title="Deals" />
        </Col>
        <Col xl={8}>
          <SectionDesc>
            Создать сделку можем любой пользователь. Для этого нужно описать
            какую услугу вы хотите заказать, выбрать город и желаемые стоимость
            и срок.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  );
};
