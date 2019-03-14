import React from "react";
import { PageWrapper } from "../../components";
import { playList } from "../../data";
import { SongList, PlayerArea } from "./components";

const MusicPlayer = () => (
  <PageWrapper>
    <SongList playList={playList} />
    <PlayerArea playList={playList} />
  </PageWrapper>
);

export default MusicPlayer;
