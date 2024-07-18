import React from "react";
import { ProjectMainSection } from "../../../../Components";
/*IMAGES*/
const MainBG = "/images/JFT/JFT-Main-bg.jpg";

export const Main = () => {
  return (
    <ProjectMainSection
      id="jft"
      name="JFT"
      background={MainBG}
      isContentWhite
    />
  );
};
