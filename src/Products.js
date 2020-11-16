import React, { useEffect, useState } from "react";

const Products = (props) => {
    return (<div style={{display: "block", padding: '10px'}}>
        {props.products.filter((product,index) => {
          var selectedColor;
          var colors = [];
          var selectedVariant;
          return <div> 
            <div  className="products-div" key={index}>
            {product.variant.forEach(element => {
              if (!props.filters.color) {
                if (element.type === 'default') selectedVariant = element;
              }
              else {
                if (props.filters.color && props.filters.color === element.color) selectedVariant = element;
              }
              colors.push(element.color)
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
                    style={{width: '20px', height: '20px', borderRadius: '50%', marginLeft: '10px', backgroundColor: col}}
                  ></div>
                  </div>
              })}
            </div>
            </div>
            <br /><br /><br />
            </div>
        })}
    </div>)
}

export default Products;

// {props.products.filter((item, index) => {
//   if (props.filters === {}) {
//   return (
//     item.variant.filter(variation => {
//       if(variation.type === "default") {
//         return(<div>
//           <div>{variation.color}</div>
//           <div>
//             Name: {item.name} <br />
//             Brand: {item.brand} <br />
//             Cost: {variation.cost} <br />
//             Colors: {}
//           </div>
//         </div>)
//       }
//     })
//   )}
// })}