import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: {
    todo: rootReducer,
  },
});

export default store;
