import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { playList } from "../../../../data";
import { renderDuration } from "../../../../utils/timer";
import { selectTrack } from "../../../../store/actions";
import { Grid } from "../../../../components_shared";
import { TrackItem } from "./components";

const renderPlayList = (playList, props) =>
  playList.map((track, index) => (
    <TrackItem
      trackNumber={index + 1}
      key={track.album}
      title={track.title}
      duration={renderDuration(track.length)}
      artist={track.artist}
      album={track.album}
      testID="track-item"
      onClick={() => handleClick(index, props)}
      selected={index === props.currentTrackIndex}
    />
  ));

const handleClick = (index, props) => {
  const { dispatchSelectedTrack } = props;
  return dispatchSelectedTrack(index);
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
  currentTrackIndex: PropTypes.number
};

const mapStateToProps = state => ({
  currentTrackIndex: state.trackIndex
});

const mapDispatchToProps = dispatch => ({
  dispatchSelectedTrack: index => dispatch(selectTrack(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
