export interface ReduxState {
  isNavMenuOpen: boolean;
  isCartOpen: boolean;
  cartItems: Array<any>;
  items: Array<any>;
  banners: Array<any>;
}

export interface ReduxAction {
  payload: any;
  type: string;
}
