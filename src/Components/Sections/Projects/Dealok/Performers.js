import React from "react";
import { ImageWrapper } from "../../../SectionsComponents";

const PerformersImg1 = "/images/Dealok/performers-1.png";
const PerformersImg2 = "/images/Dealok/performers-2.png";
const PerformersImg3 = "/images/Dealok/performers-3.png";
const PerformersImg4 = "/images/Dealok/performers-4.png";
const PerformersImg5 = "/images/Dealok/performers-5.png";

export const Performers = () => {
  return (
    <section id="dealok-performers">
      <div className="container-plus">
        <div className="performers-top">
          <ImageWrapper src={PerformersImg1} className="performers-desktop" />
          <div className="performers-top__mobile">
            <ImageWrapper src={PerformersImg2} className="performers-top__mobile-1" />
            <ImageWrapper src={PerformersImg3} className="performers-top__mobile-2" />
          </div>
        </div>
        <div className="performers-bottom">
          <ImageWrapper src={PerformersImg4} className="performers-bottom__mobile" />
          <ImageWrapper src={PerformersImg5} className="performers-bottom__desktop" />
        </div>
      </div>
    </section>
  );
};
