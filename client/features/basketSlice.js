import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    // initally our based of food is empty
  items: [],
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  // mkae changes to global store
  reducers: {
    addToBasket: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      // when we get request
      // keep the state items as it as but also add the request data ie payload
      state.items =[...state.items,action.payload]
    },

    
    removeFromBasket: (state,action) => {
      // find that item with id
      const index=state.items.findIndex((item)=>item.id===action.payload.id);

      // make a temp copy of all items stored
      let newBasket=[...state.items];

      if(index>=0){
        // go to that index where as per id found and cut 1 item from their
        newBasket.splice(index,1);
      }
      
      else{
        console.warn(
          `Cant remove product (id:${action.payload.id}) as its not in basket!`
        )
      }
      // now the updated one becomes the real basket
      state.items=newBasket;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// making selector to access itmes
export const selectBasketItems=(state)=>state.basket.items;

export const selectBasketItemsWithId=(state,id)=>
    state.basket.items.filter((item)=>item.id===id);


export const selectBasketTotal=(state)=>state.basket.items.reduce((total,item)=>
 total+=item.price,0)

export default basketSlice.reducer;