import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const ignoreSerializableCheckMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: ignoreSerializableCheckMiddleware,
});

export const persistor = persistStore(store);
