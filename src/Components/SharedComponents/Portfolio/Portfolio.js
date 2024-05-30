import {
  SectionTitle,
  SectionDesc,
} from "../../SectionsComponents/SectionInfo";
import Slider from "react-slick";
import { ActiveLink } from "../../SectionsComponents/ActiveLink";
import { ImageWrapper } from "../../SectionsComponents/ImageWrapper";
import useTranslation from "next-translate/useTranslation";
import "./portfolio.scss";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const Portfolio = ({ portfolio = [], isSlider = false }) => {
  const { t } = useTranslation("common");

  const renderPortfolio = () => {
    return portfolio.map(({ img, title, link }) => {
      return (
        <div className="project">
          <ImageWrapper src={img} alt={title} />
          <div className="project-content">
            <SectionTitle title={title} isContentWhite />
            <SectionDesc isContentWhite>
              Реализовать аналог фриланс-биржи, где пользователи проверялись бы
              админами на наличие лицензии. Для MVP версии реализовать: работу с
              аккаунтом, сделки.
            </SectionDesc>
            <ActiveLink className="active-link" link={link}>
              {t("see_project")}
            </ActiveLink>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="portfolio">
      {isSlider ? (
        <Slider {...sliderSettings}>{renderPortfolio()}</Slider>
      ) : (
        renderPortfolio()
      )}
    </div>
  );
};
