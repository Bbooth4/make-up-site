CREATE OR REPLACE FUNCTION create_contact(
  p_topic           varchar(200),
  p_email           varchar(100),
  p_content         varchar(2000),
  p_lastName        varchar(50),
  p_firstName       varchar(50)
) RETURNS SETOF UUID AS
$func$
BEGIN
  DECLARE new_id = uuid_generate_v4();
  INSERT INTO photos(id, topic, email, content, lastName, firstName)
  VALUES (new_id, p_topic, p_email, p_content, p_lastName, p_firstName);
  RETURN id;
END;
$func$ LANGUAGE PLPGSQL;
