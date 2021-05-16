const NULL = null;
const NA = null;

/** @namespace app */
var app = app || {};
app.namespace = function (nsString) {
  let domain = nsString.split('.');
  let root = app;
  if (domain[0] === 'app') {
    domain = domain.slice(1);
  }
  for (let i = 0; i < domain.length; i++) {
    if (root[domain[i]] === void 0) {
      root[domain[i]] = {};
    }
    root = root[domain[i]];
  }
};

// global const values
const MOBILE_WIDTH = 768;
const MAX_WINDOW_WIDTH = 960;

export { MOBILE_WIDTH, MAX_WINDOW_WIDTH, NULL, NA, app };
