// discountCalculator.js
function calculateDiscountedPrice(quantity, unitPrice) {
  // Validate inputs
  if (typeof quantity !== 'number' || typeof unitPrice !== 'number') {
    throw new TypeError('quantity and unitPrice must be numbers');
  }
  if (!Number.isFinite(quantity) || !Number.isFinite(unitPrice)) {
    throw new TypeError('quantity and unitPrice must be finite numbers');
  }
  if (quantity < 0 || unitPrice < 0) {
    throw new RangeError('quantity and unitPrice must be non-negative');
  }

  // Discount tiers
  let discountRate = 0;
  if (quantity >= 100) {
    discountRate = 0.25;
  } else if (quantity >= 50) {
    discountRate = 0.15;
  } else if (quantity >= 10) {
    discountRate = 0.10;
  } else {
    discountRate = 0;
  }

  const subtotal = quantity * unitPrice;
  const total = subtotal * (1 - discountRate);

  return Number(total.toFixed(2));
}

// Export both as the module function and as a named property
module.exports = calculateDiscountedPrice;
module.exports.calculateDiscountedPrice = calculateDiscountedPrice;
