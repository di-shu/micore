import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";
import { useCheckRoute, useScroll } from "../../../Helpers";

export const ProjectsNavigation = ({ links }) => {
  const [prev, setPrev] = useState("/");
  const [next, setNext] = useState("/");
  const [isBlack, setIsBlack] = useState(false);
  const { pathname } = useRouter();
  const { scrollDir } = useScroll();
  const { isProject } = useCheckRoute();

  useEffect(() => {
    links.map((link, index) => {
      if (link.link === pathname) {
        setPrev(
          index === 0 ? links[links.length - 1].link : links[index - 1].link
        );
        setNext(
          index === links.length - 1 ? links[0].link : links[index + 1].link
        );

        if (link.isNavBlack) {
          setIsBlack(true);
        } else {
          setIsBlack(false);
        }
      }
    });
  }, [pathname, links]);

  return (
    isProject && (
      <div
        className={`navigation-wrap ${isBlack ? "is-black" : ""} ${
          scrollDir === "up"
            ? "scroll-up"
            : scrollDir === "down"
            ? "scroll-down"
            : ""
        }`}
      >
        <ActiveLink link={prev} className="nav-el prev">
          <span>Назад</span>
        </ActiveLink>
        <ActiveLink link={next} className="nav-el next">
          <span>Вперед</span>
        </ActiveLink>
      </div>
    )
  );
};
