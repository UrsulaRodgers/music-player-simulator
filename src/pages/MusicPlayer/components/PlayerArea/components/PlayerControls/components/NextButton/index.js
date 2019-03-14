import React from "react";
import { connect } from "react-redux";
import { playNextTrack } from "../../../../../../../../store/actions";
import { Button } from "../../../../../../../../components_shared";
import nextIcon from "../../../../../../assets/baseline-fast_forward-24px.svg";
import { playList } from "../../../../../../../../data";

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

const PlayButton = props => {
  const { dispatchPlayNextTrack, index } = props;

  return index < playList.length - 1 ? (
    <Button onClick={index => dispatchPlayNextTrack(index)}>
      <img src={nextIcon} alt="next-button" style={styles.button} />
    </Button>
  ) : (
    <Button disabled>
      <img src={nextIcon} alt="next-button" style={styles.disabledButton} />
    </Button>
  );
};

const mapStateToProps = state => ({
  index: state.trackIndex,
  selectedTrack: state.selectedTrack
});

const mapDispatchToProps = dispatch => ({
  dispatchPlayNextTrack: () => dispatch(playNextTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
