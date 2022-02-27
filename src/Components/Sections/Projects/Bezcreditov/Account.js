import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PersonalAccount } from "./Config";

export const Account = () => {
  return (
    <>
      <SectionLayout id="bezcreditov-account" >
        <Row className="bezcreditov-account-title">
          <Col xl={8}>
            <SectionTitle title="Personal account" />
          </Col>
          <Col xl={8}>
            <SectionDesc>
							The next step was to develop a personal account. We tied the system to the phone as a unique id in the first place, which made it possible to work with ready-made data in the database. Registration via SMS confirmation, authorization, password reset, purchase of services inside the cabinet, referral system was just the beginning.
            </SectionDesc>
          </Col>
        </Row>
				<Row style={{ flexDirection: 'row', justifyContent: 'space-between'}} className="bezcreditov-purchase-items">
          {PersonalAccount.map((item, index) => (
            <Col key={index} sm={12} md={6} xl={4}  className="bezcreditov-account-block">
							<ImageWrapper src={item} className="account-img"/>
            </Col>
          ))}
        </Row>
      </SectionLayout>
    </>
  );
};