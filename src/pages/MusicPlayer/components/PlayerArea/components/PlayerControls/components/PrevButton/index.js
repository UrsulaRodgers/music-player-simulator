import React from "react";
import { connect } from "react-redux";
import { playPrevTrack } from "../../../../../../../../store/actions";
import { Button } from "../../../../../../../../components_shared";
import prevIcon from "../../../../../../assets/baseline-fast_rewind-24px.svg";

const PrevButton = props => {
  const { dispatchPlayPrevTrack, index } = props;

  return index > 0 ? (
    <Button
      onClick={index => dispatchPlayPrevTrack(index)}
      data-testid="prev-button"
    >
      <img className="small_button-icon" src={prevIcon} alt="prev-button" />
    </Button>
  ) : (
    <Button disabled data-testid="prev-button-disabled">
      <img
        className="small_button-icon-disabled"
        src={prevIcon}
        alt="prev-button"
      />
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
