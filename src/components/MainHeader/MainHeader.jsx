import MenuBtn from "../ui/MenuBtn/MenuBtn";

import Logo from "../../assets/icons/logo.svg?react";

import "./MainHeader.scss";

function MainHeader({state, onClick}) {
  return (
    <div className="sticky">
      <header className={`main-header ${state}`}>
        <div className="main-header__section">
          <a className="main-header__logo-link" href="">
            <Logo />
          </a>
          <MenuBtn state="menu" onClick={onClick}/>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
