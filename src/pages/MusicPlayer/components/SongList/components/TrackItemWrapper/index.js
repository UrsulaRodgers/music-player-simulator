import React from "react";
import { StyledDiv } from "./components";

const TrackItemWrapper = props => {
  const { children, testID, onClick, selected } = props;

  return (
    <StyledDiv data-testid={testID} onClick={onClick} selected={selected}>
      {children}
    </StyledDiv>
  );
};

export default TrackItemWrapper;
