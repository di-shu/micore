import React from "react";
import { ProjectMainSection } from "../../../SectionsComponents";

const BackBg = "/images/Bezcreditov/preview-bg.jpg";
const FrontImg = "/images/Bezcreditov/preview-main.png";

export const Main = () => {
  return (
    <ProjectMainSection
      id="bezcreditov"
      name="bezcreditov"
      background={BackBg}
			image={FrontImg}
			isContentWhite
    />
  );
};
