import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

export
const main = () => {
  setInterval(() => {
    console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'), nanoid());
  }, 1000);
};

export default
class ABC {
  public constructor(private uid = nanoid()) { }

  public show() {
    console.log('uid is', this.uid);
    document.write('uid is ' + this.uid);
  }
}
