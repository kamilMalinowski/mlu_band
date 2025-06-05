import "./MusicPlayer.scss";

function MusicPlayer() {
  return (
    <section className="music-player">
      <audio className="music-player__audio" src=""></audio>
      <div className="music-player__cover"></div>
      <section className="music-player__audio-panel">
        <h2 className="music-player__title">Pyramid of Peril</h2>
        <p className="music-player__subtitle">My Little Universe</p>
        <div className="music-player__progress-panel">
          <div className="music-player__progress-track">
            <span className="music-player__progress-time">4:47 / 7:30</span>
            <div className="music-player__progress-bar"></div>
          </div>
          <button className="music-player__play-btn">Play</button>
        </div>
      </section>
    </section>
  );
}

export default MusicPlayer;
