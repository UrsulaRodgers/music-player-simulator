import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "../../../../components_shared";
import { CurrentTrack, PlayerControls } from "./components";

const PlayerArea = props => {
  const { playList, selectedTrack, index } = props;
  return (
    <Grid className="playerarea_pagelayout" item xs={12} md={8}>
      {selectedTrack && <h1 className="header">Now Playing</h1>}
      <CurrentTrack
        playList={playList}
        selectedTrack={selectedTrack}
        index={index}
      />
      <PlayerControls selectedTrack={selectedTrack} />
    </Grid>
  );
};

PlayerArea.propTypes = {
  selectedTrack: PropTypes.object,
  index: PropTypes.number,
  playList: PropTypes.array
};

const mapStateToProps = state => ({
  selectedTrack: state.selectedTrack,
  index: state.trackIndex
});

export default connect(mapStateToProps)(PlayerArea);
