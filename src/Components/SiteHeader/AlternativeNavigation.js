import useTranslation from "next-translate/useTranslation";
import { MenuLinks } from "../Config";
import { ActiveLink, MyScrollAnimation } from "../SectionsComponents";

export const AlternativeMenu = ({ className }) => {
  const { t } = useTranslation("menu");
  const renderLinks = () => {
    return MenuLinks.map(({ linkTitle, to }) => {
      const type = to.split("/")[1];
      const translateKey = `${type}.${linkTitle}`;
      return (
        <ActiveLink className="alternative-nav-link" link={to}>
          {t(translateKey)}
        </ActiveLink>
      );
    });
  };

  return (
    <div className="alternative-nav-wrapper">
      <MyScrollAnimation animationName="fadeIn">
        <nav className={`alternative-nav ${className}`}>{renderLinks()}</nav>
      </MyScrollAnimation>
    </div>
  );
};
