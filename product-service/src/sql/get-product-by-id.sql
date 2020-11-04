SELECT
  p.id,
  p.name as name,
  price,
  description,
  features,
  discount_percentage as discountPercentage,
  image_url as imageUrl,
  brand_name as brand,
  sc.name as subCategory,
  c.name as category,
  ps.warehouse_id as warehouseId,
  ps.stock_count as stockCount,
  p.created_at as createdAt
FROM
  product p
  LEFT JOIN sub_category sc on p.sub_category_id = sc.id
  LEFT JOIN category c on c.id = sc.category_id
  LEFT JOIN product_stock ps ON p.id = ps.product_id
Where
  p.id = ?