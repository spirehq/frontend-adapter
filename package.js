var description = {
  summary: "Frontend Adapter: host app <-> browser extension",
  version: "1.0.0",
  name: "adapter"
};
Package.describe(description);

var path = Npm.require("path");
var fs = Npm.require("fs");
eval(fs.readFileSync("./packages/autopackage.js").toString());
Package.onUse(function(api) {
  addFiles(api, description.name, getDefaultProfiles());
  api.use("oauth");
  api.use(["meteor-platform", "coffeescript", "stylus", "mquandalle:jade@0.4.1", "underscore", "jquery"]);
  api.use(["foundation"]);
  api.export([
    "AdapterFactory",
    "Adapter"
  ])
});
