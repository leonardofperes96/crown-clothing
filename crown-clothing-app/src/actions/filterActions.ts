import { ActionTypes } from "../action-types/actionTypes";
import { ProductsInterface } from "../contexts/products_context";

interface LoadProducts {
  type: ActionTypes.LOAD_PRODUCTS;
  payload: ProductsInterface[];
}

interface UpdateSort {
  type: ActionTypes.UPDATE_SORT;
  payload: string;
}

interface SortProducts {
  type: ActionTypes.SORT_PRODUCTS;
}

interface UpdateFilters {
  type: ActionTypes.UPDATE_FILTERS;
  payload: { name: string; value: string };
}

interface FilterProducts {
  type: ActionTypes.FILTER_PRODUCTS;
}

interface ClearFilters {
  type: ActionTypes.CLEAR_FILTERS;
}

interface GridView {
  type: ActionTypes.SET_GRID_VIEW;
}

interface ListView {
  type: ActionTypes.SET_LIST_VIEW;
}

export type FilterActions =
  | LoadProducts
  | UpdateSort
  | SortProducts
  | UpdateFilters
  | FilterProducts
  | ClearFilters
  | GridView
  | ListView;
