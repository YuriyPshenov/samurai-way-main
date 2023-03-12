import React from 'react';
import './index.css';
import {rerenderEntireTree} from "./render";
import {addPost, state} from "./redux/State";


rerenderEntireTree(state, addPost)