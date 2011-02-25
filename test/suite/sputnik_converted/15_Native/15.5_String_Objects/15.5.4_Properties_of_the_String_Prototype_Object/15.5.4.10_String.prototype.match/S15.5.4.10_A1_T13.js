// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A1_T13;
* @section: 15.5.4.10;
* @assertion: String.prototype.match (regexp);
* @description: Override toString and valueOf functions, then call match (regexp) function with this object as argument;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.10_A1_T13",

path: "15.5.4.10",

description: "Override toString and valueOf functions, then call match (regexp) function with this object as argument",

test: function testcase() {
   var __obj = {toString:function(){return {};},valueOf:function(){return 1;}}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041B\u0031ABAB\u0031BBAA".match(__obj)[0] !=="1") {
  $ERROR('#1: var __obj = {toString:function(){return {};},valueOf:function(){return 1;}}; "ABB\\u0041B\\u0031ABAB\\u0031BBAA".match(__obj)[0] ==="1". Actual: '+("ABB\u0041B\u0031ABAB\u0031BBAA".match(__obj)[0]) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ("ABB\u0041B\u0031ABAB\u0031BBAA".match(__obj).length !== 1) {
  $ERROR('#3: var __obj = {toString:function(){return {};},valueOf:function(){return 1;}}; "ABB\\u0041B\\u0031ABAB\\u0031BBAA".match(__obj).length === 1. Actual: '+("ABB\u0041B\u0031ABAB\u0031BBAA".match(__obj).length) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});
