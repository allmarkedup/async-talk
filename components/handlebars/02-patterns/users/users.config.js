'use strict';

const faker = require('faker');
const users = [];

for (let i = 0; i < 100; i++) {
    users.push({
        name: faker.name.findName(),
        bio: faker.lorem.sentence()
    });
}

module.exports = {
    context: {
        users: users
    }
}
