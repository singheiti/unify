import React from "react";

const ListOfProducts = (props) => {
    return (<div style={{display: "block", padding: '10px'}}>
        {props.products.filter((prod)=>{
            var selectedProd;
            prod.variant.some(element => {
                if(!props.filters.color && !props.filters.month) {
                    selectedProd = true;
                    return true;
                }
                else if(props.filters.color && !props.filters.month) {
                    if(props.filters.color === element.color) {
                        selectedProd = true;
                        return true;
                    }
                }
                else if(props.filters.month && !props.filters.color) {
                    if(element.months.filter(mon => props.filters.month === mon).length >= 1) {
                        selectedProd = true;
                        return true;
                    }
                }
                else{
                    if(props.filters.color === element.color && element.months.filter(mon=>props.filters.month === mon).length >= 1){
                        selectedProd = true;
                        return true;
                    }
                    else {
                        selectedProd = false;
                        return true;
                    }
                }
            })
            if(selectedProd) return prod;
        }).map((product, index) => {
            var selectedColor;
          var colors = [];
          var selectedVariant;
        return <div key={index}>
            <div className="products-div">
            {product.variant.forEach(element => {
              if (!props.filters.color) {
                if (element.type === 'default') selectedVariant = element;
              }
              else {
                if (props.filters.color && props.filters.color === element.color) selectedVariant = element;
              }
              colors.push({color: element.color, cost: element.cost})
            }
            )
          }

          {/* Actual UI */}
          <div style={{width: '150px', height: '150px', backgroundColor: selectedColor=selectedVariant.color, border: '1px solid black'}}></div>     
            <div className="products-list">
              Name : {product.name} <br />
              By {product.brand} <br />
              Price : {selectedVariant.cost} <br />
              Colors available: <br />
              {colors.map(col => {
                return <div style={{display: "inline-block"}}>
                  <div 
                    style={{width: '20px', height: '20px', borderRadius: '50%', marginLeft: '10px', backgroundColor: col.color}}
                  ></div>
                  </div>
              })}
            </div>
            </div>
            <br/><br/><br/>
        </div>
        })}
    </div>)
}

export default ListOfProducts;