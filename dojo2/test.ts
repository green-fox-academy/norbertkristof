'use strict'

import test = require('tape');
import HalalFolyoja from './file';

test(t => {
    let string1: string = "William Shakespeare";

    let string2: string = "I am a weakish speller";

    //let output: boolean;

    t.deepEqual(HalalFolyoja(string1,string2), true);

    t.end()

})
