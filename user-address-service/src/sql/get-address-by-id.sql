SELECT
  id,
  address_1 as address1,
  address_2 as address2,
  pincode as pinCode,
  city,
  land_mark as landmark,
  gps_coordinates as gpsCoordinates
FROM
  shopping_cart.user_address
WHERE
  id = ?
  AND user_id = ?