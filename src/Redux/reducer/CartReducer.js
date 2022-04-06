import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WHISHLIST,
  ADD_USERNAME,
} from '../../Utils/constants/type';

const initalState = {
  // bookMarsk: []
  carts: [],
  wishLists: [],
  username: "",
};

const CartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("payload: ", JSON.stringify(action.payload), "bookmark: ", state.bookMarsk);
      return {...state, carts: [...state.carts, action.payload.data]};

    case REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter(carts => carts.id !== action.payload.id),
      };

    case ADD_TO_WISHLIST:
      return {...state, wishLists: [...state.wishLists, action.payload]};

    case REMOVE_FROM_WHISHLIST:
      return {
        ...state,
        wishLists: state.wishLists.filter(
          wishLists => wishLists.id !== action.payload.id,
        ),
      };

    case ADD_USERNAME:
      return {...state, username: action.payload};

    default:
      return state;
  }
};

export default CartReducer;
