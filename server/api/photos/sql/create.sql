CREATE OR REPLACE FUNCTION create_photo(
  p_img      varchar(200),
  p_type     varchar(100),
  p_title    varchar(2000)
) RETURNS TABLE(id UUID) AS
$func$
BEGIN
  INSERT INTO photos(id, img, type, title)
  VALUES (uuid_generate_v4(), p_img, p_type, p_title);
END;
$func$ LANGUAGE PLPGSQL;
