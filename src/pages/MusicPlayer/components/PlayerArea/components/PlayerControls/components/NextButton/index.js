import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { playNextTrack } from "../../../../../../../../store/actions";
import { Button } from "../../../../../../../../components_shared";
import nextIcon from "../../../../../../assets/baseline-fast_forward-24px.svg";
import { playList } from "../../../../../../../../data";

const NextButton = props => {
  const { dispatchPlayNextTrack, index } = props;

  return index < playList.length - 1 ? (
    <Button
      onClick={index => dispatchPlayNextTrack(index)}
      data-testid="next-button"
    >
      <img className="small_button-icon" src={nextIcon} alt="next-button" />
    </Button>
  ) : (
    <Button disabled data-testid="next-button-disabled">
      <img
        className="small_button-icon-disabled"
        src={nextIcon}
        alt="next-button"
      />
    </Button>
  );
};

NextButton.propTypes = {
  dispatchPlayNextTrack: PropTypes.func,
  index: PropTypes.number,
  selectedTrack: PropTypes.object,
  onClick: PropTypes.func
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
)(NextButton);
