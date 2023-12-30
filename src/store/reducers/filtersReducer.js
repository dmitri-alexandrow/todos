export const initialState = {
  status: "all"
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
  case "filter/statusFilterChanged": {
    return {
      ...state,
      status: action.payload
    };
  }
  }
}