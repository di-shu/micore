import { ActiveLink, MyScrollAnimation } from "../SectionsComponents";

const Logo = "/images/logo.svg";

export const HeaderLogo = () => {
  return (
    <div className="logo">
      <ActiveLink link="/">
        <img src={Logo} alt="Logo" />
      </ActiveLink>
    </div>
  );
};
