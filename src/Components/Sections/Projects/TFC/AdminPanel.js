import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionDesc,
  SectionTitle,
} from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AdminPanelImg = "/images/TFC/admin-panel.jpg";

export const AdminPanel = () => {
  return (
    <SectionLayout id="tfc-adminpanel" Footer={() => <ImageWrapper src={AdminPanelImg} className="adminpanel-img" />}>
      <Row className="tfc-adminpanel-items">
        <Col xl={6}>
          <SectionTitle title="Админ" />
        </Col>
        <Col xl={6}>
          <SectionDesc>
            Администратор может видеть все, что происходит на платформе. Какие оценки и кому поставил учитель. Какие уроки посещал ученик. Какой у учителя график. Статусы оплаты и то, что студенты еще не оплатили за обучение. Также есть возможность отправлять уведомления в Viber.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  );
};
