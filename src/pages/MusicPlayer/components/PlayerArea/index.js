import React from "react";
import { connect } from "react-redux";
import { Grid, H1 } from "../../../../components_shared";
import { CurrentTrack, PlayerControls } from "./components";

const styles = {
  pageLayout: {
    width: "70%",
    minHeight: "100vh",
    paddingBottom: 50
  }
};
const PlayerArea = props => {
  const { playList, selectedTrack, index } = props;

  return (
    <Grid
      container
      alignItems="center"
      justify="space-evenly"
      direction="column"
      style={styles.pageLayout}
    >
      {selectedTrack && <H1>Now Playing</H1>}
      <CurrentTrack
        playList={playList}
        selectedTrack={selectedTrack}
        index={index}
      />
      <PlayerControls selectedTrack={selectedTrack} />
    </Grid>
  );
};

const mapStateToProps = state => ({
  selectedTrack: state.selectedTrack,
  index: state.trackIndex
});

export default connect(mapStateToProps)(PlayerArea);
