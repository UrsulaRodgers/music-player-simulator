import React from "react";
import PropTypes from "prop-types";
import { StyledDiv } from "./components";

const TrackItemWrapper = props => {
  const { children, testID, onClick, selected } = props;

  return (
    <StyledDiv data-testid={testID} onClick={onClick} selected={selected}>
      {children}
    </StyledDiv>
  );
};

TrackItemWrapper.propTypes = {
  children: PropTypes.node,
  testID: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

export default TrackItemWrapper;
