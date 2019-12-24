import db from '../../db';

export const photoList = [
  {
    type: 'type',
    title: 'Image',
    img: 'background.jpg'
  },
  {
    type: 'type',
    title: 'Image 2',
    img: 'background.jpg'
  },
  {
    type: 'type',
    title: 'Image 3',
    img: 'background.jpg'
  },
  {
    type: 'type',
    title: 'Image 4',
    img: 'background.jpg'
  },
  {
    type: 'type',
    title: 'Image 5',
    img: 'background.jpg'
  },
  {
    type: 'type',
    title: 'Image 6',
    img: 'background.jpg'
  }
];

export const getPhotos = async (req, res) => {
  const { type } = req.query;
  let images;
  try {
    images = await db.many('SELECT get_photos($1)', [type]);
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
