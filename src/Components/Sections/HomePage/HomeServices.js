import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { AlternativeButton } from "../../SectionsComponents/AlternativeButton";
import useTranslation from "next-translate/useTranslation";
import { ServicesList } from "../../Config";
import { AnimationClass, useDeviceDetect } from "../../../Helpers";
import {
  ActiveLink,
  ImageWrapper,
  SectionDesc,
  SectionTitle,
} from "../../SectionsComponents";
import "../../../Styles/Sections/Home/services.scss";

export const HomeServices = ({ animation }) => {
  const { t } = useTranslation("services");
  const { mobile } = useDeviceDetect();

  return (
    <section id="services-section" className="main-services-section">
      <Container className="section-wrapper">
        <SectionTitle
          main
          title={t("title")}
          isContentWhite
          className={AnimationClass({ animation, className: "services-title" })}
        />
        <Row
          className={AnimationClass({ animation, className: "row-service" })}
        >
          {ServicesList.map((service, index) => (
            <Col
              key={service.key}
              xs={12}
              md={6}
              className={AnimationClass({
                animation,
                className: "col-service",
              })}
            >
              <ActiveLink link={service.link} className="active-link">
                <Row className="service-card">
                  <Col xs={12} lg={6} className="col-image">
                    <ImageWrapper
                      src={service.img}
                      className={`service-image ${
                        index === ServicesList.length - 1 ? "other" : ""
                      }`}
                    />
                  </Col>
                  <Col xs={12} lg={6}>
                    <div className="service-info">
                      <SectionTitle
                        isContentWhite
                        className="service-title"
                        title={t(`services.${service.key}.title`)}
                      />
                      <SectionDesc
                        isContentWhite
                        className="service-desc"
                        children={t(`services.${service.key}.description`)}
                      />
                      {mobile && (
                        <AlternativeButton isLink to={service.link}>
                          {t("read_more")}
                        </AlternativeButton>
                      )}
                    </div>
                  </Col>
                </Row>
              </ActiveLink>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
