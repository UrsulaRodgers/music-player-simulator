import React from "react";
import { Grid, H1 } from "../../../../components";
import { colors } from "../../../../theme";
import { playList } from "../../../../data";
import { TrackItem } from "./components";

const styles = {
  pageLayout: {
    width: "30%",
    borderRight: `1px solid ${colors.pageDivider}`,
    minHeight: "100vh"
  },
  title: {
    textAlign: "center",
    padding: 10,
    marginBottom: 20
  }
};

const renderPlayList = () =>
  playList.map((track, index) => (
    <TrackItem
      trackNumber={index + 1}
      key={track.artist}
      title={track.title}
      artist={track.artist}
      album={track.album}
      testID="track-item"
    />
  ));

const SongList = () => (
  <Grid item style={styles.pageLayout}>
    <Grid item style={styles.title}>
      <H1 testID="playlist-title">Your Playlist</H1>
    </Grid>
    <Grid item data-testid="user-playlist">
      {renderPlayList()}
    </Grid>
  </Grid>
);

export default SongList;
