import { Container } from "react-bootstrap";
import {
  ImageWrapper,
  MainWrapper,
  MyScrollAnimation,
  SectionDesc,
  SectionTitle,
} from "../../src/Components";
import { Main } from "../../src/Components/Sections/Projects/EasyAcademy";
import "../../src/Styles/Pages/Projects/easy-academy.scss";

const EasyAcademy = () => {
  return (
    <MainWrapper id="easy-academy-project-page">
      <Main />
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="easy-academy-approach-section">
          <Container>
            <SectionTitle className="easy-academy-approach-title">
              My approach to <br /> creating a user-oriented experience
            </SectionTitle>
            <SectionDesc className="easy-academy-approach-desc">
              My approach to the project involved conducting thorough research
              on the needs of the target audience - high school students and
              their parents. I conducted a series of user interviews, surveys,
              and competitive market analysis to better understand which
              features and capabilities are most important for successful
              preparation for the External Independent Evaluation (ZNO).
            </SectionDesc>
            <ImageWrapper src="/images/EasyAcademy/approach1.jpg" />
            <div className="easy-academy-approach-project-goals">
              <div className="easy-academy-project-goal">
                <SectionTitle>Project info</SectionTitle>
                <SectionDesc>
                  Easy Academy is an online platform designed to help students
                  prepare for the ZNO (Zovnishne nezalezhne otsinyuvannya), a
                  crucial examination for university admissions in Ukraine.
                </SectionDesc>
              </div>
              <div className="easy-academy-project-goal">
                <SectionTitle>Problem</SectionTitle>
                <SectionDesc>
                  Many students struggle with the complexity and vast amount of
                  study materials for the ZNO. They need a user-friendly and
                  efficient platform to effectively learn and practice for the
                  exam.
                </SectionDesc>
              </div>
              <div className="easy-academy-project-goal">
                <SectionTitle>Solution</SectionTitle>
                <SectionDesc>
                  Easy Academy provides a streamlined and intuitive learning
                  experience. It offers organized study materials, interactive
                  exercises, and progress tracking, enabling students to prepare
                  effectively and boost their chances of success.
                </SectionDesc>
              </div>
            </div>
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="easy-academy-wireframes-section">
          <Container>
            <div className="easy-academy-wireframes-head">
              <SectionTitle>Wireframing</SectionTitle>
              <SectionDesc>
                Based on the collected data, I developed the information
                architecture and created user interface prototypes, which were
                presented to the development team and stakeholders for feedback
                and approval.
              </SectionDesc>
            </div>
            <div className="easy-academy-wireframes">
              <div className="easy-academy-wireframe">
                <img src="/images/EasyAcademy/wireframe1.jpg" />
                <img src="/images/EasyAcademy/wireframe2.jpg" />
              </div>
              <div className="easy-academy-wireframe">
                <img src="/images/EasyAcademy/wireframe3.jpg" />
                <img src="/images/EasyAcademy/wireframe4.jpg" />
                <img src="/images/EasyAcademy/wireframe5.jpg" />
                <img src="/images/EasyAcademy/wireframe6.jpg" />
              </div>
              <div className="easy-academy-wireframe">
                <img src="/images/EasyAcademy/wireframe7.jpg" />
                <img src="/images/EasyAcademy/wireframe8.jpg" />
              </div>
              <div className="easy-academy-wireframe">
                <img src="/images/EasyAcademy/wireframe9.jpg" />
                <img src="/images/EasyAcademy/wireframe10.jpg" />
                <img src="/images/EasyAcademy/wireframe11.jpg" />
              </div>
            </div>
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="easy-academy-font-section">
          <Container>
            <div className="section-content-wrapper">
              <div className="section-content">
                <SectionTitle>Ukrainian font</SectionTitle>
                <SectionDesc>
                  Since the project targets a Ukrainian audience, it was decided
                  to use a Ukrainian font. This choice was made to create a more
                  authentic and relevant visual image that reflects the cultural
                  characteristics and identity of the Ukrainian people. The
                  Ukrainian font helps establish a connection with the users and
                  create a comfortable and familiar atmosphere that promotes
                  more effective interaction and usage of the platform.
                </SectionDesc>
              </div>
              <div className="section-content">
                <SectionTitle>e-Ukraine</SectionTitle>
                <div className="font-weights">
                  <div className="font-weight">
                    <span>Aa Bb Cc Dd Ee Ff Gg</span>
                    <span>1 2 3 4 5 6 7 8 9 0</span>
                  </div>
                  <div className="font-weight">
                    <span>Aa Bb Cc Dd Ee Ff Gg</span>
                    <span>1 2 3 4 5 6 7 8 9 0</span>
                  </div>
                  <div className="font-weight">
                    <span>Aa Bb Cc Dd Ee Ff Gg</span>
                    <span>1 2 3 4 5 6 7 8 9 0</span>
                  </div>
                  <div className="font-weight">
                    <span>Aa Bb Cc Dd Ee Ff Gg</span>
                    <span>1 2 3 4 5 6 7 8 9 0</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="easy-academy-uikit-section">
          <Container>
            <SectionTitle>UI Kit</SectionTitle>
            <div className="easy-academy-uikit-images">
              <div className="uikit-images">
                <img
                  className="uikit-image"
                  src="/images/EasyAcademy/uikit1.jpg"
                />
                <div className="uikit-image-col">
                  <img src="/images/EasyAcademy/uikit2.jpg" />
                  <img src="/images/EasyAcademy/uikit3.jpg" />
                </div>
              </div>
              <div className="uikit-images">
                <div className="uikit-image-col">
                  <img src="/images/EasyAcademy/uikit4.jpg" />
                  <img src="/images/EasyAcademy/uikit5.jpg" />
                </div>
                <div className="uikit-image-col">
                  <img src="/images/EasyAcademy/uikit6.jpg" />
                  <div className="uikit-image-col-images">
                    <img src="/images/EasyAcademy/uikit7.jpg" />
                    <img src="/images/EasyAcademy/uikit8.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="easy-academy-promo-section">
          <Container>
            <div className="promo-section-image-wrapper">
              <img src="/images/EasyAcademy/promo1.jpg" />
            </div>
            <div className="promo-section-content">
              <SectionTitle>Promo page</SectionTitle>
              <SectionDesc>
                The promo page visually represents the key features of the
                platform: unique design, vibrant illustrations, and
                attention-grabbing headlines that captivate visitors. With
                concise descriptions and compelling benefits, the page
                introduces users to the platform's main features and advantages.
              </SectionDesc>
              <div className="promo-section-image-wrapper">
                <img src="/images/EasyAcademy/promo2.jpg" />
              </div>
            </div>
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="easy-academy-lessons-section">
          <Container>
            <div className="lessons-section-content">
              <SectionTitle>Lessons</SectionTitle>
              <SectionDesc>
                In the lessons section, Easy Academy users can find a wide range
                of study materials organized by topics and subjects of the
                External Independent Evaluation (ZNO). Each lesson presents
                informative and easily digestible content, including texts,
                graphics, and interactive elements. Intuitive navigation allows
                users to move seamlessly between lessons, track their progress,
                and save interesting materials for review.
              </SectionDesc>
            </div>
            <img src="/images/EasyAcademy/lessons.jpg" />
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="easy-academy-testing-section">
          <Container>
            <div className="testing-section-content">
              <SectionTitle>Testing</SectionTitle>
              <SectionDesc>
                The testing section offers students the opportunity to assess
                their knowledge and prepare for the ZNO. A broad selection of
                practice tests with varying levels of difficulty and time
                constraints is provided to help students become familiar with
                exam conditions. Test results are analyzed, and students receive
                detailed feedback and recommendations for improving their
                knowledge and skills.
              </SectionDesc>
            </div>
          </Container>
          <div className="testing-section-images">
            <div className="section-images-group">
              <img src="/images/EasyAcademy/testing1.jpg" />
            </div>
            <div className="section-images-group">
              <img src="/images/EasyAcademy/testing2.jpg" />
              <img src="/images/EasyAcademy/testing3.jpg" />
            </div>
            <div className="section-images-group">
              <img src="/images/EasyAcademy/testing4.jpg" />
              <img src="/images/EasyAcademy/testing5.jpg" />
            </div>
            <div className="section-images-group">
              <img src="/images/EasyAcademy/testing6.jpg" />
              <img src="/images/EasyAcademy/testing7.jpg" />
            </div>
          </div>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="easy-academy-darktheme-section">
          <Container>
            <div className="darktheme-section-content">
              <SectionTitle>Dark theme</SectionTitle>
              <SectionDesc>
                Easy Academy offers the option to choose a dark theme for users
                who prefer a darker background or work in low-light conditions.
                The dark theme creates a comfortable atmosphere for users and
                reduces eye strain during prolonged platform usage.
              </SectionDesc>
            </div>
            <img src="/images/EasyAcademy/dark-theme1.jpg" />
            <img src="/images/EasyAcademy/dark-theme2.jpg" />
            <img src="/images/EasyAcademy/dark-theme3.jpg" />
            <img src="/images/EasyAcademy/dark-theme4.jpg" />
            <img src="/images/EasyAcademy/dark-theme5.jpg" />
          </Container>
        </section>
      </MyScrollAnimation>
      <MyScrollAnimation animationName="fadeIn" offset={200}>
        <section className="easy-academy-footer-section">
          <Container>
            <SectionTitle>Thanks for watching!</SectionTitle>
            <SectionDesc>
              You can contact me in any way that is comfortable for you to
              discuss the project
            </SectionDesc>
            <span className="easy-academy-footer-tg">
              t.me/vadik_parkhom <br />
              parhva@gmail.com
            </span>
          </Container>
        </section>
      </MyScrollAnimation>
    </MainWrapper>
  );
};

export default EasyAcademy;
