import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
          <p className="trackitem_title">
            <i>
              {trackNumber}. {title}
            </i>
          </p>
          <p className="trackItem_artist_album">
            {artist} ({album})
          </p>
        </Grid>
        <Grid item className="trackitem_icon">
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
