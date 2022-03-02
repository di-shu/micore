import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";

const RegistratinImg = "/images/Dealok/registration.png";
const Autorization1 = "/images/Dealok/autorization-mobile.png";
const Autorization2 = "/images/Dealok/autorization-desktop.png";
const Password1 = "/images/Dealok/password-1.png";
const Password2 = "/images/Dealok/password-2.png";

const ProfileImages = () => (
  <>
    <div className="container-plus">
      <div className="top-images">
        <ImageWrapper
          src={RegistratinImg}
          className="top-images-registration"
        />
        <div className="top-images__autorization">
          <ImageWrapper
            src={Autorization1}
            className="top-images__autorization-1"
          />
          <ImageWrapper
            src={Autorization2}
            className="top-images__autorization-2"
          />
        </div>
      </div>
    </div>
    <div className="bottom-images">
      <ImageWrapper src={Password1} className="bottom-images__password-1" />
      <ImageWrapper src={Password2} className="bottom-images__password-2" />
    </div>
  </>
);

export const Profile = () => {
  return (
    <SectionLayout id="dealok-profile" Footer={ProfileImages}>
      <SectionTitle title="Profile" />
    </SectionLayout>
  );
};
