import {UPDATE_PRODUCTS, TOGGLE_MODE} from './TYPES'


 export const updateProducts = productsSettings => (
   {
     type: UPDATE_PRODUCTS,
     payload: productsSettings,
   }
 );

 export const toggleMode = productsSettings => (
  {
    type: TOGGLE_MODE,
    payload: productsSettings,
  });
