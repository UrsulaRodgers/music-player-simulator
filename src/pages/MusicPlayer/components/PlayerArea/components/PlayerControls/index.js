import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "../../../../../../components_shared";
import {
  playNextTrack,
  playPrevTrack,
  playSelectedTrack,
  pauseSelectedTrack,
  resetPlay,
  resumeTimer,
  pauseTimer
} from "../../../../../../store/actions";
import {
  PlayPauseButton,
  PlayProgress,
  NextButton,
  PrevButton
} from "./components";

const PlayerControls = props => {
  const { selectedTrack, count } = props;

  return (
    selectedTrack && (
      <Grid container alignItems="center" justify="center">
        <Grid className="playercontrols" item>
          <PrevButton {...props} />
          <PlayPauseButton {...props} />
          <NextButton {...props} />
        </Grid>
        <Grid item xs={12}>
          <PlayProgress selectedTrack={selectedTrack} count={count} />
        </Grid>
      </Grid>
    )
  );
};

PlayerControls.propTypes = {
  selectedTrack: PropTypes.object,
  index: PropTypes.number,
  isPlaying: PropTypes.bool,
  count: PropTypes.number,
  dispatchPlayNextTrack: PropTypes.func,
  dispatchPlayPrevTrack: PropTypes.func,
  dispatchPlaySelectedTrack: PropTypes.func,
  dispatchPauseSelectedtrack: PropTypes.func,
  dispatchPauseTimer: PropTypes.func,
  dispatchResumeTimer: PropTypes.func,
  dispatchResetPlay: PropTypes.func
};

const mapStateToProps = state => ({
  index: state.trackIndex,
  selectedTrack: state.selectedTrack,
  isPlaying: state.isPlaying,
  count: state.count,
  isPaused: state.paused
});

const mapDispatchToProps = dispatch => ({
  dispatchPlayNextTrack: () => dispatch(playNextTrack()),
  dispatchPlayPrevTrack: () => dispatch(playPrevTrack()),
  dispatchPlaySelectedTrack: () => dispatch(playSelectedTrack()),
  dispatchPauseSelectedtrack: () => dispatch(pauseSelectedTrack()),
  dispatchPauseTimer: () => dispatch(pauseTimer()),
  dispatchResumeTimer: () => dispatch(resumeTimer()),
  dispatchResetPlay: () => dispatch(resetPlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerControls);
