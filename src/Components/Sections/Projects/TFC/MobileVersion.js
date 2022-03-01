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
          <SectionTitle title="Мобильная версия" />
        </Col>
        <Col xl={6}>
          <SectionDesc>
						Логика построения сетки и объектов разрабатывалась индивидуально для мобильных телефонов. Таблицы и списки стали ползунками. А объекты, где мы выбираем оценки, стали окнами, как в мобильных приложениях.
          </SectionDesc>
        </Col>
      </Row>
      <ImageWrapper src={MobileVersionImg} className="mobile-version-image" />
    </SectionLayout>
  );
};
