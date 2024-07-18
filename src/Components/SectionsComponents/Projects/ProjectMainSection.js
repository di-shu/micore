import React from "react";
import useTranslation from "next-translate/useTranslation";
import { ScrollBox } from "../ScrollBox";
import { SeeMoreLink } from "../SeeMoreLink";
import { ImageWrapper } from "../ImageWrapper";
import { SectionLayout } from "../SectionLayout";
import { SectionDesc, SectionTitle } from "../SectionInfo";
// import { MyScrollAnimation } from '../MyScrollAnimation'

export const ProjectMainSection = ({
  glitch,
  id,
  name,
  image,
  background,
  content,
  isContentWhite,
  isNavBlack,
  children,
}) => {
  const { t } = useTranslation("common");

  return (
    <SectionLayout
      id={`${id}-main`}
      Header={() => (
        <>
          {background && (
            <ImageWrapper src={background} className="section-background" />
          )}
          {image && <img src={image} alt="main-image" className="main-image" />}
          <SeeMoreLink
            label={t("back_projects")}
            className={isNavBlack ? "is-black" : ""}
          />
          <ScrollBox isBlack={isNavBlack} />
        </>
      )}
      Glitch={glitch}
      Footer={content}
    >
      <SectionDesc
        className="section-layout-desc"
        isContentWhite={isContentWhite}
      >
        Название проекта
      </SectionDesc>
      <SectionTitle
        className="section-layout-title"
        main
        title={name}
        isContentWhite={isContentWhite}
      />
      {children}
    </SectionLayout>
  );
};
