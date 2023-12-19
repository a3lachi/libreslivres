import { createSlice } from "@reduxjs/toolkit";

const persistedCart = window.localStorage.getItem('cart');


const cartSlice = createSlice({
    name:"cart",
    initialState: {
        itms: persistedCart ? JSON.parse(persistedCart) : []
    },
    reducers:{

    addOne: (state, action) => {
        const { book, author, price } = action.payload;
      
        const isBookInCart = state.itms.some(item => (
          item.book === book && item.author === author && item.price === price
        ));

        if (!isBookInCart) {
            state.itms = [...state.itms, action.payload];
            console.log('items : ', state.itms.length)
            window.localStorage.setItem('cart', JSON.stringify(state.itms));
        }
        
      },

      delCart:(state,action) => {
        state.itms = [] 
        window.localStorage.removeItem('cart')
      },
      updateCart: (state,action) => {
        state.itms = JSON.parse(window.localStorage.getItem('cart')) 
      },
      updateQtty : (state,action) => {
        state.itms[action.payload].quantity -= 1 
        if ( state.itms[action.payload].quantity === 0 ) {
          state.itms.splice(action.payload,1)
        }
        window.localStorage.setItem('cart', JSON.stringify(state.itms));
      }
    }
  })
  
  
  
  export const { addOne , delCart , updateCart , updateQtty } = cartSlice.actions ;
  export default cartSlice.reducer ;