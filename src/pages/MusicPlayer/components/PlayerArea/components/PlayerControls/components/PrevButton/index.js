import React from "react";
import { connect } from "react-redux";
import { playPrevTrack } from "../../../../../../../../store/actions";
import { Button } from "../../../../../../../../components_shared";
import prevIcon from "../../../../../../assets/baseline-fast_rewind-24px.svg";

const styles = {
  button: {
    width: "80%",
    height: "auto"
  },
  disabledButton: {
    width: "80%",
    height: "auto",
    opacity: 0.5
  }
};

const PrevButton = props => {
  const { dispatchPlayPrevTrack, index } = props;

  return index > 0 ? (
    <Button onClick={index => dispatchPlayPrevTrack(index)}>
      <img src={prevIcon} alt="next-button" style={styles.button} />
    </Button>
  ) : (
    <Button disabled>
      <img src={prevIcon} alt="next-button" style={styles.disabledButton} />
    </Button>
  );
};

const mapStateToProps = state => ({
  index: state.trackIndex,
  selectedTrack: state.selectedTrack
});

const mapDispatchToProps = dispatch => ({
  dispatchPlayPrevTrack: () => dispatch(playPrevTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevButton);
