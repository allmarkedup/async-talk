'use strict';

const variants = [];

for (let type of ['Text', 'Password', 'Number']) {
    variants.push({
        label: `${type}`,
        name:  type == 'Text' ? 'default' : `${type.toLowerCase()}-example`,
        context: {
            labelText: `${type} field`,
            type: type.toLowerCase(),
            name: `${type.toLowerCase()}-example`,
        }
    });
}

module.exports = {
    status: 'wip',
    variants: variants
};
