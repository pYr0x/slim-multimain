const stealTools = require("steal-tools");
return stealTools.optimize({
  main: [
    "~/src/main1",
    "~/src/foo/main2",
  ],
  config: __dirname + "/package.json!npm"
}, {
  minify: false,
  debug: true,
  bundlePromisePolyfill: false,
  treeShaking: false
});