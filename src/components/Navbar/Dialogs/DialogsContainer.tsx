import React from 'react';
import './Dialogs.module.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/reducers/dialogsReducer";
import {StoreType} from "../../../Redux/redux-store";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsPropsType> = ({store}) => {

    const state = store.getState().messagesPage

    const textareaMessageDispatch = (value: string) => {
        store.dispatch(updateNewMessageTextActionCreator(value))
    }

    const addMessageDispatch = (value: string) => {
        store.dispatch(addMessageActionCreator(value))
    }

    return (
        <Dialogs messagesPage={state}
                 updateNewMessageText={textareaMessageDispatch}
                 addMessage={addMessageDispatch}
        />
    )
}

export default DialogsContainer;