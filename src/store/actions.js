import * as actionTypes from "./actionTypes";

export const selectTrack = index => {
  return dispatch => {
    dispatch({ type: actionTypes.SELECT_TRACK, index });
    dispatch(playSelectedTrack());
  };
};

export const playSelectedTrack = () => ({
  type: actionTypes.PLAY_SELECTED_TRACK
});

export const pauseSelectedTrack = () => ({
  type: actionTypes.PAUSE_SELECTED_TRACK
});

export const playNextTrack = () => ({
  type: actionTypes.PLAY_NEXT_TRACK
});

export const playPrevTrack = () => ({
  type: actionTypes.PLAY_PREV_TRACK
});
