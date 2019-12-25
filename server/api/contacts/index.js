import db from '../../db';

export const postContact = async (req, res) => {
  const { topic, email, content, lastname, firstname } = req.body;
  console.log({topic, email, content, lastname, firstname})
  let contact;
  try {
    contact = await db.one(
      'SELECT create_contact($1, $2, $3, $4, $5)',
      [topic, email, content, lastname, firstname]
    );
  } catch (err) {
    contact = err;
  }
  console.log(contact)
  res.send(contact);
};
