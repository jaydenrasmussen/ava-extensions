
const test = require('ava');
const mod = require('../');

function hasProp(t, prop) {
    t.true(mod.hasOwnProperty(prop));
}
test('Module has property: isArray', hasProp, 'isArray');
test('Module has property: isNotArray', hasProp, 'isNotArray');
test('Module has property: isAsync', hasProp, 'isAsync');
test('Module has property: isNotAsync', hasProp, 'isNotAsync');
test('Module has property: isClass', hasProp, 'isClass');
test('Module has property: isNotClass', hasProp, 'isNotClass');
test('Module has property: isFunction', hasProp, 'isFunction');
test('Module has property: isNotFunction', hasProp, 'isNotFunction');
test('Module has property: isGenerator', hasProp, 'isGenerator');
test('Module has property: isNotGenerator', hasProp, 'isNotGenerator');
test('Module has property: isNumber', hasProp, 'isNumber');
test('Module has property: isNotNumber', hasProp, 'isNotNumber');
test('Module has property: isObject', hasProp, 'isObject');
test('Module has property: isNotObject', hasProp, 'isNotObject');
test('Module has property: isString', hasProp, 'isString');
test('Module has property: isNotString', hasProp, 'isNotString');
test('Module has property: stub', hasProp, 'stub');

function isFunc(t, prop) {
    t.is(typeof mod[prop], 'function');
}
test('Module prop: isArray is a function', isFunc, 'isArray');
test('Module prop: isNotArray is a function', isFunc, 'isNotArray');
test('Module prop: isAsync is a function', isFunc, 'isAsync');
test('Module prop: isNotAsync is a function', isFunc, 'isNotAsync');
test('Module prop: isClass is a function', isFunc, 'isClass');
test('Module prop: isNotClass is a function', isFunc, 'isNotClass');
test('Module prop: isFunction is a function', isFunc, 'isFunction');
test('Module prop: isNotFunction is a function', isFunc, 'isNotFunction');
test('Module prop: isGenerator is a function', isFunc, 'isGenerator');
test('Module prop: isNotGenerator is a function', isFunc, 'isNotGenerator');
test('Module prop: isNumber is a function', isFunc, 'isNumber');
test('Module prop: isNotNumber is a function', isFunc, 'isNotNumber');
test('Module prop: isObject is a function', isFunc, 'isObject');
test('Module prop: isNotObject is a function', isFunc, 'isNotObject');
test('Module prop: isString is a function', isFunc, 'isString');
test('Module prop: isNotString is a function', isFunc, 'isNotString');
test('Module prop: stub is a function', isFunc, 'stub');
