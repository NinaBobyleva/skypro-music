import { getTracks } from "@/api/tracks";
import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import styles from "./tracks.module.css"
import { TrackType } from "@/types/tracks";

export async function Tracks() {
  let tracks: TrackType[] = [];
  let error = "";
  
  try {
    tracks = await getTracks();
  } catch (err: unknown) {
    error = err instanceof Error ? "Ошибка при загрузке треков " + err.message : "Неизвестная ошибка" ;
  }
  return (
    <>
      {error && error}
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter tracks={tracks} />
      <Playlist tracks={tracks}/>
    </>
  );
}
