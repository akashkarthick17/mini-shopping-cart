SELECT
  id,
  email,
  first_name,
  last_name,
  phone_number,
  user_type,
  created_at
FROM
  USER
WHERE
  email = ?