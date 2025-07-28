import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, updatedContacts, 'utf-8');
    console.log(`Data was successfully written`);
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
};
