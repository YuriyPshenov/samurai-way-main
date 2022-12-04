import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import {ActionsTypes, StateType} from "./store";
import usersReducer from "./reducers/users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer
})


export type StoreType = {
    _state: StateType
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

const store = createStore(reducers)


export default store