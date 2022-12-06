import React from "react";
import ReactDOM from "react-dom/client";

import { store, persistor } from "./redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { BrowserRouter } from "react-router-dom";
import './index.css';
import "aos/dist/aos.css";
import { Root } from "./root";

ReactDOM.createRoot(document.getElementById("root")).render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Root />
                    </BrowserRouter>
        </PersistGate>
    </Provider>
);

