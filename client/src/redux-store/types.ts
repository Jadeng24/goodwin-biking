export interface ReduxState {
  isCartOpen: boolean;
  cart: Array<any>;
  items: Array<any>;
}

export interface ReduxAction {
  payload: any;
  type: string;
}
