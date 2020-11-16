import types from "./reducers/types";
import data from "./data";

const actions = {
    getProducts : () => dispatch => {
        dispatch({type: types.GET_PRODUCTS, payload: data})
    },

    updateFiltersMonth : (updatedMonth) => dispatch => {
        dispatch({type: types.UPDATE_FILTERS_MONTH, payload: updatedMonth})
    },

    updateFiltersColor : (updatedColor) => dispatch => {
        dispatch({type: types.UPDATE_FILTERS_COLOR, payload: updatedColor})
    }
}

export default actions;