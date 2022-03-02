import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const PurchaseHistoryImg = '/images/Bezcreditov/purchase-history-img.png'

export const PurchaseHistory = () => {
  return (
    <SectionLayout id="bezcreditov-purchase-history" Footer={() => <ImageWrapper src={PurchaseHistoryImg} className="purchase-image"/>}>
      <Row>
        <Col xs={12} lg={5} className="purchase-main">
          <SectionTitle title="Purchase history"/>
          <SectionDesc>
						In history, we deduced the purchase statuses, because the buyout of the agreement is a lengthy process. Statuses are moderated manually via the admin panel. We also implemented a monthly fee for one of the services with a reminder via SMS and within the system. Among other issues, it can be possible to view and download the contract and instructions for the service.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
