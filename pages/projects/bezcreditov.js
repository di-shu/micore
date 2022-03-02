import React from "react";
import { MainWrapper } from "../../src/Components";
import { Main, Sitemap, About, Roadmap, ColorsAndFonts, Landing, Purchase, Account, PurchaseHistory, BuyoutAgreements, MobileVersion } from "../../src/Components/Sections/Projects/Bezcreditov";
import '../../src/Styles/Pages/Projects/bezcreditov.scss'


function Bezcreditov() {
  return (
    <MainWrapper id="bezcreditov-project-page">
        <Main />
				<Sitemap />
				<About />
				<Roadmap />
				<ColorsAndFonts />
				<Landing />
				<Purchase />
				<Account />
				<PurchaseHistory />
				<BuyoutAgreements />
				<MobileVersion />
    </MainWrapper>
  );
}

export default Bezcreditov;
