import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import formatDuration from "format-duration";
import { Grid } from "../../../../../../components_shared";
import TrackItemWrapper from "../TrackItemWrapper";
import playIcon from "../../../../assets/baseline-play_circle_outline-24px.svg";
import pauseIcon from "../../../../assets/baseline-pause-24px.svg";

const renderIcon = (selected, isPlaying) =>
  selected && isPlaying ? (
    <img src={pauseIcon} alt="pause-icon" data-testid="pause-icon" />
  ) : (
    <img src={playIcon} alt="play-icon" data-testid="play-icon" />
  );

const TrackItem = props => {
  const {
    trackNumber,
    title,
    duration,
    artist,
    album,
    testID,
    onClick,
    selected,
    isPlaying
  } = props;
  return (
    <TrackItemWrapper testID={testID} onClick={onClick} selected={selected}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={8}>
          <p className="trackitem_title">
            <i>
              {trackNumber}. {title}
            </i>
          </p>
          <p className="trackitem_moreinformation">
            {artist} ({album})
          </p>
        </Grid>
        <Grid item xs={2} className="trackitem_duration">
          <p className="trackitem_duration_text" data-testid="track-duration">
            {formatDuration(duration)}
          </p>
        </Grid>
        <Grid item xs={2} className="trackitem_icon">
          {renderIcon(selected, isPlaying)}
        </Grid>
      </Grid>
    </TrackItemWrapper>
  );
};

TrackItem.propTypes = {
  selectedTrack: PropTypes.object,
  isPlaying: PropTypes.bool,
  trackNumber: PropTypes.number,
  title: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.string,
  testID: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

const mapStateToProps = state => ({
  selectedTrack: state.selectedTrack,
  isPlaying: state.isPlaying
});

export default connect(mapStateToProps)(TrackItem);
