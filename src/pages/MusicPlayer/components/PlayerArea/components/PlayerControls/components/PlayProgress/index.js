import React from "react";
import { P, Grid } from "../../../../../../../../components_shared";

const styles = {
  span: {
    display: "flex",
    justifyContent: "center"
  }
};

const renderTrackLength = selectedTrack => {
  return selectedTrack ? <P>{selectedTrack.length}</P> : <P>0:00</P>;
};

const PlayProgress = props => {
  const { selectedTrack } = props;
  return (
    <Grid style={styles.span}>
      <P>0:00 /</P>
      &nbsp;{renderTrackLength(selectedTrack)}
    </Grid>
  );
};

export default PlayProgress;
