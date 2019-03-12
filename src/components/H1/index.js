import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../theme";

const H1 = props => {
  const { color, testID, children } = props;
  const styles = {
    fontSize: "30px",
    lineHeight: "33px",
    color
  };

  return (
    <Typography variant="h1" style={styles} data-testid={testID}>
      {children}
    </Typography>
  );
};

H1.defaultProps = {
  color: colors.textDefault,
  testID: null
};

H1.propTypes = {
  color: PropTypes.string,
  testID: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default H1;
