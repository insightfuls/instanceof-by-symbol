"use strict";

const assert = require('assert');

const { defineInstanceSymbol } = require('.');

class Foo {
}

class Bar {
}

class Baz extends Bar {
}

/*
 * Foo and Bar will be equivalent, and since Baz is a Bar, it will be a Foo, too.
 */
defineInstanceSymbol(Foo, 'instanceof-by-symbol/Foo@1.0.0');
defineInstanceSymbol(Bar, 'instanceof-by-symbol/Foo@1.0.0');

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

assert(foo instanceof Foo);
assert(foo instanceof Bar);
assert(bar instanceof Foo);
assert(bar instanceof Bar);
assert(baz instanceof Foo);
assert(baz instanceof Bar);

/*
 * Foo and Bar are not Baz, though.
 */
assert(!(foo instanceof Baz));
assert(!(bar instanceof Baz));
