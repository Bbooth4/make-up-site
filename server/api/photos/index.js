import db from '../../db';

export const getPhotos = async (req, res) => {
  const { type } = req.query;
  let images;
  try {
    images = await db.func('get_photos', [type]);
  } catch (err) {
    images = err;
  }
  res.send(images);
};

export const postPhoto = async (req, res) => {
  const { img, type, title } = req.body;
  let image;
  try {
    image = await db.func('create_photo', [img, type, title]);
  } catch (err) {
    image = err;
  }
  console.log(image)
  res.send(image);
};
