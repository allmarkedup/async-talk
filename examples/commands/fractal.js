'use strict';

const fractal = require('@frctl/fractal');
const root    = `${__dirname}/../..`;

fractal.set('docs.path', `${root}/docs`);

fractal.set('components.path', `${root}/components/handlebars`);
fractal.set('components.default.preview', '@skeleton');

fractal.set('plugins.web.static.path', `${root}/public`);

// ----------------------------------------------------------------------------

const opts = {
    description: 'List all items of a specific type.',
    options: [
        ['-l, --limit <number>','Max number of items to list']
    ]
};

fractal.command('list <type>', opts, function(args, done){
    const source = fractal.source(args.type);
    if (source) {
        const items = [];
        for (let item of source.flatten().toArray().slice(0, args.options.limit || 100)) {
            items.push({
                handle: item.handle,
                status: item.status.label,
            });
        }
        fractal.console.br().columns(items, { columnSplitter: ' | ' });
    }
    done();
});

// ----------------------------------------------------------------------------

fractal.plugin('@frctl/api-plugin');

// ----------------------------------------------------------------------------
