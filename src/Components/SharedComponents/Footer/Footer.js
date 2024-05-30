import { Container, Form } from "react-bootstrap";
import "./footer.scss";
import {
  ActiveLink,
  ImageWrapper,
  SectionTitle,
  SocialsWrap,
} from "../../SectionsComponents";
import { MenuLinks } from "../../Config";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { InputControl } from "../../Inputs";
import { AlternativeButton } from "../../SectionsComponents/AlternativeButton";
import { isMobile } from "react-device-detect";
import { SuccessModal } from "../SuccessModal/SuccessModal";
const FooterLogo = "/images/alternative-footer-logo.svg";

const FormInputs = [
  {
    id: "name",
    label: "Имя",
    required: true,
    placeholder: "Имя",
  },
  {
    id: "phone",
    type: "tel",
    label: "Телефон",
    mask: "+38 (099) 999-99-99",
    required: true,
    placeholder: "+38 (XXX) XXX XX XX",
  },
  {
    id: "message",
    type: "textarea",
    placeholder: "Сообщение",
  },
];

export const Footer = () => {
  const { t } = useTranslation("menu");
  const [values, setValues] = useState({ name: "", phone: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleFormChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const renderLinks = () => {
    return MenuLinks.map(({ linkTitle, to }) => {
      const type = to.split("/")[1];
      const translateKey = `${type}.${linkTitle}`;
      return (
        <ActiveLink link={to} key={linkTitle} className="footer-contacts-link">
          {t(translateKey)}
        </ActiveLink>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // $.ajax({
    //   method: "POST",
    //   url: "https://micore-admin.comnd-x.com/send",
    //   data: {
    //     ...values,
    //     url: pathname,
    //     country: "RU",
    //   },
    //   success: () => {
    //     setIsModalShown(true);
    //     setValues(InitValues);
    //   },
    //   error: () => {
    //     alert("Ошибка при отправке заявки!");
    //   },
    //   complete: () => {
    //     setIsLoading(false);
    //   },
    // });
  };

  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <ImageWrapper src={FooterLogo} className="footer-logo" />
          <div className="footer-sections">
            <SectionTitle title="Sections" isContentWhite />
            <nav>{renderLinks()}</nav>
          </div>
          <div className="footer-contacts">
            <SectionTitle title="Contacts" isContentWhite />
            <a href="tel:+3809718400097">
              <span>+38 (097) 184 00 09</span>
            </a>
            <a href="mailto:micore.studio@gmail.com">micore@gmail.com</a>
            <p>Одесса, ул. Львовская 48</p>
            <SocialsWrap isGray={isMobile} />
          </div>
          <div className="footer-form">
            <SectionTitle title="Contact us" isContentWhite />
            <form onSubmit={handleSubmit}>
              {FormInputs.map(
                ({ id, type, rows, required, mask, placeholder }) => (
                  <InputControl
                    id={id}
                    type={type}
                    rows={rows}
                    mask={mask}
                    value={values[id]}
                    required={required}
                    onInput={handleFormChange}
                    placeholder={placeholder}
                    key={id}
                  />
                )
              )}
              <AlternativeButton disabled={isLoading}>
                Send
                {isLoading && <div className="preloader" />}
              </AlternativeButton>
            </form>
          </div>
          <div className="copyrights">micorestudio.com © 2017-2024</div>
        </div>
      </Container>
      <SuccessModal
        isShown={isModalShown}
        closeModal={() => setIsModalShown(false)}
      />
    </footer>
  );
};
