import useTranslation from "next-translate/useTranslation";
import { ActiveLink, MyScrollAnimation } from "../SectionsComponents";

export const AlternativeLangSwitcher = ({ className }) => {
  const { t, lang } = useTranslation("menu");
  return (
    <div className="alternative-lang-switcher-wrapper">
      <MyScrollAnimation animationName="fadeInRight">
        <div className={`alternative-lang-switcher ${className}`}>
          {i18nConfig.locales.map((lng) => (
            <ActiveLink
              key={lng}
              link="/"
              locale={lng}
              className={`locale-link ${lang === lng ? "active" : ""}`}
            >
              <p className="locale-name">{lng}</p>
            </ActiveLink>
          ))}
        </div>
      </MyScrollAnimation>
    </div>
  );
};
