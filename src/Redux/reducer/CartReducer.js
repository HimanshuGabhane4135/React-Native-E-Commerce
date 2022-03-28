import { ADD_TO_BOOKMARK_LIST, ADD_TO_CART, REMOVE_FROM_CART } from "../../Utils/constants/type";

const initalState = {
  // bookMarsk: []
  carts:[]

};

const CartReducer = (state = initalState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      // console.log("payload: ", JSON.stringify(action.payload), "bookmark: ", state.bookMarsk);
      return { ...state, carts: [...state.carts, action.payload.data] }

    case REMOVE_FROM_CART:
      return{...state,
        carts: state.carts.filter(carts => carts.id !== action.payload.id)
   }

    default:
      return state;
  }
}

export default CartReducer;
