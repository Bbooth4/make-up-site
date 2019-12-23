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

export const getPhotos = (req, res) => {
  res.send(photoList);
};

export const postPhotos = async (req, res) => {
  const { img, type, title } = req.body;
  let image;
  try {
    image = await db.query('SELECT create_photo($1, $2, $3)', [img, type, title]);
  } catch (err) {
    image = err;
  }
  console.log({image});
  res.send(image);
};
