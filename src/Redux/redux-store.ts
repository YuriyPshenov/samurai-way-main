import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import {ActionsTypes, StateType} from "./store";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
})

export type StoreType = {
    _state: StateType
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = createStore(reducers)

export default store