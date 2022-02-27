import React from "react";
import {
	BottomNavigation,
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MobileVersionImg = "/images/Bezcreditov/mobile-version.png";

export const MobileVersion = () => {
  return (
    <>
      <SectionLayout id="bezcreditov-mobile-version" Footer={() => <BottomNavigation isBlack hidden />}>
        <Row className="bezcreditov-mobile-version-title">
          <Col xl={8}>
            <SectionTitle title="Mobile version" />
          </Col>
          <Col xl={8}>
            <SectionDesc>
							Since such a system cannot exist only on the desktop version, we developed a full adaptation for mobiles. So everything you can do on the desktop version, you can do on the mobile version.
            </SectionDesc>
          </Col>
        </Row>
				<ImageWrapper src={MobileVersionImg} className="mobile-version-image" />
      </SectionLayout>
    </>
  );
};