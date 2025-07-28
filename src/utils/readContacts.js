import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    return fileContent;
  } catch (error) {
    console.log(`Some error happened ${error}`);
  }
};
