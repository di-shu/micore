import React from "react";
import {
  SectionTitle,
  SectionLayout,
  ImageWrapper,
} from "../../../SectionsComponents";
import { DealokColors } from "./Config";

const fontLetterA = "/images/Dealok/font-a.png";
const Phone = "/images/Dealok/phone.png";

export const ColorsAndFonts = () => {
  return (
    <SectionLayout id="bezcreditov-colorsAndFonts">
      <div className="colorsAndFonts__inner">
        <ImageWrapper src={Phone} className="phone" />
        <div className="colorsAndFonts__main">
          <SectionTitle title="Colors & Fonts" />
          <div className="fonts-wrapper">
            <div className="fonts-block">
              <div className="fonts-block__title">Pragmatica</div>
              <div className="fonts-block__light">Book</div>
              <div className="fonts-block__medium">Bold</div>
              <div className="fonts-block__bold">Extended</div>
            </div>
            <img src={fontLetterA} className="fonts-letter" />
          </div>
          <div className="colors-wrapper">
            {DealokColors &&
              DealokColors.map((color) => (
                <div className="colors-block">
                  <div className="colors-block__info">
                    <div className="colors-block__title">{color.name}</div>
                    <div className="colors-block__number">
                      {color.textColor}
                    </div>
                  </div>
                  <div
                    className="colors-block__example"
                    style={{ backgroundColor: color.textColor }}
                  ></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
