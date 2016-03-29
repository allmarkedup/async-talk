'use strict';

const fractal = require('@frctl/fractal');
const root    = `${__dirname}/../..`;

fractal.set('docs.path', `${root}/docs`);

fractal.set('components.path', `${root}/components/handlebars`);
// fractal.set('components.default.preview', '@skeleton');

fractal.set('plugins.web.static.path', `${root}/public`);
