import React from 'react';
import './Dialogs.module.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../../Redux/store";



const mapStateToProps = (state: StateType) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageText: (value: string) => {
            dispatch(updateNewMessageTextActionCreator(value))
        },
        addMessage: (value: string) => {
            dispatch(addMessageActionCreator(value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;