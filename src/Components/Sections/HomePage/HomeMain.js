import React from "react";
import useTranslation from "next-translate/useTranslation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { AnimationClass, useDeviceDetect } from "../../../Helpers";
import {
  ImageWrapper,
  SectionDesc,
  SectionTitle,
  SeeMoreLink,
} from "../../SectionsComponents";
import "../../../Styles/Sections/Home/main.scss";
import { AlternativeButton } from "../../SectionsComponents/AlternativeButton";
import { AnimationFadeUp } from "../../SharedComponents/AnimationFadeUp/AnimationFadeUp";

export const HomeMain = ({ firstLoad, animation }) => {
  const { mobile, desktop } = useDeviceDetect();
  const { t } = useTranslation("common");

  return (
    <>
      <section id="main-section" className="section">
        <SeeMoreLink
          display={!desktop}
          label={t("our_works")}
          direction={mobile ? "right" : "left"}
          className={AnimationClass({ firstLoad, animation })}
        />
        <Container fluid>
          <Row>
            <Col xs={12} lg={7} className="col-info">
              <ImageWrapper
                isDot
                isNewDots
                className={AnimationClass({
                  firstLoad,
                })}
              />
              <SectionTitle
                isContentWhite
                className={AnimationClass({
                  firstLoad,
                  className: "sub-title",
                })}
              >
                We Are
              </SectionTitle>
              <AnimationFadeUp
                className={AnimationClass({
                  firstLoad,
                  className: "title-container",
                })}
              >
                <SectionTitle
                  main
                  isContentWhite
                  className="title"
                  title="MANTICORE"
                />
              </AnimationFadeUp>
              <SectionDesc
                className={AnimationClass({
                  firstLoad,
                  className: "description",
                })}
                isContentWhite
              >
                И мы разрабатываем креативные сайты. А также брендируем
                компании. Мы в этом шарим 👌🏻 На нашем сайте вы найдёте примеры
                наших работ, наши услуги, кто мы и многое другое. <br />
                Например, <span>кейс в кейсе</span>
              </SectionDesc>
              <AlternativeButton
                isLink
                to="/portfolio"
                className={AnimationClass({
                  firstLoad,
                })}
              >
                {t("common:see_works")}
              </AlternativeButton>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
