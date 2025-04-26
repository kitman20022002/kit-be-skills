export {};
import { seedPost } from '../database/seeders/seedPost';
const dotenv = require('dotenv');
dotenv.config();

const init = async () => {
  await seedPost();
};

init();
