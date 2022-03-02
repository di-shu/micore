import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PurchaseOfServices } from "./Config";

export const Purchase = () => {
  return (
    <>
      <SectionLayout id="bezcreditov-purchase" >
        <Row className="bezcreditov-purchase-title">
          <Col xl={8}>
            <SectionTitle title="Purchase of services" />
          </Col>
          <Col xl={8}>
            <SectionDesc>
							The first step after creating a promo-led was buying services. Since the purchase is the foundation, we implemented it even before the creation of personal accounts. The functionality included a choice of packages, signing contracts via SMS, payment through an online service and step-by-step filling in data about the user and his credit.
            </SectionDesc>
          </Col>
        </Row>
				<Row style={{ flexDirection: 'row', justifyContent: 'space-between'}} className="bezcreditov-purchase-items">
          {PurchaseOfServices.map((item, index) => (
            <Col key={index} sm={12} md={6} xl={4}  className="bezcreditov-purchase-block">
              <h4 className="purchase-step">Step {index + 1}</h4>
							<ImageWrapper src={item} className="purchase-img"/>
            </Col>
          ))}
        </Row>
      </SectionLayout>
    </>
  );
};