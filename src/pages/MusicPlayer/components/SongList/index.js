import React from "react";
import { connect } from "react-redux";
import { playList } from "../../../../data";
import { selectTrack, pauseSelectedTrack } from "../../../../store/actions";
import { Grid, H1 } from "../../../../components_shared";
import { colors } from "../../../../theme";
import { TrackItem } from "./components";

const styles = {
  pageLayout: {
    width: "30%",
    borderRight: `2px solid ${colors.pageDivider}`,
    minHeight: "100vh"
  },
  title: {
    textAlign: "center",
    padding: 10,
    marginBottom: 20
  }
};

const renderPlayList = (playList, props) =>
  playList.map((track, index) => (
    <TrackItem
      trackNumber={index + 1}
      key={track.album}
      title={track.title}
      artist={track.artist}
      album={track.album}
      testID="track-item"
      onClick={() => handleClick(index, props)}
      selected={index === props.currentTrackIndex}
    />
  ));

const handleClick = (index, props) => {
  const {
    dispatchSelectedTrack,
    dispatchPauseSelectedTrack,
    isPlaying
  } = props;

  return isPlaying
    ? dispatchPauseSelectedTrack()
    : dispatchSelectedTrack(index);
};

const SongList = props => {
  return (
    <Grid item style={styles.pageLayout}>
      <Grid item style={styles.title}>
        <H1 testID="playlist-title">Your Playlist</H1>
      </Grid>
      <Grid item data-testid="user-playlist">
        {renderPlayList(playList, props)}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  selectedTrack: state.selectedTrack,
  currentTrackIndex: state.trackIndex,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => ({
  dispatchSelectedTrack: index => dispatch(selectTrack(index)),
  dispatchPauseSelectedTrack: () => dispatch(pauseSelectedTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
