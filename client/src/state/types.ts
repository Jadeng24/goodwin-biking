export interface ReduxState {
  isCartOpen: boolean;
  cart: Array<any>;
  items: Array<any>;
}

export interface ReduxAction {
  payload: any;
  type: string;
}

export interface Item {
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
}
