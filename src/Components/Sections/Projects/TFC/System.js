import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";

const SystemImg = "/images/TFC/system.png";

export const System = () => {
  return (
      <SectionLayout id="tfc-system" Footer={() => <ImageWrapper src={SystemImg} className="system-img" />}>
        <SectionTitle title="Cтруктура системы" />
      </SectionLayout>
  );
};
