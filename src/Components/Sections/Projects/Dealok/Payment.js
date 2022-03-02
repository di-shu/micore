import React from "react";
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";

const RegistratinImg = "/images/Dealok/profile-reg.png";
const Autorization1 = "/images/Dealok/profile-auth-1.png";
const Autorization2 = "/images/Dealok/profile-auth-2.png";

const PaymentImages = () => (
  <div className="container-plus">
    <div className="payment-images">
      <ImageWrapper src={RegistratinImg} className="payment-images__registration" />
      <div className="payment-images__autorization">
        <ImageWrapper
          src={Autorization1}
          className="payment-images__autorization-1"
        />
        <ImageWrapper
          src={Autorization2}
          className="payment-images__autorization-2"
        />
      </div>
    </div>
  </div>
);

export const Payment = () => {
  return (
    <SectionLayout id="dealok-payment" Footer={PaymentImages}>
      <SectionTitle title="Payment" />
    </SectionLayout>
  );
};
