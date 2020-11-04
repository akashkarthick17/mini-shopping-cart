UPDATE
  shopping_cart.product_stock
SET
  stock_count = ?
WHERE
  product_id = ?
  AND warehouse_id = ?