import React from "react";
import { ProjectMainSection } from "../../../SectionsComponents";

const MainPhoto = "/images/Dealok/preview-main.png";

export const Main = () => {
  return (
    <ProjectMainSection
      id="dealok"
      name="Dealok"
			background={MainPhoto}
			isContentWhite
    />
  );
};
