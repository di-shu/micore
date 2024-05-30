import { FooterSection } from "../../Sections";
import {
  HomeAbout,
  HomeMain,
  HomePortfolio,
  HomeServices,
  HomeBenefits,
} from "../../Sections/HomePage";
import { OtherSection } from "../../Sections/HomePage/OtherSections";

export const Options = {
  index: 0,
  firstLoad: true,
  isLast: false,
};

export const HomeMainSection = {
  name: "main",
  status: false,
  Component: HomeMain,
  isAlternativeNavigationEnabled: true,
};

export const HomeAboutSection = {
  name: "about",
  status: false,
  Component: HomeAbout,
};

export const HomeBenefitsSection = {
  name: "benefits",
  status: false,
  Component: HomeBenefits,
};

// export const HomeServicesSection = {
//   name: "services",
//   status: false,
//   Component: HomeServices,
// };

// export const HomePortfolioSection = {
//   name: "portfolio",
//   status: false,
//   Component: HomePortfolio,
// };

// export const HomeFooterSection = {
//   name: "footer",
//   status: false,
//   Component: FooterSection,
// };

export const HomeOtherSection = {
  name: "other",
  status: false,
  Component: OtherSection,
};

export const MainSections = [
  HomeMainSection,
  HomeAboutSection,
  HomeBenefitsSection,
  // HomeServicesSection,
  // HomePortfolioSection,
  // HomeFooterSection,
  HomeOtherSection,
];
