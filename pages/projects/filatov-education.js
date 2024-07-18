import { Container } from "react-bootstrap";
import { MainWrapper, SectionDesc, SectionTitle } from "../../src/Components";
import Main from "../../src/Components/Sections/Projects/Filatov/Main";
import "../../src/Styles/Pages/Projects/filatov.scss";

const colors = [
  {
    hex: "#000de5",
  },
  {
    hex: "#41ff01",
    fontColor: "#000",
  },
  {
    hex: "#e14d91",
  },
  {
    hex: "#ffffff",
    fontColor: "#000",
    border: "1px solid #000",
  },
  {
    hex: "#f7f7f7",
    fontColor: "#000",
  },
  {
    hex: "#000000",
  },
];

const Filatov = () => {
  const renderColors = () => {
    return colors.map(({ hex, fontColor, border }) => {
      return (
        <div
          className="filatov-color"
          style={{
            backgroundColor: hex,
            ...(fontColor ? { color: fontColor } : {}),
            ...(border ? { border } : {}),
          }}
        >
          <span className="filatov-color-hex">{hex}</span>
        </div>
      );
    });
  };

  return (
    <MainWrapper id="filatov-project-page">
      <Main />
      <section className="filatov-about-section">
        <Container>
          <div className="about-section-title">
            <img src="/images/Filatov/filatov-logo.svg" alt="logo" />
            <SectionTitle>Filatov Education</SectionTitle>
          </div>
          <div className="about-section-content">
            <div className="about-project">
              <SectionTitle>About project</SectionTitle>
              <SectionDesc>
                Filatov education is a project created on the personal brand of
                a creative smm specialist. Our the project task was to show the
                style and tone voice of the brand. The style is based on 8 bit
                colors, extraordinary design moves and an informal text style.
                We used for the task of creative animations and bright design.
              </SectionDesc>
            </div>
            <div className="work-done">
              <SectionTitle>Work done</SectionTitle>
              <div className="work-done-list">
                <span>Website Design</span>
                <span>Development</span>
                <span>Art Direction</span>
              </div>
              <div className="work-done-link">http://filatoveducation.com</div>
            </div>
          </div>
          <img
            className="about-section-frame"
            src="/images/Filatov/about-frame.svg"
            alt="about frame"
          />
        </Container>
      </section>
      <section className="filatov-font-section">
        <Container>
          <div className="font-section-content">
            We used the <span>Graphik LCG</span> font. only regular &{" "}
            <span>medium</span>
          </div>
        </Container>
        <img
          className="font-frame1"
          src="/images/Filatov/font-frame1.svg"
          alt="font frame"
        />
        <img
          className="font-frame2"
          src="/images/Filatov/font-frame2.svg"
          alt="font frame"
        />
      </section>
      <section className="filatov-services-section">
        <Container>
          <img
            src="/images/Filatov/service1.png"
            alt="The first service's image"
          />
          <img
            src="/images/Filatov/service2.png"
            alt="The second service's image"
          />
        </Container>
      </section>
      <section className="filatov-creativity-section">
        <div className="creativity-section-content">
          <Container>
            <div className="section-content-title">
              We like <span>creativity</span>
            </div>
          </Container>
          <img
            className="creativity-frame1"
            src="/images/Filatov/creativity-frame1.svg"
            alt="frame"
          />
          <img
            className="creativity-frame2"
            src="/images/Filatov/creativity-frame2.svg"
            alt="frame"
          />
        </div>
        <Container>
          <div className="creativity-section-images">
            <img src="/images/Filatov/creativity-phone1.jpg" alt="smm" />
            <img src="/images/Filatov/creativity-phone2.jpg" alt="about" />
            <img src="/images/Filatov/creativity-phone3.jpg" alt="type" />
          </div>
        </Container>
      </section>
      <section className="filatov-colors-section">
        <Container>
          <SectionTitle>Colors</SectionTitle>
          <div className="filatov-colors">{renderColors()}</div>
        </Container>
      </section>
      <section className="filatov-footer-section">
        <img src="/images/Filatov/footer-line2.png" />
        <img src="/images/Filatov/footer-line1.png" />
        <img
          className="footer-logo"
          src="/images/Filatov/filatov-logo.svg"
          alt="logo"
        />
      </section>
    </MainWrapper>
  );
};

export default Filatov;
