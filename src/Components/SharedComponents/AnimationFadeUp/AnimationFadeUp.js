import "./animation-fade-up.scss";

export const AnimationFadeUp = ({ className, children }) => {
  return (
    <div className={`animation-fade-up-container ${className}`}>{children}</div>
  );
};
