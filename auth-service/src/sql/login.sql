SELECT
  id,
  email,
  first_name,
  last_name,
  phone_number,
  user_type,
  created_at
FROM
  user
WHERE
  email = ?
  AND password = ?