import React from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../../../../components_shared";
import {
  PlayPauseButton,
  PlayProgress,
  NextButton,
  PrevButton
} from "./components";

const PlayerControls = props => {
  const { selectedTrack } = props;

  return (
    selectedTrack && (
      <Grid container alignItems="center" justify="center">
        <Grid className="playercontrols" item>
          <PrevButton />
          <PlayPauseButton />
          <NextButton />
        </Grid>
        <Grid item xs={12}>
          <PlayProgress selectedTrack={selectedTrack} />
        </Grid>
      </Grid>
    )
  );
};

PlayerControls.propTypes = {
  selectedTrack: PropTypes.object
};

export default PlayerControls;
