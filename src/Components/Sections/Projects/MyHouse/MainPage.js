import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainPageBg = "/images/MyHouse/main-page-bg.jpg";

export const MainPage = () => {
  return (
    <>
      <SectionLayout id="my-house-prime" Footer={() => <ImageWrapper src={MainPageBg} className="prime-img" />}>
        <Row className="my-house-prime-items">
          <Col xl={6}>
            <SectionTitle title="Главная страница" />
          </Col>
          <Col xl={6}>
            <SectionDesc>
              На главной странице первом делом мы расположили объекты в продаже,
              информацию о компании, а также услугах Своего Дома.
            </SectionDesc>
          </Col>
        </Row>
      </SectionLayout>
    </>
  );
};
