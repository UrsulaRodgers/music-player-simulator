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
  it("renders a 'Now Playing' title", async () => {
    const { getByText, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const nowPlaying = await waitForElement(() => getByText(/now playing/i));
    expect(nowPlaying).toBeInTheDocument();
  });
  it("renders album art", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const albumArt = await waitForElement(() => getByTestId("album-art"));
    expect(albumArt).toBeInTheDocument();
  });
  it("renders a track title", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const trackTitle = await waitForElement(() =>
      getByTestId("track-title", { exact: false })
    );
    expect(trackTitle).toBeInTheDocument();
  });
  it("renders artist and album text", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const artistAlbum = await waitForElement(() => getByTestId("artist-album"));
    expect(artistAlbum).toBeInTheDocument();
  });
  it("renders a previous track button", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const prevButton = await waitForElement(() => getByTestId("prev-button"));
    expect(prevButton).toBeInTheDocument();
  });
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
  it("does not select a previous track when the previous button is disabled", async () => {
    const { getByTestId, queryByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(0));
    const prevButton = await waitForElement(() =>
      getByTestId("prev-button-disabled")
    );
    fireEvent.click(prevButton);
    expect(queryByTestId("track-title--1")).toBeNull();
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
  it("renders a next button", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const nextButton = await waitForElement(() => getByTestId("next-button"));
    expect(nextButton).toBeInTheDocument();
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
  it("does not select the next track when the next button is disabled", async () => {
    const { getByTestId, queryByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListLastItem));
    const nextButton = await waitForElement(() =>
      getByTestId("next-button-disabled")
    );
    fireEvent.click(nextButton);
    expect(queryByTestId("track-title-4")).toBeNull();
  });
  it("renders track progress", async () => {
    const { getByTestId, store } = renderPlayerArea();
    store.dispatch(selectTrack(playListItem));
    const trackProgress = await waitForElement(() =>
      getByTestId("track-progress")
    );
    expect(trackProgress).toBeInTheDocument();
  });
});
