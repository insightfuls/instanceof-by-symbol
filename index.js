"use strict";

exports.defineInstanceSymbol = function(Ctor, tag) {
	const instanceSymbol = Symbol.for(tag);

	Ctor.prototype[instanceSymbol] = true;

	Object.defineProperty(Ctor, Symbol.hasInstance, {
		value: function(candidate) {
			return this === Ctor && !!candidate[instanceSymbol];
		}
	});
};
