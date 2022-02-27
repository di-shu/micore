import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DesignProcesses } from "./Config";

export const DesignProcess = () => {
  return (
    <SectionLayout id="tfc-design-process">
      <SectionTitle title="Design process" />
      <div className="tfc-design-process-items">
        <Row style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          {DesignProcesses.map((item, index) => (
            <Col key={index} xs={12} md={6} xl={4}  className="tfc-design-process-block">
              <h4 className="design-process-number">{item.number}</h4>
              <p className="design-process-title">{item.title}</p>
              <p className="design-process-descr">{item.descr}</p>
            </Col>
          ))}
        </Row>
      </div>
    </SectionLayout>
  );
};
