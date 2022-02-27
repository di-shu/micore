import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PersonasData } from "./Config";

export const Personas = () => {
  return (
    <SectionLayout id="tfc-personas">
      <SectionTitle title="Personas" />
      <div className="tfc-personas-items">
        <Row style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          {PersonasData.map((item, index) => (
            <Col key={index} md={12} xl={4}  className="tfc-personas-block">
              <ImageWrapper src={item.img} className="personas-img"/>
              <h4 className="personas-name">{item.name}</h4>
              <p className="personas-experience">{item.experience}</p>
              <p className="personas-descr-title">О персоне</p>
              <p className="personas-descr">{item.descr}</p>
            </Col>
          ))}
        </Row>
      </div>
    </SectionLayout>
  );
};
