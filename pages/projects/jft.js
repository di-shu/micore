import { Container } from "react-bootstrap";
import {
  ImageWrapper,
  MainWrapper,
  MyScrollAnimation,
  SectionDesc,
  SectionTitle,
} from "../../src/Components";
import { Main } from "../../src/Components/Sections/Projects/JFT";
import "../../src/Styles/Pages/Projects/jft.scss";

const fontsBg = "/images/JFT/FontsBg.png";
const colors = [
  {
    name: "Primary",
    hex: "#FF8103",
  },
  {
    name: "Black",
    hex: "#000C18",
  },
  {
    name: "Gray text",
    hex: "#808286",
  },
  {
    name: "Gray",
    hex: "#A4A6AA",
  },
  {
    name: "Lines",
    hex: "#E4E4E4",
    fontColor: "#000",
  },
  {
    name: "Background",
    hex: "#F4F6F6",
    fontColor: "#000",
  },
  {
    name: "Secondary",
    hex: "#345DF0",
  },
  {
    name: "Orange",
    hex: "#F2C533",
  },
  {
    name: "Chips",
    hex: "#FCE7D6",
    fontColor: "#000",
  },
  {
    name: "Red",
    hex: "#F03434",
  },
  {
    name: "Green",
    hex: "#3CE37F",
    fontColor: "#000",
  },
  {
    name: "Light green",
    hex: "#A1F1C1",
    fontColor: "#000",
  },
];

const wireframes = [
  "/images/JFT/wireframe1.jpg",
  "/images/JFT/wireframe3.jpg",
  "/images/JFT/wireframe2.jpg",
  "/images/JFT/wireframe4.jpg",
  "/images/JFT/wireframe5.jpg",
  "/images/JFT/wireframe6.jpg",
];

const JFT = () => {
  const renderColors = () => {
    return colors.map(({ name, hex, fontColor }) => {
      return (
        <div
          className="jft-color"
          style={{
            backgroundColor: hex,
            ...(fontColor ? { color: fontColor } : {}),
          }}
        >
          <span className="jft-color-name">{name}</span>
          <span className="jft-color-hex">{hex}</span>
        </div>
      );
    });
  };

  const renderImages = () => {
    return wireframes.map((url) => (
      <ImageWrapper className="wireframe" src={url} />
    ));
  };

  return (
    <MainWrapper id="jft-project-page">
      <Main />
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-about-section">
          <SectionTitle>About project</SectionTitle>
          <SectionDesc>
            JFT is a furniture manufacturer with e-commerce and offline shops.
            The company was established in 2014 in Ukraine and specializes in
            the production of furniture and accessories for it. The company
            offers only high-quality products at affordable prices.
          </SectionDesc>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-fonts-section">
          <ImageWrapper className="jft-fonts-bg-image" src={fontsBg} />
          <Container>
            <SectionTitle>Inter</SectionTitle>
            <div className="jft-fonts-content">
              <p>A B C D E F G H I J K L M N O R P S T U V W X Y Z</p>
              <p>0 1 2 3 4 5 6 7 8 9 0</p>
              <div className="jft-fonts-names">
                <span>Light</span>
                <span>Regular</span>
                <span>Bold</span>
              </div>
            </div>
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-colors-section">
          <Container>
            <SectionTitle>Colors palette</SectionTitle>
            <div className="jft-colors">{renderColors()}</div>
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-wireframes-section">
          <Container>
            <div className="jft-wireframes-content">
              <SectionTitle>Wireframes</SectionTitle>
              <SectionDesc>
                A prototype is a general website model visualizing layout of all
                elements and features. A prototype helps illustrate all the
                concepts conclusively.
              </SectionDesc>
              <div className="wireframes">{renderImages()}</div>
            </div>
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-grid-section">
          <Container className="jft-grid-container">
            <SectionTitle>Grid</SectionTitle>
            <ImageWrapper src="/images/JFT/grid1.jpg" />
            <ImageWrapper src="/images/JFT/grid2.jpg" />
          </Container>
          <div className="jft-grid-container-wrapper">
            <Container>
              <div className="jft-grid-content">
                <ImageWrapper src="/images/JFT/grid3.jpg" />
                <ImageWrapper src="/images/JFT/grid4.jpg" />
              </div>
            </Container>
          </div>
          <Container>
            <ImageWrapper src="/images/JFT/grid5.jpg" />
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-mobile-adaptive-section">
          <Container>
            <div className="jft-mobile-adaptive-content">
              <SectionTitle isContentWhite>Mobile adaptive</SectionTitle>
              <SectionDesc isContentWhite>
                Mobile visits are 50% higher desktop visits on E-Commerce
              </SectionDesc>
            </div>
            <div className="jft-mobile-adaptive-content">
              <span>80+ Screens</span>
            </div>
          </Container>
          <ImageWrapper src="/images/JFT/mobile-adaptive.jpg" />
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-personal-account-section">
          <Container>
            <SectionTitle>Personal account</SectionTitle>
            <SectionDesc>
              Personalized offers, order history, b2b account - all this can be
              done the old-fashioned way by e-mail or the new way, in
              messengers. But the gold standart of good interaction with clients
              is a personal account.
            </SectionDesc>
            <ImageWrapper src="/images/JFT/personal-account.jpg" />
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-checkout-section">
          <Container>
            <SectionTitle>Checkout</SectionTitle>
            <SectionDesc>
              What remains is completing the order: opting for a shipping
              method, mentioning an address, applying a disctount and paying.
            </SectionDesc>
            <div className="jft-checkout-images">
              <ImageWrapper src="/images/JFT/checkout1.jpg" />
              <ImageWrapper src="/images/JFT/checkout2.jpg" />
            </div>
          </Container>
          <div className="jft-checkout-footer">
            <ImageWrapper src="/images/JFT/checkout3.jpg" />
            <ImageWrapper src="/images/JFT/checkout4.jpg" />
            <ImageWrapper src="/images/JFT/checkout5.jpg" />
          </div>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-admin-panel-section">
          <Container>
            <SectionTitle isContentWhite>Admin panel</SectionTitle>
            <SectionDesc isContentWhite>
              Client need to custom admin panel for his business processes.
            </SectionDesc>
            <ImageWrapper src="/images/JFT/admin-panel.jpg" />
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-management-section">
          <Container>
            <SectionTitle isContentWhite>B2B management</SectionTitle>
            <SectionDesc isContentWhite>
              Admin have control tools for management b2b clients.
            </SectionDesc>
            <div className="jft-management-images">
              <ImageWrapper src="/images/JFT/management1.jpg" />
              <ImageWrapper src="/images/JFT/management1.jpg" />
            </div>
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-other-section">
          <Container>
            <SectionTitle isContentWhite>Other</SectionTitle>
          </Container>
          <div className="jft-other-images-wrapper">
            <div className="jft-other-images">
              <ImageWrapper src="/images/JFT/other1.png" />
              <ImageWrapper src="/images/JFT/other2.png" />
              <ImageWrapper src="/images/JFT/other3.png" />
            </div>
            <div className="jft-other-images">
              <ImageWrapper src="/images/JFT/other4.png" />
              <ImageWrapper src="/images/JFT/other5.png" />
              <ImageWrapper src="/images/JFT/other6.png" />
            </div>
          </div>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="jft-footer-section">
          <Container>
            <SectionTitle>Thanks for watching!</SectionTitle>
            <SectionDesc>
              You can contact me in any way that is comfortable for you to
              discuss the project
            </SectionDesc>
            <span className="jft-footer-tg">
              t.me/vadik_parkhom <br />
              parhva@gmail.com
            </span>
          </Container>
        </section>
      </MyScrollAnimation>
    </MainWrapper>
  );
};

export default JFT;
