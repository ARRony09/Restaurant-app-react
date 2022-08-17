import { legacy_createStore } from "redux";
import { Reducer } from "./reducer";

const myStore = legacy_createStore(Reducer)

export default myStore;