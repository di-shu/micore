import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MenuContainer } from "./Menu";
import { HeaderLogo } from "./HeaderLogo";
import { AlternativeMenu } from "./AlternativeNavigation";
import { useSelector } from "react-redux";
import { AlternativeLangSwitcher } from "./AlternativeLangSwitcher";
import { useDeviceDetect } from "../../Helpers";
import { isDesktop, isMobile } from "react-device-detect";

export const Header = () => {
  const { desktop, mobile } = useDeviceDetect();
  const { isAlternativeNavigationEnabled } = useSelector(
    (state) => state.header
  );
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlternativeNavigationShown, setIsAlternativeNavigationShown] =
    useState(isAlternativeNavigationEnabled);
  const [isBurgerShown, setIsBurgerShown] = useState(
    !isAlternativeNavigationEnabled
  );

  const changeMenu = () => {
    if (isAlternativeNavigationEnabled) {
      setIsAlternativeNavigationShown(true);
      setTimeout(() => {
        setIsBurgerShown(false);
      }, 1000);
    } else {
      setIsBurgerShown(true);
      setTimeout(() => {
        setIsAlternativeNavigationShown(false);
      }, 1000);
    }
  };

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    setTimeout(() => {
      setIsOpened(true);
    }, 200);
  };

  const closeMenu = () => {
    setIsOpened(!isMenuOpen);

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 2000);
  };

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  useEffect(() => {
    setIsOpened(false);

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 2000);
  }, [router.pathname, router.locale]);

  useEffect(() => {
    if (!isFirstLoad && isDesktop) {
      changeMenu();
    } else {
      if (!isMobile) {
        setIsBurgerShown(false);
      }
    }
  }, [isAlternativeNavigationEnabled]);

  return (
    <>
      {!isAlternativeNavigationEnabled && (
        <MenuContainer open={isMenuOpen} animation={isOpened} />
      )}
      <header className="site-header">
        <HeaderLogo />
        <div className="header-fade-up-animation">
          {isAlternativeNavigationShown && (
            <AlternativeMenu
              className={`${
                !isAlternativeNavigationEnabled && "header-nav-on-leave"
              }`}
            />
          )}
        </div>
        <div className="header-fade-up-animation">
          {isAlternativeNavigationShown && (
            <AlternativeLangSwitcher
              className={`${
                !isAlternativeNavigationEnabled &&
                "header-lang-switcher-on-leave"
              }`}
            />
          )}
        </div>
        <div className="header-fade-up-animation">
          {isBurgerShown && (
            <div
              className={`menu ${
                isOpened ? "is-opened" : "is-closed"
              } animated fadeInRight ${
                isAlternativeNavigationEnabled && "header-burger-on-leave"
              }`}
              onClick={isMenuOpen ? closeMenu : openMenu}
            >
              <span />
              <span />
              <span />
              <span className="close-line" />
              <span className="close-line" />
            </div>
          )}
        </div>
      </header>
    </>
  );
};
