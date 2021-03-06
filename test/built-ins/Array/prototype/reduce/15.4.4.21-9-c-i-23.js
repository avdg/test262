// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-i-23
description: >
    Array.prototype.reduce - This object is the global object which
    contains index property
---*/

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === 1);
            }
        }

            this[0] = 0;
            this[1] = 1;
            this.length = 2;

            Array.prototype.reduce.call(this, callbackfn, initialValue);

assert(testResult, 'testResult !== true');
