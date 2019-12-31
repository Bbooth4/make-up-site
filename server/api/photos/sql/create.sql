CREATE OR REPLACE FUNCTION create_photo(
  p_img      varchar(200),
  p_type     varchar(100),
  p_title    varchar(2000)
) RETURNS uuid AS
$func$
DECLARE new_id uuid;
BEGIN
  new_id = uuid_generate_v4();
  INSERT INTO photos(id, img, type, title)
  VALUES (new_id, p_img, p_type, p_title);
  RETURN new_id;
END;
$func$ LANGUAGE PLPGSQL;
