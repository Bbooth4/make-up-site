import db from '../../db';

export const postContact = async (req, res) => {
  const { topic, email, content, lastname, firstname } = req.body;
  let contact;
  try {
    contact = await db.many(
      'SELECT * FROM create_contact($1, $2, $3, $4, $5)',
      [topic, email, content, lastname, firstname]
    );
  } catch (err) {
    contact = err;
  }
  res.send(contact);
};
