import './App.css';
import { useEffect, useState } from 'react';
import Products from "./Products";
import ListOfProducts from "./ListOfProducts";

function App(props) {
  const [list, setList] = useState(props.products ? props.products : []);
  const [colors] = useState(['red', 'orange', 'purple', 'green'])
  const [months] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])

  useEffect(()=>{
    props.getProducts();
    setList(props.products);
  }, [list, props.products, props.filters]);

  const updateFilterColor = (color) => {
    props.updateFiltersColor(color);

  }

  const updateFilterMonth = (month) => {
    props.updateFiltersMonth(month);
  }

  return (
    <div className="App">
        <div className="filter">
          <h1><b>FILTERS</b></h1>
          <h2>COLOR</h2>
          {colors.map(item => {
            return <div className="side-tab-link" onClick={() => updateFilterColor(item)} ><u>{item}</u></div>
          })}
          <br />
          <h2>MONTH</h2>
          {months.map(item => {
            return <div className="side-tab-link" onClick={() => updateFilterMonth(item)} ><u>{item}</u></div>
          })}
        </div>
        <div className="products">
        {/* <Products products={list} filters={props.filters} /> */}
        <ListOfProducts products={list} filters={props.filters} />
        </div>  
        </div>
  );
}

export default App;
