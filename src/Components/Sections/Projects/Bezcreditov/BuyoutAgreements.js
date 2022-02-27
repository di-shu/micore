import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Buyout1 = "/images/Bezcreditov/buyout-1.png";
const Buyout2 = "/images/Bezcreditov/buyout-2.png";

export const BuyoutAgreements = () => {
  return (
    <>
      <SectionLayout id="bezcreditov-buyout-agreements" >
        <Row className="bezcreditov-buyout-agreements-title">
          <Col xl={8}>
            <SectionTitle title="Buyout agreements" />
          </Col>
          <Col xl={8}>
            <SectionDesc>
							The first step after creating a promo-led was buying services. Since the purchase is the foundation, we implemented it even before the creation of personal accounts. The functionality included a choice of packages, signing contracts via SMS, payment through an online service and step-by-step filling in data about the user and his credit.
            </SectionDesc>
          </Col>
        </Row>
				<Row className="bezcreditov-buyout-agreements-wrapper">
					<Col xs={12} md={6}>
						<ImageWrapper src={Buyout1} className="buyout-image-1" />
					</Col>
					<Col xs={12} md={6}>
						<ImageWrapper src={Buyout2} className="buyout-image-2" />
					</Col>
				</Row>
      </SectionLayout>
    </>
  );
};