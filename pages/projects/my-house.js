import React from "react";
import { MainWrapper } from "../../src/Components";
import { About, Main, MvpVersion, MainPage, Objects, Adaptation, Services, Bottom } from "../../src/Components/Sections/Projects/MyHouse";
import '../../src/Styles/Pages/Projects/my-house.scss'


function MyHouse() {
  return (
    <MainWrapper id="my-house-project-page">
      <Main />
      <About />
      <MvpVersion />
      <MainPage />
      <Services />
      <Objects />
      <Adaptation />
      <Bottom />
    </MainWrapper>
  );
}

export default MyHouse;
