SELECT
  id,
  product_id as productId,
  quantity,
  created_at as createdAt,
  updated_at as updatedAt
from
  cart
WHERE
  user_id = ?