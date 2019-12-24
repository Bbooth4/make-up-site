CREATE OR REPLACE FUNCTION get_photos(
  p_type     TEXT
)
RETURNS TABLE(
  id       UUID,
  img      varchar(200),
  type     varchar(100),
  title    varchar(2000) 
) AS
$func$
BEGIN
  RETURN QUERY SELECT
    p.id,
    p.img,
    p.type,
    p.title
  FROM photos AS p
  WHERE p.type = p_type;
END;
$func$ LANGUAGE PLPGSQL;
