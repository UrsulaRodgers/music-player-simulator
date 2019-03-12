import React from "react";
import { Grid } from "../../../../components";

const styles = {
  pageLayout: {
    width: "70%",
    border: "1px solid red",
    minHeight: "100vh"
  }
};
const PlayerArea = () => (
  <Grid container style={styles.pageLayout}>
    Stuff
  </Grid>
);

export default PlayerArea;
