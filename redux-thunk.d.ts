/// <reference path="typings/main.d.ts" />

import {IMiddleware, IDispatch, IAction} from "redux";

declare module 'redux' {
    interface IDispatch {
        (thunk: Function): any;
    }
}

declare const thunkMiddleware : IMiddleware<any>;
export default thunkMiddleware;