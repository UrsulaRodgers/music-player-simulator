import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../../../../../../components_shared";
import prevIcon from "../../../../../../assets/baseline-fast_rewind-24px.svg";

const PrevButton = props => {
  const { dispatchPlayPrevTrack, dispatchPlayLastTrack, index } = props;

  return index > 0 ? (
    <Button
      onClick={index => dispatchPlayPrevTrack(index)}
      data-testid="prev-button"
    >
      <img className="small_button-icon" src={prevIcon} alt="prev-button" />
    </Button>
  ) : (
    <Button
      onClick={() => dispatchPlayLastTrack()}
      data-testid="prev-button-first"
    >
      <img className="small_button-icon" src={prevIcon} alt="prev-button" />
    </Button>
  );
};

PrevButton.propTypes = {
  dispatchPlayPrevTrack: PropTypes.func,
  index: PropTypes.number,
  selectedTrack: PropTypes.object,
  onClick: PropTypes.func
};

export default PrevButton;
