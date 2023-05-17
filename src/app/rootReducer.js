import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from "@/features/tasks/tasksSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [], // Exclude reducer1 from persistence
};

const rootReducer = combineReducers({
  taskReducer,
  // Add more reducers as needed
});

export default persistReducer(persistConfig, rootReducer);
