import React from "react";
import { connect } from "react-redux";
import { Grid, H1 } from "../../../../components";
import { CurrentTrack, PlayerControls } from "./components";

const styles = {
  pageLayout: {
    width: "70%",
    minHeight: "100vh",
    paddingBottom: 50
  }
};
const PlayerArea = props => {
  const { playList, selectedTrack } = props;

  return (
    <Grid
      container
      alignItems="center"
      justify="space-evenly"
      direction="column"
      style={styles.pageLayout}
    >
      {selectedTrack && <H1>Now Playing</H1>}
      <CurrentTrack playList={playList} selectedTrack={selectedTrack} />
      <PlayerControls selectedTrack={selectedTrack} />
    </Grid>
  );
};

const mapStateToProps = state => ({
  selectedTrack: state.selectedTrack
});

export default connect(mapStateToProps)(PlayerArea);
