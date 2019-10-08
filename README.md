# instanceof-by-symbol

Use a Symbol from the registry to identify instances across realms or module versions.

## Usage

```
const { defineInstanceSymbol } = require('instanceof-by-symbol');

class MyClass {
}

defineInstanceSymbol(MyClass, "my-module/MyClass@0.1.0");
```

Now `MyClass` instances tested using `instanceof` will be identified by the `my-module/MyClass@0.1.0` symbol. Different copies or versions of the module loaded in different realms or installed by `npm` will be considered `instanceof` each other.

The onus is on the developer to:

* use a symbol identifier that will not (or is unlikely to) clash with others; including the module and version is recommended
* change the symbol when the class is no longer compatible so should no longer be considered equivalent

`defineInstanceSymbol` also returns `MyClass` in case you want to use a more fluid style. It also works with the arguments reversed.

```
const { defineInstanceSymbol } = require('instanceof-by-symbol');

const MyClass = defineInstanceSymbol("my-module/MyClass@0.1.0", class {
});
```
