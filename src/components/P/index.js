import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../theme";

const P = props => {
  const { children, bold, color, testID, style } = props;
  const styles = {
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: bold ? "bold" : "normal",
    color,
    ...style
  };

  return (
    <Typography variant="body2" style={styles} data-testid={testID}>
      {children}
    </Typography>
  );
};

P.defaultProps = {
  color: colors.textDefault,
  bold: false,
  testId: null,
  style: null
};

P.propTypes = {
  color: PropTypes.string,
  bold: PropTypes.bool,
  testID: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default P;
