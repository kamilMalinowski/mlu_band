import MenuBtn from "../ui/MenuBtn/MenuBtn";

import Logo from "../../assets/icons/logo.svg?react";
import FbIcon from "../../assets/icons/fb.svg?react";
import YTIcon from "../../assets/icons/yt.svg?react";
import BioIcon from "../../assets/icons/bio.svg?react";
import MusicIcon from "../../assets/icons/music.svg?react";
import StoreIcon from "../../assets/icons/store.svg?react";
import VideosIcon from "../../assets/icons/videos.svg?react";
import ContactIcon from "../../assets/icons/contact.svg?react";
import SpotifyIcon from "../../assets/icons/spotify.svg?react";
import InstagramIcon from "../../assets/icons/instagram.svg?react";

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
          <MusicIcon />
        </a>
        <a className="nav__link" href="">
          <span className="nav__link-text">Videos</span>
          <VideosIcon />
        </a>
        <a className="nav__link" href="">
          <span className="nav__link-text">Store</span>
          <StoreIcon />
        </a>
        <a className="nav__link" href="">
          <span className="nav__link-text">Bio</span>
          <BioIcon />
        </a>
        <a className="nav__link" href="">
          <span className="nav__link-text">Contact</span>
          <ContactIcon />
        </a>
      </nav>

      <section className="nav__socialmedia">
        <a className="nav__socialmedia-link" href="">
          <FbIcon />
        </a>
        <a className="nav__socialmedia-link" href="">
          <YTIcon />
        </a>
        <a className="nav__socialmedia-link" href="">
          <InstagramIcon />
        </a>
        <a className="nav__socialmedia-link" href="">
          <SpotifyIcon />
        </a>
      </section>
    </section>
  );
}

export default NavPopup;
