SELECT
  COUNT(*) as totalProducts
from
  (
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
      created_at as createdAt
    from
      tag t
      LEFT JOIN product_tag pt ON t.id = pt.tag_id
      LEFT JOIN product p ON pt.product_id = p.id
      LEFT JOIN sub_category sc on p.sub_category_id = sc.id
      LEFT JOIN category c on c.id = sc.category_id
    WHERE
      t.tag_name LIKE ?
      AND c.name LIKE ?
      AND sc.name LIKE ?
    GROUP BY
      p.id
    ORDER BY
      COUNT(p.id) DESC
  ) as p
  LEFT JOIN product_stock ps ON p.id = ps.product_id
WHERE
  ps.stock_count > 0