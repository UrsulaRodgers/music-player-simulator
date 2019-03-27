export const renderDuration = duration => {
  const splitDuration = duration.split(":");
  const seconds =
    +splitDuration[0] * 60 * 60 + +splitDuration[1] * 60 + +splitDuration[2];
  const ms = seconds * 1000;
  return ms;
};
