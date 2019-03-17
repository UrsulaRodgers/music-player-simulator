import React from "react";
import PropTypes from "prop-types";
import formatDuration from "format-duration";
import { Grid } from "../../../../../../../../components_shared";

const renderDuration = duration => {
  const splitDuration = duration.split(":");
  const seconds =
    +splitDuration[0] * 60 * 60 + +splitDuration[1] * 60 + +splitDuration[2];
  return formatDuration(seconds * 1000);
};

const PlayProgress = props => {
  const { selectedTrack, count } = props;

  return (
    <Grid className="playercontrols_play_progress" data-testid="track-progress">
      {count ? (
        <p className="playprogress_text">{formatDuration(count)} /</p>
      ) : (
        <p className="playprogress_text">0:00 /</p>
      )}
      &nbsp;{" "}
      <p className="playprogress_text">
        {renderDuration(selectedTrack.length)}
      </p>
    </Grid>
  );
};

PlayProgress.propTypes = {
  selectedTrack: PropTypes.object
};

export default PlayProgress;
