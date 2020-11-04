SELECT
  p.id,
  sc.name as subCategory,
  c.name as category,
  p.name as name,
  price,
  description,
  features,
  discount_percentage as discountPercentage,
  image_url as imageUrl,
  brand_name as brand,
  created_at as createdAt
FROM
  featured_product fp
  LEFT JOIN product p ON fp.product_id = p.id
  LEFT JOIN sub_category sc on p.sub_category_id = sc.id
  LEFT JOIN category c on c.id = sc.category_id