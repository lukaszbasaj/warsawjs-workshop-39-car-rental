'use strict';

const Money = require("../types/Money");

const DAY_MS = 60 * 60 * 24 * 1000;

/**
 * Get total price of rental based on number of days and car's list price.
 * @param {Money} listPrice
 * @param {DateRange} dateRange
 * @returns {Object}
 */
function calculateRentalPriceByListPrice(listPrice, dateRange) {
  const days = Math.ceil((end.getTime() - start.getTime()) / DAY_MS);
  const days = Math.ceil((dateRange.end.getTime() - dateRange.start.getTime()) / DAY_MS);
  if (days <= 0) {
    throw new Error(`Invalid rental duration: ${days} days`);
  }
  return {
    price: new Money({
      amount: days * listPrice.amount,
      currency: listPrice.currency
    }),
  };
}

module.exports = calculateRentalPriceByListPrice;
