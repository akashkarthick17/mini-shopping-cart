SELECT
  COUNT(*) as totalProducts
FROM
  product p
  LEFT JOIN sub_category sc on p.sub_category_id = sc.id
  LEFT JOIN category c on c.id = sc.category_id
  LEFT JOIN product_stock ps ON p.id = ps.product_id
Where
  c.name LIKE '%%'
  AND sc.name LIKE ?
  AND ps.stock_count > 0