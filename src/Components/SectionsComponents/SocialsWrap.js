import React from "react";
import { Socials } from "../Config";

export const SocialsWrap = (props) => {
  const { display = true, firstLoad, isGray } = props;

  return (
    <div className={`socials-wrap ${display ? "d-flex" : "d-none"}`}>
      {Socials &&
        Socials.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            className={`social-link ${firstLoad ? "on-first-load" : ""}`}
          >
            <img src={isGray ? item.srcGray : item.src} alt={item.label} />
          </a>
        ))}
    </div>
  );
};
