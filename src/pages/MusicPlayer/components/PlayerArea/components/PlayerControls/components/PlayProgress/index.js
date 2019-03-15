import React from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../../../../components_shared";

const PlayProgress = props => {
  const { selectedTrack } = props;
  return (
    <Grid className="playercontrols_play_progress" data-testid="track-progress">
      <p className="playprogress_text">0:00 /</p>
      &nbsp; <p className="playprogress_text">{selectedTrack.length}</p>
    </Grid>
  );
};

PlayProgress.propTypes = {
  selectedTrack: PropTypes.object
};

export default PlayProgress;
