export interface ReduxState {
  isCartOpen: boolean;
  cartItems: Array<any>;
  items: Array<any>;
}

export interface ReduxAction {
  payload: any;
  type: string;
}
