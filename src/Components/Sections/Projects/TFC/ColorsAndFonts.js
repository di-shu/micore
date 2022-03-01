import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  ProjectBackColor,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import { TfcColors } from './Config'

export const ColorsAndFonts = () => {
  return (
    <SectionLayout id="tfc-colors-and-fonts">
      <SectionTitle title="Цвета и шрифты" />
      <Row className="color-grid-container">
        <Col xs={12} lg={6}>
          <SectionDesc>
            Цветовое палитра представлена тремя цветами: лазурный бирюзовый -
            цвет морской волны, темно-коричневый - выделяет шрифтовую часть,
            изумрудный морской - используется в качестве фона.
          </SectionDesc>
          <ProjectBackColor colors={TfcColors} />
        </Col>
        <Col xs={12} lg={5}>
          <div className="d-flex flex-column font-top" style={{ marginBottom: 27 }}>
            <p className="font-example-title">Для заголовков</p>
            <div className="font-name-row d-flex justify-content-between align-items-center">
              <p className="font-name">Comfortaa</p>
              <p className="font-weight">Bold</p>
            </div>
            <div>
              <img src="/images/TFC/Fonts/Comfortaa1.png" className="font-example-1" alt="Font" />
              <img src="/images/TFC/Fonts/Comfortaa2.png" className="font-example-2" alt="Font" />
            </div>
          </div>
          <div className="d-flex flex-column">
            <p className="font-example-title">Для описания и наборных тексто</p>
            <div className="font-name-row d-flex justify-content-between align-items-center">
              <p className="font-name">Avenir Next Cyrillic</p>
              <p className="font-weight">Regular</p>
            </div>
            <div className="d-flex flex-column">
              <img src="/images/TFC/Fonts/AvenirCyrillic1.png" className="font-example-3" alt="Font" />
              <img src="/images/TFC/Fonts/AvenirCyrillic2.png" className="font-example-4" alt="Font" />
            </div>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  );
};
