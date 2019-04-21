import React from "react";
import { renderWithRedux } from "../../../../../utils/testUtils";
import { fireEvent, waitForElement, cleanup } from "react-testing-library";
import { selectTrack } from "../../../../../store/actions";
import { playList } from "../../../../../data";
import "jest-dom/extend-expect";
import PlayerArea from "../";

const renderPlayerArea = () => {
  return renderWithRedux(<PlayerArea />);
};

const playListItem = playList.length - 2;
const playListLastItem = playList.length - 1;

afterEach(cleanup);

describe("<PlayerArea />", () => {
  it("selects the previous track when the previous button is clicked", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const prevButton = await waitForElement(() => getByTestId("prev-button"));
    fireEvent.click(prevButton);
    const prevTrack = await waitForElement(() =>
      getByTestId(`track-title-${playListItem - 1}`)
    );
    expect(prevTrack).toBeInTheDocument();
  });
  it("renders a pause button when a track is playing", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const pauseButton = await waitForElement(() => getByTestId("pause-button"));
    expect(pauseButton).toBeInTheDocument();
  });
  it("renders a play button when a track is not playing", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const pauseButton = await waitForElement(() => getByTestId("pause-button"));
    fireEvent.click(pauseButton);
    const playButton = await waitForElement(() => getByTestId("play-button"));
    expect(playButton).toBeInTheDocument();
  });
  it("selects the next track when the next button is clicked", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const nextButton = await waitForElement(() => getByTestId("next-button"));
    fireEvent.click(nextButton);
    const nextTrack = await waitForElement(() =>
      getByTestId(`track-title-${playListItem + 1}`)
    );
    expect(nextTrack).toBeInTheDocument();
  });
  it("selects the first track of the playlist when the next button is clicked while the last track is playing", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListLastItem));
    const nextButton = await waitForElement(() =>
      getByTestId("next-button-last")
    );
    fireEvent.click(nextButton);
    expect(getByTestId("track-title", { exact: false })).toBeInTheDocument();
  });
  it("selects the last track of the playlist when the prev button is clicked while the first track is playing", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(0));
    const prevButton = await waitForElement(() =>
      getByTestId("prev-button-first")
    );
    fireEvent.click(prevButton);
    expect(getByTestId("track-title-3")).toBeInTheDocument();
  });
});
