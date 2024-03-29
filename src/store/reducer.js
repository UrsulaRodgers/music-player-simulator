import * as actionTypes from "./actionTypes";
import { playList } from "../data";

export const initialState = {
  selectedTrack: null,
  trackIndex: null,
  isPlaying: false,
  timerStart: false,
  count: 0
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
    case actionTypes.TIMER_START:
      return {
        ...state,
        timerStart: true,
        count: 0
      };
    case actionTypes.TIMER_TICK:
      return {
        ...state,
        count: state.count + 1000
      };
    case actionTypes.TIMER_RESET:
      return {
        ...state,
        count: 0
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
        isPlaying: true,
        count: 0
      };
    case actionTypes.PLAY_PREV_TRACK:
      return {
        ...state,
        trackIndex: state.trackIndex - 1,
        selectedTrack: playList[state.trackIndex - 1],
        isPlaying: true,
        count: 0
      };
    case actionTypes.RESET_PLAY:
      return {
        ...state,
        isPlaying: false,
        count: 0
      };
    case actionTypes.RESTART_PLAY:
      return {
        ...state,
        isPlaying: true,
        selectedTrack: playList[0],
        trackIndex: 0,
        count: 0
      };
    case actionTypes.PLAY_LAST_TRACK:
      return {
        ...state,
        isPlaying: true,
        selectedTrack: playList[playList.length - 1],
        trackIndex: playList.length - 1,
        count: 0
      };
    default:
      return state;
  }
};
