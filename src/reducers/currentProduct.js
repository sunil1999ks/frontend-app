// // import React from 'react'

// // const currentProduct = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default currentProduct



// let parsedProduct = null;
// let storedProduct = localStorage.getItem('currentProduct');

// if (storedProduct && storedProduct !== undefined) {
//   parsedProduct = JSON.parse(storedProduct); // Corrected: you need to parse the string into an object
// }

// let initialState = {
//   product: parsedProduct // This will be null or the parsed product object
// };

// let currentProduct = (state = initialState, action) => { // Fixed: added the default state value
//   switch(action.type) {
//     case 'SET_CURRENT_PRODUCT':
//       localStorage.setItem('currentProduct', JSON.stringify(action.payload));
//       return {
//         ...state,
//         product: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default currentProduct;


let parsedProduct = null;
let storedProduct = localStorage.getItem('currentProduct');

// Check if storedProduct exists and is a valid JSON string
if (storedProduct && storedProduct !== "undefined") {
  try {
    parsedProduct = JSON.parse(storedProduct); // Try to parse the JSON string
  } catch (error) {
    console.error("Error parsing stored product from localStorage:", error);
    parsedProduct = null; // If parsing fails, set it to null
  }
}


let initialState = {
  product: parsedProduct
};

let currentProduct = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_CURRENT_PRODUCT':
      localStorage.setItem('currentProduct', JSON.stringify(action.payload));
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
};

export default currentProduct;

