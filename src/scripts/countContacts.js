import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const countContacts = async () => {
  const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  return data.length;
};

console.log(await countContacts());
