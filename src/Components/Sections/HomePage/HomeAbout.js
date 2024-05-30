import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import useTranslation from "next-translate/useTranslation";
import { useDeviceDetect } from "../../../Helpers";
import {
  ImageWrapper,
  SectionDesc,
  SectionTitle,
} from "../../SectionsComponents";
import "../../../Styles/Sections/Home/about.scss";
import { AlternativeButton } from "../../SectionsComponents/AlternativeButton";

export const HomeAbout = ({ animation }) => {
  const { desktop } = useDeviceDetect();
  const { t } = useTranslation("about");

  return (
    <section id="about-section" className="section">
      <Container fluid>
        <Row>
          <Col xs={12} lg={6} className="col-info">
            <ImageWrapper isDot isNewDots />
            <SectionTitle
              main
              className="title"
              title={t("about:title")}
              isContentWhite
            />
            <SectionDesc isContentWhite className="about-desc">
              {t("about:description")}
            </SectionDesc>
            <AlternativeButton isLink to="/about">
              {t("about:more")}
            </AlternativeButton>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
