import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../../../../../../components_shared";
import playIcon from "../../../../../../assets/baseline-play_circle_outline-24px.svg";
import pauseIcon from "../../../../../../assets/baseline-pause-24px.svg";

const renderPlayButton = dispatchResumeTimer => (
  <Button onClick={() => dispatchResumeTimer()} data-testid="play-button">
    <img className="large_button-icon" src={playIcon} alt="play-button" />
  </Button>
);

const renderPauseButton = dispatchPauseTimer => (
  <Button onClick={() => dispatchPauseTimer()} data-testid="pause-button">
    <img className="large_button-icon" src={pauseIcon} alt="pause-button" />
  </Button>
);

const PlayPauseButton = props => {
  const { dispatchPauseTimer, isPaused, dispatchResumeTimer } = props;

  return isPaused
    ? renderPlayButton(dispatchResumeTimer)
    : renderPauseButton(dispatchPauseTimer);
};

PlayPauseButton.propTypes = {
  isPaused: PropTypes.bool,
  onClick: PropTypes.func,
  dispatchPauseTimer: PropTypes.func,
  dispatchResumeTimer: PropTypes.func
};

export default PlayPauseButton;
