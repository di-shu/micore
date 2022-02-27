import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AdaptationBg = "/images/MyHouse/adaptation-bg.jpg";

export const Adaptation = () => {
  return (
    <>
      <SectionLayout id="my-house-adaptation" Footer={() => <ImageWrapper src={AdaptationBg} className="adaptation-img" />}>
        <Row className="my-house-adaptation-items">
          <Col xl={6}>
            <SectionTitle title="Адаптация" />
          </Col>
          <Col xl={6}>
            <SectionDesc>
              И конечно сайт не обошелся без мобильной адаптации. Уникальный дизайн под телефоны - это обязательное условие для любого бизнеса, который крутит рекламу через соц. сети и контекст, так как 80% всего трафика на сайте мобильный.
            </SectionDesc>
          </Col>
        </Row>
      </SectionLayout>
    </>
  );
};

