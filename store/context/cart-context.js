import { createContext, useReducer } from "react";

//adding value only for auto-completion
export const CartContext = createContext({
  userName: '',
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  
  //Logic for adding a cart item :)
  if (action.type === "ADD") {
    //concat will return a new array rather than edit the existing array with .push
    console.log('INSIDE CART REDUCER!!!!!!!!')
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //does the item id we are passing in (action.item.id)
    //, match the item.id that we are checking against
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //existing cart items index passed in items array to give us
    //the exact cart item
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    //if item is part of the cart already
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items]; //copy existing items array
      //pick the old item in the cart, and override with updatedItem
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    //now that we have the index of the item
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id);
    }else{
      const updatedItem = {...existingItem, amount: existingItem.amount -1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    console.log('INSIDE ADD ITEM HANDLER!!!!!!!')
    console.log(item, "is our item");
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    userName: 'Aaron',
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
