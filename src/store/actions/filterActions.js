export const changeFilterStatus = text => {
  return {
    type: "filter/statusFilterChanged",
    payload: text
  };
};