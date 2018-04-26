'use strict';
// add spies and stubs;
// is's
let isArray = (t, module, prop) => t.is(Object.prototype.toString.call(module[prop]), `[object Array]`);
let isAsync = (t, module, prop) => {
    const Async = (async () => {}).constructor;
    t.true(module[prop] instanceof Async);
};
let isClass = (t, module, prop, expected) => t.is(Object.prototype.toString.call(module[prop]), `[object ${expected}]`);
let isFunction = (t, module, prop) => t.is(typeof module[prop], 'function');
let isGenerator = (t, module, prop) => {
    const Generator = (function*(){}).constructor;
    t.is(module[prop] instanceof Generator);
};
let isNumber = (t, module, prop) => t.is(typeof module[prop], 'number');
let isObject = (t, module, prop) => t.is(typeof module[prop], 'object');
let isString = (t, module, prop) => t.is(typeof module[prop], 'string');
// nots
let isNotArray = (t, module, prop) => t.not(Object.prototype.toString.call(module[prop]), `[object Array]`);
let isNotAsync = (t, module, prop) => {
    const Async = (async () => {}).constructor;
    t.false(module[prop] instanceof Async);
};
let isNotClass = (t, module, prop, expected) => t.not(Object.prototype.toString.call(module[prop]), `[object ${expected}]`);
let isNotFunction = (t, module, prop) => t.not(typeof module[prop], 'function');
let isNotGenerator = (t, module, prop) => {
    const Generator = (function*(){}).constructor;
    t.false(module[prop] instanceof Generator);
};
let isNotNumber = (t, module, prop) => t.not(typeof module[prop], 'number');
let isNotObject = (t, module, prop) => t.not(typeof module[prop], 'object');
let isNotString = (t, module, prop) => t.not(typeof module[prop], 'string');
let stub = () => {};

module.exports = {
    isArray,
    isNotArray,
    isAsync,
    isNotAsync,
    isClass,
    isNotClass,
    isFunction,
    isNotFunction,
    isGenerator,
    isNotGenerator,
    isNumber,
    isNotNumber,
    isObject,
    isNotObject,
    isString,
    isNotString,
    stub
}
