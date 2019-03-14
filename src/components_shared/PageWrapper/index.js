import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid";

const PageWrapper = props => {
  const { children } = props;
  return (
    <Grid className="pagewrapper" container alignItems="stretch">
      {children}
    </Grid>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node
};

export default PageWrapper;
