SELECT
  p.id,
  p.name,
  price,
  description,
  features,
  discountPercentage,
  imageUrl,
  brand,
  category,
  subCategory,
  warehouse_id AS warehouseId,
  stock_count AS stockCount,
  createdAt
FROM
  (
    SELECT
      p.id,
      p.name AS name,
      p.price,
      p.description,
      p.features,
      p.discount_percentage AS discountPercentage,
      p.image_url AS imageUrl,
      p.brand_name AS brand,
      sc.name AS subCategory,
      c.name AS category,
      p.created_at AS createdAt
    FROM
      tag t
      LEFT JOIN product_tag pt ON t.id = pt.tag_id
      LEFT JOIN product p ON pt.product_id = p.id
      LEFT JOIN sub_category sc ON p.sub_category_id = sc.id
      LEFT JOIN category c ON c.id = sc.category_id
    WHERE
      t.tag_name LIKE ?
      AND c.name LIKE ?
      AND sc.name LIKE ?
    GROUP BY
      p.id
    ORDER BY
      COUNT(p.id) DESC
    LIMIT
      ?, ?
  ) AS p
  LEFT JOIN product_stock ps ON p.id = ps.product_id
WHERE
  ps.stock_count > 0