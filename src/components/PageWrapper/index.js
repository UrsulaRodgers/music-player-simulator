import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../theme";
import Grid from "../Grid";

const styles = {
  minHeight: "100vh",
  backgroundColor: colors.pageWrapperBody
};

const PageWrapper = props => {
  const { children } = props;
  return (
    <Grid container alignItems="stretch" style={styles}>
      {children}
    </Grid>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node
};

export default PageWrapper;
