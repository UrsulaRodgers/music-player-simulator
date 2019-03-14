import React from "react";
import { Grid, P } from "../../../../../../components_shared";

const styles = {
  currentTrackWrapper: {
    textAlign: "center"
  },
  albumArt: {
    width: 300,
    height: "auto",
    marginBottom: 30
  },
  description: {
    display: "flex",
    direction: "row"
  },
  songTitle: {
    marginBottom: 10
  }
};
const CurrentTrack = props => {
  const { selectedTrack, index } = props;

  return (
    selectedTrack && (
      <Grid item style={styles.currentTrackWrapper}>
        <img
          src={selectedTrack.albumArt}
          alt={selectedTrack.album}
          style={styles.albumArt}
          data-testid="album-art"
        />
        <P italics style={styles.songTitle} testID={`track-title-${index}`}>
          {selectedTrack.title}
        </P>
        <P testID="artist-album">
          {selectedTrack.artist} - {selectedTrack.album}
        </P>
      </Grid>
    )
  );
};

export default CurrentTrack;
