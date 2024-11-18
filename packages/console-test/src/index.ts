import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

function main() {
  setInterval(() => {
    console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'), nanoid());
  }, 1000);
}

main();
