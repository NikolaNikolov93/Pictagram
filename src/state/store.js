import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import photosReduce from "./auth/photosSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  user: authReducer,
  photos: photosReduce,
});

const persistConfig = {
  key: "root",
  storage,
  version: "1",
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
export const persistor = persistStore(store);
