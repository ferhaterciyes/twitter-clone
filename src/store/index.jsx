import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";

const store = configureStore({
  reducer: {
    auth: auth // auth.reducer yerine auth kullanıldı
  }
});

export default store;
