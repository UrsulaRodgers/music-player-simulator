import React from "react";
import { Grid } from "../../../../../../../../components_shared";

const renderTrackLength = selectedTrack => {
  return selectedTrack ? (
    <p className="playprogress_text">{selectedTrack.length}</p>
  ) : (
    <p className="playprogress_text">0:00</p>
  );
};

const PlayProgress = props => {
  const { selectedTrack } = props;
  return (
    <Grid className="playercontrols_play_progress" data-testid="track-progress">
      <p className="playprogress_text">0:00 /</p>
      &nbsp;{renderTrackLength(selectedTrack)}
    </Grid>
  );
};

export default PlayProgress;
