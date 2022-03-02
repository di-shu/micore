import React from "react";
import { ProjectMainSection } from "../../../SectionsComponents";

const MainPhoto = "/images/MyHouse/myhouse_main.png";

export const Main = () => {
  return (
    <ProjectMainSection
      id="my-house"
      name="Свой дом"
      background={MainPhoto}
      isContentWhite
    />
  );
};
