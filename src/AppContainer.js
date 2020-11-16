import { connect } from "react-redux";
import App from "./App";
import actions from "./actions";

export default connect(state => ({
    products: state.list.products,
    filters: state.list.filters
}), {
    getProducts: actions.getProducts,
    updateFiltersColor: actions.updateFiltersColor,
    updateFiltersMonth: actions.updateFiltersMonth
})(App);