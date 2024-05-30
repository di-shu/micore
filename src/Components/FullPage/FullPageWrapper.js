import React, { useEffect, useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import ReactFullpage from "@fullpage/react-fullpage";
import { useDispatch } from "react-redux";
import { SET_IsAlternativeNavigationEnabled } from "../../../redux/reducers/headerSlice";
import {
  SET_ActiveSectionIndex,
  SET_PrevSectionIndex,
} from "../../../redux/reducers/sectionsSlice";

export const FullPageWrapper = (props) => {
  const { sections, options, setSections, setOptions } = props;
  const [activeSection, setActiveSection] = useState(sections[0]);
  const dispatch = useDispatch();

  const showAlternativeMenu = () => {
    if (isDesktop) {
      const { isAlternativeNavigationEnabled } = activeSection;
      dispatch(
        SET_IsAlternativeNavigationEnabled(!!isAlternativeNavigationEnabled)
      );
    }
  };

  const sectionMove = (origin, destination) => {
    setSections((prev) => {
      if (destination.index !== sections.length - 1) {
        setOptions({
          isLast: false,
          firstLoad: false,
          index: destination.index,
        });
        prev[origin.index].status = false;
        prev[destination.index].status = true;
      } else {
        setOptions({
          isLast: true,
          firstLoad: false,
          index: destination.index,
        });
        prev[destination.index].status = true;
      }

      return [...prev];
    });
    dispatch(SET_ActiveSectionIndex(destination.index));
    dispatch(SET_PrevSectionIndex(origin.index));
    setActiveSection(sections[destination.index]);
  };

  const renderSections = () => {
    return sections.map(({ name, status, Component }, index) => (
      <Component
        key={name}
        animation={status}
        firstLoad={index === 0 && options.firstLoad}
      />
    ));
  };

  useEffect(() => {
    showAlternativeMenu();
  }, [activeSection]);

  return (
    <>
      {isMobile ? (
        <div>{renderSections()}</div>
      ) : (
        <ReactFullpage
          scrollOverflow
          onLeave={sectionMove}
          scrollingSpeed={1200}
          verticalCentered={false}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div
                  className={`fullpage-inner-wrap ${
                    options.isLast ? "last-section" : ""
                  }`}
                >
                  {renderSections()}
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      )}
    </>
  );
};
