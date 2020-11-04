INSERT INTO
  shopping_cart.order_items (
    order_id,
    product_id,
    quantity,
    original_price,
    discountPercentage,
    offer_price
  )
VALUES
  (?, ?, ?, ?, ?, ?);