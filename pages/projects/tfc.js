import React from "react";
import { MainWrapper } from "../../src/Components";
import { Main, About, DesignProcess, Personas, System, Warframes, ColorsAndFonts, Dashboard, Homework, Grade, Billing, TimeTable, AdminPanel, MobileVersion, Bottom } from "../../src/Components/Sections/Projects/TFC";
import '../../src/Styles/Pages/Projects/tfc.scss'


function Tfc() {
  return (
    <MainWrapper id="tfc-project-page">
        <Main />
        <About />
        <DesignProcess />
        <Personas />
        <System />
        <Warframes />
        <ColorsAndFonts />
        <Dashboard />
        <Homework />
        <TimeTable />
        <Grade />
        <Billing />
        <AdminPanel />
        <MobileVersion />
        <Bottom />
    </MainWrapper>
  );
}

export default Tfc;
