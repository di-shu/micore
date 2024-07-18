import React from "react";
import {
  ImageWrapper,
  ProjectMainSection,
  SectionDesc,
  SectionTitle,
} from "../../../../Components";

export const Main = () => {
  return (
    <section
      id="easy-academy-main-section"
      className="easy-academy-main-section"
    >
      <div className="easy-academy-main-section-content">
        <SectionTitle>
          Easy
          <img
            className="title-emoji"
            src="/images/EasyAcademy/emoji.png"
          />{" "}
          Academy
        </SectionTitle>
        <SectionTitle className="easy-academy-subtitle">
          Online platform
        </SectionTitle>
        <SectionDesc>
          The "Easy Academy" project is an innovative online platform designed
          to prepare students for the External Independent Evaluation (ZNO) in
          Ukraine. In my role as a UX/UI designer, I actively participated in
          the development of the user interface and ensuring the platform's
          usability.
        </SectionDesc>
        <div className="easy-academy-main-section-footer">
          <div className="easy-academy-footer-tag">
            <span>
              UX/UI <br /> Design
            </span>
            <img src="/images/EasyAcademy/emoji2.png" />
          </div>
          <div className="easy-academy-footer-tag">
            <span>
              Online <br /> platform
            </span>
            <img src="/images/EasyAcademy/emoji3.png" />
          </div>
        </div>
      </div>
      <ImageWrapper src="/images/EasyAcademy/MainSectionImage.jpg" />
    </section>
  );
};
