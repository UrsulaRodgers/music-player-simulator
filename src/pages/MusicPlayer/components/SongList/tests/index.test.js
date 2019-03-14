import React from "react";
import { renderWithRedux } from "../../../../../utils/testUtils";
import { fireEvent, waitForElement, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import SongList from "../";

const renderSongList = () => {
  return renderWithRedux(<SongList />);
};

afterEach(cleanup);

describe("<SongList />", () => {
  it("renders a playlist title", () => {
    const { getByTestId } = renderSongList();
    expect(getByTestId("playlist-title")).toBeInTheDocument();
  });
  it("renders a playlist", () => {
    const { getByTestId } = renderSongList();
    expect(getByTestId("user-playlist")).toBeInTheDocument();
  });
  it("renders an individual track", () => {
    const { getByTestId } = renderSongList();
    expect(getByTestId("track-item")).toBeInTheDocument();
  });
  it("renders track duration", () => {
    const { getByTestId } = renderSongList();
    expect(getByTestId("track-duration")).toBeInTheDocument();
  });
  it("renders a play icon when a track is not playing", () => {
    const { getByTestId } = renderSongList();
    expect(getByTestId("play-icon")).toBeInTheDocument();
  });
  it("renders a pause icon when a track is playing", async () => {
    const { getByTestId } = renderSongList();
    const TrackItem = getByTestId("track-item");
    fireEvent.click(TrackItem);
    const pauseIcon = await waitForElement(() => getByTestId("pause-icon"));
    expect(pauseIcon).toBeInTheDocument();
  });
});
