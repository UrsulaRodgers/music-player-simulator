import * as actionTypes from "./actionTypes";
import { playList } from "../data";

export const initialState = {
  selectedTrack: null,
  trackIndex: null,
  isPlaying: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_TRACK:
      return {
        ...state,
        selectedTrack: playList[action.index],
        trackIndex: action.index
      };
    case actionTypes.PLAY_SELECTED_TRACK:
      return {
        ...state,
        isPlaying: true
      };
    case actionTypes.PAUSE_SELECTED_TRACK:
      return {
        ...state,
        isPlaying: false
      };
    case actionTypes.PLAY_NEXT_TRACK:
      return {
        ...state,
        trackIndex: state.trackIndex + 1,
        selectedTrack: playList[state.trackIndex + 1],
        isPlaying: true
      };
    case actionTypes.PLAY_PREV_TRACK:
      return {
        ...state,
        trackIndex: state.trackIndex - 1,
        selectedTrack: playList[state.trackIndex - 1],
        isPlaying: true
      };
    default:
      return state;
  }
};
