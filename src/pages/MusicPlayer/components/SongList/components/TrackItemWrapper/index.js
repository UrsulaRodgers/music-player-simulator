import React from "react";
import { StyledDiv } from "./components";
import { colors } from "../../../../../../theme";

const styles = {
  padding: 10,
  borderBottom: `1px solid ${colors.songDivider}`
};

const TrackItemWrapper = props => {
  const { children, testID, onClick, selected } = props;

  return (
    <StyledDiv
      data-testid={testID}
      style={styles}
      onClick={onClick}
      selected={selected}
    >
      {children}
    </StyledDiv>
  );
};

export default TrackItemWrapper;
