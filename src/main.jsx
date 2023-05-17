import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@/styles/index.scss";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </DndProvider>
  </React.StrictMode>
);
