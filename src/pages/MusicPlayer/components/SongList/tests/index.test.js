import React from "react";
// import { renderWithRedux } from "../../../utils/testutils";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "react-testing-library";
import "jest-dom/extend-expect";
// import { getMovieListError } from "../../../store/actions";
import SongList from "../";

// const renderSearchPage = () => {
//   return renderWithRedux(<SearchPage />);
// };

const renderSongList = () => {
  return render(<SongList />);
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
});
