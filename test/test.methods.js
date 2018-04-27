
const test = require('ava');
const mod = require('../');

test('module imports as an object with props', t => t.is(typeof mod, 'object'));
