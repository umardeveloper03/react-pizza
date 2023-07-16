const initialState = {
  category: 0,
  sortby: "popular",
};

const filters = (state = initialState, action) => {
  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortby: action.payload,
    };
  }
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }

  return state;
};

export default filters;
