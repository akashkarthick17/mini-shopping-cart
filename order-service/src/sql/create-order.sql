INSERT INTO
  shopping_cart.order (
    user_id,
    delivery_address_id,
    payment_type_id,
    order_status_id,
    ordered_date
  )
VALUES
  (?, ?, ?, ?, ?);