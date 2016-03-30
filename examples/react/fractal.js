'use strict';

const fractal = require('@frctl/fractal');
const root    = `${__dirname}/../..`;

fractal.set('docs.path', `${root}/docs`);

fractal.engine('react', '@frctl/react-adapter');

fractal.set('components.path', `${root}/components/react`);
fractal.set('components.ext', '.jsx');
fractal.set('components.engine', 'react');
fractal.set('components.default.preview', `${root}/components/react/preview.html`);

fractal.set('themes.mandelbrot.skin', 'green');
