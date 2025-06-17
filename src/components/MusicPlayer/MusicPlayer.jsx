import { useState, useRef } from "react";
import "./MusicPlayer.scss";

import Cover1 from "../../assets/images/cover1.jpg";
import Cover2 from "../../assets/images/cover2.jpg";
import Cover3 from "../../assets/images/cover3.jpg";
import Cover4 from "../../assets/images/cover4.jpg";
import Cover5 from "../../assets/images/cover5.jpg";
import Cover6 from "../../assets/images/cover6.jpg";
import Audio1 from "../../assets/audio/audio1.mp3";
import Audio2 from "../../assets/audio/audio2.mp3";
import Audio3 from "../../assets/audio/audio3.mp3";
import Audio4 from "../../assets/audio/audio4.mp3";
import Audio5 from "../../assets/audio/audio5.mp3";
import Audio6 from "../../assets/audio/audio6.mp3";
import Button from "../ui/Button/Button";

const PlaylistArr = [
  {
    audio: Audio1,
    cover: Cover1,
    title: "Liquid",
    subtitle: "Kamil Malinowski - MLU",
  },
  {
    audio: Audio2,
    cover: Cover2,
    title: "Dark Ages",
    subtitle: "Kamil Malinowski - MLU",
  },
  {
    audio: Audio3,
    cover: Cover3,
    title: "Black Fortune",
    subtitle: "Kamil Malinowski - MLU",
  },
  {
    audio: Audio4,
    cover: Cover4,
    title: "Field of Glory",
    subtitle: "Kamil Malinowski - MLU",
  },
  {
    audio: Audio5,
    cover: Cover5,
    title: "New World",
    subtitle: "Kamil Malinowski - MLU",
  },
  {
    audio: Audio6,
    cover: Cover6,
    title: "Evil Touch",
    subtitle: "Kamil Malinowski - MLU",
  },
];

function formatTime(time) {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const currentMusic = PlaylistArr[currentIndex];

  const handleNext = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setCurrentIndex((prevIndex) =>
      prevIndex === PlaylistArr.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PlaylistArr.length - 1 : prevIndex - 1
    );
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };
  return (
    <section className="music-player">
      <audio
        className="music-player__audio"
        ref={audioRef}
        src={currentMusic.audio}
        controls
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onEnded={handleEnded}
      ></audio>

      <div className="music-player__cover">
        <img
          className="music-player__cover-image"
          src={currentMusic.cover}
          alt={currentMusic.title}
        />
      </div>

      <section className="music-player__audio-panel">
        <div className="music-player__controls"></div>
        <h2 className="music-player__title">{currentMusic.title}</h2>
        <p className="music-player__subtitle">{currentMusic.subtitle}</p>
        <div className="music-player__progress-panel">
          <div className="music-player__progress-track">
            <span className="music-player__progress-time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <div
              className="music-player__progress-bar"
              style={{
                width: duration ? `${(currentTime / duration) * 100}%` : "0%",
              }}
            ></div>
          </div>

          <Button
            onClick={handlePrev}
            variant="primary icon icon-only"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16675 15.8333V4.16663M13.6672 5.0663L8.80153 8.9588C8.35666 9.3147 8.13422 9.49265 8.05369 9.70763C7.98308 9.89612 7.98308 10.1038 8.05369 10.2923C8.13422 10.5073 8.35666 10.6852 8.80153 11.0411L13.6672 14.9336C14.3606 15.4884 14.7074 15.7658 14.9992 15.7661C15.253 15.7664 15.493 15.651 15.6514 15.4526C15.8334 15.2246 15.8334 14.7805 15.8334 13.8925V6.10746C15.8334 5.21938 15.8334 4.77533 15.6514 4.54727C15.493 4.34893 15.253 4.23354 14.9992 4.23381C14.7074 4.23413 14.3606 4.51152 13.6672 5.0663Z"
                  stroke="#191919"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Button
            onClick={handlePlayPause}
            variant="primary play"
            text={isPlaying ? "Pause" : "Play"}
          />

          <Button
            onClick={handleNext}
            variant="primary icon icon-only"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8334 4.16663V15.8333M6.33301 14.9336L11.1986 11.0411C11.6435 10.6852 11.8659 10.5073 11.9465 10.2923C12.0171 10.1038 12.0171 9.89612 11.9465 9.70763C11.8659 9.49265 11.6435 9.3147 11.1986 8.9588L6.33301 5.0663C5.63953 4.51152 5.29279 4.23413 5.00098 4.23381C4.7472 4.23354 4.50712 4.34893 4.3488 4.54727C4.16675 4.77533 4.16675 5.21938 4.16675 6.10746V13.8925C4.16675 14.7805 4.16675 15.2246 4.3488 15.4526C4.50712 15.651 4.7472 15.7664 5.00098 15.7661C5.29279 15.7658 5.63953 15.4884 6.33301 14.9336Z"
                  stroke="#191919"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </section>
    </section>
  );
}

export default MusicPlayer;
