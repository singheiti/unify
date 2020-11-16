import { combineReducers } from "redux";
import types from "./types";

const products = (state=[], action) => {
    switch(action.type) {
        case types.GET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}

const filters = (state={}, action) => {
    switch(action.type) {
        case types.UPDATE_FILTERS_MONTH:
            var list = {...state}
            if(list.month && action.payload === list.month) {
                delete list.month
            }
            else {
                list.month = action.payload
            }
            return list;
        case types.UPDATE_FILTERS_COLOR:
            var list = {...state}
            if(list.color && action.payload === list.color) {
                delete list.color
            }
            else {
                list.color = action.payload
            }
            return list;
        default:
            return state;
    }
}

export default combineReducers({
    products,
    filters
})