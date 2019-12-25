import db from '../../db';
import { getPhotosQuery } from './queries';

export const getPhotos = async (req, res) => {
  const { type } = req.query;
  let images;
  try {
    images = await db.many(getPhotosQuery(type));
  } catch (err) {
    images = err;
  }
  res.send(images);
};

export const postPhotos = async (req, res) => {
  const { img, type, title } = req.body;
  let image;
  try {
    image = await db.one('SELECT create_photo($1, $2, $3)', [img, type, title]);
  } catch (err) {
    image = err;
  }
  res.send(image);
};
