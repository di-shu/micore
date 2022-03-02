import React from "react";
import { ProjectMainSection } from "../../../SectionsComponents";

const MainPhoto = "/images/TFC/tfc_main.png";

export const Main = () => {
  return (
    <ProjectMainSection
      id="tfc"
      name="TFS Platform"
      background={MainPhoto}
    />
  );
};
