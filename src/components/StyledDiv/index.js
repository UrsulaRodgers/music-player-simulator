import styled from "styled-components";
import { colors } from "../../theme";

const StyledDiv = styled.div`
  &:hover {
    background-color: ${colors.textHover};
  }
  background-color: ${props =>
    props.selected ? colors.selectedTrack : "none"};
`;

export default StyledDiv;
