import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const fileContent = await fs.readFile(PATH_DB, 'utf-8');
  const contactsArray = JSON.parse(fileContent);

  for (let i = 0; i < number; i++) {
    const fakeContact = createFakeContact();
    contactsArray.push(fakeContact);
  }

  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contactsArray, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
};

generateContacts(5);
