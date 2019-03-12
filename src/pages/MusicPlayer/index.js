import React from "react";
import { PageWrapper } from "../../components";
import { SongList, PlayerArea } from "./components";

const MusicPlayer = () => (
  <PageWrapper>
    <SongList />
    <PlayerArea />
  </PageWrapper>
);

export default MusicPlayer;
