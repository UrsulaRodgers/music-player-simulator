import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { playList } from "../../../../data";
import { selectTrack, pauseSelectedTrack } from "../../../../store/actions";
import { Grid } from "../../../../components_shared";
import { TrackItem } from "./components";

const renderPlayList = (playList, props) =>
  playList.map((track, index) => (
    <TrackItem
      trackNumber={index + 1}
      key={track.album}
      title={track.title}
      duration={track.length}
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

const SongList = props => (
  <Grid className="songlist_pagelayout" item xs={12} md={4}>
    <Grid item className="songlist_title">
      <h1 className="header" data-testid="playlist-title">
        Your Playlist
      </h1>
    </Grid>
    <Grid item data-testid="user-playlist">
      {renderPlayList(playList, props)}
    </Grid>
  </Grid>
);

SongList.propTypes = {
  dispatchSelectedTrack: PropTypes.func,
  dispatchPauseSelectedTrack: PropTypes.func,
  selectedTrack: PropTypes.object,
  currentTrackIndex: PropTypes.number,
  isPlaying: PropTypes.bool
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
