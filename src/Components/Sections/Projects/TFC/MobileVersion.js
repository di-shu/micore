import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionDesc,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MobileVersionImg = "/images/TFC/mobile-version.jpg";

export const MobileVersion = () => {
  return (
    <SectionLayout id="tfc-mobile-version">
      <Row className="tfc-mobile-version-items">
        <Col xl={6}>
          <SectionTitle title="Mobile version" />
        </Col>
        <Col xl={6}>
          <SectionDesc>
            На платформе для стипендиатов есть 2 способа оплаты: онлайн на сайте
            через платежную систему и возможность прикрепить чек, если оплата
            была отправлена на карту. Во втором случае чек приходит в админку и
            менеджер проверяет платеж и ставит соответствующий статус
          </SectionDesc>
        </Col>
      </Row>
      <ImageWrapper src={MobileVersionImg} className="mobile-version-image" />
    </SectionLayout>
  );
};
