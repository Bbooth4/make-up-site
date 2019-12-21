let savedContact = {};

export const postContact = (req, res) => {
  savedContact = req.body;
  res.send(savedContact);
};
