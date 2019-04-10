import { combineReducers } from "redux";

import ui from "../reducers/uiReducer";
import api from '../reducers/apiReducer';

export default combineReducers({ ui, api });
