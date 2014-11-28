require-css-writecss
====================

Test for require-css using the `writeCSSModule` flag when building an application with `r.js`.  The `writeCSSModule` is to allow modules to load css ondemand rather than letting require-css load the css assets as soon as the application loads.  So why should your application behave differently in development and after processing it with `r.js`?

To enable it, use the flag `writeCSSModule: true` as we do in <a href="https://github.com/MiguelCastillo/require-css-writecss/blob/master/build.js#L10">build.js</a>.

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

The new stuff is handled by the module `@writecss`.

To verify that this whole thing works, there is a very small sample page.  Once you have ran `npm install`, you can run the sample with:

```
$ grunt start
```

Now you can open up <a href="http://localhost:8989">http://localhost:8989</a>.  You should see a light grey background page with some borders.  This is just verifying that things work.
