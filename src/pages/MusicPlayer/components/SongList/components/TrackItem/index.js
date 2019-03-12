import React from "react";
import PropTypes from "prop-types";
import { P } from "../../../../../../components";
import TrackItemWrapper from "../TrackItemWrapper";

const styles = {
  trackTitle: {
    marginBottom: 5
  }
};

const TrackItem = props => {
  const { trackNumber, title, artist, album, testID } = props;
  return (
    <TrackItemWrapper testID={testID}>
      <P style={styles.trackTitle}>
        <i>
          {trackNumber}. {title}
        </i>
      </P>
      <P>
        {artist} ({album})
      </P>
    </TrackItemWrapper>
  );
};

TrackItem.propTypes = {
  trackNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired
};

export default TrackItem;
