'use strict';
import getApple from './apple';
import test from 'tape';
import Apple from './apple';
test(t => {
   let apple: Apple = new Apple();
   t.equals(apple.getApple(), 'apple');
   t.equals(apple.getApple(), 'urulek');
   t.end();
})