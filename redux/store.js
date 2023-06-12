import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../redux/navSlices";
const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
export default store;
