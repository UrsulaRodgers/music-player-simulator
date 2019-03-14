import React from "react";
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

export default PlayerControls;
