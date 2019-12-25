export const getPhotosQuery = type => `
  SELECT
    p.id,
    p.img,
    p.type,
    p.title
  FROM photos p
  WHERE p.type = '${type}';
`;