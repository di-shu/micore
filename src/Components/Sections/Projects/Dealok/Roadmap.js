import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";

const roadmapImg = "/images/Dealok/roadmap.png";
const roadmapBottomImg = "/images/Dealok/roadmap-bottom.jpg";

export const Roadmap = () => {
  return (
      <SectionLayout id="dealok-roadmap" Footer={() => <ImageWrapper src={roadmapBottomImg} />}>
        <SectionTitle title="Roadmap" />
				<ImageWrapper src={roadmapImg} className="roadmap-img"/>
      </SectionLayout>
  );
};
