UPDATE
  user_address ua
SET
  ua.address_1 = ?,
  ua.address_2 = ?,
  ua.pincode = ?,
  ua.city = ?,
  ua.land_mark = ?,
  ua.gps_coordinates = ?
WHERE
  id = ?
  AND user_id = ?