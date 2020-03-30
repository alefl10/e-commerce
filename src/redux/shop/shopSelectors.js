/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
	[selectShop],
	shop => shop.collections,
);

// Convert ShopData collections object into an array
export const selectCollectionsForPreview = createSelector(
	[selectShopCollections],
	collections => (collections ? Object.keys(collections).map(key => collections[key]) : []),
);

export const selectCollection = collectionUrlParam => createSelector(
	[selectShopCollections],
	collections => (collections ? collections[collectionUrlParam] : null),
);
