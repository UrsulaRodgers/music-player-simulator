import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { P, Grid } from "../../../../../../components";
import TrackItemWrapper from "../TrackItemWrapper";
import playIcon from "../../../../assets/baseline-play_circle_outline-24px.svg";
import pauseIcon from "../../../../assets/baseline-pause-24px.svg";

const styles = {
  trackTitle: {
    marginBottom: 5
  },
  icon: {
    display: "flex",
    justifyContent: "center"
  }
};

const renderIcon = (selected, isPlaying) =>
  selected && isPlaying ? (
    <img src={pauseIcon} alt="pause-icon" />
  ) : (
    <img src={playIcon} alt="play-icon" />
  );

const TrackItem = props => {
  const {
    trackNumber,
    title,
    artist,
    album,
    testID,
    onClick,
    selected,
    isPlaying
  } = props;

  return (
    <TrackItemWrapper testID={testID} onClick={onClick} selected={selected}>
      <Grid container justify="space-between">
        <Grid item>
          <P style={styles.trackTitle}>
            <i>
              {trackNumber}. {title}
            </i>
          </P>
          <P>
            {artist} ({album})
          </P>
        </Grid>
        <Grid item style={styles.icon}>
          {renderIcon(selected, isPlaying)}
        </Grid>
      </Grid>
    </TrackItemWrapper>
  );
};

TrackItem.propTypes = {
  trackNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  selectedTrack: state.selectedTrack,
  isPlaying: state.isPlaying
});

export default connect(mapStateToProps)(TrackItem);
