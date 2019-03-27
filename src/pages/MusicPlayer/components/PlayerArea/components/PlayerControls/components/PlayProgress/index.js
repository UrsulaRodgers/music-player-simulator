import React from "react";
import PropTypes from "prop-types";
import formatDuration from "format-duration";
import { renderDuration } from "../../../../../../../../utils/timer";
import { Grid } from "../../../../../../../../components_shared";

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
        {formatDuration(renderDuration(selectedTrack.length))}
      </p>
    </Grid>
  );
};

PlayProgress.propTypes = {
  selectedTrack: PropTypes.object
};

export default PlayProgress;
