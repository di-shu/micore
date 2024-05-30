import useTranslation from "next-translate/useTranslation";
import "./success-modal.scss";
import { Modal } from "react-bootstrap";

export const SuccessModal = ({ isShown, closeModal }) => {
  const { t } = useTranslation("footer");

  return (
    <Modal size="lg" centered show={isShown} className="modal-success">
      <div className="modal-content-wrap">
        <h1 className="modal-title">{t("success_title")}</h1>
        <h5 className="modal-sub-title">{t("success_sub_title")}</h5>
        <button type="button" className="custom-btn" onClick={closeModal}>
          <span>{t("success_button")}</span>
        </button>
      </div>
    </Modal>
  );
};
