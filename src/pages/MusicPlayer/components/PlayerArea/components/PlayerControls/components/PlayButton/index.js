import React from "react";
import { connect } from "react-redux";
import {
  playSelectedTrack,
  pauseSelectedTrack
} from "../../../../../../../../store/actions";
import { Button } from "../../../../../../../../components";
import playIcon from "../../../../../../assets/baseline-play_circle_outline-24px.svg";
import pauseIcon from "../../../../../../assets/baseline-pause-24px.svg";

const styles = {
  button: {
    width: "90%",
    height: "auto"
  }
};

const renderPlayButton = dispatchPlaySelectedTrack => (
  <Button onClick={() => dispatchPlaySelectedTrack()}>
    <img src={playIcon} alt="play-button" style={styles.button} />
  </Button>
);

const renderPauseButton = dispatchPauseSelectedTrack => (
  <Button onClick={() => dispatchPauseSelectedTrack()}>
    <img src={pauseIcon} alt="pause-button" style={styles.button} />
  </Button>
);

const PlayButton = props => {
  const {
    dispatchPlaySelectedTrack,
    dispatchPauseSelectedtrack,
    isPlaying
  } = props;

  return isPlaying
    ? renderPauseButton(dispatchPauseSelectedtrack)
    : renderPlayButton(dispatchPlaySelectedTrack);
};

const mapStateToProps = state => ({
  isPlaying: state.isPlaying,
  selectedTrack: state.selectedTrack
});

const mapDispatchToProps = dispatch => ({
  dispatchPlaySelectedTrack: () => dispatch(playSelectedTrack()),
  dispatchPauseSelectedtrack: () => dispatch(pauseSelectedTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
