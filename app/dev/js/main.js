// optimization : simple or optimization: advanced
// require('./cljsbuild-main');

// optimization : none
// uncomment below
//
require('./out_main/goog/bootstrap/nodejs');
var goog = {};
require('./out_main/goog/base');
require('./cljsbuild-main');
require('./out_main/blank/core');
blank.core._main();
