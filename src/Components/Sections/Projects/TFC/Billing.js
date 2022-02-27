import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionDesc,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Billing1 = "/images/TFC/Billing1.png";
const Billing2 = "/images/TFC/Billing2.png";

export const Billing = () => {
  return (
    <SectionLayout id="tfc-billing">
      <Row className="tfc-billing-items">
        <Col xl={6}>
          <SectionTitle title="Оплата" />
        </Col>
        <Col xl={6}>
          <SectionDesc>
            На платформе для стипендиатов есть 2 способа оплаты: онлайн на сайте через платежную систему и возможность прикрепить чек, если оплата была отправлена на карту. Во втором случае чек приходит в админку и менеджер проверяет платеж и ставит соответствующий статус
          </SectionDesc>
        </Col>
      </Row>
      <Row className="billing-bottom-wrapper">
        <Col xs={12} md={6}>
          <ImageWrapper src={Billing1} className="billing-image-1" />
        </Col>
        <Col xs={12} md={6}>
          <ImageWrapper src={Billing2} className="billing-image-2" />
        </Col>
      </Row>
    </SectionLayout>
  );
};
