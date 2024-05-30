import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { FullPageWrapper } from "../FullPage";
import { AnimationClass, useDeviceDetect } from "../../Helpers";
import {
  SeeMoreLink,
  ScrollBox,
  ApolloStatue,
  SocialsWrap,
  ImageWrapper,
} from "../SectionsComponents";
import { MainSections, Options } from "./Config/HomePageConfigs";
import "../../Styles/Pages/home.scss";
import { useSpring } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_ActiveSectionIndex,
  SET_PrevSectionIndex,
} from "../../../redux/reducers/sectionsSlice";
import { SET_IsAlternativeNavigationEnabled } from "../../../redux/reducers/headerSlice";

const SectionAboutStatue = "/images/statue-about.png";

const move = (x, y) => `${-x / 4}px ${-y / 8}px`;

export const HomePage = () => {
  const { t } = useTranslation("common");
  const { desktop, mobile } = useDeviceDetect();
  const [options, setOptions] = useState(Options);
  const [sections, setSections] = useState(MainSections);
  const dispatch = useDispatch();
  const { activeSectionIndex, prevSectionIndex } = useSelector(
    (state) => state.sections
  );
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 9, tension: 136, friction: 81 },
  }));

  const handleMouseMove = ({ clientX: x, clientY: y }) => set({ xy: [x, y] });

  const changeAboutStatueClasses = () => {
    if (activeSectionIndex === 0 && prevSectionIndex === 0) {
      return "";
    }
    if (activeSectionIndex === 1 && prevSectionIndex === 0) {
      return "on-enter";
    } else if (
      (activeSectionIndex === 2 && prevSectionIndex === 1) ||
      (activeSectionIndex === 1 && prevSectionIndex === 2)
    ) {
      return "leave-at-bottom";
    } else if (activeSectionIndex > 2) {
      return "on-right-leave";
    } else if (!sections[1].status && activeSectionIndex < 2) {
      return "on-leave";
    } else if (activeSectionIndex === 2) {
      return "on-right-enter";
    }
    return "";
  };

  useEffect(() => {
    return () => {
      dispatch(SET_ActiveSectionIndex(0));
      dispatch(SET_PrevSectionIndex(0));
      dispatch(SET_IsAlternativeNavigationEnabled(false));
    };
  }, []);

  return (
    <>
      <SeeMoreLink
        label={t("our_works")}
        display={desktop}
        className={AnimationClass({
          firstLoad: options.firstLoad,
          animation: sections[0].status,
          className: `${options.index > 1 ? "on-hidden" : ""}`,
        })}
      />
      <SocialsWrap firstLoad={options.firstLoad} display={!mobile} />
      <ApolloStatue
        props={props}
        move={move}
        firstLoad={options.firstLoad}
        animation={sections[0].status}
      />
      <ImageWrapper
        src={SectionAboutStatue}
        className={`about-statue ${changeAboutStatueClasses()}`}
      />
      <ScrollBox className={`${options.index > 1 ? "on-hidden" : ""}`} />
      <FullPageWrapper
        options={options}
        sections={sections}
        setOptions={setOptions}
        setSections={setSections}
        onMouseMove={handleMouseMove}
      />
    </>
  );
};
