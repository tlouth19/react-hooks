import { createStore } from "react-hooks-global-state"
import foods from "../data/foods"
import reducer from "./reducer"

const initialState = { foods }
export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(reducer, initialState)
