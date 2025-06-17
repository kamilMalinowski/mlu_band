import MenuBtn from "../ui/MenuBtn/MenuBtn";

import Logo from "../../assets/icons/logo.svg?react";
import IconFb from "../../assets/icons/fb.svg?react";
import IconYT from "../../assets/icons/yt.svg?react";
import IconBio from "../../assets/icons/bio.svg?react";
import IconMusic from "../../assets/icons/music.svg?react";
import IconStore from "../../assets/icons/store.svg?react";
import IconVideo from "../../assets/icons/videos.svg?react";
import IconContact from "../../assets/icons/contact.svg?react";
import IconSpotify from "../../assets/icons/spotify.svg?react";
import IconInst from "../../assets/icons/instagram.svg?react";

import "./NavPopup.scss";

function NavPopup({state, onClick}) {
  return (
    <section className={`nav ${state}`}>
      <MenuBtn state="close" onClick={onClick}/>
      <nav className="nav__links">
        <a className="nav__link-logo" href="">
          <Logo  />
        </a>
        <a className="nav__link" href="">
          <span className="nav__link-text">Music</span>
          <IconMusic />
        </a>
        <a className="nav__link" href="">
          <span className="nav__link-text">Videos</span>
          <IconVideo />
        </a>
        <a className="nav__link" href="">
          <span className="nav__link-text">Store</span>
          <IconStore />
        </a>
        <a className="nav__link" href="">
          <span className="nav__link-text">Bio</span>
          <IconBio />
        </a>
        <a className="nav__link" href="">
          <span className="nav__link-text">Contact</span>
          <IconContact />
        </a>
      </nav>

      <section className="nav__socialmedia">
        <a className="nav__socialmedia-link" href="">
          <IconFb />
        </a>
        <a className="nav__socialmedia-link" href="">
          <IconYT />
        </a>
        <a className="nav__socialmedia-link" href="">
          <IconInst />
        </a>
        <a className="nav__socialmedia-link" href="">
          <IconSpotify />
        </a>
      </section>
    </section>
  );
}

export default NavPopup;
