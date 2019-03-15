import React from "react";
import PropTypes from "prop-types";
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
  onClick: PropTypes.func
};

export default PlayPauseButton;
