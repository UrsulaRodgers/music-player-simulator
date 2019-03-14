import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  playSelectedTrack,
  pauseSelectedTrack
} from "../../../../../../../../store/actions";
import { Button } from "../../../../../../../../components_shared";
import playIcon from "../../../../../../assets/baseline-play_circle_outline-24px.svg";
import pauseIcon from "../../../../../../assets/baseline-pause-24px.svg";

const renderPlayButton = dispatchPlaySelectedTrack => (
  <Button onClick={() => dispatchPlaySelectedTrack()} data-testid="play-button">
    <img className="large_button-icon" src={playIcon} alt="play-button" />
  </Button>
);

const renderPauseButton = dispatchPauseSelectedTrack => (
  <Button
    onClick={() => dispatchPauseSelectedTrack()}
    data-testid="pause-button"
  >
    <img className="large_button-icon" src={pauseIcon} alt="pause-button" />
  </Button>
);

const PlayPauseButton = props => {
  const {
    dispatchPlaySelectedTrack,
    dispatchPauseSelectedtrack,
    isPlaying
  } = props;

  return isPlaying
    ? renderPauseButton(dispatchPauseSelectedtrack)
    : renderPlayButton(dispatchPlaySelectedTrack);
};

PlayPauseButton.propTypes = {
  dispatchPlaySelectedTrack: PropTypes.func,
  dispatchPauseSelectedTrack: PropTypes.func,
  isPlaying: PropTypes.bool,
  selectedTrack: PropTypes.object,
  onClick: PropTypes.func
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
)(PlayPauseButton);
