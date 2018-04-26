//=============================================================================
// package.json
// npm test
//=============================================================================
import React from "react";
import { expect } from "chai";
import jsdom from "jsdom";
const { JSDOM } = jsdom;
// https://github.com/jsdom/jsdom
/*Essentially we are exposing globally a jsdom generated document and window 
object, which can be used by React during tests. Additionally we need to 
expose all properties from the window object that our running tests later 
on can use them. Last but not least we are giving global access to the 
objects React and expect. It helps us that we don’t have to import each 
of them in our tests. */
const doc = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = new JSDOM(`...`);
// or even
const { document } = new JSDOM(`...`).window;

const win = doc.defaultView;
global.document = doc;
global.window = win;
global.document = document;
global.window = window;
Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
global.React = React;
global.expect = expect;
