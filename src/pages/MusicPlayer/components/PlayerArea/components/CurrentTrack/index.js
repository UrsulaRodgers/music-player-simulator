import React from "react";
import { Grid } from "../../../../../../components_shared";

const CurrentTrack = props => {
  const { selectedTrack, index } = props;

  return (
    selectedTrack && (
      <Grid className="currentttrack_wrapper" item>
        <img
          className="currenttrack_albumart"
          src={selectedTrack.albumArt}
          alt={selectedTrack.album}
          data-testid="album-art"
        />
        <p
          className="currenttrack_songtitle"
          data-testid={`track-title-${index}`}
        >
          <i>{selectedTrack.title}</i>
        </p>
        <p className="currenttrack_artist_album" data-testid="artist-album">
          {selectedTrack.artist} - {selectedTrack.album}
        </p>
      </Grid>
    )
  );
};

export default CurrentTrack;
