export interface ReduxState {
  isNavMenuOpen: boolean;
  navMessages: Array<any>;
  isCartOpen: boolean;
  cartItems: Array<any>;
  items: Array<any>;
  banners: Array<any>;
  categoryImages: Array<any>;
}

export interface ReduxAction {
  payload: any;
  type: string;
}
