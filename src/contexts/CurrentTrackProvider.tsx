"use client";
import { TrackType } from "@/types/tracks";
import {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

type CurrentTrackContextValue = {
  currentTrack: TrackType | null;
  setCurrentTrack: Dispatch<SetStateAction<TrackType | null>>;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
};
const CurrentTrackContext = createContext<CurrentTrackContextValue | undefined>(
  undefined
);

type CurrentTrackProviderProps = {
  children: ReactNode;
};

export function CurrentTrackProvider({ children }: CurrentTrackProviderProps) {
  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <CurrentTrackContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        audioRef,
      }}
    >
      {children}
    </CurrentTrackContext.Provider>
  );
}

export function useCurrentTrack() {
  const context = useContext(CurrentTrackContext);
  if (context === undefined) {
    throw new Error("useCurrentTrack должен использоваться внутри провайдера");
  }
  return context;
}
