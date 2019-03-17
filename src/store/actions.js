import * as actionTypes from "./actionTypes";

let timer = null;

export const selectTrack = index => {
  return dispatch => {
    dispatch({ type: actionTypes.SELECT_TRACK, index });
    dispatch({ type: actionTypes.TIMER_RESET });
    dispatch(playSelectedTrack());
  };
};

export const playSelectedTrack = () => {
  return dispatch => {
    dispatch({ type: actionTypes.PLAY_SELECTED_TRACK });
    dispatch(startTimer());
  };
};

export const startTimer = () => {
  return dispatch => {
    clearInterval(timer);
    timer = setInterval(() => dispatch(tick()), 1000);
    dispatch({ type: actionTypes.TIMER_START });
  };
};

const tick = () => {
  return (dispatch, getState) => {
    const duration = getState().selectedTrack.length;
    const count = getState().count;
    const splitDuration = duration.split(":");
    const durationSeconds =
      +splitDuration[0] * 60 * 60 + +splitDuration[1] * 60 + +splitDuration[2];
    const durationMs = durationSeconds * 1000;
    if (count < durationMs) {
      dispatch({ type: actionTypes.TIMER_TICK });
    } else {
      clearInterval(timer);
      dispatch(resetPlay());
    }
  };
};

export const pauseTimer = () => {
  return dispatch => {
    clearInterval(timer);
    dispatch(pauseSelectedTrack());
  };
};

export const resumeTimer = () => {
  return dispatch => {
    dispatch(playSelectedTrack());
    dispatch(startTimer());
  };
};

export const resetPlay = () => ({
  type: actionTypes.RESET_PLAY
});

export const pauseSelectedTrack = () => ({
  type: actionTypes.PAUSE_SELECTED_TRACK
});

export const playNextTrack = () => {
  return dispatch => {
    dispatch({ type: actionTypes.PLAY_NEXT_TRACK });
    dispatch(startTimer());
  };
};

export const playPrevTrack = () => {
  return dispatch => {
    dispatch({ type: actionTypes.PLAY_PREV_TRACK });
    dispatch(startTimer());
  };
};
