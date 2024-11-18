import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

export
const main = () => {
  setInterval(() => {
    console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'), nanoid());
  }, 1000);
};
