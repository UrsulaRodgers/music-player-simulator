import styled from "styled-components";
import { colors } from "../../../../../../../../theme";

const StyledDiv = styled.div`
  &:hover {
    background-color: ${colors.textHover};
    opacity: 0.7;
  }
  background-color: ${props =>
    props.selected ? colors.selectedTrack : "none"};
`;

export default StyledDiv;
