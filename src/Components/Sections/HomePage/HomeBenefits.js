import useTranslation from "next-translate/useTranslation";
import { Container, Row, Col } from "react-bootstrap";
import { SectionDesc, SectionTitle } from "../../SectionsComponents";
import "../../../Styles/Sections/Home/benefits.scss";

const benefits = [
  {
    key: "consultation",
  },
  {
    key: "planning",
  },
  {
    key: "design",
  },
  {
    key: "development",
  },
  {
    key: "testing",
  },
  {
    key: "deployment",
  },
];

export const HomeBenefits = () => {
  const { t } = useTranslation("benefits");

  const renderBenefits = () => {
    return benefits.map(({ key }, index) => {
      const order = index + 1;
      return (
        <div className="benefit" key={key}>
          <div className="benefit-head">
            <span className="benefit-number">{order}</span>
            <SectionTitle className="benefit-title" isContentWhite>
              {t(`benefits.${key}.title`)}
            </SectionTitle>
          </div>
          <SectionDesc className="benefit-description" isContentWhite>
            {t(`benefits.${key}.description`)}
          </SectionDesc>
        </div>
      );
    });
  };

  return (
    <section id="benefits-section" className="section">
      <Container fluid>
        <Row>
          <Col xs={12} lg={7}>
            <SectionTitle
              title={t("title")}
              className="benefits-section-title"
              isContentWhite
            />
            <div className="benefits-wrapper">{renderBenefits()}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
