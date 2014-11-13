require-css-writecss
====================

Test for require-css using the writeCss flag

The important part if in build.js where we are passing in the flag `writeCSSModule: true`.

## Build and test
```
$ npm install
$ npm test
```

Verify that the file `index-built.js` has this:

``` javascript
define('@writecss', function writeCss(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));}});

define('css!index1',["@writecss"], function(writeCss){
 writeCss("html, body {\n  padding: 0px;\n}");
});

define('css!index2',["@writecss"], function(writeCss){
 writeCss(".index2 {\n  clear: both;\n}\n");
});
```

The new stuff is `writecss`.
