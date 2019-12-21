export const photoList = [
  {
    img: 'background.jpg',
    title: 'Image',
    author: 'author',
    featured: true
  },
  {
    img: 'background.jpg',
    title: 'Image 2',
    author: 'author',
    featured: true
  },
  {
    img: 'background.jpg',
    title: 'Image 3',
    author: 'author',
    featured: true
  },
  {
    img: 'background.jpg',
    title: 'Image 4',
    author: 'author',
    featured: true
  },
  {
    img: 'background.jpg',
    title: 'Image 5',
    author: 'author',
    featured: true
  },
  {
    img: 'background.jpg',
    title: 'Image 6',
    author: 'author',
    featured: true
  }
];

let savedContact = {};

export const getPhotos = (req, res) => {
  res.send(photoList);
};

export const postContact = (req, res) => {
  savedContact = req.body;
  res.send(savedContact);
};
