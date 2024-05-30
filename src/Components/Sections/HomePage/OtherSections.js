import { Footer } from "../../SharedComponents/Footer/Footer";
import { HomePortfolio } from "./HomePortfolio";
import { HomeServices } from "./HomeServices";
import "../../../Styles/Sections/Home/other.scss";

export const OtherSection = () => {
  return (
    <section id="other-section" className="section">
      <HomeServices />
      <HomePortfolio />
      <Footer />
    </section>
  );
};
