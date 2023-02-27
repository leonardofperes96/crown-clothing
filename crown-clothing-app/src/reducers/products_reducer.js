import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  return state;
};

export default products_reducer;
