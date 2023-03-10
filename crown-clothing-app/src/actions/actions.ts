import { ActionTypes } from "../action-types/actionTypes";

import { ProductsInterface, SingleProductsInterface } from "../contexts/products_context";

interface SidebarCloseInterface {
  type: ActionTypes.SIDEBAR_CLOSE;
}

interface SidebarOpenInterface {
  type: ActionTypes.SIDEBAR_OPEN;
}

interface GetProductsBegin {
  type: ActionTypes.GET_PRODUCTS_BEGIN;
}

interface GetProductsError {
  type: ActionTypes.GET_PRODUCTS_ERROR;
  payload: string;
}

interface GetProductsSuccess {
  type: ActionTypes.GET_PRODUCTS_SUCCESS;
  payload: ProductsInterface[];
}

interface GetSingleProductBegin {
  type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN;
}

interface GetSingleProductError {
  type: ActionTypes.GET_SINGLE_PRODUCT_ERROR;
  payload: string;
}

interface GetSingleProductSuccess {
  type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS;
  payload: SingleProductsInterface;
}

export type ProductsActions =
  | SidebarCloseInterface
  | SidebarOpenInterface
  | GetProductsBegin
  | GetProductsError
  | GetProductsSuccess
  | GetSingleProductBegin
  | GetSingleProductError
  | GetSingleProductSuccess;
