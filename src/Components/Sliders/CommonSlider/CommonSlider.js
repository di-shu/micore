import "./commonSlider.scss";

export const CommonSlider = ({ children }) => {
  return (
    <div className="common-slider">
      <div className="slides-container">{children}</div>
    </div>
  );
};
