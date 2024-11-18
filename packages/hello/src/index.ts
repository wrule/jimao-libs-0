#!/usr/bin/env node
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

export default
class MyClass {
  public hello() {
    console.log('你好世界', dayjs().format('YYYY-MM-DD HH:mm:ss'), nanoid());
  }
}

const a = new MyClass();
a.hello();
