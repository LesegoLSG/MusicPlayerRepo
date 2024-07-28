import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

// Create a context for the music player
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  // References for audio element and seek bar elements
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  // State to keep track of the current track, player status, and time
  const [track, setTrack] = useState(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  // Function to play the current track
  const play = () => {
    audioRef.current.play();
    setPlayerStatus(true);
  };
  // Function to pause the current track
  const pause = () => {
    audioRef.current.pause();
    setPlayerStatus(false);
  };
  // Function to play a track by its ID
  const playUsingId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayerStatus(true);
  };
  // Function to play the previous track
  const prev = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayerStatus(true);
    }
  };
  // Function to play the next track
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayerStatus(true);
    }
  };
  // Function to seek the song to a specific time based on click position
  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };
  // Update time and seek bar width based on audio progress
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";

        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  // Context value to provide
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
    playUsingId,
    prev,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
