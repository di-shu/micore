import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  SectionTitle,
  ProjectColor,
  SectionLayout,
  ImageWrapper,
} from "../../../SectionsComponents";
import { BezcreditovColors } from "./Config";
const fontLetterA = "/images/Bezcreditov/font-a.png";

export const ColorsAndFonts = () => {
  return (
    <SectionLayout id="bezcreditov-colorsAndFonts">
      <SectionTitle title="Colors & Fonts" />
      <div className="colorsAndFonts-wrap">
        <div className="fonts-wrapper">
          <div className="fonts-block">
            <div className="fonts-block__title">Aeroport</div>
            <div className="fonts-block__light">Light</div>
            <div className="fonts-block__medium">Medium</div>
            <div className="fonts-block__bold">Bold</div>
          </div>
					<img src={fontLetterA} className="fonts-letter" />
        </div>
        <div className="colors-wrapper">
          {BezcreditovColors && BezcreditovColors.map(color => (
						<div className="colors-block">
							<div className="colors-block__info">
								<div className="colors-block__title">{color.name}</div>
								<div className="colors-block__number">{color.textColor}</div>
							</div>
							<div className="colors-block__example" style={{ backgroundColor: color.textColor}}></div>
						</div>
					))}
        </div>
      </div>
    </SectionLayout>
  );
};
