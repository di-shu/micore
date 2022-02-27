import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";

const WireframesImg = "/images/Dealok/wireframes.png";

export const Wireframes = () => {
  return (
      <SectionLayout id="dealok-wireframes" Footer={() => <ImageWrapper src={WireframesImg} className="warframes-img" />}>
        <SectionTitle title="100+ wireframes" isContentWhite />
      </SectionLayout>
  );
};
