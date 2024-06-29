"use client";
import { TrackType } from "@/types/tracks";
import styles from "./track.module.css";
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";
import { timeFormat } from "../../utils/helpers";
import { useEffect } from "react";
import classNames from "classnames";

type TrackProps = {
  track: TrackType;
};

export function Track({ track }: TrackProps) {
  const { currentTrack, setCurrentTrack, isPlaying, setIsPlaying, audioRef } = useCurrentTrack();
  const { name, author, album, duration_in_seconds } = track;

  const handleTrackClick = () => {
    setCurrentTrack(track);
  }

  useEffect(() => {
    audioRef.current?.play();
    setIsPlaying(true);
  }, [currentTrack])

  const time = timeFormat(duration_in_seconds);

  return (
    <div onClick={handleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {currentTrack?.id === track.id ? (<svg className={isPlaying ? classNames(styles.trackTitleSvg, styles.playingDot) : styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-dot" />
            </svg>) : (<svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>)}
          </div>
          <div>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan} />
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>{time}</span>
        </div>
      </div>
    </div>
  );
}
