/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
	[selectShop],
	shop => shop.collections,
);
