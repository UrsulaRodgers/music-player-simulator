import React from "react";
import { Grid } from "../../../../../../components_shared";
import { PlayButton, PlayProgress, NextButton, PrevButton } from "./components";

const styles = {
  playerWrapper: {
    width: "30%",
    borderRadius: 3,
    backgroundColor: "grey",
    padding: 10
  },
  playerControls: {
    width: "50%",
    display: "flex",
    justifyContent: "center"
  }
};

const PlayerControls = props => {
  const { selectedTrack } = props;

  return (
    selectedTrack && (
      <Grid container alignItems="center" justify="center">
        <Grid item style={styles.playerControls}>
          <PrevButton />
          <PlayButton />
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
