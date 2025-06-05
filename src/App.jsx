import { useState } from "react";

import InfoSection from "./components/InfoSection/InfoSection";
import MainHeader from "./components/MainHeader/MainHeader";
import NavPopup from "./components/NavPopup/NavPopup";
import HeroSection from "./components/HeroSection/HeroSection";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  return (
    <>
      <InfoSection />
      <MainHeader state={menuOpen ? "close" : "open"} onClick={toggleMenu} />
      <NavPopup state={menuOpen ? "open" : "close"} onClick={toggleMenu} />
      <main>
        <HeroSection />
        <MusicPlayer />
      </main>
    </>
  );
}

export default App;
