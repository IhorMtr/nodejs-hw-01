import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const removeLastContact = async () => {
  const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  if (data.length !== 0) {
    data.pop();
  }
  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf8');
};

removeLastContact();
