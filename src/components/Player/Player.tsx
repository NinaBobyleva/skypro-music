import { useAppDispatch, useAppSelector } from "@/store/store";
import styles from "./player.module.css";
import classNames from "classnames";
import { setCurrentTrack } from "@/store/features/currentTrackSlice";

type PlayerProps = {
  isPlaying: boolean,
  isLoop: boolean,
  handlePlay: () => void,
  handleLoop: () => void
}

export function Player({isPlaying, isLoop, handlePlay, handleLoop}: PlayerProps) {
  const currentTrack = useAppSelector((state) => state.current.currentTrackState);
  const dispatch = useAppDispatch();
  console.log(currentTrack?.id);
  const svg = () => {
    alert("Еще не реализовано")
  }

  // const handleNextTrack = () => {

  // }

  return (
    <div className={styles.playerControls}>
      <div onClick={svg} className={styles.playerBtnPrev}>
        <svg className={styles.playerBtnPrevSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div onClick={handlePlay} className={classNames(styles.playerBtnPlay, styles.btn)}>
        {isPlaying ? (<svg className={styles.playerBtnPlaySvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-pause" />
        </svg>) : (<svg className={styles.playerBtnPlaySvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-play" />
        </svg>)}
      </div>
      <div onClick={() => dispatch(setCurrentTrack(currentTrack))} className={styles.playerBtnNext}>
        <svg className={styles.playerBtnNextSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div onClick={handleLoop} className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
        <svg className={isLoop ? classNames(styles.playerBtnRepeatSvgActive, styles.btnIcon) : (styles.playerBtnRepeatSvg)}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div onClick={svg} className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
        <svg className={styles.playerBtnShuffleSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  );
}
