import React from "react";
import { MainWrapper } from "../../src/Components";
import { Main, About, Roadmap, Sitemap, Wireframes, ColorsAndFonts, Promo, Profile, Payment, Performers, Deals, Chat, Bottom } from "../../src/Components/Sections/Projects/Dealok";
import '../../src/Styles/Pages/Projects/dealok.scss'

function Dealok() {
  return (
    <MainWrapper id="dealok-project-page">
        <Main />
        <About />
        <Roadmap />
        <Sitemap />
        <Wireframes />
        <ColorsAndFonts />
        <Promo />
        <Profile />
        <Payment />
        <Performers />
        <Deals />
        <Chat />
        <Bottom />
    </MainWrapper>
  );
}

export default Dealok;
