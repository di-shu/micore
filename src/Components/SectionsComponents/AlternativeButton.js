import { ActiveLink } from "./ActiveLink";

export const AlternativeButton = ({
  children,
  isLink,
  to,
  disabled = false,
  className,
}) => {
  const ClassList = `alternative-button ${className}`;

  return isLink ? (
    <ActiveLink className={ClassList} link={to}>
      {children}
    </ActiveLink>
  ) : (
    <button disabled={disabled} className={ClassList}>
      {children}
    </button>
  );
};
