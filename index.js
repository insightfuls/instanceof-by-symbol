"use strict";

exports.defineInstanceSymbol = function(arg1, arg2) {
	let Ctor, tag;
	if (typeof arg1 === 'function') {
		Ctor = arg1;
		tag = arg2;
	} else if (typeof arg2 === 'function') {
		Ctor = arg2;
		tag = arg1;
	} else {
		throw new TypeError("no constructor provided to defineInstanceSymbol()");
	}
	if (typeof tag !== 'string') {
		throw new TypeError("invalid symbol tag provided to defineInstanceSymbol()");
	}

	const instanceSymbol = Symbol.for(tag);

	Ctor.prototype[instanceSymbol] = true;

	Object.defineProperty(Ctor, Symbol.hasInstance, {
		value: function(candidate) {
			return this === Ctor && !!candidate[instanceSymbol];
		}
	});

	return Ctor;
};
