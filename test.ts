/// <reference path="redux-thunk.d.ts" />

import {applyMiddleware, createStore} from "redux";
import reduxThunk from "./redux-thunk";

let store = applyMiddleware(reduxThunk)(createStore)((s,a) => s);