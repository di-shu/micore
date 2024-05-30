import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Portfolios } from "../../Config";
import { AlternativeButton } from "../../SectionsComponents/AlternativeButton";
import "../../..//Styles/Sections/Home/portfolio.scss";
import { Container, Row, Col } from "react-bootstrap";
import { SectionTitle } from "../../SectionsComponents/SectionInfo";
import { Portfolio } from "../../SharedComponents/Portfolio/Portfolio";
import { isMobile } from "react-device-detect";

export const HomePortfolio = ({ animation, isPortfolio }) => {
  const { t } = useTranslation("common");

  const shortenPortfolio = () => {
    // TODO: Provide a project's description with translation && precise what should be done here
    const portfolios = Portfolios.getALl();

    return [portfolios[0], portfolios[1], portfolios[2]];
  };

  return (
    <section id="home-portfolio-section" className="home-portfolio-section">
      <Container>
        <Row className="home-portfolio-row">
          <Col xs={12} lg={6}>
            <SectionTitle
              className="portfolio-section-title"
              main
              isContentWhite
            >
              {t("see_project")}
            </SectionTitle>
          </Col>
          <Col xs={12}>
            <Portfolio isSlider={isMobile} portfolio={shortenPortfolio()} />
          </Col>
          <Col xs={12} lg={6}>
            <AlternativeButton isLink to="/portfolio">
              {t("see_works")}
            </AlternativeButton>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
