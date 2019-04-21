import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../../../../../../components_shared";
import nextIcon from "../../../../../../assets/baseline-fast_forward-24px.svg";
import { playList } from "../../../../../../../../data";

const NextButton = props => {
  const { dispatchPlayNextTrack, dispatchRestartPlayList, index } = props;

  return index < playList.length - 1 ? (
    <Button
      onClick={index => dispatchPlayNextTrack(index)}
      data-testid="next-button"
    >
      <img className="small_button-icon" src={nextIcon} alt="next-button" />
    </Button>
  ) : (
    <Button data-testid="next-button-last">
      <img
        className="small_button-icon"
        onClick={() => dispatchRestartPlayList()}
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

export default NextButton;
