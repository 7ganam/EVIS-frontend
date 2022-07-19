import React, { createContext, useContext, useMemo, useReducer } from "react"; // =================================================================================

// =================================================================================
const initialState = {
  isHeaderFixed: false,
  cart: [
    {
      price: 250,
      name: "Ford 2019",
      imgUrl: "/assets/images/products/Automotive/1.Ford2019.png",
      id: "7222243834583537",
      qty: 1,
    },
    {
      price: 250,
      name: "Porsche 2020",
      imgUrl: "/assets/images/products/Automotive/28.Porsche2020.png",
      id: "38553442244076086",
      qty: 1,
    },
    {
      price: 250,
      name: "Heavy 20kt Gold Necklace",
      imgUrl:
        "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
      id: "9573201630529315",
      qty: 1,
    },
  ],
};
const AppContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item.id !== cartItem.id);
        return { ...state, cart: filteredCart };
      }

      if (exist) {
        const newCart = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, qty: cartItem.qty } : item
        );
        return { ...state, cart: newCart };
      }

      return { ...state, cart: [...cartList, cartItem] };

    case "TOGGLE_HEADER":
      return { ...state, isHeaderFixed: action.payload };

    default: {
      return state;
    }
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
export default AppContext;
