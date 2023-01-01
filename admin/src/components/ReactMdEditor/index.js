require("./index.css");

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function () {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol
          ? Symbol.for("react.element")
          : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol
          ? Symbol.for("react.fragment")
          : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.strict_mode")
          : 60108;
        var REACT_PROFILER_TYPE = hasSymbol
          ? Symbol.for("react.profiler")
          : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol
          ? Symbol.for("react.provider")
          : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol
          ? Symbol.for("react.context")
          : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol
          ? Symbol.for("react.async_mode")
          : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.concurrent_mode")
          : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol
          ? Symbol.for("react.forward_ref")
          : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol
          ? Symbol.for("react.suspense")
          : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol
          ? Symbol.for("react.suspense_list")
          : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol
          ? Symbol.for("react.fundamental")
          : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol
          ? Symbol.for("react.responder")
          : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return (
            typeof type === "string" ||
            typeof type === "function" ||
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_CONCURRENT_MODE_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            (typeof type === "object" &&
              type !== null &&
              (type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                type.$$typeof === REACT_RESPONDER_TYPE ||
                type.$$typeof === REACT_SCOPE_TYPE ||
                type.$$typeof === REACT_BLOCK_TYPE))
          );
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"](
                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
              );
            }
          }
          return (
            isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
          );
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return (
            typeof object === "object" &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  },
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development();
    }
  },
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function (letter) {
          test3[letter] = letter;
        });
        if (
          Object.keys(Object.assign({}, test3)).join("") !==
          "abcdefghijklmnopqrst"
        ) {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative()
      ? Object.assign
      : function (target, source) {
          var from;
          var to = toObject(target);
          var symbols;
          for (var s2 = 1; s2 < arguments.length; s2++) {
            from = Object(arguments[s2]);
            for (var key in from) {
              if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
              }
            }
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);
              for (var i2 = 0; i2 < symbols.length; i2++) {
                if (propIsEnumerable.call(from, symbols[i2])) {
                  to[symbols[i2]] = from[symbols[i2]];
                }
              }
            }
          }
          return to;
        };
  },
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  },
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module2) {
    module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  },
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module2) {
    "use strict";
    var printWarning = function () {};
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function (text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {}
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(
      typeSpecs,
      values,
      location,
      componentName,
      getStack
    ) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") +
                    ": " +
                    location +
                    " type `" +
                    typeSpecName +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof typeSpecs[typeSpecName] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](
                values,
                typeSpecName,
                componentName,
                location,
                null,
                ReactPropTypesSecret
              );
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") +
                  ": type specification of " +
                  location +
                  " `" +
                  typeSpecName +
                  "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                  typeof error +
                  ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (
              error instanceof Error &&
              !(error.message in loggedTypeFailures)
            ) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " +
                  location +
                  " type: " +
                  error.message +
                  (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function () {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  },
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module2) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function () {};
    if (true) {
      printWarning = function (text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {}
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function (isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn =
          maybeIterable &&
          ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };
      function is(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(
          isRequired,
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret
        ) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                manualPropTypeWarningCount < 3
              ) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" +
                    propFullName +
                    "` prop on `" +
                    componentName +
                    "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError(
                  "The " +
                    location +
                    " `" +
                    propFullName +
                    "` is marked as required " +
                    ("in `" + componentName + "`, but its value is `null`.")
                );
              }
              return new PropTypeError(
                "The " +
                  location +
                  " `" +
                  propFullName +
                  "` is marked as required in " +
                  ("`" + componentName + "`, but its value is `undefined`.")
              );
            }
            return null;
          } else {
            return validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            );
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret
        ) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  preciseType +
                  "` supplied to `" +
                  componentName +
                  "`, expected ") +
                ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError(
              "Property `" +
                propFullName +
                "` of component `" +
                componentName +
                "` has invalid PropType notation inside arrayOf."
            );
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected an array.")
            );
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error = typeChecker(
              propValue,
              i2,
              componentName,
              location,
              propFullName + "[" + i2 + "]",
              ReactPropTypesSecret
            );
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected a single ReactElement.")
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected a single ReactElement type.")
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  actualClassName +
                  "` supplied to `" +
                  componentName +
                  "`, expected ") +
                ("instance of `" + expectedClassName + "`.")
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " +
                  arguments.length +
                  " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning(
                "Invalid argument supplied to oneOf, expected an array."
              );
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(
            expectedValues,
            function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            }
          );
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of value `" +
              String(propValue) +
              "` " +
              ("supplied to `" +
                componentName +
                "`, expected one of " +
                valuesString +
                ".")
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError(
              "Property `" +
                propFullName +
                "` of component `" +
                componentName +
                "` has invalid PropType notation inside objectOf."
            );
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected an object.")
            );
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(
                propValue,
                key,
                componentName,
                location,
                propFullName + "." + key,
                ReactPropTypesSecret
              );
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true
            ? printWarning(
                "Invalid argument supplied to oneOfType, expected an instance of array."
              )
            : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                getPostfixForTypeWarning(checker) +
                " at index " +
                i2 +
                "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(
              props,
              propName,
              componentName,
              location,
              propFullName,
              ReactPropTypesSecret
            );
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage =
            expectedTypes.length > 0
              ? ", expected one of type [" + expectedTypes.join(", ") + "]"
              : "";
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`" + expectedTypesMessage + ".")
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (!isNode(props[propName])) {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` supplied to " +
                ("`" + componentName + "`, expected a ReactNode.")
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(
        componentName,
        location,
        propFullName,
        key,
        type
      ) {
        return new PropTypeError(
          (componentName || "React class") +
            ": " +
            location +
            " type `" +
            propFullName +
            "." +
            key +
            "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
            type +
            "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type `" +
                propType +
                "` " +
                ("supplied to `" + componentName + "`, expected `object`.")
            );
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(
                componentName,
                location,
                propFullName,
                key,
                getPreciseType(checker)
              );
            }
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret
            );
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type `" +
                propType +
                "` " +
                ("supplied to `" + componentName + "`, expected `object`.")
            );
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(
                componentName,
                location,
                propFullName,
                key,
                getPreciseType(checker)
              );
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " +
                  location +
                  " `" +
                  propFullName +
                  "` key `" +
                  key +
                  "` supplied to `" +
                  componentName +
                  "`.\nBad object: " +
                  JSON.stringify(props[propName], null, "  ") +
                  "\nValid keys: " +
                  JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret
            );
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  },
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module2) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(
        ReactIs.isElement,
        throwOnDirectAccess
      );
    } else {
      module2.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  },
});

// node_modules/regenerator-runtime/runtime.js
var require_runtime = __commonJS({
  "node_modules/regenerator-runtime/runtime.js"(exports, module2) {
    var runtime = (function (exports2) {
      "use strict";
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined2;
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
        return obj[key];
      }
      try {
        define({}, "");
      } catch (err) {
        define = function (obj, key, value) {
          return (obj[key] = value);
        };
      }
      function wrap(innerFn, outerFn, self2, tryLocsList) {
        var protoGenerator =
          outerFn && outerFn.prototype instanceof Generator
            ? outerFn
            : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        generator._invoke = makeInvokeMethod(innerFn, self2, context);
        return generator;
      }
      exports2.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (
        NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
      ) {
        IteratorPrototype = NativeIteratorPrototype;
      }
      var Gp =
        (GeneratorFunctionPrototype.prototype =
        Generator.prototype =
          Object.create(IteratorPrototype));
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(
        GeneratorFunctionPrototype,
        toStringTagSymbol,
        "GeneratorFunction"
      );
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }
      exports2.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor
          ? ctor === GeneratorFunction ||
              (ctor.displayName || ctor.name) === "GeneratorFunction"
          : false;
      };
      exports2.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
      exports2.awrap = function (arg) {
        return { __await: arg };
      };
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (
              value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")
            ) {
              return PromiseImpl.resolve(value.__await).then(
                function (value2) {
                  invoke("next", value2, resolve, reject);
                },
                function (err) {
                  invoke("throw", err, resolve, reject);
                }
              );
            }
            return PromiseImpl.resolve(value).then(
              function (unwrapped) {
                result.value = unwrapped;
                resolve(result);
              },
              function (error) {
                return invoke("throw", error, resolve, reject);
              }
            );
          }
        }
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return (previousPromise = previousPromise
            ? previousPromise.then(
                callInvokeWithMethodAndArg,
                callInvokeWithMethodAndArg
              )
            : callInvokeWithMethodAndArg());
        }
        this._invoke = enqueue;
      }
      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports2.AsyncIterator = AsyncIterator;
      exports2.async = function (
        innerFn,
        outerFn,
        self2,
        tryLocsList,
        PromiseImpl
      ) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self2, tryLocsList),
          PromiseImpl
        );
        return exports2.isGeneratorFunction(outerFn)
          ? iter
          : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
      };
      function makeInvokeMethod(innerFn, self2, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }
            return doneResult();
          }
          context.method = method;
          context.arg = arg;
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
            if (context.method === "next") {
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self2, context);
            if (record.type === "normal") {
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              if (record.arg === ContinueSentinel) {
                continue;
              }
              return {
                value: record.arg,
                done: context.done,
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined2) {
          context.delegate = null;
          if (context.method === "throw") {
            if (delegate.iterator["return"]) {
              context.method = "return";
              context.arg = undefined2;
              maybeInvokeDelegate(delegate, context);
              if (context.method === "throw") {
                return ContinueSentinel;
              }
            }
            context.method = "throw";
            context.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            );
          }
          return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
        if (info.done) {
          context[delegate.resultName] = info.value;
          context.next = delegate.nextLoc;
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined2;
          }
        } else {
          return info;
        }
        context.delegate = null;
        return ContinueSentinel;
      }
      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator");
      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });
      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      exports2.keys = function (object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
        return function next() {
          while (keys.length) {
            var key2 = keys.pop();
            if (key2 in object) {
              next.value = key2;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        };
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          if (typeof iterable.next === "function") {
            return iterable;
          }
          if (!isNaN(iterable.length)) {
            var i2 = -1,
              next = function next2() {
                while (++i2 < iterable.length) {
                  if (hasOwn.call(iterable, i2)) {
                    next2.value = iterable[i2];
                    next2.done = false;
                    return next2;
                  }
                }
                next2.value = undefined2;
                next2.done = true;
                return next2;
              };
            return (next.next = next);
          }
        }
        return { next: doneResult };
      }
      exports2.values = values;
      function doneResult() {
        return { value: undefined2, done: true };
      }
      Context.prototype = {
        constructor: Context,
        reset: function (skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined2;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined2;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              if (
                name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))
              ) {
                this[name] = undefined2;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          return this.rval;
        },
        dispatchException: function (exception) {
          if (this.done) {
            throw exception;
          }
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            if (caught) {
              context.method = "next";
              context.arg = undefined2;
            }
            return !!caught;
          }
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var entry = this.tryEntries[i2];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function (type, arg) {
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var entry = this.tryEntries[i2];
            if (
              entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc
            ) {
              var finallyEntry = entry;
              break;
            }
          }
          if (
            finallyEntry &&
            (type === "break" || type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc
          ) {
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
          return this.complete(record);
        },
        complete: function (record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
          return ContinueSentinel;
        },
        finish: function (finallyLoc) {
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var entry = this.tryEntries[i2];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        catch: function (tryLoc) {
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var entry = this.tryEntries[i2];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName,
            nextLoc,
          };
          if (this.method === "next") {
            this.arg = undefined2;
          }
          return ContinueSentinel;
        },
      };
      return exports2;
    })(typeof module2 === "object" ? module2.exports : {});
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  },
});

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/regenerator/index.js"(
    exports,
    module2
  ) {
    module2.exports = require_runtime();
  },
});

// node_modules/xtend/immutable.js
var require_immutable = __commonJS({
  "node_modules/xtend/immutable.js"(exports, module2) {
    module2.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  },
});

// node_modules/bail/index.js
var require_bail = __commonJS({
  "node_modules/bail/index.js"(exports, module2) {
    "use strict";
    module2.exports = bail;
    function bail(err) {
      if (err) {
        throw err;
      }
    }
  },
});

// node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  "node_modules/is-buffer/index.js"(exports, module2) {
    module2.exports = function isBuffer(obj) {
      return (
        obj != null &&
        obj.constructor != null &&
        typeof obj.constructor.isBuffer === "function" &&
        obj.constructor.isBuffer(obj)
      );
    };
  },
});

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module2) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject = function isPlainObject2(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf =
        obj.constructor &&
        obj.constructor.prototype &&
        hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true,
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module2.exports = function extend() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i2 = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i2 = 2;
      }
      if (
        target == null ||
        (typeof target !== "object" && typeof target !== "function")
      ) {
        target = {};
      }
      for (; i2 < length; ++i2) {
        options = arguments[i2];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (
                deep &&
                copy &&
                (isPlainObject(copy) || (copyIsArray = isArray(copy)))
              ) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject(src) ? src : {};
                }
                setProperty(target, {
                  name,
                  newValue: extend(deep, clone, copy),
                });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  },
});

// node_modules/is-plain-obj/index.js
var require_is_plain_obj = __commonJS({
  "node_modules/is-plain-obj/index.js"(exports, module2) {
    "use strict";
    module2.exports = (value) => {
      if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype === Object.prototype;
    };
  },
});

// node_modules/trough/wrap.js
var require_wrap = __commonJS({
  "node_modules/trough/wrap.js"(exports, module2) {
    "use strict";
    var slice = [].slice;
    module2.exports = wrap;
    function wrap(fn, callback) {
      var invoked;
      return wrapped;
      function wrapped() {
        var params = slice.call(arguments, 0);
        var callback2 = fn.length > params.length;
        var result;
        if (callback2) {
          params.push(done);
        }
        try {
          result = fn.apply(null, params);
        } catch (error) {
          if (callback2 && invoked) {
            throw error;
          }
          return done(error);
        }
        if (!callback2) {
          if (result && typeof result.then === "function") {
            result.then(then, done);
          } else if (result instanceof Error) {
            done(result);
          } else {
            then(result);
          }
        }
      }
      function done() {
        if (!invoked) {
          invoked = true;
          callback.apply(null, arguments);
        }
      }
      function then(value) {
        done(null, value);
      }
    }
  },
});

// node_modules/trough/index.js
var require_trough = __commonJS({
  "node_modules/trough/index.js"(exports, module2) {
    "use strict";
    var wrap = require_wrap();
    module2.exports = trough;
    trough.wrap = wrap;
    var slice = [].slice;
    function trough() {
      var fns = [];
      var middleware = {};
      middleware.run = run;
      middleware.use = use;
      return middleware;
      function run() {
        var index2 = -1;
        var input = slice.call(arguments, 0, -1);
        var done = arguments[arguments.length - 1];
        if (typeof done !== "function") {
          throw new Error("Expected function as last argument, not " + done);
        }
        next.apply(null, [null].concat(input));
        function next(err) {
          var fn = fns[++index2];
          var params = slice.call(arguments, 0);
          var values = params.slice(1);
          var length = input.length;
          var pos = -1;
          if (err) {
            done(err);
            return;
          }
          while (++pos < length) {
            if (values[pos] === null || values[pos] === void 0) {
              values[pos] = input[pos];
            }
          }
          input = values;
          if (fn) {
            wrap(fn, next).apply(null, input);
          } else {
            done.apply(null, [null].concat(input));
          }
        }
      }
      function use(fn) {
        if (typeof fn !== "function") {
          throw new Error("Expected `fn` to be a function, not " + fn);
        }
        fns.push(fn);
        return middleware;
      }
    }
  },
});

// node_modules/unist-util-stringify-position/index.js
var require_unist_util_stringify_position = __commonJS({
  "node_modules/unist-util-stringify-position/index.js"(exports, module2) {
    "use strict";
    var own = {}.hasOwnProperty;
    module2.exports = stringify;
    function stringify(value) {
      if (!value || typeof value !== "object") {
        return "";
      }
      if (own.call(value, "position") || own.call(value, "type")) {
        return position(value.position);
      }
      if (own.call(value, "start") || own.call(value, "end")) {
        return position(value);
      }
      if (own.call(value, "line") || own.call(value, "column")) {
        return point(value);
      }
      return "";
    }
    function point(point2) {
      if (!point2 || typeof point2 !== "object") {
        point2 = {};
      }
      return index2(point2.line) + ":" + index2(point2.column);
    }
    function position(pos) {
      if (!pos || typeof pos !== "object") {
        pos = {};
      }
      return point(pos.start) + "-" + point(pos.end);
    }
    function index2(value) {
      return value && typeof value === "number" ? value : 1;
    }
  },
});

// node_modules/vfile-message/index.js
var require_vfile_message = __commonJS({
  "node_modules/vfile-message/index.js"(exports, module2) {
    "use strict";
    var stringify = require_unist_util_stringify_position();
    module2.exports = VMessage;
    function VMessagePrototype() {}
    VMessagePrototype.prototype = Error.prototype;
    VMessage.prototype = new VMessagePrototype();
    var proto = VMessage.prototype;
    proto.file = "";
    proto.name = "";
    proto.reason = "";
    proto.message = "";
    proto.stack = "";
    proto.fatal = null;
    proto.column = null;
    proto.line = null;
    function VMessage(reason, position, origin) {
      var parts;
      var range;
      var location;
      if (typeof position === "string") {
        origin = position;
        position = null;
      }
      parts = parseOrigin(origin);
      range = stringify(position) || "1:1";
      location = {
        start: { line: null, column: null },
        end: { line: null, column: null },
      };
      if (position && position.position) {
        position = position.position;
      }
      if (position) {
        if (position.start) {
          location = position;
          position = position.start;
        } else {
          location.start = position;
        }
      }
      if (reason.stack) {
        this.stack = reason.stack;
        reason = reason.message;
      }
      this.message = reason;
      this.name = range;
      this.reason = reason;
      this.line = position ? position.line : null;
      this.column = position ? position.column : null;
      this.location = location;
      this.source = parts[0];
      this.ruleId = parts[1];
    }
    function parseOrigin(origin) {
      var result = [null, null];
      var index2;
      if (typeof origin === "string") {
        index2 = origin.indexOf(":");
        if (index2 === -1) {
          result[1] = origin;
        } else {
          result[0] = origin.slice(0, index2);
          result[1] = origin.slice(index2 + 1);
        }
      }
      return result;
    }
  },
});

// node_modules/vfile/lib/minpath.browser.js
var require_minpath_browser = __commonJS({
  "node_modules/vfile/lib/minpath.browser.js"(exports) {
    "use strict";
    exports.basename = basename;
    exports.dirname = dirname;
    exports.extname = extname;
    exports.join = join;
    exports.sep = "/";
    function basename(path, ext) {
      var start = 0;
      var end = -1;
      var index2;
      var firstNonSlashEnd;
      var seenNonSlash;
      var extIndex;
      if (ext !== void 0 && typeof ext !== "string") {
        throw new TypeError('"ext" argument must be a string');
      }
      assertPath(path);
      index2 = path.length;
      if (ext === void 0 || !ext.length || ext.length > path.length) {
        while (index2--) {
          if (path.charCodeAt(index2) === 47) {
            if (seenNonSlash) {
              start = index2 + 1;
              break;
            }
          } else if (end < 0) {
            seenNonSlash = true;
            end = index2 + 1;
          }
        }
        return end < 0 ? "" : path.slice(start, end);
      }
      if (ext === path) {
        return "";
      }
      firstNonSlashEnd = -1;
      extIndex = ext.length - 1;
      while (index2--) {
        if (path.charCodeAt(index2) === 47) {
          if (seenNonSlash) {
            start = index2 + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd < 0) {
            seenNonSlash = true;
            firstNonSlashEnd = index2 + 1;
          }
          if (extIndex > -1) {
            if (path.charCodeAt(index2) === ext.charCodeAt(extIndex--)) {
              if (extIndex < 0) {
                end = index2;
              }
            } else {
              extIndex = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end < 0) {
        end = path.length;
      }
      return path.slice(start, end);
    }
    function dirname(path) {
      var end;
      var unmatchedSlash;
      var index2;
      assertPath(path);
      if (!path.length) {
        return ".";
      }
      end = -1;
      index2 = path.length;
      while (--index2) {
        if (path.charCodeAt(index2) === 47) {
          if (unmatchedSlash) {
            end = index2;
            break;
          }
        } else if (!unmatchedSlash) {
          unmatchedSlash = true;
        }
      }
      return end < 0
        ? path.charCodeAt(0) === 47
          ? "/"
          : "."
        : end === 1 && path.charCodeAt(0) === 47
        ? "//"
        : path.slice(0, end);
    }
    function extname(path) {
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var preDotState = 0;
      var unmatchedSlash;
      var code2;
      var index2;
      assertPath(path);
      index2 = path.length;
      while (index2--) {
        code2 = path.charCodeAt(index2);
        if (code2 === 47) {
          if (unmatchedSlash) {
            startPart = index2 + 1;
            break;
          }
          continue;
        }
        if (end < 0) {
          unmatchedSlash = true;
          end = index2 + 1;
        }
        if (code2 === 46) {
          if (startDot < 0) {
            startDot = index2;
          } else if (preDotState !== 1) {
            preDotState = 1;
          }
        } else if (startDot > -1) {
          preDotState = -1;
        }
      }
      if (
        startDot < 0 ||
        end < 0 ||
        preDotState === 0 ||
        (preDotState === 1 &&
          startDot === end - 1 &&
          startDot === startPart + 1)
      ) {
        return "";
      }
      return path.slice(startDot, end);
    }
    function join() {
      var index2 = -1;
      var joined;
      while (++index2 < arguments.length) {
        assertPath(arguments[index2]);
        if (arguments[index2]) {
          joined =
            joined === void 0
              ? arguments[index2]
              : joined + "/" + arguments[index2];
        }
      }
      return joined === void 0 ? "." : normalize(joined);
    }
    function normalize(path) {
      var absolute;
      var value;
      assertPath(path);
      absolute = path.charCodeAt(0) === 47;
      value = normalizeString(path, !absolute);
      if (!value.length && !absolute) {
        value = ".";
      }
      if (value.length && path.charCodeAt(path.length - 1) === 47) {
        value += "/";
      }
      return absolute ? "/" + value : value;
    }
    function normalizeString(path, allowAboveRoot) {
      var result = "";
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var index2 = -1;
      var code2;
      var lastSlashIndex;
      while (++index2 <= path.length) {
        if (index2 < path.length) {
          code2 = path.charCodeAt(index2);
        } else if (code2 === 47) {
          break;
        } else {
          code2 = 47;
        }
        if (code2 === 47) {
          if (lastSlash === index2 - 1 || dots === 1) {
          } else if (lastSlash !== index2 - 1 && dots === 2) {
            if (
              result.length < 2 ||
              lastSegmentLength !== 2 ||
              result.charCodeAt(result.length - 1) !== 46 ||
              result.charCodeAt(result.length - 2) !== 46
            ) {
              if (result.length > 2) {
                lastSlashIndex = result.lastIndexOf("/");
                if (lastSlashIndex !== result.length - 1) {
                  if (lastSlashIndex < 0) {
                    result = "";
                    lastSegmentLength = 0;
                  } else {
                    result = result.slice(0, lastSlashIndex);
                    lastSegmentLength =
                      result.length - 1 - result.lastIndexOf("/");
                  }
                  lastSlash = index2;
                  dots = 0;
                  continue;
                }
              } else if (result.length) {
                result = "";
                lastSegmentLength = 0;
                lastSlash = index2;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              result = result.length ? result + "/.." : "..";
              lastSegmentLength = 2;
            }
          } else {
            if (result.length) {
              result += "/" + path.slice(lastSlash + 1, index2);
            } else {
              result = path.slice(lastSlash + 1, index2);
            }
            lastSegmentLength = index2 - lastSlash - 1;
          }
          lastSlash = index2;
          dots = 0;
        } else if (code2 === 46 && dots > -1) {
          dots++;
        } else {
          dots = -1;
        }
      }
      return result;
    }
    function assertPath(path) {
      if (typeof path !== "string") {
        throw new TypeError(
          "Path must be a string. Received " + JSON.stringify(path)
        );
      }
    }
  },
});

// node_modules/vfile/lib/minproc.browser.js
var require_minproc_browser = __commonJS({
  "node_modules/vfile/lib/minproc.browser.js"(exports) {
    "use strict";
    exports.cwd = cwd;
    function cwd() {
      return "/";
    }
  },
});

// node_modules/vfile/lib/core.js
var require_core = __commonJS({
  "node_modules/vfile/lib/core.js"(exports, module2) {
    "use strict";
    var p = require_minpath_browser();
    var proc = require_minproc_browser();
    var buffer = require_is_buffer();
    module2.exports = VFile;
    var own = {}.hasOwnProperty;
    var order = ["history", "path", "basename", "stem", "extname", "dirname"];
    VFile.prototype.toString = toString;
    Object.defineProperty(VFile.prototype, "path", {
      get: getPath,
      set: setPath,
    });
    Object.defineProperty(VFile.prototype, "dirname", {
      get: getDirname,
      set: setDirname,
    });
    Object.defineProperty(VFile.prototype, "basename", {
      get: getBasename,
      set: setBasename,
    });
    Object.defineProperty(VFile.prototype, "extname", {
      get: getExtname,
      set: setExtname,
    });
    Object.defineProperty(VFile.prototype, "stem", {
      get: getStem,
      set: setStem,
    });
    function VFile(options) {
      var prop;
      var index2;
      if (!options) {
        options = {};
      } else if (typeof options === "string" || buffer(options)) {
        options = { contents: options };
      } else if ("message" in options && "messages" in options) {
        return options;
      }
      if (!(this instanceof VFile)) {
        return new VFile(options);
      }
      this.data = {};
      this.messages = [];
      this.history = [];
      this.cwd = proc.cwd();
      index2 = -1;
      while (++index2 < order.length) {
        prop = order[index2];
        if (own.call(options, prop)) {
          this[prop] = options[prop];
        }
      }
      for (prop in options) {
        if (order.indexOf(prop) < 0) {
          this[prop] = options[prop];
        }
      }
    }
    function getPath() {
      return this.history[this.history.length - 1];
    }
    function setPath(path) {
      assertNonEmpty(path, "path");
      if (this.path !== path) {
        this.history.push(path);
      }
    }
    function getDirname() {
      return typeof this.path === "string" ? p.dirname(this.path) : void 0;
    }
    function setDirname(dirname) {
      assertPath(this.path, "dirname");
      this.path = p.join(dirname || "", this.basename);
    }
    function getBasename() {
      return typeof this.path === "string" ? p.basename(this.path) : void 0;
    }
    function setBasename(basename) {
      assertNonEmpty(basename, "basename");
      assertPart(basename, "basename");
      this.path = p.join(this.dirname || "", basename);
    }
    function getExtname() {
      return typeof this.path === "string" ? p.extname(this.path) : void 0;
    }
    function setExtname(extname) {
      assertPart(extname, "extname");
      assertPath(this.path, "extname");
      if (extname) {
        if (extname.charCodeAt(0) !== 46) {
          throw new Error("`extname` must start with `.`");
        }
        if (extname.indexOf(".", 1) > -1) {
          throw new Error("`extname` cannot contain multiple dots");
        }
      }
      this.path = p.join(this.dirname, this.stem + (extname || ""));
    }
    function getStem() {
      return typeof this.path === "string"
        ? p.basename(this.path, this.extname)
        : void 0;
    }
    function setStem(stem) {
      assertNonEmpty(stem, "stem");
      assertPart(stem, "stem");
      this.path = p.join(this.dirname || "", stem + (this.extname || ""));
    }
    function toString(encoding) {
      return (this.contents || "").toString(encoding);
    }
    function assertPart(part, name) {
      if (part && part.indexOf(p.sep) > -1) {
        throw new Error(
          "`" + name + "` cannot be a path: did not expect `" + p.sep + "`"
        );
      }
    }
    function assertNonEmpty(part, name) {
      if (!part) {
        throw new Error("`" + name + "` cannot be empty");
      }
    }
    function assertPath(path, name) {
      if (!path) {
        throw new Error("Setting `" + name + "` requires `path` to be set too");
      }
    }
  },
});

// node_modules/vfile/lib/index.js
var require_lib = __commonJS({
  "node_modules/vfile/lib/index.js"(exports, module2) {
    "use strict";
    var VMessage = require_vfile_message();
    var VFile = require_core();
    module2.exports = VFile;
    VFile.prototype.message = message;
    VFile.prototype.info = info;
    VFile.prototype.fail = fail;
    function message(reason, position, origin) {
      var message2 = new VMessage(reason, position, origin);
      if (this.path) {
        message2.name = this.path + ":" + message2.name;
        message2.file = this.path;
      }
      message2.fatal = false;
      this.messages.push(message2);
      return message2;
    }
    function fail() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = true;
      throw message2;
    }
    function info() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = null;
      return message2;
    }
  },
});

// node_modules/vfile/index.js
var require_vfile = __commonJS({
  "node_modules/vfile/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_lib();
  },
});

// node_modules/unified/index.js
var require_unified = __commonJS({
  "node_modules/unified/index.js"(exports, module2) {
    "use strict";
    var bail = require_bail();
    var buffer = require_is_buffer();
    var extend = require_extend();
    var plain = require_is_plain_obj();
    var trough = require_trough();
    var vfile = require_vfile();
    module2.exports = unified().freeze();
    var slice = [].slice;
    var own = {}.hasOwnProperty;
    var pipeline = trough()
      .use(pipelineParse)
      .use(pipelineRun)
      .use(pipelineStringify);
    function pipelineParse(p, ctx) {
      ctx.tree = p.parse(ctx.file);
    }
    function pipelineRun(p, ctx, next) {
      p.run(ctx.tree, ctx.file, done);
      function done(error, tree, file) {
        if (error) {
          next(error);
        } else {
          ctx.tree = tree;
          ctx.file = file;
          next();
        }
      }
    }
    function pipelineStringify(p, ctx) {
      var result = p.stringify(ctx.tree, ctx.file);
      if (result === void 0 || result === null) {
      } else if (typeof result === "string" || buffer(result)) {
        if ("value" in ctx.file) {
          ctx.file.value = result;
        }
        ctx.file.contents = result;
      } else {
        ctx.file.result = result;
      }
    }
    function unified() {
      var attachers = [];
      var transformers = trough();
      var namespace = {};
      var freezeIndex = -1;
      var frozen;
      processor.data = data;
      processor.freeze = freeze;
      processor.attachers = attachers;
      processor.use = use;
      processor.parse = parse;
      processor.stringify = stringify;
      processor.run = run;
      processor.runSync = runSync;
      processor.process = process2;
      processor.processSync = processSync;
      return processor;
      function processor() {
        var destination = unified();
        var index2 = -1;
        while (++index2 < attachers.length) {
          destination.use.apply(null, attachers[index2]);
        }
        destination.data(extend(true, {}, namespace));
        return destination;
      }
      function freeze() {
        var values;
        var transformer;
        if (frozen) {
          return processor;
        }
        while (++freezeIndex < attachers.length) {
          values = attachers[freezeIndex];
          if (values[1] === false) {
            continue;
          }
          if (values[1] === true) {
            values[1] = void 0;
          }
          transformer = values[0].apply(processor, values.slice(1));
          if (typeof transformer === "function") {
            transformers.use(transformer);
          }
        }
        frozen = true;
        freezeIndex = Infinity;
        return processor;
      }
      function data(key, value) {
        if (typeof key === "string") {
          if (arguments.length === 2) {
            assertUnfrozen("data", frozen);
            namespace[key] = value;
            return processor;
          }
          return (own.call(namespace, key) && namespace[key]) || null;
        }
        if (key) {
          assertUnfrozen("data", frozen);
          namespace = key;
          return processor;
        }
        return namespace;
      }
      function use(value) {
        var settings;
        assertUnfrozen("use", frozen);
        if (value === null || value === void 0) {
        } else if (typeof value === "function") {
          addPlugin.apply(null, arguments);
        } else if (typeof value === "object") {
          if ("length" in value) {
            addList(value);
          } else {
            addPreset(value);
          }
        } else {
          throw new Error("Expected usable value, not `" + value + "`");
        }
        if (settings) {
          namespace.settings = extend(namespace.settings || {}, settings);
        }
        return processor;
        function addPreset(result) {
          addList(result.plugins);
          if (result.settings) {
            settings = extend(settings || {}, result.settings);
          }
        }
        function add(value2) {
          if (typeof value2 === "function") {
            addPlugin(value2);
          } else if (typeof value2 === "object") {
            if ("length" in value2) {
              addPlugin.apply(null, value2);
            } else {
              addPreset(value2);
            }
          } else {
            throw new Error("Expected usable value, not `" + value2 + "`");
          }
        }
        function addList(plugins) {
          var index2 = -1;
          if (plugins === null || plugins === void 0) {
          } else if (typeof plugins === "object" && "length" in plugins) {
            while (++index2 < plugins.length) {
              add(plugins[index2]);
            }
          } else {
            throw new Error(
              "Expected a list of plugins, not `" + plugins + "`"
            );
          }
        }
        function addPlugin(plugin, value2) {
          var entry = find(plugin);
          if (entry) {
            if (plain(entry[1]) && plain(value2)) {
              value2 = extend(true, entry[1], value2);
            }
            entry[1] = value2;
          } else {
            attachers.push(slice.call(arguments));
          }
        }
      }
      function find(plugin) {
        var index2 = -1;
        while (++index2 < attachers.length) {
          if (attachers[index2][0] === plugin) {
            return attachers[index2];
          }
        }
      }
      function parse(doc) {
        var file = vfile(doc);
        var Parser;
        freeze();
        Parser = processor.Parser;
        assertParser("parse", Parser);
        if (newable(Parser, "parse")) {
          return new Parser(String(file), file).parse();
        }
        return Parser(String(file), file);
      }
      function run(node, file, cb) {
        assertNode(node);
        freeze();
        if (!cb && typeof file === "function") {
          cb = file;
          file = null;
        }
        if (!cb) {
          return new Promise(executor);
        }
        executor(null, cb);
        function executor(resolve, reject) {
          transformers.run(node, vfile(file), done);
          function done(error, tree, file2) {
            tree = tree || node;
            if (error) {
              reject(error);
            } else if (resolve) {
              resolve(tree);
            } else {
              cb(null, tree, file2);
            }
          }
        }
      }
      function runSync(node, file) {
        var result;
        var complete;
        run(node, file, done);
        assertDone("runSync", "run", complete);
        return result;
        function done(error, tree) {
          complete = true;
          result = tree;
          bail(error);
        }
      }
      function stringify(node, doc) {
        var file = vfile(doc);
        var Compiler;
        freeze();
        Compiler = processor.Compiler;
        assertCompiler("stringify", Compiler);
        assertNode(node);
        if (newable(Compiler, "compile")) {
          return new Compiler(node, file).compile();
        }
        return Compiler(node, file);
      }
      function process2(doc, cb) {
        freeze();
        assertParser("process", processor.Parser);
        assertCompiler("process", processor.Compiler);
        if (!cb) {
          return new Promise(executor);
        }
        executor(null, cb);
        function executor(resolve, reject) {
          var file = vfile(doc);
          pipeline.run(processor, { file }, done);
          function done(error) {
            if (error) {
              reject(error);
            } else if (resolve) {
              resolve(file);
            } else {
              cb(null, file);
            }
          }
        }
      }
      function processSync(doc) {
        var file;
        var complete;
        freeze();
        assertParser("processSync", processor.Parser);
        assertCompiler("processSync", processor.Compiler);
        file = vfile(doc);
        process2(file, done);
        assertDone("processSync", "process", complete);
        return file;
        function done(error) {
          complete = true;
          bail(error);
        }
      }
    }
    function newable(value, name) {
      return (
        typeof value === "function" &&
        value.prototype &&
        (keys(value.prototype) || name in value.prototype)
      );
    }
    function keys(value) {
      var key;
      for (key in value) {
        return true;
      }
      return false;
    }
    function assertParser(name, Parser) {
      if (typeof Parser !== "function") {
        throw new Error("Cannot `" + name + "` without `Parser`");
      }
    }
    function assertCompiler(name, Compiler) {
      if (typeof Compiler !== "function") {
        throw new Error("Cannot `" + name + "` without `Compiler`");
      }
    }
    function assertUnfrozen(name, frozen) {
      if (frozen) {
        throw new Error(
          "Cannot invoke `" +
            name +
            "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`."
        );
      }
    }
    function assertNode(node) {
      if (!node || typeof node.type !== "string") {
        throw new Error("Expected node, got `" + node + "`");
      }
    }
    function assertDone(name, asyncName, complete) {
      if (!complete) {
        throw new Error(
          "`" + name + "` finished async. Use `" + asyncName + "` instead"
        );
      }
    }
  },
});

// node_modules/mdast-util-to-string/index.js
var require_mdast_util_to_string = __commonJS({
  "node_modules/mdast-util-to-string/index.js"(exports, module2) {
    "use strict";
    module2.exports = toString;
    function toString(node) {
      return (
        (node &&
          (node.value ||
            node.alt ||
            node.title ||
            ("children" in node && all(node.children)) ||
            ("length" in node && all(node)))) ||
        ""
      );
    }
    function all(values) {
      var result = [];
      var index2 = -1;
      while (++index2 < values.length) {
        result[index2] = toString(values[index2]);
      }
      return result.join("");
    }
  },
});

// node_modules/micromark/dist/constant/assign.js
var require_assign = __commonJS({
  "node_modules/micromark/dist/constant/assign.js"(exports, module2) {
    "use strict";
    var assign = Object.assign;
    module2.exports = assign;
  },
});

// node_modules/micromark/dist/constant/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/micromark/dist/constant/has-own-property.js"(exports, module2) {
    "use strict";
    var own = {}.hasOwnProperty;
    module2.exports = own;
  },
});

// node_modules/micromark/dist/util/normalize-identifier.js
var require_normalize_identifier = __commonJS({
  "node_modules/micromark/dist/util/normalize-identifier.js"(exports, module2) {
    "use strict";
    function normalizeIdentifier(value) {
      return value
        .replace(/[\t\n\r ]+/g, " ")
        .replace(/^ | $/g, "")
        .toLowerCase()
        .toUpperCase();
    }
    module2.exports = normalizeIdentifier;
  },
});

// node_modules/micromark/dist/constant/from-char-code.js
var require_from_char_code = __commonJS({
  "node_modules/micromark/dist/constant/from-char-code.js"(exports, module2) {
    "use strict";
    var fromCharCode = String.fromCharCode;
    module2.exports = fromCharCode;
  },
});

// node_modules/micromark/dist/util/safe-from-int.js
var require_safe_from_int = __commonJS({
  "node_modules/micromark/dist/util/safe-from-int.js"(exports, module2) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function safeFromInt(value, base) {
      var code2 = parseInt(value, base);
      if (
        code2 < 9 ||
        code2 === 11 ||
        (code2 > 13 && code2 < 32) ||
        (code2 > 126 && code2 < 160) ||
        (code2 > 55295 && code2 < 57344) ||
        (code2 > 64975 && code2 < 65008) ||
        (code2 & 65535) === 65535 ||
        (code2 & 65535) === 65534 ||
        code2 > 1114111
      ) {
        return "\uFFFD";
      }
      return fromCharCode(code2);
    }
    module2.exports = safeFromInt;
  },
});

// node_modules/micromark/dist/character/markdown-line-ending.js
var require_markdown_line_ending = __commonJS({
  "node_modules/micromark/dist/character/markdown-line-ending.js"(
    exports,
    module2
  ) {
    "use strict";
    function markdownLineEnding(code2) {
      return code2 < -2;
    }
    module2.exports = markdownLineEnding;
  },
});

// node_modules/micromark/dist/character/markdown-space.js
var require_markdown_space = __commonJS({
  "node_modules/micromark/dist/character/markdown-space.js"(exports, module2) {
    "use strict";
    function markdownSpace(code2) {
      return code2 === -2 || code2 === -1 || code2 === 32;
    }
    module2.exports = markdownSpace;
  },
});

// node_modules/micromark/dist/tokenize/factory-space.js
var require_factory_space = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-space.js"(exports, module2) {
    "use strict";
    var markdownSpace = require_markdown_space();
    function spaceFactory(effects, ok, type, max) {
      var limit = max ? max - 1 : Infinity;
      var size = 0;
      return start;
      function start(code2) {
        if (markdownSpace(code2)) {
          effects.enter(type);
          return prefix(code2);
        }
        return ok(code2);
      }
      function prefix(code2) {
        if (markdownSpace(code2) && size++ < limit) {
          effects.consume(code2);
          return prefix;
        }
        effects.exit(type);
        return ok(code2);
      }
    }
    module2.exports = spaceFactory;
  },
});

// node_modules/micromark/dist/initialize/content.js
var require_content = __commonJS({
  "node_modules/micromark/dist/initialize/content.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var tokenize = initializeContent;
    function initializeContent(effects) {
      var contentStart = effects.attempt(
        this.parser.constructs.contentInitial,
        afterContentStartConstruct,
        paragraphInitial
      );
      var previous;
      return contentStart;
      function afterContentStartConstruct(code2) {
        if (code2 === null) {
          effects.consume(code2);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return factorySpace(effects, contentStart, "linePrefix");
      }
      function paragraphInitial(code2) {
        effects.enter("paragraph");
        return lineStart(code2);
      }
      function lineStart(code2) {
        var token = effects.enter("chunkText", {
          contentType: "text",
          previous,
        });
        if (previous) {
          previous.next = token;
        }
        previous = token;
        return data(code2);
      }
      function data(code2) {
        if (code2 === null) {
          effects.exit("chunkText");
          effects.exit("paragraph");
          effects.consume(code2);
          return;
        }
        if (markdownLineEnding(code2)) {
          effects.consume(code2);
          effects.exit("chunkText");
          return lineStart;
        }
        effects.consume(code2);
        return data;
      }
    }
    exports.tokenize = tokenize;
  },
});

// node_modules/micromark/dist/tokenize/partial-blank-line.js
var require_partial_blank_line = __commonJS({
  "node_modules/micromark/dist/tokenize/partial-blank-line.js"(
    exports,
    module2
  ) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = {
      tokenize: tokenizePartialBlankLine,
      partial: true,
    };
    function tokenizePartialBlankLine(effects, ok, nok) {
      return factorySpace(effects, afterWhitespace, "linePrefix");
      function afterWhitespace(code2) {
        return code2 === null || markdownLineEnding(code2)
          ? ok(code2)
          : nok(code2);
      }
    }
    module2.exports = partialBlankLine;
  },
});

// node_modules/micromark/dist/initialize/document.js
var require_document = __commonJS({
  "node_modules/micromark/dist/initialize/document.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeDocument;
    var containerConstruct = {
      tokenize: tokenizeContainer,
    };
    var lazyFlowConstruct = {
      tokenize: tokenizeLazyFlow,
    };
    function initializeDocument(effects) {
      var self2 = this;
      var stack = [];
      var continued = 0;
      var inspectConstruct = {
        tokenize: tokenizeInspect,
        partial: true,
      };
      var inspectResult;
      var childFlow;
      var childToken;
      return start;
      function start(code2) {
        if (continued < stack.length) {
          self2.containerState = stack[continued][1];
          return effects.attempt(
            stack[continued][0].continuation,
            documentContinue,
            documentContinued
          )(code2);
        }
        return documentContinued(code2);
      }
      function documentContinue(code2) {
        continued++;
        return start(code2);
      }
      function documentContinued(code2) {
        if (inspectResult && inspectResult.flowContinue) {
          return flowStart(code2);
        }
        self2.interrupt =
          childFlow &&
          childFlow.currentConstruct &&
          childFlow.currentConstruct.interruptible;
        self2.containerState = {};
        return effects.attempt(
          containerConstruct,
          containerContinue,
          flowStart
        )(code2);
      }
      function containerContinue(code2) {
        stack.push([self2.currentConstruct, self2.containerState]);
        self2.containerState = void 0;
        return documentContinued(code2);
      }
      function flowStart(code2) {
        if (code2 === null) {
          exitContainers(0, true);
          effects.consume(code2);
          return;
        }
        childFlow = childFlow || self2.parser.flow(self2.now());
        effects.enter("chunkFlow", {
          contentType: "flow",
          previous: childToken,
          _tokenizer: childFlow,
        });
        return flowContinue(code2);
      }
      function flowContinue(code2) {
        if (code2 === null) {
          continueFlow(effects.exit("chunkFlow"));
          return flowStart(code2);
        }
        if (markdownLineEnding(code2)) {
          effects.consume(code2);
          continueFlow(effects.exit("chunkFlow"));
          return effects.check(inspectConstruct, documentAfterPeek);
        }
        effects.consume(code2);
        return flowContinue;
      }
      function documentAfterPeek(code2) {
        exitContainers(
          inspectResult.continued,
          inspectResult && inspectResult.flowEnd
        );
        continued = 0;
        return start(code2);
      }
      function continueFlow(token) {
        if (childToken) childToken.next = token;
        childToken = token;
        childFlow.lazy = inspectResult && inspectResult.lazy;
        childFlow.defineSkip(token.start);
        childFlow.write(self2.sliceStream(token));
      }
      function exitContainers(size, end) {
        var index2 = stack.length;
        if (childFlow && end) {
          childFlow.write([null]);
          childToken = childFlow = void 0;
        }
        while (index2-- > size) {
          self2.containerState = stack[index2][1];
          stack[index2][0].exit.call(self2, effects);
        }
        stack.length = size;
      }
      function tokenizeInspect(effects2, ok) {
        var subcontinued = 0;
        inspectResult = {};
        return inspectStart;
        function inspectStart(code2) {
          if (subcontinued < stack.length) {
            self2.containerState = stack[subcontinued][1];
            return effects2.attempt(
              stack[subcontinued][0].continuation,
              inspectContinue,
              inspectLess
            )(code2);
          }
          if (
            childFlow.currentConstruct &&
            childFlow.currentConstruct.concrete
          ) {
            inspectResult.flowContinue = true;
            return inspectDone(code2);
          }
          self2.interrupt =
            childFlow.currentConstruct &&
            childFlow.currentConstruct.interruptible;
          self2.containerState = {};
          return effects2.attempt(
            containerConstruct,
            inspectFlowEnd,
            inspectDone
          )(code2);
        }
        function inspectContinue(code2) {
          subcontinued++;
          return self2.containerState._closeFlow
            ? inspectFlowEnd(code2)
            : inspectStart(code2);
        }
        function inspectLess(code2) {
          if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
            self2.containerState = {};
            return effects2.attempt(
              containerConstruct,
              inspectFlowEnd,
              effects2.attempt(
                lazyFlowConstruct,
                inspectFlowEnd,
                effects2.check(partialBlankLine, inspectFlowEnd, inspectLazy)
              )
            )(code2);
          }
          return inspectFlowEnd(code2);
        }
        function inspectLazy(code2) {
          subcontinued = stack.length;
          inspectResult.lazy = true;
          inspectResult.flowContinue = true;
          return inspectDone(code2);
        }
        function inspectFlowEnd(code2) {
          inspectResult.flowEnd = true;
          return inspectDone(code2);
        }
        function inspectDone(code2) {
          inspectResult.continued = subcontinued;
          self2.interrupt = self2.containerState = void 0;
          return ok(code2);
        }
      }
    }
    function tokenizeContainer(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.attempt(this.parser.constructs.document, ok, nok),
        "linePrefix",
        this.parser.constructs.disable.null.indexOf("codeIndented") > -1
          ? void 0
          : 4
      );
    }
    function tokenizeLazyFlow(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.lazy(this.parser.constructs.flow, ok, nok),
        "linePrefix",
        this.parser.constructs.disable.null.indexOf("codeIndented") > -1
          ? void 0
          : 4
      );
    }
    exports.tokenize = tokenize;
  },
});

// node_modules/micromark/dist/util/size-chunks.js
var require_size_chunks = __commonJS({
  "node_modules/micromark/dist/util/size-chunks.js"(exports, module2) {
    "use strict";
    function sizeChunks(chunks) {
      var index2 = -1;
      var size = 0;
      while (++index2 < chunks.length) {
        size += typeof chunks[index2] === "string" ? chunks[index2].length : 1;
      }
      return size;
    }
    module2.exports = sizeChunks;
  },
});

// node_modules/micromark/dist/util/prefix-size.js
var require_prefix_size = __commonJS({
  "node_modules/micromark/dist/util/prefix-size.js"(exports, module2) {
    "use strict";
    var sizeChunks = require_size_chunks();
    function prefixSize(events, type) {
      var tail = events[events.length - 1];
      if (!tail || tail[1].type !== type) return 0;
      return sizeChunks(tail[2].sliceStream(tail[1]));
    }
    module2.exports = prefixSize;
  },
});

// node_modules/micromark/dist/constant/splice.js
var require_splice = __commonJS({
  "node_modules/micromark/dist/constant/splice.js"(exports, module2) {
    "use strict";
    var splice = [].splice;
    module2.exports = splice;
  },
});

// node_modules/micromark/dist/util/chunked-splice.js
var require_chunked_splice = __commonJS({
  "node_modules/micromark/dist/util/chunked-splice.js"(exports, module2) {
    "use strict";
    var splice = require_splice();
    function chunkedSplice(list, start, remove, items) {
      var end = list.length;
      var chunkStart = 0;
      var parameters;
      if (start < 0) {
        start = -start > end ? 0 : end + start;
      } else {
        start = start > end ? end : start;
      }
      remove = remove > 0 ? remove : 0;
      if (items.length < 1e4) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        splice.apply(list, parameters);
      } else {
        if (remove) splice.apply(list, [start, remove]);
        while (chunkStart < items.length) {
          parameters = items.slice(chunkStart, chunkStart + 1e4);
          parameters.unshift(start, 0);
          splice.apply(list, parameters);
          chunkStart += 1e4;
          start += 1e4;
        }
      }
    }
    module2.exports = chunkedSplice;
  },
});

// node_modules/micromark/dist/util/shallow.js
var require_shallow = __commonJS({
  "node_modules/micromark/dist/util/shallow.js"(exports, module2) {
    "use strict";
    var assign = require_assign();
    function shallow(object) {
      return assign({}, object);
    }
    module2.exports = shallow;
  },
});

// node_modules/micromark/dist/util/subtokenize.js
var require_subtokenize = __commonJS({
  "node_modules/micromark/dist/util/subtokenize.js"(exports, module2) {
    "use strict";
    var assign = require_assign();
    var chunkedSplice = require_chunked_splice();
    var shallow = require_shallow();
    function subtokenize(events) {
      var jumps = {};
      var index2 = -1;
      var event;
      var lineIndex;
      var otherIndex;
      var otherEvent;
      var parameters;
      var subevents;
      var more;
      while (++index2 < events.length) {
        while (index2 in jumps) {
          index2 = jumps[index2];
        }
        event = events[index2];
        if (
          index2 &&
          event[1].type === "chunkFlow" &&
          events[index2 - 1][1].type === "listItemPrefix"
        ) {
          subevents = event[1]._tokenizer.events;
          otherIndex = 0;
          if (
            otherIndex < subevents.length &&
            subevents[otherIndex][1].type === "lineEndingBlank"
          ) {
            otherIndex += 2;
          }
          if (
            otherIndex < subevents.length &&
            subevents[otherIndex][1].type === "content"
          ) {
            while (++otherIndex < subevents.length) {
              if (subevents[otherIndex][1].type === "content") {
                break;
              }
              if (subevents[otherIndex][1].type === "chunkText") {
                subevents[otherIndex][1].isInFirstContentOfListItem = true;
                otherIndex++;
              }
            }
          }
        }
        if (event[0] === "enter") {
          if (event[1].contentType) {
            assign(jumps, subcontent(events, index2));
            index2 = jumps[index2];
            more = true;
          }
        } else if (event[1]._container || event[1]._movePreviousLineEndings) {
          otherIndex = index2;
          lineIndex = void 0;
          while (otherIndex--) {
            otherEvent = events[otherIndex];
            if (
              otherEvent[1].type === "lineEnding" ||
              otherEvent[1].type === "lineEndingBlank"
            ) {
              if (otherEvent[0] === "enter") {
                if (lineIndex) {
                  events[lineIndex][1].type = "lineEndingBlank";
                }
                otherEvent[1].type = "lineEnding";
                lineIndex = otherIndex;
              }
            } else {
              break;
            }
          }
          if (lineIndex) {
            event[1].end = shallow(events[lineIndex][1].start);
            parameters = events.slice(lineIndex, index2);
            parameters.unshift(event);
            chunkedSplice(
              events,
              lineIndex,
              index2 - lineIndex + 1,
              parameters
            );
          }
        }
      }
      return !more;
    }
    function subcontent(events, eventIndex) {
      var token = events[eventIndex][1];
      var context = events[eventIndex][2];
      var startPosition = eventIndex - 1;
      var startPositions = [];
      var tokenizer =
        token._tokenizer || context.parser[token.contentType](token.start);
      var childEvents = tokenizer.events;
      var jumps = [];
      var gaps = {};
      var stream;
      var previous;
      var index2;
      var entered;
      var end;
      var adjust;
      while (token) {
        while (events[++startPosition][1] !== token) {}
        startPositions.push(startPosition);
        if (!token._tokenizer) {
          stream = context.sliceStream(token);
          if (!token.next) {
            stream.push(null);
          }
          if (previous) {
            tokenizer.defineSkip(token.start);
          }
          if (token.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = true;
          }
          tokenizer.write(stream);
          if (token.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = void 0;
          }
        }
        previous = token;
        token = token.next;
      }
      token = previous;
      index2 = childEvents.length;
      while (index2--) {
        if (childEvents[index2][0] === "enter") {
          entered = true;
        } else if (
          entered &&
          childEvents[index2][1].type === childEvents[index2 - 1][1].type &&
          childEvents[index2][1].start.line !== childEvents[index2][1].end.line
        ) {
          add(childEvents.slice(index2 + 1, end));
          token._tokenizer = token.next = void 0;
          token = token.previous;
          end = index2 + 1;
        }
      }
      tokenizer.events = token._tokenizer = token.next = void 0;
      add(childEvents.slice(0, end));
      index2 = -1;
      adjust = 0;
      while (++index2 < jumps.length) {
        gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
        adjust += jumps[index2][1] - jumps[index2][0] - 1;
      }
      return gaps;
      function add(slice) {
        var start = startPositions.pop();
        jumps.unshift([start, start + slice.length - 1]);
        chunkedSplice(events, start, 2, slice);
      }
    }
    module2.exports = subtokenize;
  },
});

// node_modules/micromark/dist/tokenize/content.js
var require_content2 = __commonJS({
  "node_modules/micromark/dist/tokenize/content.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var prefixSize = require_prefix_size();
    var subtokenize = require_subtokenize();
    var factorySpace = require_factory_space();
    var content = {
      tokenize: tokenizeContent,
      resolve: resolveContent,
      interruptible: true,
      lazy: true,
    };
    var continuationConstruct = {
      tokenize: tokenizeContinuation,
      partial: true,
    };
    function resolveContent(events) {
      subtokenize(events);
      return events;
    }
    function tokenizeContent(effects, ok) {
      var previous;
      return start;
      function start(code2) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
          contentType: "content",
        });
        return data(code2);
      }
      function data(code2) {
        if (code2 === null) {
          return contentEnd(code2);
        }
        if (markdownLineEnding(code2)) {
          return effects.check(
            continuationConstruct,
            contentContinue,
            contentEnd
          )(code2);
        }
        effects.consume(code2);
        return data;
      }
      function contentEnd(code2) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok(code2);
      }
      function contentContinue(code2) {
        effects.consume(code2);
        effects.exit("chunkContent");
        previous = previous.next = effects.enter("chunkContent", {
          contentType: "content",
          previous,
        });
        return data;
      }
    }
    function tokenizeContinuation(effects, ok, nok) {
      var self2 = this;
      return startLookahead;
      function startLookahead(code2) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return factorySpace(effects, prefixed, "linePrefix");
      }
      function prefixed(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          return nok(code2);
        }
        if (
          self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ||
          prefixSize(self2.events, "linePrefix") < 4
        ) {
          return effects.interrupt(
            self2.parser.constructs.flow,
            nok,
            ok
          )(code2);
        }
        return ok(code2);
      }
    }
    module2.exports = content;
  },
});

// node_modules/micromark/dist/initialize/flow.js
var require_flow = __commonJS({
  "node_modules/micromark/dist/initialize/flow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var content = require_content2();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeFlow;
    function initializeFlow(effects) {
      var self2 = this;
      var initial = effects.attempt(
        partialBlankLine,
        atBlankEnding,
        effects.attempt(
          this.parser.constructs.flowInitial,
          afterConstruct,
          factorySpace(
            effects,
            effects.attempt(
              this.parser.constructs.flow,
              afterConstruct,
              effects.attempt(content, afterConstruct)
            ),
            "linePrefix"
          )
        )
      );
      return initial;
      function atBlankEnding(code2) {
        if (code2 === null) {
          effects.consume(code2);
          return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code2);
        effects.exit("lineEndingBlank");
        self2.currentConstruct = void 0;
        return initial;
      }
      function afterConstruct(code2) {
        if (code2 === null) {
          effects.consume(code2);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        self2.currentConstruct = void 0;
        return initial;
      }
    }
    exports.tokenize = tokenize;
  },
});

// node_modules/micromark/dist/initialize/text.js
var require_text = __commonJS({
  "node_modules/micromark/dist/initialize/text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var assign = require_assign();
    var shallow = require_shallow();
    var text = initializeFactory("text");
    var string = initializeFactory("string");
    var resolver = {
      resolveAll: createResolver(),
    };
    function initializeFactory(field) {
      return {
        tokenize: initializeText,
        resolveAll: createResolver(
          field === "text" ? resolveAllLineSuffixes : void 0
        ),
      };
      function initializeText(effects) {
        var self2 = this;
        var constructs = this.parser.constructs[field];
        var text2 = effects.attempt(constructs, start, notText);
        return start;
        function start(code2) {
          return atBreak(code2) ? text2(code2) : notText(code2);
        }
        function notText(code2) {
          if (code2 === null) {
            effects.consume(code2);
            return;
          }
          effects.enter("data");
          effects.consume(code2);
          return data;
        }
        function data(code2) {
          if (atBreak(code2)) {
            effects.exit("data");
            return text2(code2);
          }
          effects.consume(code2);
          return data;
        }
        function atBreak(code2) {
          var list = constructs[code2];
          var index2 = -1;
          if (code2 === null) {
            return true;
          }
          if (list) {
            while (++index2 < list.length) {
              if (
                !list[index2].previous ||
                list[index2].previous.call(self2, self2.previous)
              ) {
                return true;
              }
            }
          }
        }
      }
    }
    function createResolver(extraResolver) {
      return resolveAllText;
      function resolveAllText(events, context) {
        var index2 = -1;
        var enter;
        while (++index2 <= events.length) {
          if (enter === void 0) {
            if (events[index2] && events[index2][1].type === "data") {
              enter = index2;
              index2++;
            }
          } else if (!events[index2] || events[index2][1].type !== "data") {
            if (index2 !== enter + 2) {
              events[enter][1].end = events[index2 - 1][1].end;
              events.splice(enter + 2, index2 - enter - 2);
              index2 = enter + 2;
            }
            enter = void 0;
          }
        }
        return extraResolver ? extraResolver(events, context) : events;
      }
    }
    function resolveAllLineSuffixes(events, context) {
      var eventIndex = -1;
      var chunks;
      var data;
      var chunk;
      var index2;
      var bufferIndex;
      var size;
      var tabs;
      var token;
      while (++eventIndex <= events.length) {
        if (
          (eventIndex === events.length ||
            events[eventIndex][1].type === "lineEnding") &&
          events[eventIndex - 1][1].type === "data"
        ) {
          data = events[eventIndex - 1][1];
          chunks = context.sliceStream(data);
          index2 = chunks.length;
          bufferIndex = -1;
          size = 0;
          tabs = void 0;
          while (index2--) {
            chunk = chunks[index2];
            if (typeof chunk === "string") {
              bufferIndex = chunk.length;
              while (chunk.charCodeAt(bufferIndex - 1) === 32) {
                size++;
                bufferIndex--;
              }
              if (bufferIndex) break;
              bufferIndex = -1;
            } else if (chunk === -2) {
              tabs = true;
              size++;
            } else if (chunk === -1);
            else {
              index2++;
              break;
            }
          }
          if (size) {
            token = {
              type:
                eventIndex === events.length || tabs || size < 2
                  ? "lineSuffix"
                  : "hardBreakTrailing",
              start: {
                line: data.end.line,
                column: data.end.column - size,
                offset: data.end.offset - size,
                _index: data.start._index + index2,
                _bufferIndex: index2
                  ? bufferIndex
                  : data.start._bufferIndex + bufferIndex,
              },
              end: shallow(data.end),
            };
            data.end = shallow(token.start);
            if (data.start.offset === data.end.offset) {
              assign(data, token);
            } else {
              events.splice(
                eventIndex,
                0,
                ["enter", token, context],
                ["exit", token, context]
              );
              eventIndex += 2;
            }
          }
          eventIndex++;
        }
      }
      return events;
    }
    exports.resolver = resolver;
    exports.string = string;
    exports.text = text;
  },
});

// node_modules/micromark/dist/util/miniflat.js
var require_miniflat = __commonJS({
  "node_modules/micromark/dist/util/miniflat.js"(exports, module2) {
    "use strict";
    function miniflat(value) {
      return value === null || value === void 0
        ? []
        : "length" in value
        ? value
        : [value];
    }
    module2.exports = miniflat;
  },
});

// node_modules/micromark/dist/util/combine-extensions.js
var require_combine_extensions = __commonJS({
  "node_modules/micromark/dist/util/combine-extensions.js"(exports, module2) {
    "use strict";
    var hasOwnProperty = require_has_own_property();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    function combineExtensions(extensions) {
      var all = {};
      var index2 = -1;
      while (++index2 < extensions.length) {
        extension(all, extensions[index2]);
      }
      return all;
    }
    function extension(all, extension2) {
      var hook;
      var left;
      var right;
      var code2;
      for (hook in extension2) {
        left = hasOwnProperty.call(all, hook) ? all[hook] : (all[hook] = {});
        right = extension2[hook];
        for (code2 in right) {
          left[code2] = constructs(
            miniflat(right[code2]),
            hasOwnProperty.call(left, code2) ? left[code2] : []
          );
        }
      }
    }
    function constructs(list, existing) {
      var index2 = -1;
      var before = [];
      while (++index2 < list.length) {
        (list[index2].add === "after" ? existing : before).push(list[index2]);
      }
      chunkedSplice(existing, 0, 0, before);
      return existing;
    }
    module2.exports = combineExtensions;
  },
});

// node_modules/micromark/dist/util/chunked-push.js
var require_chunked_push = __commonJS({
  "node_modules/micromark/dist/util/chunked-push.js"(exports, module2) {
    "use strict";
    var chunkedSplice = require_chunked_splice();
    function chunkedPush(list, items) {
      if (list.length) {
        chunkedSplice(list, list.length, 0, items);
        return list;
      }
      return items;
    }
    module2.exports = chunkedPush;
  },
});

// node_modules/micromark/dist/util/resolve-all.js
var require_resolve_all = __commonJS({
  "node_modules/micromark/dist/util/resolve-all.js"(exports, module2) {
    "use strict";
    function resolveAll(constructs, events, context) {
      var called = [];
      var index2 = -1;
      var resolve;
      while (++index2 < constructs.length) {
        resolve = constructs[index2].resolveAll;
        if (resolve && called.indexOf(resolve) < 0) {
          events = resolve(events, context);
          called.push(resolve);
        }
      }
      return events;
    }
    module2.exports = resolveAll;
  },
});

// node_modules/micromark/dist/util/serialize-chunks.js
var require_serialize_chunks = __commonJS({
  "node_modules/micromark/dist/util/serialize-chunks.js"(exports, module2) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function serializeChunks(chunks) {
      var index2 = -1;
      var result = [];
      var chunk;
      var value;
      var atTab;
      while (++index2 < chunks.length) {
        chunk = chunks[index2];
        if (typeof chunk === "string") {
          value = chunk;
        } else if (chunk === -5) {
          value = "\r";
        } else if (chunk === -4) {
          value = "\n";
        } else if (chunk === -3) {
          value = "\r\n";
        } else if (chunk === -2) {
          value = "	";
        } else if (chunk === -1) {
          if (atTab) continue;
          value = " ";
        } else {
          value = fromCharCode(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
      }
      return result.join("");
    }
    module2.exports = serializeChunks;
  },
});

// node_modules/micromark/dist/util/slice-chunks.js
var require_slice_chunks = __commonJS({
  "node_modules/micromark/dist/util/slice-chunks.js"(exports, module2) {
    "use strict";
    function sliceChunks(chunks, token) {
      var startIndex = token.start._index;
      var startBufferIndex = token.start._bufferIndex;
      var endIndex = token.end._index;
      var endBufferIndex = token.end._bufferIndex;
      var view;
      if (startIndex === endIndex) {
        view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
      } else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) {
          view[0] = view[0].slice(startBufferIndex);
        }
        if (endBufferIndex > 0) {
          view.push(chunks[endIndex].slice(0, endBufferIndex));
        }
      }
      return view;
    }
    module2.exports = sliceChunks;
  },
});

// node_modules/micromark/dist/util/create-tokenizer.js
var require_create_tokenizer = __commonJS({
  "node_modules/micromark/dist/util/create-tokenizer.js"(exports, module2) {
    "use strict";
    var assign = require_assign();
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    var resolveAll = require_resolve_all();
    var serializeChunks = require_serialize_chunks();
    var shallow = require_shallow();
    var sliceChunks = require_slice_chunks();
    function createTokenizer(parser, initialize, from) {
      var point = from
        ? shallow(from)
        : {
            line: 1,
            column: 1,
            offset: 0,
          };
      var columnStart = {};
      var resolveAllConstructs = [];
      var chunks = [];
      var stack = [];
      var effects = {
        consume,
        enter,
        exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
          interrupt: true,
        }),
        lazy: constructFactory(onsuccessfulcheck, {
          lazy: true,
        }),
      };
      var context = {
        previous: null,
        events: [],
        parser,
        sliceStream,
        sliceSerialize,
        now,
        defineSkip: skip,
        write,
      };
      var state = initialize.tokenize.call(context, effects);
      if (initialize.resolveAll) {
        resolveAllConstructs.push(initialize);
      }
      point._index = 0;
      point._bufferIndex = -1;
      return context;
      function write(slice) {
        chunks = chunkedPush(chunks, slice);
        main();
        if (chunks[chunks.length - 1] !== null) {
          return [];
        }
        addResult(initialize, 0);
        context.events = resolveAll(
          resolveAllConstructs,
          context.events,
          context
        );
        return context.events;
      }
      function sliceSerialize(token) {
        return serializeChunks(sliceStream(token));
      }
      function sliceStream(token) {
        return sliceChunks(chunks, token);
      }
      function now() {
        return shallow(point);
      }
      function skip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
      }
      function main() {
        var chunkIndex;
        var chunk;
        while (point._index < chunks.length) {
          chunk = chunks[point._index];
          if (typeof chunk === "string") {
            chunkIndex = point._index;
            if (point._bufferIndex < 0) {
              point._bufferIndex = 0;
            }
            while (
              point._index === chunkIndex &&
              point._bufferIndex < chunk.length
            ) {
              go(chunk.charCodeAt(point._bufferIndex));
            }
          } else {
            go(chunk);
          }
        }
      }
      function go(code2) {
        state = state(code2);
      }
      function consume(code2) {
        if (markdownLineEnding(code2)) {
          point.line++;
          point.column = 1;
          point.offset += code2 === -3 ? 2 : 1;
          accountForPotentialSkip();
        } else if (code2 !== -1) {
          point.column++;
          point.offset++;
        }
        if (point._bufferIndex < 0) {
          point._index++;
        } else {
          point._bufferIndex++;
          if (point._bufferIndex === chunks[point._index].length) {
            point._bufferIndex = -1;
            point._index++;
          }
        }
        context.previous = code2;
      }
      function enter(type, fields) {
        var token = fields || {};
        token.type = type;
        token.start = now();
        context.events.push(["enter", token, context]);
        stack.push(token);
        return token;
      }
      function exit(type) {
        var token = stack.pop();
        token.end = now();
        context.events.push(["exit", token, context]);
        return token;
      }
      function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
      }
      function onsuccessfulcheck(construct, info) {
        info.restore();
      }
      function constructFactory(onreturn, fields) {
        return hook;
        function hook(constructs, returnState, bogusState) {
          var listOfConstructs;
          var constructIndex;
          var currentConstruct;
          var info;
          return constructs.tokenize || "length" in constructs
            ? handleListOfConstructs(miniflat(constructs))
            : handleMapOfConstructs;
          function handleMapOfConstructs(code2) {
            if (code2 in constructs || null in constructs) {
              return handleListOfConstructs(
                constructs.null
                  ? miniflat(constructs[code2]).concat(
                      miniflat(constructs.null)
                    )
                  : constructs[code2]
              )(code2);
            }
            return bogusState(code2);
          }
          function handleListOfConstructs(list) {
            listOfConstructs = list;
            constructIndex = 0;
            return handleConstruct(list[constructIndex]);
          }
          function handleConstruct(construct) {
            return start;
            function start(code2) {
              info = store();
              currentConstruct = construct;
              if (!construct.partial) {
                context.currentConstruct = construct;
              }
              if (
                construct.name &&
                context.parser.constructs.disable.null.indexOf(construct.name) >
                  -1
              ) {
                return nok();
              }
              return construct.tokenize.call(
                fields ? assign({}, context, fields) : context,
                effects,
                ok,
                nok
              )(code2);
            }
          }
          function ok(code2) {
            onreturn(currentConstruct, info);
            return returnState;
          }
          function nok(code2) {
            info.restore();
            if (++constructIndex < listOfConstructs.length) {
              return handleConstruct(listOfConstructs[constructIndex]);
            }
            return bogusState;
          }
        }
      }
      function addResult(construct, from2) {
        if (
          construct.resolveAll &&
          resolveAllConstructs.indexOf(construct) < 0
        ) {
          resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
          chunkedSplice(
            context.events,
            from2,
            context.events.length - from2,
            construct.resolve(context.events.slice(from2), context)
          );
        }
        if (construct.resolveTo) {
          context.events = construct.resolveTo(context.events, context);
        }
      }
      function store() {
        var startPoint = now();
        var startPrevious = context.previous;
        var startCurrentConstruct = context.currentConstruct;
        var startEventsIndex = context.events.length;
        var startStack = Array.from(stack);
        return {
          restore,
          from: startEventsIndex,
        };
        function restore() {
          point = startPoint;
          context.previous = startPrevious;
          context.currentConstruct = startCurrentConstruct;
          context.events.length = startEventsIndex;
          stack = startStack;
          accountForPotentialSkip();
        }
      }
      function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
          point.column = columnStart[point.line];
          point.offset += columnStart[point.line] - 1;
        }
      }
    }
    module2.exports = createTokenizer;
  },
});

// node_modules/micromark/dist/character/markdown-line-ending-or-space.js
var require_markdown_line_ending_or_space = __commonJS({
  "node_modules/micromark/dist/character/markdown-line-ending-or-space.js"(
    exports,
    module2
  ) {
    "use strict";
    function markdownLineEndingOrSpace(code2) {
      return code2 < 0 || code2 === 32;
    }
    module2.exports = markdownLineEndingOrSpace;
  },
});

// node_modules/micromark/dist/constant/unicode-punctuation-regex.js
var require_unicode_punctuation_regex = __commonJS({
  "node_modules/micromark/dist/constant/unicode-punctuation-regex.js"(
    exports,
    module2
  ) {
    "use strict";
    var unicodePunctuation =
      /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
    module2.exports = unicodePunctuation;
  },
});

// node_modules/micromark/dist/util/regex-check.js
var require_regex_check = __commonJS({
  "node_modules/micromark/dist/util/regex-check.js"(exports, module2) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function regexCheck(regex) {
      return check;
      function check(code2) {
        return regex.test(fromCharCode(code2));
      }
    }
    module2.exports = regexCheck;
  },
});

// node_modules/micromark/dist/character/unicode-punctuation.js
var require_unicode_punctuation = __commonJS({
  "node_modules/micromark/dist/character/unicode-punctuation.js"(
    exports,
    module2
  ) {
    "use strict";
    var unicodePunctuationRegex = require_unicode_punctuation_regex();
    var regexCheck = require_regex_check();
    var unicodePunctuation = regexCheck(unicodePunctuationRegex);
    module2.exports = unicodePunctuation;
  },
});

// node_modules/micromark/dist/character/unicode-whitespace.js
var require_unicode_whitespace = __commonJS({
  "node_modules/micromark/dist/character/unicode-whitespace.js"(
    exports,
    module2
  ) {
    "use strict";
    var regexCheck = require_regex_check();
    var unicodeWhitespace = regexCheck(/\s/);
    module2.exports = unicodeWhitespace;
  },
});

// node_modules/micromark/dist/util/classify-character.js
var require_classify_character = __commonJS({
  "node_modules/micromark/dist/util/classify-character.js"(exports, module2) {
    "use strict";
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var unicodePunctuation = require_unicode_punctuation();
    var unicodeWhitespace = require_unicode_whitespace();
    function classifyCharacter(code2) {
      if (
        code2 === null ||
        markdownLineEndingOrSpace(code2) ||
        unicodeWhitespace(code2)
      ) {
        return 1;
      }
      if (unicodePunctuation(code2)) {
        return 2;
      }
    }
    module2.exports = classifyCharacter;
  },
});

// node_modules/micromark/dist/util/move-point.js
var require_move_point = __commonJS({
  "node_modules/micromark/dist/util/move-point.js"(exports, module2) {
    "use strict";
    function movePoint(point, offset) {
      point.column += offset;
      point.offset += offset;
      point._bufferIndex += offset;
      return point;
    }
    module2.exports = movePoint;
  },
});

// node_modules/micromark/dist/tokenize/attention.js
var require_attention = __commonJS({
  "node_modules/micromark/dist/tokenize/attention.js"(exports, module2) {
    "use strict";
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var classifyCharacter = require_classify_character();
    var movePoint = require_move_point();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var attention = {
      name: "attention",
      tokenize: tokenizeAttention,
      resolveAll: resolveAllAttention,
    };
    function resolveAllAttention(events, context) {
      var index2 = -1;
      var open;
      var group3;
      var text;
      var openingSequence;
      var closingSequence;
      var use;
      var nextEvents;
      var offset;
      while (++index2 < events.length) {
        if (
          events[index2][0] === "enter" &&
          events[index2][1].type === "attentionSequence" &&
          events[index2][1]._close
        ) {
          open = index2;
          while (open--) {
            if (
              events[open][0] === "exit" &&
              events[open][1].type === "attentionSequence" &&
              events[open][1]._open &&
              context.sliceSerialize(events[open][1]).charCodeAt(0) ===
                context.sliceSerialize(events[index2][1]).charCodeAt(0)
            ) {
              if (
                (events[open][1]._close || events[index2][1]._open) &&
                (events[index2][1].end.offset -
                  events[index2][1].start.offset) %
                  3 &&
                !(
                  (events[open][1].end.offset -
                    events[open][1].start.offset +
                    events[index2][1].end.offset -
                    events[index2][1].start.offset) %
                  3
                )
              ) {
                continue;
              }
              use =
                events[open][1].end.offset - events[open][1].start.offset > 1 &&
                events[index2][1].end.offset - events[index2][1].start.offset >
                  1
                  ? 2
                  : 1;
              openingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: movePoint(shallow(events[open][1].end), -use),
                end: shallow(events[open][1].end),
              };
              closingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: shallow(events[index2][1].start),
                end: movePoint(shallow(events[index2][1].start), use),
              };
              text = {
                type: use > 1 ? "strongText" : "emphasisText",
                start: shallow(events[open][1].end),
                end: shallow(events[index2][1].start),
              };
              group3 = {
                type: use > 1 ? "strong" : "emphasis",
                start: shallow(openingSequence.start),
                end: shallow(closingSequence.end),
              };
              events[open][1].end = shallow(openingSequence.start);
              events[index2][1].start = shallow(closingSequence.end);
              nextEvents = [];
              if (events[open][1].end.offset - events[open][1].start.offset) {
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[open][1], context],
                  ["exit", events[open][1], context],
                ]);
              }
              nextEvents = chunkedPush(nextEvents, [
                ["enter", group3, context],
                ["enter", openingSequence, context],
                ["exit", openingSequence, context],
                ["enter", text, context],
              ]);
              nextEvents = chunkedPush(
                nextEvents,
                resolveAll(
                  context.parser.constructs.insideSpan.null,
                  events.slice(open + 1, index2),
                  context
                )
              );
              nextEvents = chunkedPush(nextEvents, [
                ["exit", text, context],
                ["enter", closingSequence, context],
                ["exit", closingSequence, context],
                ["exit", group3, context],
              ]);
              if (
                events[index2][1].end.offset - events[index2][1].start.offset
              ) {
                offset = 2;
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[index2][1], context],
                  ["exit", events[index2][1], context],
                ]);
              } else {
                offset = 0;
              }
              chunkedSplice(events, open - 1, index2 - open + 3, nextEvents);
              index2 = open + nextEvents.length - offset - 2;
              break;
            }
          }
        }
      }
      index2 = -1;
      while (++index2 < events.length) {
        if (events[index2][1].type === "attentionSequence") {
          events[index2][1].type = "data";
        }
      }
      return events;
    }
    function tokenizeAttention(effects, ok) {
      var before = classifyCharacter(this.previous);
      var marker;
      return start;
      function start(code2) {
        effects.enter("attentionSequence");
        marker = code2;
        return sequence(code2);
      }
      function sequence(code2) {
        var token;
        var after;
        var open;
        var close;
        if (code2 === marker) {
          effects.consume(code2);
          return sequence;
        }
        token = effects.exit("attentionSequence");
        after = classifyCharacter(code2);
        open = !after || (after === 2 && before);
        close = !before || (before === 2 && after);
        token._open = marker === 42 ? open : open && (before || !close);
        token._close = marker === 42 ? close : close && (after || !open);
        return ok(code2);
      }
    }
    module2.exports = attention;
  },
});

// node_modules/micromark/dist/character/ascii-alpha.js
var require_ascii_alpha = __commonJS({
  "node_modules/micromark/dist/character/ascii-alpha.js"(exports, module2) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAlpha = regexCheck(/[A-Za-z]/);
    module2.exports = asciiAlpha;
  },
});

// node_modules/micromark/dist/character/ascii-alphanumeric.js
var require_ascii_alphanumeric = __commonJS({
  "node_modules/micromark/dist/character/ascii-alphanumeric.js"(
    exports,
    module2
  ) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
    module2.exports = asciiAlphanumeric;
  },
});

// node_modules/micromark/dist/character/ascii-atext.js
var require_ascii_atext = __commonJS({
  "node_modules/micromark/dist/character/ascii-atext.js"(exports, module2) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
    module2.exports = asciiAtext;
  },
});

// node_modules/micromark/dist/character/ascii-control.js
var require_ascii_control = __commonJS({
  "node_modules/micromark/dist/character/ascii-control.js"(exports, module2) {
    "use strict";
    function asciiControl(code2) {
      return code2 < 32 || code2 === 127;
    }
    module2.exports = asciiControl;
  },
});

// node_modules/micromark/dist/tokenize/autolink.js
var require_autolink = __commonJS({
  "node_modules/micromark/dist/tokenize/autolink.js"(exports, module2) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiAtext = require_ascii_atext();
    var asciiControl = require_ascii_control();
    var autolink = {
      name: "autolink",
      tokenize: tokenizeAutolink,
    };
    function tokenizeAutolink(effects, ok, nok) {
      var size = 1;
      return start;
      function start(code2) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code2);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
      }
      function open(code2) {
        if (asciiAlpha(code2)) {
          effects.consume(code2);
          return schemeOrEmailAtext;
        }
        return asciiAtext(code2) ? emailAtext(code2) : nok(code2);
      }
      function schemeOrEmailAtext(code2) {
        return code2 === 43 ||
          code2 === 45 ||
          code2 === 46 ||
          asciiAlphanumeric(code2)
          ? schemeInsideOrEmailAtext(code2)
          : emailAtext(code2);
      }
      function schemeInsideOrEmailAtext(code2) {
        if (code2 === 58) {
          effects.consume(code2);
          return urlInside;
        }
        if (
          (code2 === 43 ||
            code2 === 45 ||
            code2 === 46 ||
            asciiAlphanumeric(code2)) &&
          size++ < 32
        ) {
          effects.consume(code2);
          return schemeInsideOrEmailAtext;
        }
        return emailAtext(code2);
      }
      function urlInside(code2) {
        if (code2 === 62) {
          effects.exit("autolinkProtocol");
          return end(code2);
        }
        if (code2 === 32 || code2 === 60 || asciiControl(code2)) {
          return nok(code2);
        }
        effects.consume(code2);
        return urlInside;
      }
      function emailAtext(code2) {
        if (code2 === 64) {
          effects.consume(code2);
          size = 0;
          return emailAtSignOrDot;
        }
        if (asciiAtext(code2)) {
          effects.consume(code2);
          return emailAtext;
        }
        return nok(code2);
      }
      function emailAtSignOrDot(code2) {
        return asciiAlphanumeric(code2) ? emailLabel(code2) : nok(code2);
      }
      function emailLabel(code2) {
        if (code2 === 46) {
          effects.consume(code2);
          size = 0;
          return emailAtSignOrDot;
        }
        if (code2 === 62) {
          effects.exit("autolinkProtocol").type = "autolinkEmail";
          return end(code2);
        }
        return emailValue(code2);
      }
      function emailValue(code2) {
        if ((code2 === 45 || asciiAlphanumeric(code2)) && size++ < 63) {
          effects.consume(code2);
          return code2 === 45 ? emailValue : emailLabel;
        }
        return nok(code2);
      }
      function end(code2) {
        effects.enter("autolinkMarker");
        effects.consume(code2);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok;
      }
    }
    module2.exports = autolink;
  },
});

// node_modules/micromark/dist/tokenize/block-quote.js
var require_block_quote = __commonJS({
  "node_modules/micromark/dist/tokenize/block-quote.js"(exports, module2) {
    "use strict";
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var blockQuote = {
      name: "blockQuote",
      tokenize: tokenizeBlockQuoteStart,
      continuation: {
        tokenize: tokenizeBlockQuoteContinuation,
      },
      exit,
    };
    function tokenizeBlockQuoteStart(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code2) {
        if (code2 === 62) {
          if (!self2.containerState.open) {
            effects.enter("blockQuote", {
              _container: true,
            });
            self2.containerState.open = true;
          }
          effects.enter("blockQuotePrefix");
          effects.enter("blockQuoteMarker");
          effects.consume(code2);
          effects.exit("blockQuoteMarker");
          return after;
        }
        return nok(code2);
      }
      function after(code2) {
        if (markdownSpace(code2)) {
          effects.enter("blockQuotePrefixWhitespace");
          effects.consume(code2);
          effects.exit("blockQuotePrefixWhitespace");
          effects.exit("blockQuotePrefix");
          return ok;
        }
        effects.exit("blockQuotePrefix");
        return ok(code2);
      }
    }
    function tokenizeBlockQuoteContinuation(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.attempt(blockQuote, ok, nok),
        "linePrefix",
        this.parser.constructs.disable.null.indexOf("codeIndented") > -1
          ? void 0
          : 4
      );
    }
    function exit(effects) {
      effects.exit("blockQuote");
    }
    module2.exports = blockQuote;
  },
});

// node_modules/micromark/dist/character/ascii-punctuation.js
var require_ascii_punctuation = __commonJS({
  "node_modules/micromark/dist/character/ascii-punctuation.js"(
    exports,
    module2
  ) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
    module2.exports = asciiPunctuation;
  },
});

// node_modules/micromark/dist/tokenize/character-escape.js
var require_character_escape = __commonJS({
  "node_modules/micromark/dist/tokenize/character-escape.js"(exports, module2) {
    "use strict";
    var asciiPunctuation = require_ascii_punctuation();
    var characterEscape = {
      name: "characterEscape",
      tokenize: tokenizeCharacterEscape,
    };
    function tokenizeCharacterEscape(effects, ok, nok) {
      return start;
      function start(code2) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code2);
        effects.exit("escapeMarker");
        return open;
      }
      function open(code2) {
        if (asciiPunctuation(code2)) {
          effects.enter("characterEscapeValue");
          effects.consume(code2);
          effects.exit("characterEscapeValue");
          effects.exit("characterEscape");
          return ok;
        }
        return nok(code2);
      }
    }
    module2.exports = characterEscape;
  },
});

// node_modules/parse-entities/decode-entity.browser.js
var require_decode_entity_browser = __commonJS({
  "node_modules/parse-entities/decode-entity.browser.js"(exports, module2) {
    "use strict";
    var el;
    var semicolon = 59;
    module2.exports = decodeEntity;
    function decodeEntity(characters) {
      var entity = "&" + characters + ";";
      var char;
      el = el || document.createElement("i");
      el.innerHTML = entity;
      char = el.textContent;
      if (
        char.charCodeAt(char.length - 1) === semicolon &&
        characters !== "semi"
      ) {
        return false;
      }
      return char === entity ? false : char;
    }
  },
});

// node_modules/micromark/dist/character/ascii-digit.js
var require_ascii_digit = __commonJS({
  "node_modules/micromark/dist/character/ascii-digit.js"(exports, module2) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiDigit = regexCheck(/\d/);
    module2.exports = asciiDigit;
  },
});

// node_modules/micromark/dist/character/ascii-hex-digit.js
var require_ascii_hex_digit = __commonJS({
  "node_modules/micromark/dist/character/ascii-hex-digit.js"(exports, module2) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
    module2.exports = asciiHexDigit;
  },
});

// node_modules/micromark/dist/tokenize/character-reference.js
var require_character_reference = __commonJS({
  "node_modules/micromark/dist/tokenize/character-reference.js"(
    exports,
    module2
  ) {
    "use strict";
    var decodeEntity = require_decode_entity_browser();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiDigit = require_ascii_digit();
    var asciiHexDigit = require_ascii_hex_digit();
    function _interopDefaultLegacy(e2) {
      return e2 && typeof e2 === "object" && "default" in e2
        ? e2
        : { default: e2 };
    }
    var decodeEntity__default =
      /* @__PURE__ */ _interopDefaultLegacy(decodeEntity);
    var characterReference = {
      name: "characterReference",
      tokenize: tokenizeCharacterReference,
    };
    function tokenizeCharacterReference(effects, ok, nok) {
      var self2 = this;
      var size = 0;
      var max;
      var test;
      return start;
      function start(code2) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code2);
        effects.exit("characterReferenceMarker");
        return open;
      }
      function open(code2) {
        if (code2 === 35) {
          effects.enter("characterReferenceMarkerNumeric");
          effects.consume(code2);
          effects.exit("characterReferenceMarkerNumeric");
          return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = asciiAlphanumeric;
        return value(code2);
      }
      function numeric(code2) {
        if (code2 === 88 || code2 === 120) {
          effects.enter("characterReferenceMarkerHexadecimal");
          effects.consume(code2);
          effects.exit("characterReferenceMarkerHexadecimal");
          effects.enter("characterReferenceValue");
          max = 6;
          test = asciiHexDigit;
          return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = asciiDigit;
        return value(code2);
      }
      function value(code2) {
        var token;
        if (code2 === 59 && size) {
          token = effects.exit("characterReferenceValue");
          if (
            test === asciiAlphanumeric &&
            !decodeEntity__default["default"](self2.sliceSerialize(token))
          ) {
            return nok(code2);
          }
          effects.enter("characterReferenceMarker");
          effects.consume(code2);
          effects.exit("characterReferenceMarker");
          effects.exit("characterReference");
          return ok;
        }
        if (test(code2) && size++ < max) {
          effects.consume(code2);
          return value;
        }
        return nok(code2);
      }
    }
    module2.exports = characterReference;
  },
});

// node_modules/micromark/dist/tokenize/code-fenced.js
var require_code_fenced = __commonJS({
  "node_modules/micromark/dist/tokenize/code-fenced.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeFenced = {
      name: "codeFenced",
      tokenize: tokenizeCodeFenced,
      concrete: true,
    };
    function tokenizeCodeFenced(effects, ok, nok) {
      var self2 = this;
      var closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true,
      };
      var initialPrefix = prefixSize(this.events, "linePrefix");
      var sizeOpen = 0;
      var marker;
      return start;
      function start(code2) {
        effects.enter("codeFenced");
        effects.enter("codeFencedFence");
        effects.enter("codeFencedFenceSequence");
        marker = code2;
        return sequenceOpen(code2);
      }
      function sequenceOpen(code2) {
        if (code2 === marker) {
          effects.consume(code2);
          sizeOpen++;
          return sequenceOpen;
        }
        effects.exit("codeFencedFenceSequence");
        return sizeOpen < 3
          ? nok(code2)
          : factorySpace(effects, infoOpen, "whitespace")(code2);
      }
      function infoOpen(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          return openAfter(code2);
        }
        effects.enter("codeFencedFenceInfo");
        effects.enter("chunkString", {
          contentType: "string",
        });
        return info(code2);
      }
      function info(code2) {
        if (code2 === null || markdownLineEndingOrSpace(code2)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceInfo");
          return factorySpace(effects, infoAfter, "whitespace")(code2);
        }
        if (code2 === 96 && code2 === marker) return nok(code2);
        effects.consume(code2);
        return info;
      }
      function infoAfter(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          return openAfter(code2);
        }
        effects.enter("codeFencedFenceMeta");
        effects.enter("chunkString", {
          contentType: "string",
        });
        return meta(code2);
      }
      function meta(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceMeta");
          return openAfter(code2);
        }
        if (code2 === 96 && code2 === marker) return nok(code2);
        effects.consume(code2);
        return meta;
      }
      function openAfter(code2) {
        effects.exit("codeFencedFence");
        return self2.interrupt ? ok(code2) : content(code2);
      }
      function content(code2) {
        if (code2 === null) {
          return after(code2);
        }
        if (markdownLineEnding(code2)) {
          effects.enter("lineEnding");
          effects.consume(code2);
          effects.exit("lineEnding");
          return effects.attempt(
            closingFenceConstruct,
            after,
            initialPrefix
              ? factorySpace(effects, content, "linePrefix", initialPrefix + 1)
              : content
          );
        }
        effects.enter("codeFlowValue");
        return contentContinue(code2);
      }
      function contentContinue(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          effects.exit("codeFlowValue");
          return content(code2);
        }
        effects.consume(code2);
        return contentContinue;
      }
      function after(code2) {
        effects.exit("codeFenced");
        return ok(code2);
      }
      function tokenizeClosingFence(effects2, ok2, nok2) {
        var size = 0;
        return factorySpace(
          effects2,
          closingSequenceStart,
          "linePrefix",
          this.parser.constructs.disable.null.indexOf("codeIndented") > -1
            ? void 0
            : 4
        );
        function closingSequenceStart(code2) {
          effects2.enter("codeFencedFence");
          effects2.enter("codeFencedFenceSequence");
          return closingSequence(code2);
        }
        function closingSequence(code2) {
          if (code2 === marker) {
            effects2.consume(code2);
            size++;
            return closingSequence;
          }
          if (size < sizeOpen) return nok2(code2);
          effects2.exit("codeFencedFenceSequence");
          return factorySpace(
            effects2,
            closingSequenceEnd,
            "whitespace"
          )(code2);
        }
        function closingSequenceEnd(code2) {
          if (code2 === null || markdownLineEnding(code2)) {
            effects2.exit("codeFencedFence");
            return ok2(code2);
          }
          return nok2(code2);
        }
      }
    }
    module2.exports = codeFenced;
  },
});

// node_modules/micromark/dist/tokenize/code-indented.js
var require_code_indented = __commonJS({
  "node_modules/micromark/dist/tokenize/code-indented.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedSplice = require_chunked_splice();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeIndented = {
      name: "codeIndented",
      tokenize: tokenizeCodeIndented,
      resolve: resolveCodeIndented,
    };
    var indentedContentConstruct = {
      tokenize: tokenizeIndentedContent,
      partial: true,
    };
    function resolveCodeIndented(events, context) {
      var code2 = {
        type: "codeIndented",
        start: events[0][1].start,
        end: events[events.length - 1][1].end,
      };
      chunkedSplice(events, 0, 0, [["enter", code2, context]]);
      chunkedSplice(events, events.length, 0, [["exit", code2, context]]);
      return events;
    }
    function tokenizeCodeIndented(effects, ok, nok) {
      return effects.attempt(indentedContentConstruct, afterPrefix, nok);
      function afterPrefix(code2) {
        if (code2 === null) {
          return ok(code2);
        }
        if (markdownLineEnding(code2)) {
          return effects.attempt(
            indentedContentConstruct,
            afterPrefix,
            ok
          )(code2);
        }
        effects.enter("codeFlowValue");
        return content(code2);
      }
      function content(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          effects.exit("codeFlowValue");
          return afterPrefix(code2);
        }
        effects.consume(code2);
        return content;
      }
    }
    function tokenizeIndentedContent(effects, ok, nok) {
      var self2 = this;
      return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
      function afterPrefix(code2) {
        if (markdownLineEnding(code2)) {
          effects.enter("lineEnding");
          effects.consume(code2);
          effects.exit("lineEnding");
          return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
        }
        return prefixSize(self2.events, "linePrefix") < 4
          ? nok(code2)
          : ok(code2);
      }
    }
    module2.exports = codeIndented;
  },
});

// node_modules/micromark/dist/tokenize/code-text.js
var require_code_text = __commonJS({
  "node_modules/micromark/dist/tokenize/code-text.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var codeText = {
      name: "codeText",
      tokenize: tokenizeCodeText,
      resolve: resolveCodeText,
      previous,
    };
    function resolveCodeText(events) {
      var tailExitIndex = events.length - 4;
      var headEnterIndex = 3;
      var index2;
      var enter;
      if (
        (events[headEnterIndex][1].type === "lineEnding" ||
          events[headEnterIndex][1].type === "space") &&
        (events[tailExitIndex][1].type === "lineEnding" ||
          events[tailExitIndex][1].type === "space")
      ) {
        index2 = headEnterIndex;
        while (++index2 < tailExitIndex) {
          if (events[index2][1].type === "codeTextData") {
            events[tailExitIndex][1].type = events[headEnterIndex][1].type =
              "codeTextPadding";
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break;
          }
        }
      }
      index2 = headEnterIndex - 1;
      tailExitIndex++;
      while (++index2 <= tailExitIndex) {
        if (enter === void 0) {
          if (
            index2 !== tailExitIndex &&
            events[index2][1].type !== "lineEnding"
          ) {
            enter = index2;
          }
        } else if (
          index2 === tailExitIndex ||
          events[index2][1].type === "lineEnding"
        ) {
          events[enter][1].type = "codeTextData";
          if (index2 !== enter + 2) {
            events[enter][1].end = events[index2 - 1][1].end;
            events.splice(enter + 2, index2 - enter - 2);
            tailExitIndex -= index2 - enter - 2;
            index2 = enter + 2;
          }
          enter = void 0;
        }
      }
      return events;
    }
    function previous(code2) {
      return (
        code2 !== 96 ||
        this.events[this.events.length - 1][1].type === "characterEscape"
      );
    }
    function tokenizeCodeText(effects, ok, nok) {
      var sizeOpen = 0;
      var size;
      var token;
      return start;
      function start(code2) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return openingSequence(code2);
      }
      function openingSequence(code2) {
        if (code2 === 96) {
          effects.consume(code2);
          sizeOpen++;
          return openingSequence;
        }
        effects.exit("codeTextSequence");
        return gap(code2);
      }
      function gap(code2) {
        if (code2 === null) {
          return nok(code2);
        }
        if (code2 === 96) {
          token = effects.enter("codeTextSequence");
          size = 0;
          return closingSequence(code2);
        }
        if (code2 === 32) {
          effects.enter("space");
          effects.consume(code2);
          effects.exit("space");
          return gap;
        }
        if (markdownLineEnding(code2)) {
          effects.enter("lineEnding");
          effects.consume(code2);
          effects.exit("lineEnding");
          return gap;
        }
        effects.enter("codeTextData");
        return data(code2);
      }
      function data(code2) {
        if (
          code2 === null ||
          code2 === 32 ||
          code2 === 96 ||
          markdownLineEnding(code2)
        ) {
          effects.exit("codeTextData");
          return gap(code2);
        }
        effects.consume(code2);
        return data;
      }
      function closingSequence(code2) {
        if (code2 === 96) {
          effects.consume(code2);
          size++;
          return closingSequence;
        }
        if (size === sizeOpen) {
          effects.exit("codeTextSequence");
          effects.exit("codeText");
          return ok(code2);
        }
        token.type = "codeTextData";
        return data(code2);
      }
    }
    module2.exports = codeText;
  },
});

// node_modules/micromark/dist/tokenize/factory-destination.js
var require_factory_destination = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-destination.js"(
    exports,
    module2
  ) {
    "use strict";
    var asciiControl = require_ascii_control();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownLineEnding = require_markdown_line_ending();
    function destinationFactory(
      effects,
      ok,
      nok,
      type,
      literalType,
      literalMarkerType,
      rawType,
      stringType,
      max
    ) {
      var limit = max || Infinity;
      var balance = 0;
      return start;
      function start(code2) {
        if (code2 === 60) {
          effects.enter(type);
          effects.enter(literalType);
          effects.enter(literalMarkerType);
          effects.consume(code2);
          effects.exit(literalMarkerType);
          return destinationEnclosedBefore;
        }
        if (asciiControl(code2) || code2 === 41) {
          return nok(code2);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string",
        });
        return destinationRaw(code2);
      }
      function destinationEnclosedBefore(code2) {
        if (code2 === 62) {
          effects.enter(literalMarkerType);
          effects.consume(code2);
          effects.exit(literalMarkerType);
          effects.exit(literalType);
          effects.exit(type);
          return ok;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string",
        });
        return destinationEnclosed(code2);
      }
      function destinationEnclosed(code2) {
        if (code2 === 62) {
          effects.exit("chunkString");
          effects.exit(stringType);
          return destinationEnclosedBefore(code2);
        }
        if (code2 === null || code2 === 60 || markdownLineEnding(code2)) {
          return nok(code2);
        }
        effects.consume(code2);
        return code2 === 92 ? destinationEnclosedEscape : destinationEnclosed;
      }
      function destinationEnclosedEscape(code2) {
        if (code2 === 60 || code2 === 62 || code2 === 92) {
          effects.consume(code2);
          return destinationEnclosed;
        }
        return destinationEnclosed(code2);
      }
      function destinationRaw(code2) {
        if (code2 === 40) {
          if (++balance > limit) return nok(code2);
          effects.consume(code2);
          return destinationRaw;
        }
        if (code2 === 41) {
          if (!balance--) {
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code2);
          }
          effects.consume(code2);
          return destinationRaw;
        }
        if (code2 === null || markdownLineEndingOrSpace(code2)) {
          if (balance) return nok(code2);
          effects.exit("chunkString");
          effects.exit(stringType);
          effects.exit(rawType);
          effects.exit(type);
          return ok(code2);
        }
        if (asciiControl(code2)) return nok(code2);
        effects.consume(code2);
        return code2 === 92 ? destinationRawEscape : destinationRaw;
      }
      function destinationRawEscape(code2) {
        if (code2 === 40 || code2 === 41 || code2 === 92) {
          effects.consume(code2);
          return destinationRaw;
        }
        return destinationRaw(code2);
      }
    }
    module2.exports = destinationFactory;
  },
});

// node_modules/micromark/dist/tokenize/factory-label.js
var require_factory_label = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-label.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    function labelFactory(effects, ok, nok, type, markerType, stringType) {
      var self2 = this;
      var size = 0;
      var data;
      return start;
      function start(code2) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code2);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
      }
      function atBreak(code2) {
        if (
          code2 === null ||
          code2 === 91 ||
          (code2 === 93 && !data) ||
          (code2 === 94 &&
            !size &&
            "_hiddenFootnoteSupport" in self2.parser.constructs) ||
          size > 999
        ) {
          return nok(code2);
        }
        if (code2 === 93) {
          effects.exit(stringType);
          effects.enter(markerType);
          effects.consume(code2);
          effects.exit(markerType);
          effects.exit(type);
          return ok;
        }
        if (markdownLineEnding(code2)) {
          effects.enter("lineEnding");
          effects.consume(code2);
          effects.exit("lineEnding");
          return atBreak;
        }
        effects.enter("chunkString", {
          contentType: "string",
        });
        return label(code2);
      }
      function label(code2) {
        if (
          code2 === null ||
          code2 === 91 ||
          code2 === 93 ||
          markdownLineEnding(code2) ||
          size++ > 999
        ) {
          effects.exit("chunkString");
          return atBreak(code2);
        }
        effects.consume(code2);
        data = data || !markdownSpace(code2);
        return code2 === 92 ? labelEscape : label;
      }
      function labelEscape(code2) {
        if (code2 === 91 || code2 === 92 || code2 === 93) {
          effects.consume(code2);
          size++;
          return label;
        }
        return label(code2);
      }
    }
    module2.exports = labelFactory;
  },
});

// node_modules/micromark/dist/tokenize/factory-whitespace.js
var require_factory_whitespace = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-whitespace.js"(
    exports,
    module2
  ) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    function whitespaceFactory(effects, ok) {
      var seen;
      return start;
      function start(code2) {
        if (markdownLineEnding(code2)) {
          effects.enter("lineEnding");
          effects.consume(code2);
          effects.exit("lineEnding");
          seen = true;
          return start;
        }
        if (markdownSpace(code2)) {
          return factorySpace(
            effects,
            start,
            seen ? "linePrefix" : "lineSuffix"
          )(code2);
        }
        return ok(code2);
      }
    }
    module2.exports = whitespaceFactory;
  },
});

// node_modules/micromark/dist/tokenize/factory-title.js
var require_factory_title = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-title.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    function titleFactory(effects, ok, nok, type, markerType, stringType) {
      var marker;
      return start;
      function start(code2) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code2);
        effects.exit(markerType);
        marker = code2 === 40 ? 41 : code2;
        return atFirstTitleBreak;
      }
      function atFirstTitleBreak(code2) {
        if (code2 === marker) {
          effects.enter(markerType);
          effects.consume(code2);
          effects.exit(markerType);
          effects.exit(type);
          return ok;
        }
        effects.enter(stringType);
        return atTitleBreak(code2);
      }
      function atTitleBreak(code2) {
        if (code2 === marker) {
          effects.exit(stringType);
          return atFirstTitleBreak(marker);
        }
        if (code2 === null) {
          return nok(code2);
        }
        if (markdownLineEnding(code2)) {
          effects.enter("lineEnding");
          effects.consume(code2);
          effects.exit("lineEnding");
          return factorySpace(effects, atTitleBreak, "linePrefix");
        }
        effects.enter("chunkString", {
          contentType: "string",
        });
        return title7(code2);
      }
      function title7(code2) {
        if (code2 === marker || code2 === null || markdownLineEnding(code2)) {
          effects.exit("chunkString");
          return atTitleBreak(code2);
        }
        effects.consume(code2);
        return code2 === 92 ? titleEscape : title7;
      }
      function titleEscape(code2) {
        if (code2 === marker || code2 === 92) {
          effects.consume(code2);
          return title7;
        }
        return title7(code2);
      }
    }
    module2.exports = titleFactory;
  },
});

// node_modules/micromark/dist/tokenize/definition.js
var require_definition = __commonJS({
  "node_modules/micromark/dist/tokenize/definition.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var normalizeIdentifier = require_normalize_identifier();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factorySpace = require_factory_space();
    var factoryWhitespace = require_factory_whitespace();
    var factoryTitle = require_factory_title();
    var definition = {
      name: "definition",
      tokenize: tokenizeDefinition,
    };
    var titleConstruct = {
      tokenize: tokenizeTitle,
      partial: true,
    };
    function tokenizeDefinition(effects, ok, nok) {
      var self2 = this;
      var identifier;
      return start;
      function start(code2) {
        effects.enter("definition");
        return factoryLabel.call(
          self2,
          effects,
          labelAfter,
          nok,
          "definitionLabel",
          "definitionLabelMarker",
          "definitionLabelString"
        )(code2);
      }
      function labelAfter(code2) {
        identifier = normalizeIdentifier(
          self2
            .sliceSerialize(self2.events[self2.events.length - 1][1])
            .slice(1, -1)
        );
        if (code2 === 58) {
          effects.enter("definitionMarker");
          effects.consume(code2);
          effects.exit("definitionMarker");
          return factoryWhitespace(
            effects,
            factoryDestination(
              effects,
              effects.attempt(
                titleConstruct,
                factorySpace(effects, after, "whitespace"),
                factorySpace(effects, after, "whitespace")
              ),
              nok,
              "definitionDestination",
              "definitionDestinationLiteral",
              "definitionDestinationLiteralMarker",
              "definitionDestinationRaw",
              "definitionDestinationString"
            )
          );
        }
        return nok(code2);
      }
      function after(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          effects.exit("definition");
          if (self2.parser.defined.indexOf(identifier) < 0) {
            self2.parser.defined.push(identifier);
          }
          return ok(code2);
        }
        return nok(code2);
      }
    }
    function tokenizeTitle(effects, ok, nok) {
      return start;
      function start(code2) {
        return markdownLineEndingOrSpace(code2)
          ? factoryWhitespace(effects, before)(code2)
          : nok(code2);
      }
      function before(code2) {
        if (code2 === 34 || code2 === 39 || code2 === 40) {
          return factoryTitle(
            effects,
            factorySpace(effects, after, "whitespace"),
            nok,
            "definitionTitle",
            "definitionTitleMarker",
            "definitionTitleString"
          )(code2);
        }
        return nok(code2);
      }
      function after(code2) {
        return code2 === null || markdownLineEnding(code2)
          ? ok(code2)
          : nok(code2);
      }
    }
    module2.exports = definition;
  },
});

// node_modules/micromark/dist/tokenize/hard-break-escape.js
var require_hard_break_escape = __commonJS({
  "node_modules/micromark/dist/tokenize/hard-break-escape.js"(
    exports,
    module2
  ) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var hardBreakEscape = {
      name: "hardBreakEscape",
      tokenize: tokenizeHardBreakEscape,
    };
    function tokenizeHardBreakEscape(effects, ok, nok) {
      return start;
      function start(code2) {
        effects.enter("hardBreakEscape");
        effects.enter("escapeMarker");
        effects.consume(code2);
        return open;
      }
      function open(code2) {
        if (markdownLineEnding(code2)) {
          effects.exit("escapeMarker");
          effects.exit("hardBreakEscape");
          return ok(code2);
        }
        return nok(code2);
      }
    }
    module2.exports = hardBreakEscape;
  },
});

// node_modules/micromark/dist/tokenize/heading-atx.js
var require_heading_atx = __commonJS({
  "node_modules/micromark/dist/tokenize/heading-atx.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var chunkedSplice = require_chunked_splice();
    var factorySpace = require_factory_space();
    var headingAtx = {
      name: "headingAtx",
      tokenize: tokenizeHeadingAtx,
      resolve: resolveHeadingAtx,
    };
    function resolveHeadingAtx(events, context) {
      var contentEnd = events.length - 2;
      var contentStart = 3;
      var content;
      var text;
      if (events[contentStart][1].type === "whitespace") {
        contentStart += 2;
      }
      if (
        contentEnd - 2 > contentStart &&
        events[contentEnd][1].type === "whitespace"
      ) {
        contentEnd -= 2;
      }
      if (
        events[contentEnd][1].type === "atxHeadingSequence" &&
        (contentStart === contentEnd - 1 ||
          (contentEnd - 4 > contentStart &&
            events[contentEnd - 2][1].type === "whitespace"))
      ) {
        contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
      }
      if (contentEnd > contentStart) {
        content = {
          type: "atxHeadingText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end,
        };
        text = {
          type: "chunkText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end,
          contentType: "text",
        };
        chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
          ["enter", content, context],
          ["enter", text, context],
          ["exit", text, context],
          ["exit", content, context],
        ]);
      }
      return events;
    }
    function tokenizeHeadingAtx(effects, ok, nok) {
      var self2 = this;
      var size = 0;
      return start;
      function start(code2) {
        effects.enter("atxHeading");
        effects.enter("atxHeadingSequence");
        return fenceOpenInside(code2);
      }
      function fenceOpenInside(code2) {
        if (code2 === 35 && size++ < 6) {
          effects.consume(code2);
          return fenceOpenInside;
        }
        if (code2 === null || markdownLineEndingOrSpace(code2)) {
          effects.exit("atxHeadingSequence");
          return self2.interrupt ? ok(code2) : headingBreak(code2);
        }
        return nok(code2);
      }
      function headingBreak(code2) {
        if (code2 === 35) {
          effects.enter("atxHeadingSequence");
          return sequence(code2);
        }
        if (code2 === null || markdownLineEnding(code2)) {
          effects.exit("atxHeading");
          return ok(code2);
        }
        if (markdownSpace(code2)) {
          return factorySpace(effects, headingBreak, "whitespace")(code2);
        }
        effects.enter("atxHeadingText");
        return data(code2);
      }
      function sequence(code2) {
        if (code2 === 35) {
          effects.consume(code2);
          return sequence;
        }
        effects.exit("atxHeadingSequence");
        return headingBreak(code2);
      }
      function data(code2) {
        if (
          code2 === null ||
          code2 === 35 ||
          markdownLineEndingOrSpace(code2)
        ) {
          effects.exit("atxHeadingText");
          return headingBreak(code2);
        }
        effects.consume(code2);
        return data;
      }
    }
    module2.exports = headingAtx;
  },
});

// node_modules/micromark/dist/constant/html-block-names.js
var require_html_block_names = __commonJS({
  "node_modules/micromark/dist/constant/html-block-names.js"(exports, module2) {
    "use strict";
    var basics = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "source",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul",
    ];
    module2.exports = basics;
  },
});

// node_modules/micromark/dist/constant/html-raw-names.js
var require_html_raw_names = __commonJS({
  "node_modules/micromark/dist/constant/html-raw-names.js"(exports, module2) {
    "use strict";
    var raws = ["pre", "script", "style", "textarea"];
    module2.exports = raws;
  },
});

// node_modules/micromark/dist/tokenize/html-flow.js
var require_html_flow = __commonJS({
  "node_modules/micromark/dist/tokenize/html-flow.js"(exports, module2) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var fromCharCode = require_from_char_code();
    var htmlBlockNames = require_html_block_names();
    var htmlRawNames = require_html_raw_names();
    var partialBlankLine = require_partial_blank_line();
    var htmlFlow = {
      name: "htmlFlow",
      tokenize: tokenizeHtmlFlow,
      resolveTo: resolveToHtmlFlow,
      concrete: true,
    };
    var nextBlankConstruct = {
      tokenize: tokenizeNextBlank,
      partial: true,
    };
    function resolveToHtmlFlow(events) {
      var index2 = events.length;
      while (index2--) {
        if (
          events[index2][0] === "enter" &&
          events[index2][1].type === "htmlFlow"
        ) {
          break;
        }
      }
      if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
        events[index2][1].start = events[index2 - 2][1].start;
        events[index2 + 1][1].start = events[index2 - 2][1].start;
        events.splice(index2 - 2, 2);
      }
      return events;
    }
    function tokenizeHtmlFlow(effects, ok, nok) {
      var self2 = this;
      var kind;
      var startTag;
      var buffer;
      var index2;
      var marker;
      return start;
      function start(code2) {
        effects.enter("htmlFlow");
        effects.enter("htmlFlowData");
        effects.consume(code2);
        return open;
      }
      function open(code2) {
        if (code2 === 33) {
          effects.consume(code2);
          return declarationStart;
        }
        if (code2 === 47) {
          effects.consume(code2);
          return tagCloseStart;
        }
        if (code2 === 63) {
          effects.consume(code2);
          kind = 3;
          return self2.interrupt ? ok : continuationDeclarationInside;
        }
        if (asciiAlpha(code2)) {
          effects.consume(code2);
          buffer = fromCharCode(code2);
          startTag = true;
          return tagName;
        }
        return nok(code2);
      }
      function declarationStart(code2) {
        if (code2 === 45) {
          effects.consume(code2);
          kind = 2;
          return commentOpenInside;
        }
        if (code2 === 91) {
          effects.consume(code2);
          kind = 5;
          buffer = "CDATA[";
          index2 = 0;
          return cdataOpenInside;
        }
        if (asciiAlpha(code2)) {
          effects.consume(code2);
          kind = 4;
          return self2.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code2);
      }
      function commentOpenInside(code2) {
        if (code2 === 45) {
          effects.consume(code2);
          return self2.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code2);
      }
      function cdataOpenInside(code2) {
        if (code2 === buffer.charCodeAt(index2++)) {
          effects.consume(code2);
          return index2 === buffer.length
            ? self2.interrupt
              ? ok
              : continuation
            : cdataOpenInside;
        }
        return nok(code2);
      }
      function tagCloseStart(code2) {
        if (asciiAlpha(code2)) {
          effects.consume(code2);
          buffer = fromCharCode(code2);
          return tagName;
        }
        return nok(code2);
      }
      function tagName(code2) {
        if (
          code2 === null ||
          code2 === 47 ||
          code2 === 62 ||
          markdownLineEndingOrSpace(code2)
        ) {
          if (
            code2 !== 47 &&
            startTag &&
            htmlRawNames.indexOf(buffer.toLowerCase()) > -1
          ) {
            kind = 1;
            return self2.interrupt ? ok(code2) : continuation(code2);
          }
          if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
            kind = 6;
            if (code2 === 47) {
              effects.consume(code2);
              return basicSelfClosing;
            }
            return self2.interrupt ? ok(code2) : continuation(code2);
          }
          kind = 7;
          return self2.interrupt
            ? nok(code2)
            : startTag
            ? completeAttributeNameBefore(code2)
            : completeClosingTagAfter(code2);
        }
        if (code2 === 45 || asciiAlphanumeric(code2)) {
          effects.consume(code2);
          buffer += fromCharCode(code2);
          return tagName;
        }
        return nok(code2);
      }
      function basicSelfClosing(code2) {
        if (code2 === 62) {
          effects.consume(code2);
          return self2.interrupt ? ok : continuation;
        }
        return nok(code2);
      }
      function completeClosingTagAfter(code2) {
        if (markdownSpace(code2)) {
          effects.consume(code2);
          return completeClosingTagAfter;
        }
        return completeEnd(code2);
      }
      function completeAttributeNameBefore(code2) {
        if (code2 === 47) {
          effects.consume(code2);
          return completeEnd;
        }
        if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
          effects.consume(code2);
          return completeAttributeName;
        }
        if (markdownSpace(code2)) {
          effects.consume(code2);
          return completeAttributeNameBefore;
        }
        return completeEnd(code2);
      }
      function completeAttributeName(code2) {
        if (
          code2 === 45 ||
          code2 === 46 ||
          code2 === 58 ||
          code2 === 95 ||
          asciiAlphanumeric(code2)
        ) {
          effects.consume(code2);
          return completeAttributeName;
        }
        return completeAttributeNameAfter(code2);
      }
      function completeAttributeNameAfter(code2) {
        if (code2 === 61) {
          effects.consume(code2);
          return completeAttributeValueBefore;
        }
        if (markdownSpace(code2)) {
          effects.consume(code2);
          return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code2);
      }
      function completeAttributeValueBefore(code2) {
        if (
          code2 === null ||
          code2 === 60 ||
          code2 === 61 ||
          code2 === 62 ||
          code2 === 96
        ) {
          return nok(code2);
        }
        if (code2 === 34 || code2 === 39) {
          effects.consume(code2);
          marker = code2;
          return completeAttributeValueQuoted;
        }
        if (markdownSpace(code2)) {
          effects.consume(code2);
          return completeAttributeValueBefore;
        }
        marker = void 0;
        return completeAttributeValueUnquoted(code2);
      }
      function completeAttributeValueQuoted(code2) {
        if (code2 === marker) {
          effects.consume(code2);
          return completeAttributeValueQuotedAfter;
        }
        if (code2 === null || markdownLineEnding(code2)) {
          return nok(code2);
        }
        effects.consume(code2);
        return completeAttributeValueQuoted;
      }
      function completeAttributeValueUnquoted(code2) {
        if (
          code2 === null ||
          code2 === 34 ||
          code2 === 39 ||
          code2 === 60 ||
          code2 === 61 ||
          code2 === 62 ||
          code2 === 96 ||
          markdownLineEndingOrSpace(code2)
        ) {
          return completeAttributeNameAfter(code2);
        }
        effects.consume(code2);
        return completeAttributeValueUnquoted;
      }
      function completeAttributeValueQuotedAfter(code2) {
        if (code2 === 47 || code2 === 62 || markdownSpace(code2)) {
          return completeAttributeNameBefore(code2);
        }
        return nok(code2);
      }
      function completeEnd(code2) {
        if (code2 === 62) {
          effects.consume(code2);
          return completeAfter;
        }
        return nok(code2);
      }
      function completeAfter(code2) {
        if (markdownSpace(code2)) {
          effects.consume(code2);
          return completeAfter;
        }
        return code2 === null || markdownLineEnding(code2)
          ? continuation(code2)
          : nok(code2);
      }
      function continuation(code2) {
        if (code2 === 45 && kind === 2) {
          effects.consume(code2);
          return continuationCommentInside;
        }
        if (code2 === 60 && kind === 1) {
          effects.consume(code2);
          return continuationRawTagOpen;
        }
        if (code2 === 62 && kind === 4) {
          effects.consume(code2);
          return continuationClose;
        }
        if (code2 === 63 && kind === 3) {
          effects.consume(code2);
          return continuationDeclarationInside;
        }
        if (code2 === 93 && kind === 5) {
          effects.consume(code2);
          return continuationCharacterDataInside;
        }
        if (markdownLineEnding(code2) && (kind === 6 || kind === 7)) {
          return effects.check(
            nextBlankConstruct,
            continuationClose,
            continuationAtLineEnding
          )(code2);
        }
        if (code2 === null || markdownLineEnding(code2)) {
          return continuationAtLineEnding(code2);
        }
        effects.consume(code2);
        return continuation;
      }
      function continuationAtLineEnding(code2) {
        effects.exit("htmlFlowData");
        return htmlContinueStart(code2);
      }
      function htmlContinueStart(code2) {
        if (code2 === null) {
          return done(code2);
        }
        if (markdownLineEnding(code2)) {
          effects.enter("lineEnding");
          effects.consume(code2);
          effects.exit("lineEnding");
          return htmlContinueStart;
        }
        effects.enter("htmlFlowData");
        return continuation(code2);
      }
      function continuationCommentInside(code2) {
        if (code2 === 45) {
          effects.consume(code2);
          return continuationDeclarationInside;
        }
        return continuation(code2);
      }
      function continuationRawTagOpen(code2) {
        if (code2 === 47) {
          effects.consume(code2);
          buffer = "";
          return continuationRawEndTag;
        }
        return continuation(code2);
      }
      function continuationRawEndTag(code2) {
        if (code2 === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
          effects.consume(code2);
          return continuationClose;
        }
        if (asciiAlpha(code2) && buffer.length < 8) {
          effects.consume(code2);
          buffer += fromCharCode(code2);
          return continuationRawEndTag;
        }
        return continuation(code2);
      }
      function continuationCharacterDataInside(code2) {
        if (code2 === 93) {
          effects.consume(code2);
          return continuationDeclarationInside;
        }
        return continuation(code2);
      }
      function continuationDeclarationInside(code2) {
        if (code2 === 62) {
          effects.consume(code2);
          return continuationClose;
        }
        return continuation(code2);
      }
      function continuationClose(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          effects.exit("htmlFlowData");
          return done(code2);
        }
        effects.consume(code2);
        return continuationClose;
      }
      function done(code2) {
        effects.exit("htmlFlow");
        return ok(code2);
      }
    }
    function tokenizeNextBlank(effects, ok, nok) {
      return start;
      function start(code2) {
        effects.exit("htmlFlowData");
        effects.enter("lineEndingBlank");
        effects.consume(code2);
        effects.exit("lineEndingBlank");
        return effects.attempt(partialBlankLine, ok, nok);
      }
    }
    module2.exports = htmlFlow;
  },
});

// node_modules/micromark/dist/tokenize/html-text.js
var require_html_text = __commonJS({
  "node_modules/micromark/dist/tokenize/html-text.js"(exports, module2) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var htmlText = {
      name: "htmlText",
      tokenize: tokenizeHtmlText,
    };
    function tokenizeHtmlText(effects, ok, nok) {
      var self2 = this;
      var marker;
      var buffer;
      var index2;
      var returnState;
      return start;
      function start(code2) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code2);
        return open;
      }
      function open(code2) {
        if (code2 === 33) {
          effects.consume(code2);
          return declarationOpen;
        }
        if (code2 === 47) {
          effects.consume(code2);
          return tagCloseStart;
        }
        if (code2 === 63) {
          effects.consume(code2);
          return instruction;
        }
        if (asciiAlpha(code2)) {
          effects.consume(code2);
          return tagOpen;
        }
        return nok(code2);
      }
      function declarationOpen(code2) {
        if (code2 === 45) {
          effects.consume(code2);
          return commentOpen;
        }
        if (code2 === 91) {
          effects.consume(code2);
          buffer = "CDATA[";
          index2 = 0;
          return cdataOpen;
        }
        if (asciiAlpha(code2)) {
          effects.consume(code2);
          return declaration;
        }
        return nok(code2);
      }
      function commentOpen(code2) {
        if (code2 === 45) {
          effects.consume(code2);
          return commentStart;
        }
        return nok(code2);
      }
      function commentStart(code2) {
        if (code2 === null || code2 === 62) {
          return nok(code2);
        }
        if (code2 === 45) {
          effects.consume(code2);
          return commentStartDash;
        }
        return comment2(code2);
      }
      function commentStartDash(code2) {
        if (code2 === null || code2 === 62) {
          return nok(code2);
        }
        return comment2(code2);
      }
      function comment2(code2) {
        if (code2 === null) {
          return nok(code2);
        }
        if (code2 === 45) {
          effects.consume(code2);
          return commentClose;
        }
        if (markdownLineEnding(code2)) {
          returnState = comment2;
          return atLineEnding(code2);
        }
        effects.consume(code2);
        return comment2;
      }
      function commentClose(code2) {
        if (code2 === 45) {
          effects.consume(code2);
          return end;
        }
        return comment2(code2);
      }
      function cdataOpen(code2) {
        if (code2 === buffer.charCodeAt(index2++)) {
          effects.consume(code2);
          return index2 === buffer.length ? cdata : cdataOpen;
        }
        return nok(code2);
      }
      function cdata(code2) {
        if (code2 === null) {
          return nok(code2);
        }
        if (code2 === 93) {
          effects.consume(code2);
          return cdataClose;
        }
        if (markdownLineEnding(code2)) {
          returnState = cdata;
          return atLineEnding(code2);
        }
        effects.consume(code2);
        return cdata;
      }
      function cdataClose(code2) {
        if (code2 === 93) {
          effects.consume(code2);
          return cdataEnd;
        }
        return cdata(code2);
      }
      function cdataEnd(code2) {
        if (code2 === 62) {
          return end(code2);
        }
        if (code2 === 93) {
          effects.consume(code2);
          return cdataEnd;
        }
        return cdata(code2);
      }
      function declaration(code2) {
        if (code2 === null || code2 === 62) {
          return end(code2);
        }
        if (markdownLineEnding(code2)) {
          returnState = declaration;
          return atLineEnding(code2);
        }
        effects.consume(code2);
        return declaration;
      }
      function instruction(code2) {
        if (code2 === null) {
          return nok(code2);
        }
        if (code2 === 63) {
          effects.consume(code2);
          return instructionClose;
        }
        if (markdownLineEnding(code2)) {
          returnState = instruction;
          return atLineEnding(code2);
        }
        effects.consume(code2);
        return instruction;
      }
      function instructionClose(code2) {
        return code2 === 62 ? end(code2) : instruction(code2);
      }
      function tagCloseStart(code2) {
        if (asciiAlpha(code2)) {
          effects.consume(code2);
          return tagClose;
        }
        return nok(code2);
      }
      function tagClose(code2) {
        if (code2 === 45 || asciiAlphanumeric(code2)) {
          effects.consume(code2);
          return tagClose;
        }
        return tagCloseBetween(code2);
      }
      function tagCloseBetween(code2) {
        if (markdownLineEnding(code2)) {
          returnState = tagCloseBetween;
          return atLineEnding(code2);
        }
        if (markdownSpace(code2)) {
          effects.consume(code2);
          return tagCloseBetween;
        }
        return end(code2);
      }
      function tagOpen(code2) {
        if (code2 === 45 || asciiAlphanumeric(code2)) {
          effects.consume(code2);
          return tagOpen;
        }
        if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
          return tagOpenBetween(code2);
        }
        return nok(code2);
      }
      function tagOpenBetween(code2) {
        if (code2 === 47) {
          effects.consume(code2);
          return end;
        }
        if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
          effects.consume(code2);
          return tagOpenAttributeName;
        }
        if (markdownLineEnding(code2)) {
          returnState = tagOpenBetween;
          return atLineEnding(code2);
        }
        if (markdownSpace(code2)) {
          effects.consume(code2);
          return tagOpenBetween;
        }
        return end(code2);
      }
      function tagOpenAttributeName(code2) {
        if (
          code2 === 45 ||
          code2 === 46 ||
          code2 === 58 ||
          code2 === 95 ||
          asciiAlphanumeric(code2)
        ) {
          effects.consume(code2);
          return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code2);
      }
      function tagOpenAttributeNameAfter(code2) {
        if (code2 === 61) {
          effects.consume(code2);
          return tagOpenAttributeValueBefore;
        }
        if (markdownLineEnding(code2)) {
          returnState = tagOpenAttributeNameAfter;
          return atLineEnding(code2);
        }
        if (markdownSpace(code2)) {
          effects.consume(code2);
          return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code2);
      }
      function tagOpenAttributeValueBefore(code2) {
        if (
          code2 === null ||
          code2 === 60 ||
          code2 === 61 ||
          code2 === 62 ||
          code2 === 96
        ) {
          return nok(code2);
        }
        if (code2 === 34 || code2 === 39) {
          effects.consume(code2);
          marker = code2;
          return tagOpenAttributeValueQuoted;
        }
        if (markdownLineEnding(code2)) {
          returnState = tagOpenAttributeValueBefore;
          return atLineEnding(code2);
        }
        if (markdownSpace(code2)) {
          effects.consume(code2);
          return tagOpenAttributeValueBefore;
        }
        effects.consume(code2);
        marker = void 0;
        return tagOpenAttributeValueUnquoted;
      }
      function tagOpenAttributeValueQuoted(code2) {
        if (code2 === marker) {
          effects.consume(code2);
          return tagOpenAttributeValueQuotedAfter;
        }
        if (code2 === null) {
          return nok(code2);
        }
        if (markdownLineEnding(code2)) {
          returnState = tagOpenAttributeValueQuoted;
          return atLineEnding(code2);
        }
        effects.consume(code2);
        return tagOpenAttributeValueQuoted;
      }
      function tagOpenAttributeValueQuotedAfter(code2) {
        if (code2 === 62 || code2 === 47 || markdownLineEndingOrSpace(code2)) {
          return tagOpenBetween(code2);
        }
        return nok(code2);
      }
      function tagOpenAttributeValueUnquoted(code2) {
        if (
          code2 === null ||
          code2 === 34 ||
          code2 === 39 ||
          code2 === 60 ||
          code2 === 61 ||
          code2 === 96
        ) {
          return nok(code2);
        }
        if (code2 === 62 || markdownLineEndingOrSpace(code2)) {
          return tagOpenBetween(code2);
        }
        effects.consume(code2);
        return tagOpenAttributeValueUnquoted;
      }
      function atLineEnding(code2) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return factorySpace(
          effects,
          afterPrefix,
          "linePrefix",
          self2.parser.constructs.disable.null.indexOf("codeIndented") > -1
            ? void 0
            : 4
        );
      }
      function afterPrefix(code2) {
        effects.enter("htmlTextData");
        return returnState(code2);
      }
      function end(code2) {
        if (code2 === 62) {
          effects.consume(code2);
          effects.exit("htmlTextData");
          effects.exit("htmlText");
          return ok;
        }
        return nok(code2);
      }
    }
    module2.exports = htmlText;
  },
});

// node_modules/micromark/dist/tokenize/label-end.js
var require_label_end = __commonJS({
  "node_modules/micromark/dist/tokenize/label-end.js"(exports, module2) {
    "use strict";
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var normalizeIdentifier = require_normalize_identifier();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factoryTitle = require_factory_title();
    var factoryWhitespace = require_factory_whitespace();
    var labelEnd = {
      name: "labelEnd",
      tokenize: tokenizeLabelEnd,
      resolveTo: resolveToLabelEnd,
      resolveAll: resolveAllLabelEnd,
    };
    var resourceConstruct = {
      tokenize: tokenizeResource,
    };
    var fullReferenceConstruct = {
      tokenize: tokenizeFullReference,
    };
    var collapsedReferenceConstruct = {
      tokenize: tokenizeCollapsedReference,
    };
    function resolveAllLabelEnd(events) {
      var index2 = -1;
      var token;
      while (++index2 < events.length) {
        token = events[index2][1];
        if (
          !token._used &&
          (token.type === "labelImage" ||
            token.type === "labelLink" ||
            token.type === "labelEnd")
        ) {
          events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
          token.type = "data";
          index2++;
        }
      }
      return events;
    }
    function resolveToLabelEnd(events, context) {
      var index2 = events.length;
      var offset = 0;
      var group3;
      var label;
      var text;
      var token;
      var open;
      var close;
      var media;
      while (index2--) {
        token = events[index2][1];
        if (open) {
          if (
            token.type === "link" ||
            (token.type === "labelLink" && token._inactive)
          ) {
            break;
          }
          if (events[index2][0] === "enter" && token.type === "labelLink") {
            token._inactive = true;
          }
        } else if (close) {
          if (
            events[index2][0] === "enter" &&
            (token.type === "labelImage" || token.type === "labelLink") &&
            !token._balanced
          ) {
            open = index2;
            if (token.type !== "labelLink") {
              offset = 2;
              break;
            }
          }
        } else if (token.type === "labelEnd") {
          close = index2;
        }
      }
      group3 = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: shallow(events[open][1].start),
        end: shallow(events[events.length - 1][1].end),
      };
      label = {
        type: "label",
        start: shallow(events[open][1].start),
        end: shallow(events[close][1].end),
      };
      text = {
        type: "labelText",
        start: shallow(events[open + offset + 2][1].end),
        end: shallow(events[close - 2][1].start),
      };
      media = [
        ["enter", group3, context],
        ["enter", label, context],
      ];
      media = chunkedPush(media, events.slice(open + 1, open + offset + 3));
      media = chunkedPush(media, [["enter", text, context]]);
      media = chunkedPush(
        media,
        resolveAll(
          context.parser.constructs.insideSpan.null,
          events.slice(open + offset + 4, close - 3),
          context
        )
      );
      media = chunkedPush(media, [
        ["exit", text, context],
        events[close - 2],
        events[close - 1],
        ["exit", label, context],
      ]);
      media = chunkedPush(media, events.slice(close + 1));
      media = chunkedPush(media, [["exit", group3, context]]);
      chunkedSplice(events, open, events.length, media);
      return events;
    }
    function tokenizeLabelEnd(effects, ok, nok) {
      var self2 = this;
      var index2 = self2.events.length;
      var labelStart;
      var defined;
      while (index2--) {
        if (
          (self2.events[index2][1].type === "labelImage" ||
            self2.events[index2][1].type === "labelLink") &&
          !self2.events[index2][1]._balanced
        ) {
          labelStart = self2.events[index2][1];
          break;
        }
      }
      return start;
      function start(code2) {
        if (!labelStart) {
          return nok(code2);
        }
        if (labelStart._inactive) return balanced(code2);
        defined =
          self2.parser.defined.indexOf(
            normalizeIdentifier(
              self2.sliceSerialize({
                start: labelStart.end,
                end: self2.now(),
              })
            )
          ) > -1;
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code2);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return afterLabelEnd;
      }
      function afterLabelEnd(code2) {
        if (code2 === 40) {
          return effects.attempt(
            resourceConstruct,
            ok,
            defined ? ok : balanced
          )(code2);
        }
        if (code2 === 91) {
          return effects.attempt(
            fullReferenceConstruct,
            ok,
            defined
              ? effects.attempt(collapsedReferenceConstruct, ok, balanced)
              : balanced
          )(code2);
        }
        return defined ? ok(code2) : balanced(code2);
      }
      function balanced(code2) {
        labelStart._balanced = true;
        return nok(code2);
      }
    }
    function tokenizeResource(effects, ok, nok) {
      return start;
      function start(code2) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code2);
        effects.exit("resourceMarker");
        return factoryWhitespace(effects, open);
      }
      function open(code2) {
        if (code2 === 41) {
          return end(code2);
        }
        return factoryDestination(
          effects,
          destinationAfter,
          nok,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          3
        )(code2);
      }
      function destinationAfter(code2) {
        return markdownLineEndingOrSpace(code2)
          ? factoryWhitespace(effects, between)(code2)
          : end(code2);
      }
      function between(code2) {
        if (code2 === 34 || code2 === 39 || code2 === 40) {
          return factoryTitle(
            effects,
            factoryWhitespace(effects, end),
            nok,
            "resourceTitle",
            "resourceTitleMarker",
            "resourceTitleString"
          )(code2);
        }
        return end(code2);
      }
      function end(code2) {
        if (code2 === 41) {
          effects.enter("resourceMarker");
          effects.consume(code2);
          effects.exit("resourceMarker");
          effects.exit("resource");
          return ok;
        }
        return nok(code2);
      }
    }
    function tokenizeFullReference(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code2) {
        return factoryLabel.call(
          self2,
          effects,
          afterLabel,
          nok,
          "reference",
          "referenceMarker",
          "referenceString"
        )(code2);
      }
      function afterLabel(code2) {
        return self2.parser.defined.indexOf(
          normalizeIdentifier(
            self2
              .sliceSerialize(self2.events[self2.events.length - 1][1])
              .slice(1, -1)
          )
        ) < 0
          ? nok(code2)
          : ok(code2);
      }
    }
    function tokenizeCollapsedReference(effects, ok, nok) {
      return start;
      function start(code2) {
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code2);
        effects.exit("referenceMarker");
        return open;
      }
      function open(code2) {
        if (code2 === 93) {
          effects.enter("referenceMarker");
          effects.consume(code2);
          effects.exit("referenceMarker");
          effects.exit("reference");
          return ok;
        }
        return nok(code2);
      }
    }
    module2.exports = labelEnd;
  },
});

// node_modules/micromark/dist/tokenize/label-start-image.js
var require_label_start_image = __commonJS({
  "node_modules/micromark/dist/tokenize/label-start-image.js"(
    exports,
    module2
  ) {
    "use strict";
    var labelEnd = require_label_end();
    var labelStartImage = {
      name: "labelStartImage",
      tokenize: tokenizeLabelStartImage,
      resolveAll: labelEnd.resolveAll,
    };
    function tokenizeLabelStartImage(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code2) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code2);
        effects.exit("labelImageMarker");
        return open;
      }
      function open(code2) {
        if (code2 === 91) {
          effects.enter("labelMarker");
          effects.consume(code2);
          effects.exit("labelMarker");
          effects.exit("labelImage");
          return after;
        }
        return nok(code2);
      }
      function after(code2) {
        return code2 === 94 &&
          "_hiddenFootnoteSupport" in self2.parser.constructs
          ? nok(code2)
          : ok(code2);
      }
    }
    module2.exports = labelStartImage;
  },
});

// node_modules/micromark/dist/tokenize/label-start-link.js
var require_label_start_link = __commonJS({
  "node_modules/micromark/dist/tokenize/label-start-link.js"(exports, module2) {
    "use strict";
    var labelEnd = require_label_end();
    var labelStartLink = {
      name: "labelStartLink",
      tokenize: tokenizeLabelStartLink,
      resolveAll: labelEnd.resolveAll,
    };
    function tokenizeLabelStartLink(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code2) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code2);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
      }
      function after(code2) {
        return code2 === 94 &&
          "_hiddenFootnoteSupport" in self2.parser.constructs
          ? nok(code2)
          : ok(code2);
      }
    }
    module2.exports = labelStartLink;
  },
});

// node_modules/micromark/dist/tokenize/line-ending.js
var require_line_ending = __commonJS({
  "node_modules/micromark/dist/tokenize/line-ending.js"(exports, module2) {
    "use strict";
    var factorySpace = require_factory_space();
    var lineEnding = {
      name: "lineEnding",
      tokenize: tokenizeLineEnding,
    };
    function tokenizeLineEnding(effects, ok) {
      return start;
      function start(code2) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return factorySpace(effects, ok, "linePrefix");
      }
    }
    module2.exports = lineEnding;
  },
});

// node_modules/micromark/dist/tokenize/thematic-break.js
var require_thematic_break = __commonJS({
  "node_modules/micromark/dist/tokenize/thematic-break.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var thematicBreak = {
      name: "thematicBreak",
      tokenize: tokenizeThematicBreak,
    };
    function tokenizeThematicBreak(effects, ok, nok) {
      var size = 0;
      var marker;
      return start;
      function start(code2) {
        effects.enter("thematicBreak");
        marker = code2;
        return atBreak(code2);
      }
      function atBreak(code2) {
        if (code2 === marker) {
          effects.enter("thematicBreakSequence");
          return sequence(code2);
        }
        if (markdownSpace(code2)) {
          return factorySpace(effects, atBreak, "whitespace")(code2);
        }
        if (size < 3 || (code2 !== null && !markdownLineEnding(code2))) {
          return nok(code2);
        }
        effects.exit("thematicBreak");
        return ok(code2);
      }
      function sequence(code2) {
        if (code2 === marker) {
          effects.consume(code2);
          size++;
          return sequence;
        }
        effects.exit("thematicBreakSequence");
        return atBreak(code2);
      }
    }
    module2.exports = thematicBreak;
  },
});

// node_modules/micromark/dist/tokenize/list.js
var require_list = __commonJS({
  "node_modules/micromark/dist/tokenize/list.js"(exports, module2) {
    "use strict";
    var asciiDigit = require_ascii_digit();
    var markdownSpace = require_markdown_space();
    var prefixSize = require_prefix_size();
    var sizeChunks = require_size_chunks();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var thematicBreak = require_thematic_break();
    var list = {
      name: "list",
      tokenize: tokenizeListStart,
      continuation: {
        tokenize: tokenizeListContinuation,
      },
      exit: tokenizeListEnd,
    };
    var listItemPrefixWhitespaceConstruct = {
      tokenize: tokenizeListItemPrefixWhitespace,
      partial: true,
    };
    var indentConstruct = {
      tokenize: tokenizeIndent,
      partial: true,
    };
    function tokenizeListStart(effects, ok, nok) {
      var self2 = this;
      var initialSize = prefixSize(self2.events, "linePrefix");
      var size = 0;
      return start;
      function start(code2) {
        var kind =
          self2.containerState.type ||
          (code2 === 42 || code2 === 43 || code2 === 45
            ? "listUnordered"
            : "listOrdered");
        if (
          kind === "listUnordered"
            ? !self2.containerState.marker ||
              code2 === self2.containerState.marker
            : asciiDigit(code2)
        ) {
          if (!self2.containerState.type) {
            self2.containerState.type = kind;
            effects.enter(kind, {
              _container: true,
            });
          }
          if (kind === "listUnordered") {
            effects.enter("listItemPrefix");
            return code2 === 42 || code2 === 45
              ? effects.check(thematicBreak, nok, atMarker)(code2)
              : atMarker(code2);
          }
          if (!self2.interrupt || code2 === 49) {
            effects.enter("listItemPrefix");
            effects.enter("listItemValue");
            return inside(code2);
          }
        }
        return nok(code2);
      }
      function inside(code2) {
        if (asciiDigit(code2) && ++size < 10) {
          effects.consume(code2);
          return inside;
        }
        if (
          (!self2.interrupt || size < 2) &&
          (self2.containerState.marker
            ? code2 === self2.containerState.marker
            : code2 === 41 || code2 === 46)
        ) {
          effects.exit("listItemValue");
          return atMarker(code2);
        }
        return nok(code2);
      }
      function atMarker(code2) {
        effects.enter("listItemMarker");
        effects.consume(code2);
        effects.exit("listItemMarker");
        self2.containerState.marker = self2.containerState.marker || code2;
        return effects.check(
          partialBlankLine,
          self2.interrupt ? nok : onBlank,
          effects.attempt(
            listItemPrefixWhitespaceConstruct,
            endOfPrefix,
            otherPrefix
          )
        );
      }
      function onBlank(code2) {
        self2.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code2);
      }
      function otherPrefix(code2) {
        if (markdownSpace(code2)) {
          effects.enter("listItemPrefixWhitespace");
          effects.consume(code2);
          effects.exit("listItemPrefixWhitespace");
          return endOfPrefix;
        }
        return nok(code2);
      }
      function endOfPrefix(code2) {
        self2.containerState.size =
          initialSize +
          sizeChunks(self2.sliceStream(effects.exit("listItemPrefix")));
        return ok(code2);
      }
    }
    function tokenizeListContinuation(effects, ok, nok) {
      var self2 = this;
      self2.containerState._closeFlow = void 0;
      return effects.check(partialBlankLine, onBlank, notBlank);
      function onBlank(code2) {
        self2.containerState.furtherBlankLines =
          self2.containerState.furtherBlankLines ||
          self2.containerState.initialBlankLine;
        return factorySpace(
          effects,
          ok,
          "listItemIndent",
          self2.containerState.size + 1
        )(code2);
      }
      function notBlank(code2) {
        if (self2.containerState.furtherBlankLines || !markdownSpace(code2)) {
          self2.containerState.furtherBlankLines =
            self2.containerState.initialBlankLine = void 0;
          return notInCurrentItem(code2);
        }
        self2.containerState.furtherBlankLines =
          self2.containerState.initialBlankLine = void 0;
        return effects.attempt(indentConstruct, ok, notInCurrentItem)(code2);
      }
      function notInCurrentItem(code2) {
        self2.containerState._closeFlow = true;
        self2.interrupt = void 0;
        return factorySpace(
          effects,
          effects.attempt(list, ok, nok),
          "linePrefix",
          self2.parser.constructs.disable.null.indexOf("codeIndented") > -1
            ? void 0
            : 4
        )(code2);
      }
    }
    function tokenizeIndent(effects, ok, nok) {
      var self2 = this;
      return factorySpace(
        effects,
        afterPrefix,
        "listItemIndent",
        self2.containerState.size + 1
      );
      function afterPrefix(code2) {
        return prefixSize(self2.events, "listItemIndent") ===
          self2.containerState.size
          ? ok(code2)
          : nok(code2);
      }
    }
    function tokenizeListEnd(effects) {
      effects.exit(this.containerState.type);
    }
    function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
      var self2 = this;
      return factorySpace(
        effects,
        afterPrefix,
        "listItemPrefixWhitespace",
        self2.parser.constructs.disable.null.indexOf("codeIndented") > -1
          ? void 0
          : 4 + 1
      );
      function afterPrefix(code2) {
        return markdownSpace(code2) ||
          !prefixSize(self2.events, "listItemPrefixWhitespace")
          ? nok(code2)
          : ok(code2);
      }
    }
    module2.exports = list;
  },
});

// node_modules/micromark/dist/tokenize/setext-underline.js
var require_setext_underline = __commonJS({
  "node_modules/micromark/dist/tokenize/setext-underline.js"(exports, module2) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var shallow = require_shallow();
    var factorySpace = require_factory_space();
    var setextUnderline = {
      name: "setextUnderline",
      tokenize: tokenizeSetextUnderline,
      resolveTo: resolveToSetextUnderline,
    };
    function resolveToSetextUnderline(events, context) {
      var index2 = events.length;
      var content;
      var text;
      var definition;
      var heading;
      while (index2--) {
        if (events[index2][0] === "enter") {
          if (events[index2][1].type === "content") {
            content = index2;
            break;
          }
          if (events[index2][1].type === "paragraph") {
            text = index2;
          }
        } else {
          if (events[index2][1].type === "content") {
            events.splice(index2, 1);
          }
          if (!definition && events[index2][1].type === "definition") {
            definition = index2;
          }
        }
      }
      heading = {
        type: "setextHeading",
        start: shallow(events[text][1].start),
        end: shallow(events[events.length - 1][1].end),
      };
      events[text][1].type = "setextHeadingText";
      if (definition) {
        events.splice(text, 0, ["enter", heading, context]);
        events.splice(definition + 1, 0, ["exit", events[content][1], context]);
        events[content][1].end = shallow(events[definition][1].end);
      } else {
        events[content][1] = heading;
      }
      events.push(["exit", heading, context]);
      return events;
    }
    function tokenizeSetextUnderline(effects, ok, nok) {
      var self2 = this;
      var index2 = self2.events.length;
      var marker;
      var paragraph;
      while (index2--) {
        if (
          self2.events[index2][1].type !== "lineEnding" &&
          self2.events[index2][1].type !== "linePrefix" &&
          self2.events[index2][1].type !== "content"
        ) {
          paragraph = self2.events[index2][1].type === "paragraph";
          break;
        }
      }
      return start;
      function start(code2) {
        if (!self2.lazy && (self2.interrupt || paragraph)) {
          effects.enter("setextHeadingLine");
          effects.enter("setextHeadingLineSequence");
          marker = code2;
          return closingSequence(code2);
        }
        return nok(code2);
      }
      function closingSequence(code2) {
        if (code2 === marker) {
          effects.consume(code2);
          return closingSequence;
        }
        effects.exit("setextHeadingLineSequence");
        return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code2);
      }
      function closingSequenceEnd(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          effects.exit("setextHeadingLine");
          return ok(code2);
        }
        return nok(code2);
      }
    }
    module2.exports = setextUnderline;
  },
});

// node_modules/micromark/dist/constructs.js
var require_constructs = __commonJS({
  "node_modules/micromark/dist/constructs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var text$1 = require_text();
    var attention = require_attention();
    var autolink = require_autolink();
    var blockQuote = require_block_quote();
    var characterEscape = require_character_escape();
    var characterReference = require_character_reference();
    var codeFenced = require_code_fenced();
    var codeIndented = require_code_indented();
    var codeText = require_code_text();
    var definition = require_definition();
    var hardBreakEscape = require_hard_break_escape();
    var headingAtx = require_heading_atx();
    var htmlFlow = require_html_flow();
    var htmlText = require_html_text();
    var labelEnd = require_label_end();
    var labelStartImage = require_label_start_image();
    var labelStartLink = require_label_start_link();
    var lineEnding = require_line_ending();
    var list = require_list();
    var setextUnderline = require_setext_underline();
    var thematicBreak = require_thematic_break();
    var document2 = {
      42: list,
      43: list,
      45: list,
      48: list,
      49: list,
      50: list,
      51: list,
      52: list,
      53: list,
      54: list,
      55: list,
      56: list,
      57: list,
      62: blockQuote,
    };
    var contentInitial = {
      91: definition,
    };
    var flowInitial = {
      "-2": codeIndented,
      "-1": codeIndented,
      32: codeIndented,
    };
    var flow = {
      35: headingAtx,
      42: thematicBreak,
      45: [setextUnderline, thematicBreak],
      60: htmlFlow,
      61: setextUnderline,
      95: thematicBreak,
      96: codeFenced,
      126: codeFenced,
    };
    var string = {
      38: characterReference,
      92: characterEscape,
    };
    var text = {
      "-5": lineEnding,
      "-4": lineEnding,
      "-3": lineEnding,
      33: labelStartImage,
      38: characterReference,
      42: attention,
      60: [autolink, htmlText],
      91: labelStartLink,
      92: [hardBreakEscape, characterEscape],
      93: labelEnd,
      95: attention,
      96: codeText,
    };
    var insideSpan = {
      null: [attention, text$1.resolver],
    };
    var disable = {
      null: [],
    };
    exports.contentInitial = contentInitial;
    exports.disable = disable;
    exports.document = document2;
    exports.flow = flow;
    exports.flowInitial = flowInitial;
    exports.insideSpan = insideSpan;
    exports.string = string;
    exports.text = text;
  },
});

// node_modules/micromark/dist/parse.js
var require_parse = __commonJS({
  "node_modules/micromark/dist/parse.js"(exports, module2) {
    "use strict";
    var content = require_content();
    var document2 = require_document();
    var flow = require_flow();
    var text = require_text();
    var combineExtensions = require_combine_extensions();
    var createTokenizer = require_create_tokenizer();
    var miniflat = require_miniflat();
    var constructs = require_constructs();
    function parse(options) {
      var settings = options || {};
      var parser = {
        defined: [],
        constructs: combineExtensions(
          [constructs].concat(miniflat(settings.extensions))
        ),
        content: create(content),
        document: create(document2),
        flow: create(flow),
        string: create(text.string),
        text: create(text.text),
      };
      return parser;
      function create(initializer) {
        return creator;
        function creator(from) {
          return createTokenizer(parser, initializer, from);
        }
      }
    }
    module2.exports = parse;
  },
});

// node_modules/micromark/dist/preprocess.js
var require_preprocess = __commonJS({
  "node_modules/micromark/dist/preprocess.js"(exports, module2) {
    "use strict";
    var search = /[\0\t\n\r]/g;
    function preprocess() {
      var start = true;
      var column = 1;
      var buffer = "";
      var atCarriageReturn;
      return preprocessor;
      function preprocessor(value, encoding, end) {
        var chunks = [];
        var match;
        var next;
        var startPosition;
        var endPosition;
        var code2;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
          if (value.charCodeAt(0) === 65279) {
            startPosition++;
          }
          start = void 0;
        }
        while (startPosition < value.length) {
          search.lastIndex = startPosition;
          match = search.exec(value);
          endPosition = match ? match.index : value.length;
          code2 = value.charCodeAt(endPosition);
          if (!match) {
            buffer = value.slice(startPosition);
            break;
          }
          if (
            code2 === 10 &&
            startPosition === endPosition &&
            atCarriageReturn
          ) {
            chunks.push(-3);
            atCarriageReturn = void 0;
          } else {
            if (atCarriageReturn) {
              chunks.push(-5);
              atCarriageReturn = void 0;
            }
            if (startPosition < endPosition) {
              chunks.push(value.slice(startPosition, endPosition));
              column += endPosition - startPosition;
            }
            if (code2 === 0) {
              chunks.push(65533);
              column++;
            } else if (code2 === 9) {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next) chunks.push(-1);
            } else if (code2 === 10) {
              chunks.push(-4);
              column = 1;
            } else {
              atCarriageReturn = true;
              column = 1;
            }
          }
          startPosition = endPosition + 1;
        }
        if (end) {
          if (atCarriageReturn) chunks.push(-5);
          if (buffer) chunks.push(buffer);
          chunks.push(null);
        }
        return chunks;
      }
    }
    module2.exports = preprocess;
  },
});

// node_modules/micromark/dist/postprocess.js
var require_postprocess = __commonJS({
  "node_modules/micromark/dist/postprocess.js"(exports, module2) {
    "use strict";
    var subtokenize = require_subtokenize();
    function postprocess(events) {
      while (!subtokenize(events)) {}
      return events;
    }
    module2.exports = postprocess;
  },
});

// node_modules/mdast-util-from-markdown/dist/index.js
var require_dist = __commonJS({
  "node_modules/mdast-util-from-markdown/dist/index.js"(exports, module2) {
    "use strict";
    module2.exports = fromMarkdown;
    var toString = require_mdast_util_to_string();
    var assign = require_assign();
    var own = require_has_own_property();
    var normalizeIdentifier = require_normalize_identifier();
    var safeFromInt = require_safe_from_int();
    var parser = require_parse();
    var preprocessor = require_preprocess();
    var postprocess = require_postprocess();
    var decode = require_decode_entity_browser();
    var stringifyPosition = require_unist_util_stringify_position();
    function fromMarkdown(value, encoding, options) {
      if (typeof encoding !== "string") {
        options = encoding;
        encoding = void 0;
      }
      return compiler(options)(
        postprocess(
          parser(options)
            .document()
            .write(preprocessor()(value, encoding, true))
        )
      );
    }
    function compiler(options) {
      var settings = options || {};
      var config = configure(
        {
          transforms: [],
          canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong",
          ],
          enter: {
            autolink: opener(link2),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image2),
            label: buffer,
            link: opener(link2),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak),
          },
          exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer(),
          },
        },
        settings.mdastExtensions || []
      );
      var data = {};
      return compile;
      function compile(events) {
        var tree = { type: "root", children: [] };
        var stack = [tree];
        var tokenStack = [];
        var listStack = [];
        var index2 = -1;
        var handler;
        var listStart;
        var context = {
          stack,
          tokenStack,
          config,
          enter,
          exit,
          buffer,
          resume,
          setData,
          getData,
        };
        while (++index2 < events.length) {
          if (
            events[index2][1].type === "listOrdered" ||
            events[index2][1].type === "listUnordered"
          ) {
            if (events[index2][0] === "enter") {
              listStack.push(index2);
            } else {
              listStart = listStack.pop(index2);
              index2 = prepareList(events, listStart, index2);
            }
          }
        }
        index2 = -1;
        while (++index2 < events.length) {
          handler = config[events[index2][0]];
          if (own.call(handler, events[index2][1].type)) {
            handler[events[index2][1].type].call(
              assign(
                { sliceSerialize: events[index2][2].sliceSerialize },
                context
              ),
              events[index2][1]
            );
          }
        }
        if (tokenStack.length) {
          throw new Error(
            "Cannot close document, a token (`" +
              tokenStack[tokenStack.length - 1].type +
              "`, " +
              stringifyPosition({
                start: tokenStack[tokenStack.length - 1].start,
                end: tokenStack[tokenStack.length - 1].end,
              }) +
              ") is still open"
          );
        }
        tree.position = {
          start: point(
            events.length
              ? events[0][1].start
              : { line: 1, column: 1, offset: 0 }
          ),
          end: point(
            events.length
              ? events[events.length - 2][1].end
              : { line: 1, column: 1, offset: 0 }
          ),
        };
        index2 = -1;
        while (++index2 < config.transforms.length) {
          tree = config.transforms[index2](tree) || tree;
        }
        return tree;
      }
      function prepareList(events, start, length) {
        var index2 = start - 1;
        var containerBalance = -1;
        var listSpread = false;
        var listItem2;
        var tailIndex;
        var lineIndex;
        var tailEvent;
        var event;
        var firstBlankLineIndex;
        var atMarker;
        while (++index2 <= length) {
          event = events[index2];
          if (
            event[1].type === "listUnordered" ||
            event[1].type === "listOrdered" ||
            event[1].type === "blockQuote"
          ) {
            if (event[0] === "enter") {
              containerBalance++;
            } else {
              containerBalance--;
            }
            atMarker = void 0;
          } else if (event[1].type === "lineEndingBlank") {
            if (event[0] === "enter") {
              if (
                listItem2 &&
                !atMarker &&
                !containerBalance &&
                !firstBlankLineIndex
              ) {
                firstBlankLineIndex = index2;
              }
              atMarker = void 0;
            }
          } else if (
            event[1].type === "linePrefix" ||
            event[1].type === "listItemValue" ||
            event[1].type === "listItemMarker" ||
            event[1].type === "listItemPrefix" ||
            event[1].type === "listItemPrefixWhitespace"
          ) {
          } else {
            atMarker = void 0;
          }
          if (
            (!containerBalance &&
              event[0] === "enter" &&
              event[1].type === "listItemPrefix") ||
            (containerBalance === -1 &&
              event[0] === "exit" &&
              (event[1].type === "listUnordered" ||
                event[1].type === "listOrdered"))
          ) {
            if (listItem2) {
              tailIndex = index2;
              lineIndex = void 0;
              while (tailIndex--) {
                tailEvent = events[tailIndex];
                if (
                  tailEvent[1].type === "lineEnding" ||
                  tailEvent[1].type === "lineEndingBlank"
                ) {
                  if (tailEvent[0] === "exit") continue;
                  if (lineIndex) {
                    events[lineIndex][1].type = "lineEndingBlank";
                    listSpread = true;
                  }
                  tailEvent[1].type = "lineEnding";
                  lineIndex = tailIndex;
                } else if (
                  tailEvent[1].type === "linePrefix" ||
                  tailEvent[1].type === "blockQuotePrefix" ||
                  tailEvent[1].type === "blockQuotePrefixWhitespace" ||
                  tailEvent[1].type === "blockQuoteMarker" ||
                  tailEvent[1].type === "listItemIndent"
                ) {
                } else {
                  break;
                }
              }
              if (
                firstBlankLineIndex &&
                (!lineIndex || firstBlankLineIndex < lineIndex)
              ) {
                listItem2._spread = true;
              }
              listItem2.end = point(
                lineIndex ? events[lineIndex][1].start : event[1].end
              );
              events.splice(lineIndex || index2, 0, [
                "exit",
                listItem2,
                event[2],
              ]);
              index2++;
              length++;
            }
            if (event[1].type === "listItemPrefix") {
              listItem2 = {
                type: "listItem",
                _spread: false,
                start: point(event[1].start),
              };
              events.splice(index2, 0, ["enter", listItem2, event[2]]);
              index2++;
              length++;
              firstBlankLineIndex = void 0;
              atMarker = true;
            }
          }
        }
        events[start][1]._spread = listSpread;
        return length;
      }
      function setData(key, value) {
        data[key] = value;
      }
      function getData(key) {
        return data[key];
      }
      function point(d2) {
        return { line: d2.line, column: d2.column, offset: d2.offset };
      }
      function opener(create, and) {
        return open;
        function open(token) {
          enter.call(this, create(token), token);
          if (and) and.call(this, token);
        }
      }
      function buffer() {
        this.stack.push({ type: "fragment", children: [] });
      }
      function enter(node, token) {
        this.stack[this.stack.length - 1].children.push(node);
        this.stack.push(node);
        this.tokenStack.push(token);
        node.position = { start: point(token.start) };
        return node;
      }
      function closer(and) {
        return close;
        function close(token) {
          if (and) and.call(this, token);
          exit.call(this, token);
        }
      }
      function exit(token) {
        var node = this.stack.pop();
        var open = this.tokenStack.pop();
        if (!open) {
          throw new Error(
            "Cannot close `" +
              token.type +
              "` (" +
              stringifyPosition({ start: token.start, end: token.end }) +
              "): it\u2019s not open"
          );
        } else if (open.type !== token.type) {
          throw new Error(
            "Cannot close `" +
              token.type +
              "` (" +
              stringifyPosition({ start: token.start, end: token.end }) +
              "): a different token (`" +
              open.type +
              "`, " +
              stringifyPosition({ start: open.start, end: open.end }) +
              ") is open"
          );
        }
        node.position.end = point(token.end);
        return node;
      }
      function resume() {
        return toString(this.stack.pop());
      }
      function onenterlistordered() {
        setData("expectingFirstListItemValue", true);
      }
      function onenterlistitemvalue(token) {
        if (getData("expectingFirstListItemValue")) {
          this.stack[this.stack.length - 2].start = parseInt(
            this.sliceSerialize(token),
            10
          );
          setData("expectingFirstListItemValue");
        }
      }
      function onexitcodefencedfenceinfo() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].lang = data2;
      }
      function onexitcodefencedfencemeta() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].meta = data2;
      }
      function onexitcodefencedfence() {
        if (getData("flowCodeInside")) return;
        this.buffer();
        setData("flowCodeInside", true);
      }
      function onexitcodefenced() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2.replace(
          /^(\r?\n|\r)|(\r?\n|\r)$/g,
          ""
        );
        setData("flowCodeInside");
      }
      function onexitcodeindented() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitdefinitionlabelstring(token) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
          this.sliceSerialize(token)
        ).toLowerCase();
      }
      function onexitdefinitiontitlestring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].title = data2;
      }
      function onexitdefinitiondestinationstring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].url = data2;
      }
      function onexitatxheadingsequence(token) {
        if (!this.stack[this.stack.length - 1].depth) {
          this.stack[this.stack.length - 1].depth =
            this.sliceSerialize(token).length;
        }
      }
      function onexitsetextheadingtext() {
        setData("setextHeadingSlurpLineEnding", true);
      }
      function onexitsetextheadinglinesequence(token) {
        this.stack[this.stack.length - 1].depth =
          this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
      }
      function onexitsetextheading() {
        setData("setextHeadingSlurpLineEnding");
      }
      function onenterdata(token) {
        var siblings = this.stack[this.stack.length - 1].children;
        var tail = siblings[siblings.length - 1];
        if (!tail || tail.type !== "text") {
          tail = text();
          tail.position = { start: point(token.start) };
          this.stack[this.stack.length - 1].children.push(tail);
        }
        this.stack.push(tail);
      }
      function onexitdata(token) {
        var tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = point(token.end);
      }
      function onexitlineending(token) {
        var context = this.stack[this.stack.length - 1];
        if (getData("atHardBreak")) {
          context.children[context.children.length - 1].position.end = point(
            token.end
          );
          setData("atHardBreak");
          return;
        }
        if (
          !getData("setextHeadingSlurpLineEnding") &&
          config.canContainEols.indexOf(context.type) > -1
        ) {
          onenterdata.call(this, token);
          onexitdata.call(this, token);
        }
      }
      function onexithardbreak() {
        setData("atHardBreak", true);
      }
      function onexithtmlflow() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexithtmltext() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitcodetext() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitlink() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
          context.type += "Reference";
          context.referenceType = getData("referenceType") || "shortcut";
          delete context.url;
          delete context.title;
        } else {
          delete context.identifier;
          delete context.label;
          delete context.referenceType;
        }
        setData("referenceType");
      }
      function onexitimage() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
          context.type += "Reference";
          context.referenceType = getData("referenceType") || "shortcut";
          delete context.url;
          delete context.title;
        } else {
          delete context.identifier;
          delete context.label;
          delete context.referenceType;
        }
        setData("referenceType");
      }
      function onexitlabeltext(token) {
        this.stack[this.stack.length - 2].identifier = normalizeIdentifier(
          this.sliceSerialize(token)
        ).toLowerCase();
      }
      function onexitlabel() {
        var fragment = this.stack[this.stack.length - 1];
        var value = this.resume();
        this.stack[this.stack.length - 1].label = value;
        setData("inReference", true);
        if (this.stack[this.stack.length - 1].type === "link") {
          this.stack[this.stack.length - 1].children = fragment.children;
        } else {
          this.stack[this.stack.length - 1].alt = value;
        }
      }
      function onexitresourcedestinationstring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].url = data2;
      }
      function onexitresourcetitlestring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].title = data2;
      }
      function onexitresource() {
        setData("inReference");
      }
      function onenterreference() {
        setData("referenceType", "collapsed");
      }
      function onexitreferencestring(token) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
          this.sliceSerialize(token)
        ).toLowerCase();
        setData("referenceType", "full");
      }
      function onexitcharacterreferencemarker(token) {
        setData("characterReferenceType", token.type);
      }
      function onexitcharacterreferencevalue(token) {
        var data2 = this.sliceSerialize(token);
        var type = getData("characterReferenceType");
        var value;
        var tail;
        if (type) {
          value = safeFromInt(
            data2,
            type === "characterReferenceMarkerNumeric" ? 10 : 16
          );
          setData("characterReferenceType");
        } else {
          value = decode(data2);
        }
        tail = this.stack.pop();
        tail.value += value;
        tail.position.end = point(token.end);
      }
      function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
      }
      function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url =
          "mailto:" + this.sliceSerialize(token);
      }
      function blockQuote() {
        return { type: "blockquote", children: [] };
      }
      function codeFlow() {
        return { type: "code", lang: null, meta: null, value: "" };
      }
      function codeText() {
        return { type: "inlineCode", value: "" };
      }
      function definition() {
        return {
          type: "definition",
          identifier: "",
          label: null,
          title: null,
          url: "",
        };
      }
      function emphasis() {
        return { type: "emphasis", children: [] };
      }
      function heading() {
        return { type: "heading", depth: void 0, children: [] };
      }
      function hardBreak() {
        return { type: "break" };
      }
      function html() {
        return { type: "html", value: "" };
      }
      function image2() {
        return { type: "image", title: null, url: "", alt: null };
      }
      function link2() {
        return { type: "link", title: null, url: "", children: [] };
      }
      function list(token) {
        return {
          type: "list",
          ordered: token.type === "listOrdered",
          start: null,
          spread: token._spread,
          children: [],
        };
      }
      function listItem(token) {
        return {
          type: "listItem",
          spread: token._spread,
          checked: null,
          children: [],
        };
      }
      function paragraph() {
        return { type: "paragraph", children: [] };
      }
      function strong() {
        return { type: "strong", children: [] };
      }
      function text() {
        return { type: "text", value: "" };
      }
      function thematicBreak() {
        return { type: "thematicBreak" };
      }
    }
    function configure(config, extensions) {
      var index2 = -1;
      while (++index2 < extensions.length) {
        extension(config, extensions[index2]);
      }
      return config;
    }
    function extension(config, extension2) {
      var key;
      var left;
      for (key in extension2) {
        left = own.call(config, key) ? config[key] : (config[key] = {});
        if (key === "canContainEols" || key === "transforms") {
          config[key] = [].concat(left, extension2[key]);
        } else {
          Object.assign(left, extension2[key]);
        }
      }
    }
  },
});

// node_modules/mdast-util-from-markdown/index.js
var require_mdast_util_from_markdown = __commonJS({
  "node_modules/mdast-util-from-markdown/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_dist();
  },
});

// node_modules/remark-parse/index.js
var require_remark_parse = __commonJS({
  "node_modules/remark-parse/index.js"(exports, module2) {
    "use strict";
    module2.exports = parse;
    var fromMarkdown = require_mdast_util_from_markdown();
    function parse(options) {
      var self2 = this;
      this.Parser = parse2;
      function parse2(doc) {
        return fromMarkdown(
          doc,
          Object.assign({}, self2.data("settings"), options, {
            extensions: self2.data("micromarkExtensions") || [],
            mdastExtensions: self2.data("fromMarkdownExtensions") || [],
          })
        );
      }
    }
  },
});

// node_modules/mdast-add-list-metadata/node_modules/unist-util-visit-parents/index.js
var require_unist_util_visit_parents = __commonJS({
  "node_modules/mdast-add-list-metadata/node_modules/unist-util-visit-parents/index.js"(
    exports,
    module2
  ) {
    "use strict";
    module2.exports = visitParents;
    function visitParents(tree, type, visitor) {
      var stack = [];
      if (typeof type === "function") {
        visitor = type;
        type = null;
      }
      one(tree);
      function one(node) {
        var result;
        if (!type || node.type === type) {
          result = visitor(node, stack.concat());
        }
        if (node.children && result !== false) {
          return all(node.children, node);
        }
        return result;
      }
      function all(children, parent) {
        var length = children.length;
        var index2 = -1;
        var child;
        stack.push(parent);
        while (++index2 < length) {
          child = children[index2];
          if (child && one(child) === false) {
            return false;
          }
        }
        stack.pop();
        return true;
      }
    }
  },
});

// node_modules/mdast-add-list-metadata/index.js
var require_mdast_add_list_metadata = __commonJS({
  "node_modules/mdast-add-list-metadata/index.js"(exports, module2) {
    var visitWithParents = require_unist_util_visit_parents();
    function addListMetadata() {
      return function (ast) {
        visitWithParents(ast, "list", function (listNode, parents) {
          var depth = 0,
            i2,
            n2;
          for (i2 = 0, n2 = parents.length; i2 < n2; i2++) {
            if (parents[i2].type === "list") depth += 1;
          }
          for (i2 = 0, n2 = listNode.children.length; i2 < n2; i2++) {
            var child = listNode.children[i2];
            child.index = i2;
            child.ordered = listNode.ordered;
          }
          listNode.depth = depth;
        });
        return ast;
      };
    }
    module2.exports = addListMetadata;
  },
});

// node_modules/unist-util-is/convert.js
var require_convert = __commonJS({
  "node_modules/unist-util-is/convert.js"(exports, module2) {
    "use strict";
    module2.exports = convert;
    function convert(test) {
      if (test == null) {
        return ok;
      }
      if (typeof test === "string") {
        return typeFactory(test);
      }
      if (typeof test === "object") {
        return "length" in test ? anyFactory(test) : allFactory(test);
      }
      if (typeof test === "function") {
        return test;
      }
      throw new Error("Expected function, string, or object as test");
    }
    function allFactory(test) {
      return all;
      function all(node) {
        var key;
        for (key in test) {
          if (node[key] !== test[key]) return false;
        }
        return true;
      }
    }
    function anyFactory(tests) {
      var checks = [];
      var index2 = -1;
      while (++index2 < tests.length) {
        checks[index2] = convert(tests[index2]);
      }
      return any;
      function any() {
        var index3 = -1;
        while (++index3 < checks.length) {
          if (checks[index3].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory(test) {
      return type;
      function type(node) {
        return Boolean(node && node.type === test);
      }
    }
    function ok() {
      return true;
    }
  },
});

// node_modules/unist-util-visit-parents/color.browser.js
var require_color_browser = __commonJS({
  "node_modules/unist-util-visit-parents/color.browser.js"(exports, module2) {
    module2.exports = identity;
    function identity(d2) {
      return d2;
    }
  },
});

// node_modules/unist-util-visit-parents/index.js
var require_unist_util_visit_parents2 = __commonJS({
  "node_modules/unist-util-visit-parents/index.js"(exports, module2) {
    "use strict";
    module2.exports = visitParents;
    var convert = require_convert();
    var color = require_color_browser();
    var CONTINUE = true;
    var SKIP = "skip";
    var EXIT = false;
    visitParents.CONTINUE = CONTINUE;
    visitParents.SKIP = SKIP;
    visitParents.EXIT = EXIT;
    function visitParents(tree, test, visitor, reverse) {
      var step;
      var is;
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      is = convert(test);
      step = reverse ? -1 : 1;
      factory(tree, null, [])();
      function factory(node, index2, parents) {
        var value = typeof node === "object" && node !== null ? node : {};
        var name;
        if (typeof value.type === "string") {
          name =
            typeof value.tagName === "string"
              ? value.tagName
              : typeof value.name === "string"
              ? value.name
              : void 0;
          visit.displayName =
            "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")";
        }
        return visit;
        function visit() {
          var grandparents = parents.concat(node);
          var result = [];
          var subresult;
          var offset;
          if (!test || is(node, index2, parents[parents.length - 1] || null)) {
            result = toResult(visitor(node, parents));
            if (result[0] === EXIT) {
              return result;
            }
          }
          if (node.children && result[0] !== SKIP) {
            offset = (reverse ? node.children.length : -1) + step;
            while (offset > -1 && offset < node.children.length) {
              subresult = factory(
                node.children[offset],
                offset,
                grandparents
              )();
              if (subresult[0] === EXIT) {
                return subresult;
              }
              offset =
                typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
          return result;
        }
      }
    }
    function toResult(value) {
      if (value !== null && typeof value === "object" && "length" in value) {
        return value;
      }
      if (typeof value === "number") {
        return [CONTINUE, value];
      }
      return [value];
    }
  },
});

// node_modules/unist-util-visit/index.js
var require_unist_util_visit = __commonJS({
  "node_modules/unist-util-visit/index.js"(exports, module2) {
    "use strict";
    module2.exports = visit;
    var visitParents = require_unist_util_visit_parents2();
    var CONTINUE = visitParents.CONTINUE;
    var SKIP = visitParents.SKIP;
    var EXIT = visitParents.EXIT;
    visit.CONTINUE = CONTINUE;
    visit.SKIP = SKIP;
    visit.EXIT = EXIT;
    function visit(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents(tree, test, overload, reverse);
      function overload(node, parents) {
        var parent = parents[parents.length - 1];
        var index2 = parent ? parent.children.indexOf(node) : null;
        return visitor(node, index2, parent);
      }
    }
  },
});

// node_modules/react-markdown/lib/plugins/naive-html.js
var require_naive_html = __commonJS({
  "node_modules/react-markdown/lib/plugins/naive-html.js"(exports, module2) {
    "use strict";
    var visit = require_unist_util_visit();
    var type = "virtualHtml";
    var selfClosingRe =
      /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
    var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;
    module2.exports = function (tree) {
      var open;
      var currentParent;
      visit(
        tree,
        "html",
        function (node, index2, parent) {
          if (currentParent !== parent) {
            open = [];
            currentParent = parent;
          }
          var selfClosing = getSelfClosing(node);
          if (selfClosing) {
            parent.children.splice(index2, 1, {
              type,
              tag: selfClosing,
              position: node.position,
            });
            return true;
          }
          var current = getSimpleTag(node, parent);
          if (!current) {
            return true;
          }
          var matching = findAndPull(open, current.tag);
          if (matching) {
            parent.children.splice(
              index2,
              0,
              virtual(current, matching, parent)
            );
          } else if (!current.opening) {
            open.push(current);
          }
          return true;
        },
        true
      );
      return tree;
    };
    function findAndPull(open, matchingTag) {
      var i2 = open.length;
      while (i2--) {
        if (open[i2].tag === matchingTag) {
          return open.splice(i2, 1)[0];
        }
      }
      return false;
    }
    function getSimpleTag(node, parent) {
      var match = node.value.match(simpleTagRe);
      return match
        ? {
            tag: match[2],
            opening: !match[1],
            node,
          }
        : false;
    }
    function getSelfClosing(node) {
      var match = node.value.match(selfClosingRe);
      return match ? match[1] : false;
    }
    function virtual(fromNode, toNode, parent) {
      var fromIndex = parent.children.indexOf(fromNode.node);
      var toIndex = parent.children.indexOf(toNode.node);
      var extracted = parent.children.splice(
        fromIndex,
        toIndex - fromIndex + 1
      );
      var children = extracted.slice(1, -1);
      return {
        type,
        children,
        tag: fromNode.tag,
        position: {
          start: fromNode.node.position.start,
          end: toNode.node.position.end,
          indent: [],
        },
      };
    }
  },
});

// node_modules/react-markdown/lib/plugins/disallow-node.js
var require_disallow_node = __commonJS({
  "node_modules/react-markdown/lib/plugins/disallow-node.js"(exports) {
    "use strict";
    var visit = require_unist_util_visit();
    var splice = [].splice;
    exports.ofType = function (types, mode) {
      return ifNotMatch(allow, mode);
      function allow(node, index2, parent) {
        return !types.includes(node.type);
      }
    };
    exports.ifNotMatch = ifNotMatch;
    function ifNotMatch(allow, mode) {
      return transform;
      function transform(tree) {
        visit(tree, filter);
        return tree;
      }
      function filter(node, index2, parent) {
        if (parent && !allow(node, index2, parent)) {
          var parameters = [index2, 1];
          if (mode === "unwrap" && node.children) {
            parameters = parameters.concat(node.children);
          }
          splice.apply(parent.children, parameters);
          return index2;
        }
      }
    }
  },
});

// node_modules/react-markdown/lib/ast-to-react.js
var require_ast_to_react = __commonJS({
  "node_modules/react-markdown/lib/ast-to-react.js"(exports, module2) {
    "use strict";
    var React31 = require("react");
    var xtend = require_immutable();
    var ReactIs = require_react_is();
    function astToReact(node, options) {
      var parent =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var index2 =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      var renderer = options.renderers[node.type];
      if (!node.position) {
        node.position = {
          start: {
            line: null,
            column: null,
            offset: null,
          },
          end: {
            line: null,
            column: null,
            offset: null,
          },
        };
      }
      var pos = node.position.start;
      var key = [node.type, pos.line, pos.column, index2].join("-");
      if (!ReactIs.isValidElementType(renderer)) {
        throw new Error(
          "Renderer for type `".concat(
            node.type,
            "` not defined or is not renderable"
          )
        );
      }
      var nodeProps = getNodeProps(
        node,
        key,
        options,
        renderer,
        parent,
        index2
      );
      return React31.createElement(
        renderer,
        nodeProps,
        nodeProps.children || resolveChildren() || void 0
      );
      function resolveChildren() {
        return (
          node.children &&
          node.children.map(function (childNode, i2) {
            return astToReact(
              childNode,
              options,
              {
                node,
                props: nodeProps,
              },
              i2
            );
          })
        );
      }
    }
    function getNodeProps(node, key, opts, renderer, parent, index2) {
      var props = {
        key,
      };
      var isSimpleRenderer =
        typeof renderer === "string" || renderer === React31.Fragment;
      if (opts.sourcePos && node.position) {
        props["data-sourcepos"] = flattenPosition(node.position);
      }
      if (opts.rawSourcePos && !isSimpleRenderer) {
        props.sourcePosition = node.position;
      }
      if (
        opts.includeNodeIndex &&
        parent.node &&
        parent.node.children &&
        !isSimpleRenderer
      ) {
        props.index = parent.node.children.indexOf(node);
        props.parentChildCount = parent.node.children.length;
      }
      var ref =
        node.identifier !== null && node.identifier !== void 0
          ? opts.definitions[node.identifier.toUpperCase()] || {}
          : null;
      switch (node.type) {
        case "root":
          assignDefined(props, {
            className: opts.className,
          });
          break;
        case "text":
          props.nodeKey = key;
          props.children = node.value;
          break;
        case "heading":
          props.level = node.depth;
          break;
        case "list":
          props.start = node.start;
          props.ordered = node.ordered;
          props.spread = node.spread;
          props.depth = node.depth;
          break;
        case "listItem":
          props.checked = node.checked;
          props.spread = node.spread;
          props.ordered = node.ordered;
          props.index = node.index;
          props.children = getListItemChildren(node, parent).map(function (
            childNode,
            i2
          ) {
            return astToReact(
              childNode,
              opts,
              {
                node,
                props,
              },
              i2
            );
          });
          break;
        case "definition":
          assignDefined(props, {
            identifier: node.identifier,
            title: node.title,
            url: node.url,
          });
          break;
        case "code":
          assignDefined(props, {
            language: node.lang && node.lang.split(/\s/, 1)[0],
          });
          break;
        case "inlineCode":
          props.children = node.value;
          props.inline = true;
          break;
        case "link":
          assignDefined(props, {
            title: node.title || void 0,
            target:
              typeof opts.linkTarget === "function"
                ? opts.linkTarget(node.url, node.children, node.title)
                : opts.linkTarget,
            href: opts.transformLinkUri
              ? opts.transformLinkUri(node.url, node.children, node.title)
              : node.url,
          });
          break;
        case "image":
          assignDefined(props, {
            src: opts.transformImageUri
              ? opts.transformImageUri(
                  node.url,
                  node.children,
                  node.title,
                  node.alt
                )
              : node.url,
            alt: node.alt || "",
            title: node.title || void 0,
          });
          break;
        case "linkReference":
          assignDefined(
            props,
            xtend(ref, {
              href: opts.transformLinkUri
                ? opts.transformLinkUri(ref.href)
                : ref.href,
            })
          );
          break;
        case "imageReference":
          assignDefined(props, {
            src:
              opts.transformImageUri && ref.href
                ? opts.transformImageUri(
                    ref.href,
                    node.children,
                    ref.title,
                    node.alt
                  )
                : ref.href,
            alt: node.alt || "",
            title: ref.title || void 0,
          });
          break;
        case "table":
        case "tableHead":
        case "tableBody":
          props.columnAlignment = node.align;
          break;
        case "tableRow":
          props.isHeader = parent.node.type === "tableHead";
          props.columnAlignment = parent.props.columnAlignment;
          break;
        case "tableCell":
          assignDefined(props, {
            isHeader: parent.props.isHeader,
            align: parent.props.columnAlignment[index2],
          });
          break;
        case "virtualHtml":
          props.tag = node.tag;
          break;
        case "html":
          props.isBlock = node.position.start.line !== node.position.end.line;
          props.allowDangerousHtml = opts.allowDangerousHtml;
          props.escapeHtml = opts.escapeHtml;
          props.skipHtml = opts.skipHtml;
          break;
        case "parsedHtml": {
          var parsedChildren;
          if (node.children) {
            parsedChildren = node.children.map(function (child, i2) {
              return astToReact(
                child,
                opts,
                {
                  node,
                  props,
                },
                i2
              );
            });
          }
          props.allowDangerousHtml = opts.allowDangerousHtml;
          props.escapeHtml = opts.escapeHtml;
          props.skipHtml = opts.skipHtml;
          props.element = node.element
            ? mergeNodeChildren(node, parsedChildren)
            : null;
          break;
        }
        default:
          assignDefined(
            props,
            xtend(node, {
              type: void 0,
              position: void 0,
              children: void 0,
            })
          );
      }
      if (!isSimpleRenderer && node.value) {
        props.value = node.value;
      }
      if (!isSimpleRenderer) {
        props.node = node;
      }
      return props;
    }
    function assignDefined(target, attrs) {
      for (var key in attrs) {
        if (typeof attrs[key] !== "undefined") {
          target[key] = attrs[key];
        }
      }
    }
    function mergeNodeChildren(node, parsedChildren) {
      var el = node.element;
      if (Array.isArray(el)) {
        var Fragment2 = React31.Fragment || "div";
        return React31.createElement(Fragment2, null, el);
      }
      if (el.props.children || parsedChildren) {
        var children = React31.Children.toArray(el.props.children).concat(
          parsedChildren
        );
        return React31.cloneElement(el, null, children);
      }
      return React31.cloneElement(el, null);
    }
    function flattenPosition(pos) {
      return [
        pos.start.line,
        ":",
        pos.start.column,
        "-",
        pos.end.line,
        ":",
        pos.end.column,
      ]
        .map(String)
        .join("");
    }
    function getListItemChildren(node, parent) {
      var loose =
        parent && parent.node ? listLoose(parent.node) : listItemLoose(node);
      return loose ? node.children : unwrapParagraphs(node);
    }
    function unwrapParagraphs(node) {
      return node.children.reduce(function (array, child) {
        return array.concat(
          child.type === "paragraph" ? child.children : [child]
        );
      }, []);
    }
    function listLoose(node) {
      var children = node.children;
      var loose = node.spread;
      var index2 = -1;
      while (!loose && ++index2 < children.length) {
        loose = listItemLoose(children[index2]);
      }
      return loose;
    }
    function listItemLoose(node) {
      var spread = node.spread;
      return spread === void 0 || spread === null
        ? node.children.length > 1
        : spread;
    }
    module2.exports = astToReact;
  },
});

// node_modules/react-markdown/lib/wrap-table-rows.js
var require_wrap_table_rows = __commonJS({
  "node_modules/react-markdown/lib/wrap-table-rows.js"(exports, module2) {
    "use strict";
    var visit = require_unist_util_visit();
    module2.exports = function (node) {
      visit(node, "table", wrap);
      return node;
    };
    function wrap(table) {
      var children = table.children;
      table.children = [
        {
          type: "tableHead",
          align: table.align,
          children: [children[0]],
          position: children[0].position,
        },
      ];
      if (children.length > 1) {
        table.children.push({
          type: "tableBody",
          align: table.align,
          children: children.slice(1),
          position: {
            start: children[1].position.start,
            end: children[children.length - 1].position.end,
          },
        });
      }
    }
  },
});

// node_modules/react-markdown/lib/get-definitions.js
var require_get_definitions = __commonJS({
  "node_modules/react-markdown/lib/get-definitions.js"(exports, module2) {
    "use strict";
    var visit = require_unist_util_visit();
    module2.exports = function getDefinitions(tree) {
      var definitions =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      visit(tree, "definition", function (node) {
        var identifier = node.identifier.toUpperCase();
        if (identifier in definitions) return;
        definitions[identifier] = {
          href: node.url,
          title: node.title,
        };
      });
      return definitions;
    };
  },
});

// node_modules/react-markdown/lib/uri-transformer.js
var require_uri_transformer = __commonJS({
  "node_modules/react-markdown/lib/uri-transformer.js"(exports, module2) {
    "use strict";
    var protocols = ["http", "https", "mailto", "tel"];
    module2.exports = function uriTransformer(uri) {
      var url = (uri || "").trim();
      var first = url.charAt(0);
      if (first === "#" || first === "/") {
        return url;
      }
      var colon = url.indexOf(":");
      if (colon === -1) {
        return url;
      }
      var length = protocols.length;
      var index2 = -1;
      while (++index2 < length) {
        var protocol = protocols[index2];
        if (
          colon === protocol.length &&
          url.slice(0, protocol.length).toLowerCase() === protocol
        ) {
          return url;
        }
      }
      index2 = url.indexOf("?");
      if (index2 !== -1 && colon > index2) {
        return url;
      }
      index2 = url.indexOf("#");
      if (index2 !== -1 && colon > index2) {
        return url;
      }
      return "javascript:void(0)";
    };
  },
});

// node_modules/react-markdown/lib/renderers.js
var require_renderers = __commonJS({
  "node_modules/react-markdown/lib/renderers.js"(exports, module2) {
    "use strict";
    var xtend = require_immutable();
    var React31 = require("react");
    var supportsStringRender =
      parseInt((React31.version || "16").slice(0, 2), 10) >= 16;
    var createElement17 = React31.createElement;
    module2.exports = {
      break: "br",
      paragraph: "p",
      emphasis: "em",
      strong: "strong",
      thematicBreak: "hr",
      blockquote: "blockquote",
      delete: "del",
      link: "a",
      image: "img",
      linkReference: "a",
      imageReference: "img",
      table: SimpleRenderer.bind(null, "table"),
      tableHead: SimpleRenderer.bind(null, "thead"),
      tableBody: SimpleRenderer.bind(null, "tbody"),
      tableRow: SimpleRenderer.bind(null, "tr"),
      tableCell: TableCell,
      root: Root,
      text: TextRenderer,
      list: List,
      listItem: ListItem,
      definition: NullRenderer,
      heading: Heading,
      inlineCode: InlineCode,
      code: CodeBlock,
      html: Html,
      virtualHtml: VirtualHtml,
      parsedHtml: ParsedHtml,
    };
    function TextRenderer(props) {
      var children = props.children || "";
      return supportsStringRender
        ? children
        : createElement17("span", null, children);
    }
    function Root(props) {
      var className = props.className;
      var root = (!className && React31.Fragment) || "div";
      return createElement17(
        root,
        className
          ? {
              className,
            }
          : null,
        props.children
      );
    }
    function SimpleRenderer(tag, props) {
      return createElement17(tag, getCoreProps(props), props.children);
    }
    function TableCell(props) {
      var style = props.align
        ? {
            textAlign: props.align,
          }
        : void 0;
      var coreProps = getCoreProps(props);
      return createElement17(
        props.isHeader ? "th" : "td",
        style
          ? xtend(
              {
                style,
              },
              coreProps
            )
          : coreProps,
        props.children
      );
    }
    function Heading(props) {
      return createElement17(
        "h".concat(props.level),
        getCoreProps(props),
        props.children
      );
    }
    function List(props) {
      var attrs = getCoreProps(props);
      if (props.start !== null && props.start !== 1 && props.start !== void 0) {
        attrs.start = props.start.toString();
      }
      return createElement17(
        props.ordered ? "ol" : "ul",
        attrs,
        props.children
      );
    }
    function ListItem(props) {
      var checkbox = null;
      if (props.checked !== null && props.checked !== void 0) {
        var checked = props.checked;
        checkbox = createElement17("input", {
          type: "checkbox",
          checked,
          readOnly: true,
        });
      }
      return createElement17(
        "li",
        getCoreProps(props),
        checkbox,
        props.children
      );
    }
    function CodeBlock(props) {
      var className = props.language && "language-".concat(props.language);
      var code2 = createElement17(
        "code",
        className
          ? {
              className,
            }
          : null,
        props.value
      );
      return createElement17("pre", getCoreProps(props), code2);
    }
    function InlineCode(props) {
      return createElement17("code", getCoreProps(props), props.children);
    }
    function Html(props) {
      if (props.skipHtml) {
        return null;
      }
      var dangerous = props.allowDangerousHtml || props.escapeHtml === false;
      var tag = props.isBlock ? "div" : "span";
      if (!dangerous) {
        return createElement17(React31.Fragment || tag, null, props.value);
      }
      var nodeProps = {
        dangerouslySetInnerHTML: {
          __html: props.value,
        },
      };
      return createElement17(tag, nodeProps);
    }
    function ParsedHtml(props) {
      return props["data-sourcepos"]
        ? React31.cloneElement(props.element, {
            "data-sourcepos": props["data-sourcepos"],
          })
        : props.element;
    }
    function VirtualHtml(props) {
      return createElement17(props.tag, getCoreProps(props), props.children);
    }
    function NullRenderer() {
      return null;
    }
    function getCoreProps(props) {
      var source = props["data-sourcepos"];
      return source
        ? {
            "data-sourcepos": source,
          }
        : {};
    }
  },
});

// node_modules/react-markdown/lib/symbols.js
var require_symbols = __commonJS({
  "node_modules/react-markdown/lib/symbols.js"(exports) {
    "use strict";
    var HtmlParser = "__RMD_HTML_PARSER__";
    exports.HtmlParser =
      typeof Symbol === "undefined" ? HtmlParser : Symbol(HtmlParser);
  },
});

// node_modules/react-markdown/lib/react-markdown.js
var require_react_markdown = __commonJS({
  "node_modules/react-markdown/lib/react-markdown.js"(exports, module2) {
    "use strict";
    var xtend = require_immutable();
    var unified = require_unified();
    var parse = require_remark_parse();
    var PropTypes3 = require_prop_types();
    var addListMetadata = require_mdast_add_list_metadata();
    var naiveHtml = require_naive_html();
    var disallowNode = require_disallow_node();
    var astToReact = require_ast_to_react();
    var wrapTableRows = require_wrap_table_rows();
    var getDefinitions = require_get_definitions();
    var uriTransformer = require_uri_transformer();
    var defaultRenderers = require_renderers();
    var symbols = require_symbols();
    var allTypes = Object.keys(defaultRenderers);
    var ReactMarkdown2 = function ReactMarkdown3(props) {
      var src = props.source || props.children || "";
      if (props.allowedTypes && props.disallowedTypes) {
        throw new Error(
          "Only one of `allowedTypes` and `disallowedTypes` should be defined"
        );
      }
      var renderers = xtend(defaultRenderers, props.renderers);
      var processor = unified()
        .use(parse)
        .use(props.plugins || []);
      var tree = processor.runSync(processor.parse(src));
      var renderProps = xtend(props, {
        renderers,
        definitions: getDefinitions(tree),
      });
      determineAstToReactTransforms(props).forEach(function (transform) {
        tree = transform(tree, renderProps);
      });
      return tree;
    };
    function determineAstToReactTransforms(props) {
      var transforms = [wrapTableRows, addListMetadata()];
      var disallowedTypes = props.disallowedTypes;
      if (props.allowedTypes) {
        disallowedTypes = allTypes.filter(function (type) {
          return type !== "root" && props.allowedTypes.indexOf(type) === -1;
        });
      }
      var removalMethod = props.unwrapDisallowed ? "unwrap" : "remove";
      if (disallowedTypes && disallowedTypes.length > 0) {
        transforms.push(disallowNode.ofType(disallowedTypes, removalMethod));
      }
      if (props.allowNode) {
        transforms.push(
          disallowNode.ifNotMatch(props.allowNode, removalMethod)
        );
      }
      var renderHtml =
        (props.allowDangerousHtml || props.escapeHtml === false) &&
        !props.skipHtml;
      var hasHtmlParser = (props.astPlugins || []).some(function (transform) {
        return transform.identity === symbols.HtmlParser;
      });
      if (renderHtml && !hasHtmlParser) {
        transforms.push(naiveHtml);
      }
      if (props.astPlugins) {
        transforms = transforms.concat(props.astPlugins);
      }
      transforms.push(astToReact);
      return transforms;
    }
    ReactMarkdown2.defaultProps = {
      transformLinkUri: uriTransformer,
    };
    ReactMarkdown2.propTypes = {
      className: PropTypes3.string,
      source: PropTypes3.string,
      children: PropTypes3.string,
      sourcePos: PropTypes3.bool,
      rawSourcePos: PropTypes3.bool,
      escapeHtml: PropTypes3.bool,
      allowDangerousHtml: PropTypes3.bool,
      skipHtml: PropTypes3.bool,
      allowNode: PropTypes3.func,
      allowedTypes: PropTypes3.arrayOf(PropTypes3.oneOf(allTypes)),
      disallowedTypes: PropTypes3.arrayOf(PropTypes3.oneOf(allTypes)),
      transformLinkUri: PropTypes3.oneOfType([
        PropTypes3.func,
        PropTypes3.bool,
      ]),
      linkTarget: PropTypes3.oneOfType([PropTypes3.func, PropTypes3.string]),
      transformImageUri: PropTypes3.func,
      astPlugins: PropTypes3.arrayOf(PropTypes3.func),
      unwrapDisallowed: PropTypes3.bool,
      renderers: PropTypes3.object,
      plugins: PropTypes3.array,
    };
    ReactMarkdown2.types = allTypes;
    ReactMarkdown2.renderers = defaultRenderers;
    ReactMarkdown2.uriTransformer = uriTransformer;
    module2.exports = ReactMarkdown2;
  },
});

// node_modules/micromark-extension-gfm-autolink-literal/syntax.js
var require_syntax = __commonJS({
  "node_modules/micromark-extension-gfm-autolink-literal/syntax.js"(exports) {
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiControl = require_ascii_control();
    var markdownLineEnding = require_markdown_line_ending();
    var unicodePunctuation = require_unicode_punctuation();
    var unicodeWhitespace = require_unicode_whitespace();
    var www = { tokenize: tokenizeWww, partial: true };
    var domain = { tokenize: tokenizeDomain, partial: true };
    var path = { tokenize: tokenizePath, partial: true };
    var punctuation = { tokenize: tokenizePunctuation, partial: true };
    var namedCharacterReference = {
      tokenize: tokenizeNamedCharacterReference,
      partial: true,
    };
    var wwwAutolink = { tokenize: tokenizeWwwAutolink, previous: previousWww };
    var httpAutolink = {
      tokenize: tokenizeHttpAutolink,
      previous: previousHttp,
    };
    var emailAutolink = {
      tokenize: tokenizeEmailAutolink,
      previous: previousEmail,
    };
    var text = {};
    exports.text = text;
    var code2 = 48;
    while (code2 < 123) {
      text[code2] = emailAutolink;
      code2++;
      if (code2 === 58) code2 = 65;
      else if (code2 === 91) code2 = 97;
    }
    text[43] = emailAutolink;
    text[45] = emailAutolink;
    text[46] = emailAutolink;
    text[95] = emailAutolink;
    text[72] = [emailAutolink, httpAutolink];
    text[104] = [emailAutolink, httpAutolink];
    text[87] = [emailAutolink, wwwAutolink];
    text[119] = [emailAutolink, wwwAutolink];
    function tokenizeEmailAutolink(effects, ok, nok) {
      var self2 = this;
      var hasDot;
      return start;
      function start(code3) {
        if (
          !gfmAtext(code3) ||
          !previousEmail(self2.previous) ||
          previous(self2.events)
        ) {
          return nok(code3);
        }
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkEmail");
        return atext(code3);
      }
      function atext(code3) {
        if (gfmAtext(code3)) {
          effects.consume(code3);
          return atext;
        }
        if (code3 === 64) {
          effects.consume(code3);
          return label;
        }
        return nok(code3);
      }
      function label(code3) {
        if (code3 === 46) {
          return effects.check(punctuation, done, dotContinuation)(code3);
        }
        if (code3 === 45 || code3 === 95) {
          return effects.check(
            punctuation,
            nok,
            dashOrUnderscoreContinuation
          )(code3);
        }
        if (asciiAlphanumeric(code3)) {
          effects.consume(code3);
          return label;
        }
        return done(code3);
      }
      function dotContinuation(code3) {
        effects.consume(code3);
        hasDot = true;
        return label;
      }
      function dashOrUnderscoreContinuation(code3) {
        effects.consume(code3);
        return afterDashOrUnderscore;
      }
      function afterDashOrUnderscore(code3) {
        if (code3 === 46) {
          return effects.check(punctuation, nok, dotContinuation)(code3);
        }
        return label(code3);
      }
      function done(code3) {
        if (hasDot) {
          effects.exit("literalAutolinkEmail");
          effects.exit("literalAutolink");
          return ok(code3);
        }
        return nok(code3);
      }
    }
    function tokenizeWwwAutolink(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code3) {
        if (
          (code3 !== 87 && code3 - 32 !== 87) ||
          !previousWww(self2.previous) ||
          previous(self2.events)
        ) {
          return nok(code3);
        }
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkWww");
        return effects.check(
          www,
          effects.attempt(domain, effects.attempt(path, done), nok),
          nok
        )(code3);
      }
      function done(code3) {
        effects.exit("literalAutolinkWww");
        effects.exit("literalAutolink");
        return ok(code3);
      }
    }
    function tokenizeHttpAutolink(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code3) {
        if (
          (code3 !== 72 && code3 - 32 !== 72) ||
          !previousHttp(self2.previous) ||
          previous(self2.events)
        ) {
          return nok(code3);
        }
        effects.enter("literalAutolink");
        effects.enter("literalAutolinkHttp");
        effects.consume(code3);
        return t1;
      }
      function t1(code3) {
        if (code3 === 84 || code3 - 32 === 84) {
          effects.consume(code3);
          return t2;
        }
        return nok(code3);
      }
      function t2(code3) {
        if (code3 === 84 || code3 - 32 === 84) {
          effects.consume(code3);
          return p;
        }
        return nok(code3);
      }
      function p(code3) {
        if (code3 === 80 || code3 - 32 === 80) {
          effects.consume(code3);
          return s2;
        }
        return nok(code3);
      }
      function s2(code3) {
        if (code3 === 83 || code3 - 32 === 83) {
          effects.consume(code3);
          return colon;
        }
        return colon(code3);
      }
      function colon(code3) {
        if (code3 === 58) {
          effects.consume(code3);
          return slash1;
        }
        return nok(code3);
      }
      function slash1(code3) {
        if (code3 === 47) {
          effects.consume(code3);
          return slash2;
        }
        return nok(code3);
      }
      function slash2(code3) {
        if (code3 === 47) {
          effects.consume(code3);
          return after;
        }
        return nok(code3);
      }
      function after(code3) {
        return asciiControl(code3) ||
          unicodeWhitespace(code3) ||
          unicodePunctuation(code3)
          ? nok(code3)
          : effects.attempt(domain, effects.attempt(path, done), nok)(code3);
      }
      function done(code3) {
        effects.exit("literalAutolinkHttp");
        effects.exit("literalAutolink");
        return ok(code3);
      }
    }
    function tokenizeWww(effects, ok, nok) {
      return start;
      function start(code3) {
        effects.consume(code3);
        return w2;
      }
      function w2(code3) {
        if (code3 === 87 || code3 - 32 === 87) {
          effects.consume(code3);
          return w3;
        }
        return nok(code3);
      }
      function w3(code3) {
        if (code3 === 87 || code3 - 32 === 87) {
          effects.consume(code3);
          return dot;
        }
        return nok(code3);
      }
      function dot(code3) {
        if (code3 === 46) {
          effects.consume(code3);
          return after;
        }
        return nok(code3);
      }
      function after(code3) {
        return code3 === null || markdownLineEnding(code3)
          ? nok(code3)
          : ok(code3);
      }
    }
    function tokenizeDomain(effects, ok, nok) {
      var hasUnderscoreInLastSegment;
      var hasUnderscoreInLastLastSegment;
      return domain2;
      function domain2(code3) {
        if (code3 === 38) {
          return effects.check(
            namedCharacterReference,
            done,
            punctuationContinuation
          )(code3);
        }
        if (code3 === 46 || code3 === 95) {
          return effects.check(
            punctuation,
            done,
            punctuationContinuation
          )(code3);
        }
        if (
          asciiControl(code3) ||
          unicodeWhitespace(code3) ||
          (code3 !== 45 && unicodePunctuation(code3))
        ) {
          return done(code3);
        }
        effects.consume(code3);
        return domain2;
      }
      function punctuationContinuation(code3) {
        if (code3 === 46) {
          hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
          hasUnderscoreInLastSegment = void 0;
          effects.consume(code3);
          return domain2;
        }
        if (code3 === 95) hasUnderscoreInLastSegment = true;
        effects.consume(code3);
        return domain2;
      }
      function done(code3) {
        if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
          return ok(code3);
        }
        return nok(code3);
      }
    }
    function tokenizePath(effects, ok) {
      var balance = 0;
      return inPath;
      function inPath(code3) {
        if (code3 === 38) {
          return effects.check(
            namedCharacterReference,
            ok,
            continuedPunctuation
          )(code3);
        }
        if (code3 === 40) {
          balance++;
        }
        if (code3 === 41) {
          return effects.check(
            punctuation,
            parenAtPathEnd,
            continuedPunctuation
          )(code3);
        }
        if (pathEnd(code3)) {
          return ok(code3);
        }
        if (trailingPunctuation(code3)) {
          return effects.check(punctuation, ok, continuedPunctuation)(code3);
        }
        effects.consume(code3);
        return inPath;
      }
      function continuedPunctuation(code3) {
        effects.consume(code3);
        return inPath;
      }
      function parenAtPathEnd(code3) {
        balance--;
        return balance < 0 ? ok(code3) : continuedPunctuation(code3);
      }
    }
    function tokenizeNamedCharacterReference(effects, ok, nok) {
      return start;
      function start(code3) {
        effects.consume(code3);
        return inside;
      }
      function inside(code3) {
        if (asciiAlpha(code3)) {
          effects.consume(code3);
          return inside;
        }
        if (code3 === 59) {
          effects.consume(code3);
          return after;
        }
        return nok(code3);
      }
      function after(code3) {
        return pathEnd(code3) ? ok(code3) : nok(code3);
      }
    }
    function tokenizePunctuation(effects, ok, nok) {
      return start;
      function start(code3) {
        effects.consume(code3);
        return after;
      }
      function after(code3) {
        if (trailingPunctuation(code3)) {
          effects.consume(code3);
          return after;
        }
        return pathEnd(code3) ? ok(code3) : nok(code3);
      }
    }
    function trailingPunctuation(code3) {
      return (
        code3 === 33 ||
        code3 === 34 ||
        code3 === 39 ||
        code3 === 41 ||
        code3 === 42 ||
        code3 === 44 ||
        code3 === 46 ||
        code3 === 58 ||
        code3 === 59 ||
        code3 === 60 ||
        code3 === 63 ||
        code3 === 95 ||
        code3 === 126
      );
    }
    function pathEnd(code3) {
      return code3 === null || code3 < 0 || code3 === 32 || code3 === 60;
    }
    function gfmAtext(code3) {
      return (
        code3 === 43 ||
        code3 === 45 ||
        code3 === 46 ||
        code3 === 95 ||
        asciiAlphanumeric(code3)
      );
    }
    function previousWww(code3) {
      return (
        code3 === null ||
        code3 < 0 ||
        code3 === 32 ||
        code3 === 40 ||
        code3 === 42 ||
        code3 === 95 ||
        code3 === 126
      );
    }
    function previousHttp(code3) {
      return code3 === null || !asciiAlpha(code3);
    }
    function previousEmail(code3) {
      return code3 !== 47 && previousHttp(code3);
    }
    function previous(events) {
      var index2 = events.length;
      while (index2--) {
        if (
          (events[index2][1].type === "labelLink" ||
            events[index2][1].type === "labelImage") &&
          !events[index2][1]._balanced
        ) {
          return true;
        }
      }
    }
  },
});

// node_modules/micromark-extension-gfm-autolink-literal/index.js
var require_micromark_extension_gfm_autolink_literal = __commonJS({
  "node_modules/micromark-extension-gfm-autolink-literal/index.js"(
    exports,
    module2
  ) {
    module2.exports = require_syntax();
  },
});

// node_modules/micromark-extension-gfm-strikethrough/index.js
var require_micromark_extension_gfm_strikethrough = __commonJS({
  "node_modules/micromark-extension-gfm-strikethrough/index.js"(
    exports,
    module2
  ) {
    module2.exports = create;
    var classifyCharacter = require_classify_character();
    var chunkedSplice = require_chunked_splice();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    function create(options) {
      var settings = options || {};
      var single = settings.singleTilde;
      var tokenizer = {
        tokenize: tokenizeStrikethrough,
        resolveAll: resolveAllStrikethrough,
      };
      if (single === null || single === void 0) {
        single = true;
      }
      return { text: { 126: tokenizer }, insideSpan: { null: tokenizer } };
      function resolveAllStrikethrough(events, context) {
        var index2 = -1;
        var strikethrough2;
        var text;
        var open;
        var nextEvents;
        while (++index2 < events.length) {
          if (
            events[index2][0] === "enter" &&
            events[index2][1].type === "strikethroughSequenceTemporary" &&
            events[index2][1]._close
          ) {
            open = index2;
            while (open--) {
              if (
                events[open][0] === "exit" &&
                events[open][1].type === "strikethroughSequenceTemporary" &&
                events[open][1]._open &&
                events[index2][1].end.offset -
                  events[index2][1].start.offset ===
                  events[open][1].end.offset - events[open][1].start.offset
              ) {
                events[index2][1].type = "strikethroughSequence";
                events[open][1].type = "strikethroughSequence";
                strikethrough2 = {
                  type: "strikethrough",
                  start: shallow(events[open][1].start),
                  end: shallow(events[index2][1].end),
                };
                text = {
                  type: "strikethroughText",
                  start: shallow(events[open][1].end),
                  end: shallow(events[index2][1].start),
                };
                nextEvents = [
                  ["enter", strikethrough2, context],
                  ["enter", events[open][1], context],
                  ["exit", events[open][1], context],
                  ["enter", text, context],
                ];
                chunkedSplice(
                  nextEvents,
                  nextEvents.length,
                  0,
                  resolveAll(
                    context.parser.constructs.insideSpan.null,
                    events.slice(open + 1, index2),
                    context
                  )
                );
                chunkedSplice(nextEvents, nextEvents.length, 0, [
                  ["exit", text, context],
                  ["enter", events[index2][1], context],
                  ["exit", events[index2][1], context],
                  ["exit", strikethrough2, context],
                ]);
                chunkedSplice(events, open - 1, index2 - open + 3, nextEvents);
                index2 = open + nextEvents.length - 2;
                break;
              }
            }
          }
        }
        return removeRemainingSequences(events);
      }
      function removeRemainingSequences(events) {
        var index2 = -1;
        var length = events.length;
        while (++index2 < length) {
          if (events[index2][1].type === "strikethroughSequenceTemporary") {
            events[index2][1].type = "data";
          }
        }
        return events;
      }
      function tokenizeStrikethrough(effects, ok, nok) {
        var previous = this.previous;
        var events = this.events;
        var size = 0;
        return start;
        function start(code2) {
          if (
            code2 !== 126 ||
            (previous === 126 &&
              events[events.length - 1][1].type !== "characterEscape")
          ) {
            return nok(code2);
          }
          effects.enter("strikethroughSequenceTemporary");
          return more(code2);
        }
        function more(code2) {
          var before = classifyCharacter(previous);
          var token;
          var after;
          if (code2 === 126) {
            if (size > 1) return nok(code2);
            effects.consume(code2);
            size++;
            return more;
          }
          if (size < 2 && !single) return nok(code2);
          token = effects.exit("strikethroughSequenceTemporary");
          after = classifyCharacter(code2);
          token._open = !after || (after === 2 && before);
          token._close = !before || (before === 2 && after);
          return ok(code2);
        }
      }
    }
  },
});

// node_modules/micromark-extension-gfm-table/syntax.js
var require_syntax2 = __commonJS({
  "node_modules/micromark-extension-gfm-table/syntax.js"(exports) {
    exports.flow = {
      null: {
        tokenize: tokenizeTable,
        resolve: resolveTable,
        interruptible: true,
      },
    };
    var createSpace = require_factory_space();
    var setextUnderlineMini = {
      tokenize: tokenizeSetextUnderlineMini,
      partial: true,
    };
    var nextPrefixedOrBlank = {
      tokenize: tokenizeNextPrefixedOrBlank,
      partial: true,
    };
    function resolveTable(events, context) {
      var length = events.length;
      var index2 = -1;
      var token;
      var inHead;
      var inDelimiterRow;
      var inRow;
      var cell;
      var content;
      var text;
      var contentStart;
      var contentEnd;
      var cellStart;
      while (++index2 < length) {
        token = events[index2][1];
        if (inRow) {
          if (token.type === "temporaryTableCellContent") {
            contentStart = contentStart || index2;
            contentEnd = index2;
          }
          if (
            (token.type === "tableCellDivider" || token.type === "tableRow") &&
            contentEnd
          ) {
            content = {
              type: "tableContent",
              start: events[contentStart][1].start,
              end: events[contentEnd][1].end,
            };
            text = {
              type: "chunkText",
              start: content.start,
              end: content.end,
              contentType: "text",
            };
            events.splice(
              contentStart,
              contentEnd - contentStart + 1,
              ["enter", content, context],
              ["enter", text, context],
              ["exit", text, context],
              ["exit", content, context]
            );
            index2 -= contentEnd - contentStart - 3;
            length = events.length;
            contentStart = void 0;
            contentEnd = void 0;
          }
        }
        if (
          events[index2][0] === "exit" &&
          cellStart &&
          cellStart + 1 < index2 &&
          (token.type === "tableCellDivider" ||
            (token.type === "tableRow" &&
              (cellStart + 3 < index2 ||
                events[cellStart][1].type !== "whitespace")))
        ) {
          cell = {
            type: inDelimiterRow
              ? "tableDelimiter"
              : inHead
              ? "tableHeader"
              : "tableData",
            start: events[cellStart][1].start,
            end: events[index2][1].end,
          };
          events.splice(
            index2 + (token.type === "tableCellDivider" ? 1 : 0),
            0,
            ["exit", cell, context]
          );
          events.splice(cellStart, 0, ["enter", cell, context]);
          index2 += 2;
          length = events.length;
          cellStart = index2 + 1;
        }
        if (token.type === "tableRow") {
          inRow = events[index2][0] === "enter";
          if (inRow) {
            cellStart = index2 + 1;
          }
        }
        if (token.type === "tableDelimiterRow") {
          inDelimiterRow = events[index2][0] === "enter";
          if (inDelimiterRow) {
            cellStart = index2 + 1;
          }
        }
        if (token.type === "tableHead") {
          inHead = events[index2][0] === "enter";
        }
      }
      return events;
    }
    function tokenizeTable(effects, ok, nok) {
      var align = [];
      var tableHeaderCount = 0;
      var seenDelimiter;
      var hasDash;
      return start;
      function start(code2) {
        if (code2 === null || code2 === -5 || code2 === -4 || code2 === -3) {
          return nok(code2);
        }
        effects.enter("table")._align = align;
        effects.enter("tableHead");
        effects.enter("tableRow");
        if (code2 === 124) {
          return cellDividerHead(code2);
        }
        tableHeaderCount++;
        effects.enter("temporaryTableCellContent");
        return inCellContentHead(code2);
      }
      function cellDividerHead(code2) {
        effects.enter("tableCellDivider");
        effects.consume(code2);
        effects.exit("tableCellDivider");
        seenDelimiter = true;
        return cellBreakHead;
      }
      function cellBreakHead(code2) {
        if (code2 === null || code2 === -5 || code2 === -4 || code2 === -3) {
          return atRowEndHead(code2);
        }
        if (code2 === -2 || code2 === -1 || code2 === 32) {
          effects.enter("whitespace");
          effects.consume(code2);
          return inWhitespaceHead;
        }
        if (seenDelimiter) {
          seenDelimiter = void 0;
          tableHeaderCount++;
        }
        if (code2 === 124) {
          return cellDividerHead(code2);
        }
        effects.enter("temporaryTableCellContent");
        return inCellContentHead(code2);
      }
      function inWhitespaceHead(code2) {
        if (code2 === -2 || code2 === -1 || code2 === 32) {
          effects.consume(code2);
          return inWhitespaceHead;
        }
        effects.exit("whitespace");
        return cellBreakHead(code2);
      }
      function inCellContentHead(code2) {
        if (code2 === null || code2 < 0 || code2 === 32 || code2 === 124) {
          effects.exit("temporaryTableCellContent");
          return cellBreakHead(code2);
        }
        effects.consume(code2);
        return code2 === 92 ? inCellContentEscapeHead : inCellContentHead;
      }
      function inCellContentEscapeHead(code2) {
        if (code2 === 92 || code2 === 124) {
          effects.consume(code2);
          return inCellContentHead;
        }
        return inCellContentHead(code2);
      }
      function atRowEndHead(code2) {
        if (code2 === null) {
          return nok(code2);
        }
        effects.exit("tableRow");
        effects.exit("tableHead");
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return effects.check(
          setextUnderlineMini,
          nok,
          createSpace(effects, rowStartDelimiter, "linePrefix", 4)
        );
      }
      function rowStartDelimiter(code2) {
        if (code2 === null || code2 < 0 || code2 === 32) {
          return nok(code2);
        }
        effects.enter("tableDelimiterRow");
        return atDelimiterRowBreak(code2);
      }
      function atDelimiterRowBreak(code2) {
        if (code2 === null || code2 === -5 || code2 === -4 || code2 === -3) {
          return rowEndDelimiter(code2);
        }
        if (code2 === -2 || code2 === -1 || code2 === 32) {
          effects.enter("whitespace");
          effects.consume(code2);
          return inWhitespaceDelimiter;
        }
        if (code2 === 45) {
          effects.enter("tableDelimiterFiller");
          effects.consume(code2);
          hasDash = true;
          align.push(null);
          return inFillerDelimiter;
        }
        if (code2 === 58) {
          effects.enter("tableDelimiterAlignment");
          effects.consume(code2);
          effects.exit("tableDelimiterAlignment");
          align.push("left");
          return afterLeftAlignment;
        }
        if (code2 === 124) {
          effects.enter("tableCellDivider");
          effects.consume(code2);
          effects.exit("tableCellDivider");
          return atDelimiterRowBreak;
        }
        return nok(code2);
      }
      function inWhitespaceDelimiter(code2) {
        if (code2 === -2 || code2 === -1 || code2 === 32) {
          effects.consume(code2);
          return inWhitespaceDelimiter;
        }
        effects.exit("whitespace");
        return atDelimiterRowBreak(code2);
      }
      function inFillerDelimiter(code2) {
        if (code2 === 45) {
          effects.consume(code2);
          return inFillerDelimiter;
        }
        effects.exit("tableDelimiterFiller");
        if (code2 === 58) {
          effects.enter("tableDelimiterAlignment");
          effects.consume(code2);
          effects.exit("tableDelimiterAlignment");
          align[align.length - 1] =
            align[align.length - 1] === "left" ? "center" : "right";
          return afterRightAlignment;
        }
        return atDelimiterRowBreak(code2);
      }
      function afterLeftAlignment(code2) {
        if (code2 === 45) {
          effects.enter("tableDelimiterFiller");
          effects.consume(code2);
          hasDash = true;
          return inFillerDelimiter;
        }
        return nok(code2);
      }
      function afterRightAlignment(code2) {
        if (code2 === null || code2 === -5 || code2 === -4 || code2 === -3) {
          return rowEndDelimiter(code2);
        }
        if (code2 === -2 || code2 === -1 || code2 === 32) {
          effects.enter("whitespace");
          effects.consume(code2);
          return inWhitespaceDelimiter;
        }
        if (code2 === 124) {
          effects.enter("tableCellDivider");
          effects.consume(code2);
          effects.exit("tableCellDivider");
          return atDelimiterRowBreak;
        }
        return nok(code2);
      }
      function rowEndDelimiter(code2) {
        effects.exit("tableDelimiterRow");
        if (!hasDash || tableHeaderCount !== align.length) {
          return nok(code2);
        }
        if (code2 === null) {
          return tableClose(code2);
        }
        return effects.check(
          nextPrefixedOrBlank,
          tableClose,
          tableContinue
        )(code2);
      }
      function tableClose(code2) {
        effects.exit("table");
        return ok(code2);
      }
      function tableContinue(code2) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return createSpace(effects, bodyStart, "linePrefix", 4);
      }
      function bodyStart(code2) {
        effects.enter("tableBody");
        return rowStartBody(code2);
      }
      function rowStartBody(code2) {
        effects.enter("tableRow");
        if (code2 === 124) {
          return cellDividerBody(code2);
        }
        effects.enter("temporaryTableCellContent");
        return inCellContentBody(code2);
      }
      function cellDividerBody(code2) {
        effects.enter("tableCellDivider");
        effects.consume(code2);
        effects.exit("tableCellDivider");
        return cellBreakBody;
      }
      function cellBreakBody(code2) {
        if (code2 === null || code2 === -5 || code2 === -4 || code2 === -3) {
          return atRowEndBody(code2);
        }
        if (code2 === -2 || code2 === -1 || code2 === 32) {
          effects.enter("whitespace");
          effects.consume(code2);
          return inWhitespaceBody;
        }
        if (code2 === 124) {
          return cellDividerBody(code2);
        }
        effects.enter("temporaryTableCellContent");
        return inCellContentBody(code2);
      }
      function inWhitespaceBody(code2) {
        if (code2 === -2 || code2 === -1 || code2 === 32) {
          effects.consume(code2);
          return inWhitespaceBody;
        }
        effects.exit("whitespace");
        return cellBreakBody(code2);
      }
      function inCellContentBody(code2) {
        if (code2 === null || code2 < 0 || code2 === 32 || code2 === 124) {
          effects.exit("temporaryTableCellContent");
          return cellBreakBody(code2);
        }
        effects.consume(code2);
        return code2 === 92 ? inCellContentEscapeBody : inCellContentBody;
      }
      function inCellContentEscapeBody(code2) {
        if (code2 === 92 || code2 === 124) {
          effects.consume(code2);
          return inCellContentBody;
        }
        return inCellContentBody(code2);
      }
      function atRowEndBody(code2) {
        effects.exit("tableRow");
        if (code2 === null) {
          return tableBodyClose(code2);
        }
        return effects.check(
          nextPrefixedOrBlank,
          tableBodyClose,
          tableBodyContinue
        )(code2);
      }
      function tableBodyClose(code2) {
        effects.exit("tableBody");
        return tableClose(code2);
      }
      function tableBodyContinue(code2) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return createSpace(effects, rowStartBody, "linePrefix", 4);
      }
    }
    function tokenizeSetextUnderlineMini(effects, ok, nok) {
      return start;
      function start(code2) {
        if (code2 !== 45) {
          return nok(code2);
        }
        effects.enter("setextUnderline");
        return sequence(code2);
      }
      function sequence(code2) {
        if (code2 === 45) {
          effects.consume(code2);
          return sequence;
        }
        return whitespace(code2);
      }
      function whitespace(code2) {
        if (code2 === -2 || code2 === -1 || code2 === 32) {
          effects.consume(code2);
          return whitespace;
        }
        if (code2 === null || code2 === -5 || code2 === -4 || code2 === -3) {
          return ok(code2);
        }
        return nok(code2);
      }
    }
    function tokenizeNextPrefixedOrBlank(effects, ok, nok) {
      var size = 0;
      return start;
      function start(code2) {
        effects.enter("check");
        effects.consume(code2);
        return whitespace;
      }
      function whitespace(code2) {
        if (code2 === -1 || code2 === 32) {
          effects.consume(code2);
          size++;
          return size === 4 ? ok : whitespace;
        }
        if (code2 === null || code2 < 0) {
          return ok(code2);
        }
        return nok(code2);
      }
    }
  },
});

// node_modules/micromark-extension-gfm-table/index.js
var require_micromark_extension_gfm_table = __commonJS({
  "node_modules/micromark-extension-gfm-table/index.js"(exports, module2) {
    module2.exports = require_syntax2();
  },
});

// node_modules/micromark-extension-gfm-task-list-item/syntax.js
var require_syntax3 = __commonJS({
  "node_modules/micromark-extension-gfm-task-list-item/syntax.js"(exports) {
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var spaceFactory = require_factory_space();
    var prefixSize = require_prefix_size();
    var tasklistCheck = { tokenize: tokenizeTasklistCheck };
    exports.text = { 91: tasklistCheck };
    function tokenizeTasklistCheck(effects, ok, nok) {
      var self2 = this;
      return open;
      function open(code2) {
        if (
          code2 !== 91 ||
          self2.previous !== null ||
          !self2._gfmTasklistFirstContentOfListItem
        ) {
          return nok(code2);
        }
        effects.enter("taskListCheck");
        effects.enter("taskListCheckMarker");
        effects.consume(code2);
        effects.exit("taskListCheckMarker");
        return inside;
      }
      function inside(code2) {
        if (code2 === -2 || code2 === 32) {
          effects.enter("taskListCheckValueUnchecked");
          effects.consume(code2);
          effects.exit("taskListCheckValueUnchecked");
          return close;
        }
        if (code2 === 88 || code2 === 120) {
          effects.enter("taskListCheckValueChecked");
          effects.consume(code2);
          effects.exit("taskListCheckValueChecked");
          return close;
        }
        return nok(code2);
      }
      function close(code2) {
        if (code2 === 93) {
          effects.enter("taskListCheckMarker");
          effects.consume(code2);
          effects.exit("taskListCheckMarker");
          effects.exit("taskListCheck");
          return effects.check({ tokenize: spaceThenNonSpace }, ok, nok);
        }
        return nok(code2);
      }
    }
    function spaceThenNonSpace(effects, ok, nok) {
      var self2 = this;
      return spaceFactory(effects, after, "whitespace");
      function after(code2) {
        return prefixSize(self2.events, "whitespace") &&
          code2 !== null &&
          !markdownLineEndingOrSpace(code2)
          ? ok(code2)
          : nok(code2);
      }
    }
  },
});

// node_modules/micromark-extension-gfm-task-list-item/index.js
var require_micromark_extension_gfm_task_list_item = __commonJS({
  "node_modules/micromark-extension-gfm-task-list-item/index.js"(
    exports,
    module2
  ) {
    module2.exports = require_syntax3();
  },
});

// node_modules/micromark-extension-gfm/syntax.js
var require_syntax4 = __commonJS({
  "node_modules/micromark-extension-gfm/syntax.js"(exports, module2) {
    var combine = require_combine_extensions();
    var autolink = require_micromark_extension_gfm_autolink_literal();
    var strikethrough2 = require_micromark_extension_gfm_strikethrough();
    var table = require_micromark_extension_gfm_table();
    var tasklist = require_micromark_extension_gfm_task_list_item();
    module2.exports = create;
    function create(options) {
      return combine([autolink, strikethrough2(options), table, tasklist]);
    }
  },
});

// node_modules/micromark-extension-gfm/index.js
var require_micromark_extension_gfm = __commonJS({
  "node_modules/micromark-extension-gfm/index.js"(exports, module2) {
    module2.exports = require_syntax4();
  },
});

// node_modules/ccount/index.js
var require_ccount = __commonJS({
  "node_modules/ccount/index.js"(exports, module2) {
    "use strict";
    module2.exports = ccount;
    function ccount(source, character) {
      var value = String(source);
      var count = 0;
      var index2;
      if (typeof character !== "string") {
        throw new Error("Expected character");
      }
      index2 = value.indexOf(character);
      while (index2 !== -1) {
        count++;
        index2 = value.indexOf(character, index2 + character.length);
      }
      return count;
    }
  },
});

// node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js"(
    exports,
    module2
  ) {
    "use strict";
    module2.exports = (string) => {
      if (typeof string !== "string") {
        throw new TypeError("Expected a string");
      }
      return string
        .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
        .replace(/-/g, "\\x2d");
    };
  },
});

// node_modules/mdast-util-find-and-replace/index.js
var require_mdast_util_find_and_replace = __commonJS({
  "node_modules/mdast-util-find-and-replace/index.js"(exports, module2) {
    "use strict";
    module2.exports = findAndReplace;
    var visit = require_unist_util_visit_parents2();
    var convert = require_convert();
    var escape = require_escape_string_regexp();
    var splice = [].splice;
    function findAndReplace(tree, find, replace, options) {
      var settings;
      var schema;
      if (
        typeof find === "string" ||
        (find && typeof find.exec === "function")
      ) {
        schema = [[find, replace]];
      } else {
        schema = find;
        options = replace;
      }
      settings = options || {};
      search(tree, settings, handlerFactory(toPairs(schema)));
      return tree;
      function handlerFactory(pairs) {
        var pair = pairs[0];
        return handler;
        function handler(node, parent) {
          var find2 = pair[0];
          var replace2 = pair[1];
          var nodes = [];
          var start = 0;
          var index2 = parent.children.indexOf(node);
          var position;
          var match;
          var subhandler;
          var value;
          find2.lastIndex = 0;
          match = find2.exec(node.value);
          while (match) {
            position = match.index;
            value = replace2.apply(
              null,
              [].concat(match, { index: match.index, input: match.input })
            );
            if (value !== false) {
              if (start !== position) {
                nodes.push({
                  type: "text",
                  value: node.value.slice(start, position),
                });
              }
              if (typeof value === "string" && value.length > 0) {
                value = { type: "text", value };
              }
              if (value) {
                nodes = [].concat(nodes, value);
              }
              start = position + match[0].length;
            }
            if (!find2.global) {
              break;
            }
            match = find2.exec(node.value);
          }
          if (position === void 0) {
            nodes = [node];
            index2--;
          } else {
            if (start < node.value.length) {
              nodes.push({ type: "text", value: node.value.slice(start) });
            }
            nodes.unshift(index2, 1);
            splice.apply(parent.children, nodes);
          }
          if (pairs.length > 1) {
            subhandler = handlerFactory(pairs.slice(1));
            position = -1;
            while (++position < nodes.length) {
              node = nodes[position];
              if (node.type === "text") {
                subhandler(node, parent);
              } else {
                search(node, settings, subhandler);
              }
            }
          }
          return index2 + nodes.length + 1;
        }
      }
    }
    function search(tree, settings, handler) {
      var ignored = convert(settings.ignore || []);
      var result = [];
      visit(tree, "text", visitor);
      return result;
      function visitor(node, parents) {
        var index2 = -1;
        var parent;
        var grandparent;
        while (++index2 < parents.length) {
          parent = parents[index2];
          if (
            ignored(
              parent,
              grandparent ? grandparent.children.indexOf(parent) : void 0,
              grandparent
            )
          ) {
            return;
          }
          grandparent = parent;
        }
        return handler(node, grandparent);
      }
    }
    function toPairs(schema) {
      var result = [];
      var key;
      var index2;
      if (typeof schema !== "object") {
        throw new Error("Expected array or object as schema");
      }
      if ("length" in schema) {
        index2 = -1;
        while (++index2 < schema.length) {
          result.push([
            toExpression(schema[index2][0]),
            toFunction(schema[index2][1]),
          ]);
        }
      } else {
        for (key in schema) {
          result.push([toExpression(key), toFunction(schema[key])]);
        }
      }
      return result;
    }
    function toExpression(find) {
      return typeof find === "string" ? new RegExp(escape(find), "g") : find;
    }
    function toFunction(replace) {
      return typeof replace === "function" ? replace : returner;
      function returner() {
        return replace;
      }
    }
  },
});

// node_modules/mdast-util-gfm-autolink-literal/from-markdown.js
var require_from_markdown = __commonJS({
  "node_modules/mdast-util-gfm-autolink-literal/from-markdown.js"(exports) {
    var ccount = require_ccount();
    var findAndReplace = require_mdast_util_find_and_replace();
    var unicodePunctuation = require_unicode_punctuation();
    var unicodeWhitespace = require_unicode_whitespace();
    exports.transforms = [transformGfmAutolinkLiterals];
    exports.enter = {
      literalAutolink: enterLiteralAutolink,
      literalAutolinkEmail: enterLiteralAutolinkValue,
      literalAutolinkHttp: enterLiteralAutolinkValue,
      literalAutolinkWww: enterLiteralAutolinkValue,
    };
    exports.exit = {
      literalAutolink: exitLiteralAutolink,
      literalAutolinkEmail: exitLiteralAutolinkEmail,
      literalAutolinkHttp: exitLiteralAutolinkHttp,
      literalAutolinkWww: exitLiteralAutolinkWww,
    };
    function enterLiteralAutolink(token) {
      this.enter({ type: "link", title: null, url: "", children: [] }, token);
    }
    function enterLiteralAutolinkValue(token) {
      this.config.enter.autolinkProtocol.call(this, token);
    }
    function exitLiteralAutolinkHttp(token) {
      this.config.exit.autolinkProtocol.call(this, token);
    }
    function exitLiteralAutolinkWww(token) {
      this.config.exit.data.call(this, token);
      this.stack[this.stack.length - 1].url =
        "http://" + this.sliceSerialize(token);
    }
    function exitLiteralAutolinkEmail(token) {
      this.config.exit.autolinkEmail.call(this, token);
    }
    function exitLiteralAutolink(token) {
      this.exit(token);
    }
    function transformGfmAutolinkLiterals(tree) {
      findAndReplace(
        tree,
        [
          [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, findUrl],
          [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, findEmail],
        ],
        { ignore: ["link", "linkReference"] }
      );
    }
    function findUrl($0, protocol, domain, path, match) {
      var prefix = "";
      var parts;
      var result;
      if (!previous(match)) {
        return false;
      }
      if (/^w/i.test(protocol)) {
        domain = protocol + domain;
        protocol = "";
        prefix = "http://";
      }
      if (!isCorrectDomain(domain)) {
        return false;
      }
      parts = splitUrl(domain + path);
      if (!parts[0]) return false;
      result = {
        type: "link",
        title: null,
        url: prefix + protocol + parts[0],
        children: [{ type: "text", value: protocol + parts[0] }],
      };
      if (parts[1]) {
        result = [result, { type: "text", value: parts[1] }];
      }
      return result;
    }
    function findEmail($0, atext, label, match) {
      if (!previous(match, true) || /[_-]$/.test(label)) {
        return false;
      }
      return {
        type: "link",
        title: null,
        url: "mailto:" + atext + "@" + label,
        children: [{ type: "text", value: atext + "@" + label }],
      };
    }
    function isCorrectDomain(domain) {
      var parts = domain.split(".");
      if (
        parts.length < 2 ||
        (parts[parts.length - 1] &&
          (/_/.test(parts[parts.length - 1]) ||
            !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
        (parts[parts.length - 2] &&
          (/_/.test(parts[parts.length - 2]) ||
            !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
      ) {
        return false;
      }
      return true;
    }
    function splitUrl(url) {
      var trail = /[!"&'),.:;<>?\]}]+$/.exec(url);
      var closingParenIndex;
      var openingParens;
      var closingParens;
      if (trail) {
        url = url.slice(0, trail.index);
        trail = trail[0];
        closingParenIndex = trail.indexOf(")");
        openingParens = ccount(url, "(");
        closingParens = ccount(url, ")");
        while (closingParenIndex !== -1 && openingParens > closingParens) {
          url += trail.slice(0, closingParenIndex + 1);
          trail = trail.slice(closingParenIndex + 1);
          closingParenIndex = trail.indexOf(")");
          closingParens++;
        }
      }
      return [url, trail];
    }
    function previous(match, email) {
      var code2 = match.input.charCodeAt(match.index - 1);
      return (
        (code2 !== code2 ||
          unicodeWhitespace(code2) ||
          unicodePunctuation(code2)) &&
        (!email || code2 !== 47)
      );
    }
  },
});

// node_modules/mdast-util-gfm-strikethrough/from-markdown.js
var require_from_markdown2 = __commonJS({
  "node_modules/mdast-util-gfm-strikethrough/from-markdown.js"(exports) {
    exports.canContainEols = ["delete"];
    exports.enter = { strikethrough: enterStrikethrough };
    exports.exit = { strikethrough: exitStrikethrough };
    function enterStrikethrough(token) {
      this.enter({ type: "delete", children: [] }, token);
    }
    function exitStrikethrough(token) {
      this.exit(token);
    }
  },
});

// node_modules/mdast-util-gfm-table/from-markdown.js
var require_from_markdown3 = __commonJS({
  "node_modules/mdast-util-gfm-table/from-markdown.js"(exports) {
    exports.enter = {
      table: enterTable,
      tableData: enterCell,
      tableHeader: enterCell,
      tableRow: enterRow,
    };
    exports.exit = {
      codeText: exitCodeText,
      table: exitTable,
      tableData: exit,
      tableHeader: exit,
      tableRow: exit,
    };
    function enterTable(token) {
      this.enter({ type: "table", align: token._align, children: [] }, token);
      this.setData("inTable", true);
    }
    function exitTable(token) {
      this.exit(token);
      this.setData("inTable");
    }
    function enterRow(token) {
      this.enter({ type: "tableRow", children: [] }, token);
    }
    function exit(token) {
      this.exit(token);
    }
    function enterCell(token) {
      this.enter({ type: "tableCell", children: [] }, token);
    }
    function exitCodeText(token) {
      var value = this.resume();
      if (this.getData("inTable")) {
        value = value.replace(/\\([\\|])/g, replace);
      }
      this.stack[this.stack.length - 1].value = value;
      this.exit(token);
    }
    function replace($0, $1) {
      return $1 === "|" ? $1 : $0;
    }
  },
});

// node_modules/mdast-util-gfm-task-list-item/from-markdown.js
var require_from_markdown4 = __commonJS({
  "node_modules/mdast-util-gfm-task-list-item/from-markdown.js"(exports) {
    exports.exit = {
      taskListCheckValueChecked: exitCheck,
      taskListCheckValueUnchecked: exitCheck,
      paragraph: exitParagraphWithTaskListItem,
    };
    function exitCheck(token) {
      this.stack[this.stack.length - 2].checked =
        token.type === "taskListCheckValueChecked";
    }
    function exitParagraphWithTaskListItem(token) {
      var parent = this.stack[this.stack.length - 2];
      var node = this.stack[this.stack.length - 1];
      var siblings = parent.children;
      var head = node.children[0];
      var index2 = -1;
      var firstParaghraph;
      if (
        parent &&
        parent.type === "listItem" &&
        typeof parent.checked === "boolean" &&
        head &&
        head.type === "text"
      ) {
        while (++index2 < siblings.length) {
          if (siblings[index2].type === "paragraph") {
            firstParaghraph = siblings[index2];
            break;
          }
        }
        if (firstParaghraph === node) {
          head.value = head.value.slice(1);
          if (head.value.length === 0) {
            node.children.shift();
          } else {
            head.position.start.column++;
            head.position.start.offset++;
            node.position.start = Object.assign({}, head.position.start);
          }
        }
      }
      this.exit(token);
    }
  },
});

// node_modules/mdast-util-gfm/from-markdown.js
var require_from_markdown5 = __commonJS({
  "node_modules/mdast-util-gfm/from-markdown.js"(exports, module2) {
    var autolinkLiteral = require_from_markdown();
    var strikethrough2 = require_from_markdown2();
    var table = require_from_markdown3();
    var taskListItem = require_from_markdown4();
    var own = {}.hasOwnProperty;
    module2.exports = configure([
      autolinkLiteral,
      strikethrough2,
      table,
      taskListItem,
    ]);
    function configure(extensions) {
      var config = { transforms: [], canContainEols: [] };
      var length = extensions.length;
      var index2 = -1;
      while (++index2 < length) {
        extension(config, extensions[index2]);
      }
      return config;
    }
    function extension(config, extension2) {
      var key;
      var left;
      var right;
      for (key in extension2) {
        left = own.call(config, key) ? config[key] : (config[key] = {});
        right = extension2[key];
        if (key === "canContainEols" || key === "transforms") {
          config[key] = [].concat(left, right);
        } else {
          Object.assign(left, right);
        }
      }
    }
  },
});

// node_modules/mdast-util-gfm-autolink-literal/to-markdown.js
var require_to_markdown = __commonJS({
  "node_modules/mdast-util-gfm-autolink-literal/to-markdown.js"(exports) {
    var inConstruct = "phrasing";
    var notInConstruct = ["autolink", "link", "image", "label"];
    exports.unsafe = [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct,
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct,
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct,
        notInConstruct,
      },
    ];
  },
});

// node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
var require_container_phrasing = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js"(
    exports,
    module2
  ) {
    module2.exports = phrasing;
    function phrasing(parent, context, safeOptions) {
      var children = parent.children || [];
      var results = [];
      var index2 = -1;
      var before = safeOptions.before;
      var after;
      var handle;
      var child;
      while (++index2 < children.length) {
        child = children[index2];
        if (index2 + 1 < children.length) {
          handle = context.handle.handlers[children[index2 + 1].type];
          if (handle && handle.peek) handle = handle.peek;
          after = handle
            ? handle(children[index2 + 1], parent, context, {
                before: "",
                after: "",
              }).charAt(0)
            : "";
        } else {
          after = safeOptions.after;
        }
        if (
          results.length > 0 &&
          (before === "\r" || before === "\n") &&
          child.type === "html"
        ) {
          results[results.length - 1] = results[results.length - 1].replace(
            /(\r?\n|\r)$/,
            " "
          );
          before = " ";
        }
        results.push(
          context.handle(child, parent, context, {
            before,
            after,
          })
        );
        before = results[results.length - 1].slice(-1);
      }
      return results.join("");
    }
  },
});

// node_modules/mdast-util-gfm-strikethrough/to-markdown.js
var require_to_markdown2 = __commonJS({
  "node_modules/mdast-util-gfm-strikethrough/to-markdown.js"(exports) {
    var phrasing = require_container_phrasing();
    exports.unsafe = [{ character: "~", inConstruct: "phrasing" }];
    exports.handlers = { delete: handleDelete };
    handleDelete.peek = peekDelete;
    function handleDelete(node, _2, context) {
      var exit = context.enter("emphasis");
      var value = phrasing(node, context, { before: "~", after: "~" });
      exit();
      return "~~" + value + "~~";
    }
    function peekDelete() {
      return "~";
    }
  },
});

// node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
var require_pattern_compile = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js"(
    exports,
    module2
  ) {
    module2.exports = patternCompile;
    function patternCompile(pattern) {
      var before;
      var after;
      if (!pattern._compiled) {
        before = pattern.before ? "(?:" + pattern.before + ")" : "";
        after = pattern.after ? "(?:" + pattern.after + ")" : "";
        if (pattern.atBreak) {
          before = "[\\r\\n][\\t ]*" + before;
        }
        pattern._compiled = new RegExp(
          (before ? "(" + before + ")" : "") +
            (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") +
            pattern.character +
            (after || ""),
          "g"
        );
      }
      return pattern._compiled;
    }
  },
});

// node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
var require_inline_code = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/handle/inline-code.js"(
    exports,
    module2
  ) {
    module2.exports = inlineCode;
    inlineCode.peek = inlineCodePeek;
    var patternCompile = require_pattern_compile();
    function inlineCode(node, parent, context) {
      var value = node.value || "";
      var sequence = "`";
      var index2 = -1;
      var pattern;
      var expression;
      var match;
      var position;
      while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
        sequence += "`";
      }
      if (
        /[^ \r\n]/.test(value) &&
        (/[ \r\n`]/.test(value.charAt(0)) ||
          /[ \r\n`]/.test(value.charAt(value.length - 1)))
      ) {
        value = " " + value + " ";
      }
      while (++index2 < context.unsafe.length) {
        pattern = context.unsafe[index2];
        if (!pattern.atBreak) continue;
        expression = patternCompile(pattern);
        while ((match = expression.exec(value))) {
          position = match.index;
          if (
            value.charCodeAt(position) === 10 &&
            value.charCodeAt(position - 1) === 13
          ) {
            position--;
          }
          value = value.slice(0, position) + " " + value.slice(match.index + 1);
        }
      }
      return sequence + value + sequence;
    }
    function inlineCodePeek() {
      return "`";
    }
  },
});

// node_modules/repeat-string/index.js
var require_repeat_string = __commonJS({
  "node_modules/repeat-string/index.js"(exports, module2) {
    "use strict";
    var res = "";
    var cache;
    module2.exports = repeat;
    function repeat(str, num) {
      if (typeof str !== "string") {
        throw new TypeError("expected a string");
      }
      if (num === 1) return str;
      if (num === 2) return str + str;
      var max = str.length * num;
      if (cache !== str || typeof cache === "undefined") {
        cache = str;
        res = "";
      } else if (res.length >= max) {
        return res.substr(0, max);
      }
      while (max > res.length && num > 1) {
        if (num & 1) {
          res += str;
        }
        num >>= 1;
        str += str;
      }
      res += str;
      res = res.substr(0, max);
      return res;
    }
  },
});

// node_modules/markdown-table/index.js
var require_markdown_table = __commonJS({
  "node_modules/markdown-table/index.js"(exports, module2) {
    "use strict";
    var repeat = require_repeat_string();
    module2.exports = markdownTable;
    var trailingWhitespace = / +$/;
    var space = " ";
    var lineFeed = "\n";
    var dash = "-";
    var colon = ":";
    var verticalBar = "|";
    var x2 = 0;
    var C = 67;
    var L2 = 76;
    var R2 = 82;
    var c2 = 99;
    var l2 = 108;
    var r2 = 114;
    function markdownTable(table, options) {
      var settings = options || {};
      var padding = settings.padding !== false;
      var start = settings.delimiterStart !== false;
      var end = settings.delimiterEnd !== false;
      var align = (settings.align || []).concat();
      var alignDelimiters = settings.alignDelimiters !== false;
      var alignments = [];
      var stringLength = settings.stringLength || defaultStringLength;
      var rowIndex = -1;
      var rowLength = table.length;
      var cellMatrix = [];
      var sizeMatrix = [];
      var row = [];
      var sizes = [];
      var longestCellByColumn = [];
      var mostCellsPerRow = 0;
      var cells;
      var columnIndex;
      var columnLength;
      var largest;
      var size;
      var cell;
      var lines;
      var line;
      var before;
      var after;
      var code2;
      while (++rowIndex < rowLength) {
        cells = table[rowIndex];
        columnIndex = -1;
        columnLength = cells.length;
        row = [];
        sizes = [];
        if (columnLength > mostCellsPerRow) {
          mostCellsPerRow = columnLength;
        }
        while (++columnIndex < columnLength) {
          cell = serialize(cells[columnIndex]);
          if (alignDelimiters === true) {
            size = stringLength(cell);
            sizes[columnIndex] = size;
            largest = longestCellByColumn[columnIndex];
            if (largest === void 0 || size > largest) {
              longestCellByColumn[columnIndex] = size;
            }
          }
          row.push(cell);
        }
        cellMatrix[rowIndex] = row;
        sizeMatrix[rowIndex] = sizes;
      }
      columnIndex = -1;
      columnLength = mostCellsPerRow;
      if (typeof align === "object" && "length" in align) {
        while (++columnIndex < columnLength) {
          alignments[columnIndex] = toAlignment(align[columnIndex]);
        }
      } else {
        code2 = toAlignment(align);
        while (++columnIndex < columnLength) {
          alignments[columnIndex] = code2;
        }
      }
      columnIndex = -1;
      columnLength = mostCellsPerRow;
      row = [];
      sizes = [];
      while (++columnIndex < columnLength) {
        code2 = alignments[columnIndex];
        before = "";
        after = "";
        if (code2 === l2) {
          before = colon;
        } else if (code2 === r2) {
          after = colon;
        } else if (code2 === c2) {
          before = colon;
          after = colon;
        }
        size = alignDelimiters
          ? Math.max(
              1,
              longestCellByColumn[columnIndex] - before.length - after.length
            )
          : 1;
        cell = before + repeat(dash, size) + after;
        if (alignDelimiters === true) {
          size = before.length + size + after.length;
          if (size > longestCellByColumn[columnIndex]) {
            longestCellByColumn[columnIndex] = size;
          }
          sizes[columnIndex] = size;
        }
        row[columnIndex] = cell;
      }
      cellMatrix.splice(1, 0, row);
      sizeMatrix.splice(1, 0, sizes);
      rowIndex = -1;
      rowLength = cellMatrix.length;
      lines = [];
      while (++rowIndex < rowLength) {
        row = cellMatrix[rowIndex];
        sizes = sizeMatrix[rowIndex];
        columnIndex = -1;
        columnLength = mostCellsPerRow;
        line = [];
        while (++columnIndex < columnLength) {
          cell = row[columnIndex] || "";
          before = "";
          after = "";
          if (alignDelimiters === true) {
            size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
            code2 = alignments[columnIndex];
            if (code2 === r2) {
              before = repeat(space, size);
            } else if (code2 === c2) {
              if (size % 2 === 0) {
                before = repeat(space, size / 2);
                after = before;
              } else {
                before = repeat(space, size / 2 + 0.5);
                after = repeat(space, size / 2 - 0.5);
              }
            } else {
              after = repeat(space, size);
            }
          }
          if (start === true && columnIndex === 0) {
            line.push(verticalBar);
          }
          if (
            padding === true &&
            !(alignDelimiters === false && cell === "") &&
            (start === true || columnIndex !== 0)
          ) {
            line.push(space);
          }
          if (alignDelimiters === true) {
            line.push(before);
          }
          line.push(cell);
          if (alignDelimiters === true) {
            line.push(after);
          }
          if (padding === true) {
            line.push(space);
          }
          if (end === true || columnIndex !== columnLength - 1) {
            line.push(verticalBar);
          }
        }
        line = line.join("");
        if (end === false) {
          line = line.replace(trailingWhitespace, "");
        }
        lines.push(line);
      }
      return lines.join(lineFeed);
    }
    function serialize(value) {
      return value === null || value === void 0 ? "" : String(value);
    }
    function defaultStringLength(value) {
      return value.length;
    }
    function toAlignment(value) {
      var code2 = typeof value === "string" ? value.charCodeAt(0) : x2;
      return code2 === L2 || code2 === l2
        ? l2
        : code2 === R2 || code2 === r2
        ? r2
        : code2 === C || code2 === c2
        ? c2
        : x2;
    }
  },
});

// node_modules/mdast-util-gfm-table/to-markdown.js
var require_to_markdown3 = __commonJS({
  "node_modules/mdast-util-gfm-table/to-markdown.js"(exports, module2) {
    var phrasing = require_container_phrasing();
    var defaultInlineCode = require_inline_code();
    var markdownTable = require_markdown_table();
    module2.exports = toMarkdown;
    function toMarkdown(options) {
      var settings = options || {};
      var padding = settings.tableCellPadding;
      var alignDelimiters = settings.tablePipeAlign;
      var stringLength = settings.stringLength;
      var around = padding ? " " : "|";
      return {
        unsafe: [
          { character: "\r", inConstruct: "tableCell" },
          { character: "\n", inConstruct: "tableCell" },
          { atBreak: true, character: "|", after: "[	 :-]" },
          { character: "|", inConstruct: "tableCell" },
          { atBreak: true, character: ":", after: "-" },
          { atBreak: true, character: "-", after: "[:|-]" },
        ],
        handlers: {
          table: handleTable,
          tableRow: handleTableRow,
          tableCell: handleTableCell,
          inlineCode: inlineCodeWithTable,
        },
      };
      function handleTable(node, _2, context) {
        return serializeData(handleTableAsData(node, context), node.align);
      }
      function handleTableRow(node, _2, context) {
        var row = handleTableRowAsData(node, context);
        var value = serializeData([row]);
        return value.slice(0, value.indexOf("\n"));
      }
      function handleTableCell(node, _2, context) {
        var exit = context.enter("tableCell");
        var value = phrasing(node, context, { before: around, after: around });
        exit();
        return value;
      }
      function serializeData(matrix, align) {
        return markdownTable(matrix, {
          align,
          alignDelimiters,
          padding,
          stringLength,
        });
      }
      function handleTableAsData(node, context) {
        var children = node.children;
        var index2 = -1;
        var length = children.length;
        var result = [];
        var subexit = context.enter("table");
        while (++index2 < length) {
          result[index2] = handleTableRowAsData(children[index2], context);
        }
        subexit();
        return result;
      }
      function handleTableRowAsData(node, context) {
        var children = node.children;
        var index2 = -1;
        var length = children.length;
        var result = [];
        var subexit = context.enter("tableRow");
        while (++index2 < length) {
          result[index2] = handleTableCell(children[index2], node, context);
        }
        subexit();
        return result;
      }
      function inlineCodeWithTable(node, parent, context) {
        var value = defaultInlineCode(node, parent, context);
        if (context.stack.indexOf("tableCell") !== -1) {
          value = value.replace(/\|/g, "\\$&");
        }
        return value;
      }
    }
  },
});

// node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
var require_check_bullet = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/check-bullet.js"(
    exports,
    module2
  ) {
    module2.exports = checkBullet;
    function checkBullet(context) {
      var marker = context.options.bullet || "*";
      if (marker !== "*" && marker !== "+" && marker !== "-") {
        throw new Error(
          "Cannot serialize items with `" +
            marker +
            "` for `options.bullet`, expected `*`, `+`, or `-`"
        );
      }
      return marker;
    }
  },
});

// node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
var require_check_list_item_indent = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js"(
    exports,
    module2
  ) {
    module2.exports = checkListItemIndent;
    function checkListItemIndent(context) {
      var style = context.options.listItemIndent || "tab";
      if (style === 1 || style === "1") {
        return "one";
      }
      if (style !== "tab" && style !== "one" && style !== "mixed") {
        throw new Error(
          "Cannot serialize items with `" +
            style +
            "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
        );
      }
      return style;
    }
  },
});

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
var require_container_flow = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/container-flow.js"(
    exports,
    module2
  ) {
    module2.exports = flow;
    var repeat = require_repeat_string();
    function flow(parent, context) {
      var children = parent.children || [];
      var results = [];
      var index2 = -1;
      var child;
      while (++index2 < children.length) {
        child = children[index2];
        results.push(
          context.handle(child, parent, context, { before: "\n", after: "\n" })
        );
        if (index2 + 1 < children.length) {
          results.push(between(child, children[index2 + 1]));
        }
      }
      return results.join("");
      function between(left, right) {
        var index3 = -1;
        var result;
        while (++index3 < context.join.length) {
          result = context.join[index3](left, right, parent, context);
          if (result === true || result === 1) {
            break;
          }
          if (typeof result === "number") {
            return repeat("\n", 1 + Number(result));
          }
          if (result === false) {
            return "\n\n<!---->\n\n";
          }
        }
        return "\n\n";
      }
    }
  },
});

// node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
var require_indent_lines = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/util/indent-lines.js"(
    exports,
    module2
  ) {
    module2.exports = indentLines;
    var eol = /\r?\n|\r/g;
    function indentLines(value, map) {
      var result = [];
      var start = 0;
      var line = 0;
      var match;
      while ((match = eol.exec(value))) {
        one(value.slice(start, match.index));
        result.push(match[0]);
        start = match.index + match[0].length;
        line++;
      }
      one(value.slice(start));
      return result.join("");
      function one(value2) {
        result.push(map(value2, line, !value2));
      }
    }
  },
});

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
var require_list_item = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/handle/list-item.js"(
    exports,
    module2
  ) {
    module2.exports = listItem;
    var repeat = require_repeat_string();
    var checkBullet = require_check_bullet();
    var checkListItemIndent = require_check_list_item_indent();
    var flow = require_container_flow();
    var indentLines = require_indent_lines();
    function listItem(node, parent, context) {
      var bullet = checkBullet(context);
      var listItemIndent = checkListItemIndent(context);
      var size;
      var value;
      var exit;
      if (parent && parent.ordered) {
        bullet =
          (parent.start > -1 ? parent.start : 1) +
          (context.options.incrementListMarker === false
            ? 0
            : parent.children.indexOf(node)) +
          ".";
      }
      size = bullet.length + 1;
      if (
        listItemIndent === "tab" ||
        (listItemIndent === "mixed" &&
          ((parent && parent.spread) || node.spread))
      ) {
        size = Math.ceil(size / 4) * 4;
      }
      exit = context.enter("listItem");
      value = indentLines(flow(node, context), map);
      exit();
      return value;
      function map(line, index2, blank) {
        if (index2) {
          return (blank ? "" : repeat(" ", size)) + line;
        }
        return (
          (blank ? bullet : bullet + repeat(" ", size - bullet.length)) + line
        );
      }
    }
  },
});

// node_modules/mdast-util-gfm-task-list-item/to-markdown.js
var require_to_markdown4 = __commonJS({
  "node_modules/mdast-util-gfm-task-list-item/to-markdown.js"(exports) {
    var defaultListItem = require_list_item();
    exports.unsafe = [{ atBreak: true, character: "-", after: "[:|-]" }];
    exports.handlers = {
      listItem: listItemWithTaskListItem,
    };
    function listItemWithTaskListItem(node, parent, context) {
      var value = defaultListItem(node, parent, context);
      var head = node.children[0];
      if (
        typeof node.checked === "boolean" &&
        head &&
        head.type === "paragraph"
      ) {
        value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
      }
      return value;
      function check($0) {
        return $0 + "[" + (node.checked ? "x" : " ") + "] ";
      }
    }
  },
});

// node_modules/mdast-util-to-markdown/lib/configure.js
var require_configure = __commonJS({
  "node_modules/mdast-util-to-markdown/lib/configure.js"(exports, module2) {
    module2.exports = configure;
    function configure(base, extension) {
      var index2 = -1;
      var key;
      if (extension.extensions) {
        while (++index2 < extension.extensions.length) {
          configure(base, extension.extensions[index2]);
        }
      }
      for (key in extension) {
        if (key === "extensions") {
        } else if (key === "unsafe" || key === "join") {
          base[key] = base[key].concat(extension[key] || []);
        } else if (key === "handlers") {
          base[key] = Object.assign(base[key], extension[key] || {});
        } else {
          base.options[key] = extension[key];
        }
      }
      return base;
    }
  },
});

// node_modules/mdast-util-gfm/to-markdown.js
var require_to_markdown5 = __commonJS({
  "node_modules/mdast-util-gfm/to-markdown.js"(exports, module2) {
    var autolinkLiteral = require_to_markdown();
    var strikethrough2 = require_to_markdown2();
    var table = require_to_markdown3();
    var taskListItem = require_to_markdown4();
    var configure = require_configure();
    module2.exports = toMarkdown;
    function toMarkdown(options) {
      var config = configure(
        { handlers: {}, join: [], unsafe: [], options: {} },
        {
          extensions: [
            autolinkLiteral,
            strikethrough2,
            table(options),
            taskListItem,
          ],
        }
      );
      return Object.assign(config.options, {
        handlers: config.handlers,
        join: config.join,
        unsafe: config.unsafe,
      });
    }
  },
});

// node_modules/remark-gfm/index.js
var require_remark_gfm = __commonJS({
  "node_modules/remark-gfm/index.js"(exports, module2) {
    "use strict";
    var syntax = require_micromark_extension_gfm();
    var fromMarkdown = require_from_markdown5();
    var toMarkdown = require_to_markdown5();
    var warningIssued;
    module2.exports = gfm2;
    function gfm2(options) {
      var data = this.data();
      if (
        !warningIssued &&
        ((this.Parser &&
          this.Parser.prototype &&
          this.Parser.prototype.blockTokenizers) ||
          (this.Compiler &&
            this.Compiler.prototype &&
            this.Compiler.prototype.visitors))
      ) {
        warningIssued = true;
        console.warn(
          "[remark-gfm] Warning: please upgrade to remark 13 to use this plugin"
        );
      }
      add("micromarkExtensions", syntax(options));
      add("fromMarkdownExtensions", fromMarkdown);
      add("toMarkdownExtensions", toMarkdown(options));
      function add(field, value) {
        if (data[field]) data[field].push(value);
        else data[field] = [value];
      }
    }
  },
});

// node_modules/prismjs/prism.js
var require_prism = __commonJS({
  "node_modules/prismjs/prism.js"(exports, module2) {
    var _self =
      typeof window !== "undefined"
        ? window
        : typeof WorkerGlobalScope !== "undefined" &&
          self instanceof WorkerGlobalScope
        ? self
        : {};
    var Prism4 = (function (_self2) {
      var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var uniqueId = 0;
      var plainTextGrammar = {};
      var _2 = {
        manual: _self2.Prism && _self2.Prism.manual,
        disableWorkerMessageHandler:
          _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(
                tokens.type,
                encode(tokens.content),
                tokens.alias
              );
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/\u00a0/g, " ");
            }
          },
          type: function (o2) {
            return Object.prototype.toString.call(o2).slice(8, -1);
          },
          objId: function (obj) {
            if (!obj["__id"]) {
              Object.defineProperty(obj, "__id", { value: ++uniqueId });
            }
            return obj["__id"];
          },
          clone: function deepClone(o2, visited) {
            visited = visited || {};
            var clone;
            var id;
            switch (_2.util.type(o2)) {
              case "Object":
                id = _2.util.objId(o2);
                if (visited[id]) {
                  return visited[id];
                }
                clone = {};
                visited[id] = clone;
                for (var key in o2) {
                  if (o2.hasOwnProperty(key)) {
                    clone[key] = deepClone(o2[key], visited);
                  }
                }
                return clone;
              case "Array":
                id = _2.util.objId(o2);
                if (visited[id]) {
                  return visited[id];
                }
                clone = [];
                visited[id] = clone;
                o2.forEach(function (v2, i2) {
                  clone[i2] = deepClone(v2, visited);
                });
                return clone;
              default:
                return o2;
            }
          },
          getLanguage: function (element) {
            while (element) {
              var m = lang.exec(element.className);
              if (m) {
                return m[1].toLowerCase();
              }
              element = element.parentElement;
            }
            return "none";
          },
          setLanguage: function (element, language) {
            element.className = element.className.replace(
              RegExp(lang, "gi"),
              ""
            );
            element.classList.add("language-" + language);
          },
          currentScript: function () {
            if (typeof document === "undefined") {
              return null;
            }
            if ("currentScript" in document && 1 < 2) {
              return document.currentScript;
            }
            try {
              throw new Error();
            } catch (err) {
              var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) ||
                [])[1];
              if (src) {
                var scripts = document.getElementsByTagName("script");
                for (var i2 in scripts) {
                  if (scripts[i2].src == src) {
                    return scripts[i2];
                  }
                }
              }
              return null;
            }
          },
          isActive: function (element, className, defaultActivation) {
            var no = "no-" + className;
            while (element) {
              var classList = element.classList;
              if (classList.contains(className)) {
                return true;
              }
              if (classList.contains(no)) {
                return false;
              }
              element = element.parentElement;
            }
            return !!defaultActivation;
          },
        },
        languages: {
          plain: plainTextGrammar,
          plaintext: plainTextGrammar,
          text: plainTextGrammar,
          txt: plainTextGrammar,
          extend: function (id, redef) {
            var lang2 = _2.util.clone(_2.languages[id]);
            for (var key in redef) {
              lang2[key] = redef[key];
            }
            return lang2;
          },
          insertBefore: function (inside, before, insert, root) {
            root = root || _2.languages;
            var grammar = root[inside];
            var ret = {};
            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                }
                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }
            var old = root[inside];
            root[inside] = ret;
            _2.languages.DFS(_2.languages, function (key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });
            return ret;
          },
          DFS: function DFS(o2, callback, type, visited) {
            visited = visited || {};
            var objId = _2.util.objId;
            for (var i2 in o2) {
              if (o2.hasOwnProperty(i2)) {
                callback.call(o2, i2, o2[i2], type || i2);
                var property = o2[i2];
                var propertyType = _2.util.type(property);
                if (propertyType === "Object" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (
                  propertyType === "Array" &&
                  !visited[objId(property)]
                ) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i2, visited);
                }
              }
            }
          },
        },
        plugins: {},
        highlightAll: function (async, callback) {
          _2.highlightAllUnder(document, async, callback);
        },
        highlightAllUnder: function (container, async, callback) {
          var env = {
            callback,
            container,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          _2.hooks.run("before-highlightall", env);
          env.elements = Array.prototype.slice.apply(
            env.container.querySelectorAll(env.selector)
          );
          _2.hooks.run("before-all-elements-highlight", env);
          for (var i2 = 0, element; (element = env.elements[i2++]); ) {
            _2.highlightElement(element, async === true, env.callback);
          }
        },
        highlightElement: function (element, async, callback) {
          var language = _2.util.getLanguage(element);
          var grammar = _2.languages[language];
          _2.util.setLanguage(element, language);
          var parent = element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre") {
            _2.util.setLanguage(parent, language);
          }
          var code2 = element.textContent;
          var env = {
            element,
            language,
            grammar,
            code: code2,
          };
          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;
            _2.hooks.run("before-insert", env);
            env.element.innerHTML = env.highlightedCode;
            _2.hooks.run("after-highlight", env);
            _2.hooks.run("complete", env);
            callback && callback.call(env.element);
          }
          _2.hooks.run("before-sanity-check", env);
          parent = env.element.parentElement;
          if (
            parent &&
            parent.nodeName.toLowerCase() === "pre" &&
            !parent.hasAttribute("tabindex")
          ) {
            parent.setAttribute("tabindex", "0");
          }
          if (!env.code) {
            _2.hooks.run("complete", env);
            callback && callback.call(env.element);
            return;
          }
          _2.hooks.run("before-highlight", env);
          if (!env.grammar) {
            insertHighlightedCode(_2.util.encode(env.code));
            return;
          }
          if (async && _self2.Worker) {
            var worker = new Worker(_2.filename);
            worker.onmessage = function (evt) {
              insertHighlightedCode(evt.data);
            };
            worker.postMessage(
              JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true,
              })
            );
          } else {
            insertHighlightedCode(
              _2.highlight(env.code, env.grammar, env.language)
            );
          }
        },
        highlight: function (text, grammar, language) {
          var env = {
            code: text,
            grammar,
            language,
          };
          _2.hooks.run("before-tokenize", env);
          if (!env.grammar) {
            throw new Error(
              'The language "' + env.language + '" has no grammar.'
            );
          }
          env.tokens = _2.tokenize(env.code, env.grammar);
          _2.hooks.run("after-tokenize", env);
          return Token.stringify(_2.util.encode(env.tokens), env.language);
        },
        tokenize: function (text, grammar) {
          var rest = grammar.rest;
          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }
            delete grammar.rest;
          }
          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        hooks: {
          all: {},
          add: function (name, callback) {
            var hooks = _2.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          run: function (name, env) {
            var callbacks = _2.hooks.all[name];
            if (!callbacks || !callbacks.length) {
              return;
            }
            for (var i2 = 0, callback; (callback = callbacks[i2++]); ) {
              callback(env);
            }
          },
        },
        Token,
      };
      _self2.Prism = _2;
      function Token(type, content, alias, matchedStr) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
      }
      Token.stringify = function stringify(o2, language) {
        if (typeof o2 == "string") {
          return o2;
        }
        if (Array.isArray(o2)) {
          var s2 = "";
          o2.forEach(function (e2) {
            s2 += stringify(e2, language);
          });
          return s2;
        }
        var env = {
          type: o2.type,
          content: stringify(o2.content, language),
          tag: "span",
          classes: ["token", o2.type],
          attributes: {},
          language,
        };
        var aliases = o2.alias;
        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }
        _2.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
          attributes +=
            " " +
            name +
            '="' +
            (env.attributes[name] || "").replace(/"/g, "&quot;") +
            '"';
        }
        return (
          "<" +
          env.tag +
          ' class="' +
          env.classes.join(" ") +
          '"' +
          attributes +
          ">" +
          env.content +
          "</" +
          env.tag +
          ">"
        );
      };
      function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
          var lookbehindLength = match[1].length;
          match.index += lookbehindLength;
          match[0] = match[0].slice(lookbehindLength);
        }
        return match;
      }
      function matchGrammar(
        text,
        tokenList,
        grammar,
        startNode,
        startPos,
        rematch
      ) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j2 = 0; j2 < patterns.length; ++j2) {
            if (rematch && rematch.cause == token + "," + j2) {
              return;
            }
            var patternObj = patterns[j2];
            var inside = patternObj.inside;
            var lookbehind = !!patternObj.lookbehind;
            var greedy = !!patternObj.greedy;
            var alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(
                patternObj.pattern.source,
                flags + "g"
              );
            }
            var pattern = patternObj.pattern || patternObj;
            for (
              var currentNode = startNode.next, pos = startPos;
              currentNode !== tokenList.tail;
              pos += currentNode.value.length, currentNode = currentNode.next
            ) {
              if (rematch && pos >= rematch.reach) {
                break;
              }
              var str = currentNode.value;
              if (tokenList.length > text.length) {
                return;
              }
              if (str instanceof Token) {
                continue;
              }
              var removeCount = 1;
              var match;
              if (greedy) {
                match = matchPattern(pattern, pos, text, lookbehind);
                if (!match || match.index >= text.length) {
                  break;
                }
                var from = match.index;
                var to = match.index + match[0].length;
                var p = pos;
                p += currentNode.value.length;
                while (from >= p) {
                  currentNode = currentNode.next;
                  p += currentNode.value.length;
                }
                p -= currentNode.value.length;
                pos = p;
                if (currentNode.value instanceof Token) {
                  continue;
                }
                for (
                  var k2 = currentNode;
                  k2 !== tokenList.tail &&
                  (p < to || typeof k2.value === "string");
                  k2 = k2.next
                ) {
                  removeCount++;
                  p += k2.value.length;
                }
                removeCount--;
                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                match = matchPattern(pattern, 0, str, lookbehind);
                if (!match) {
                  continue;
                }
              }
              var from = match.index;
              var matchStr = match[0];
              var before = str.slice(0, from);
              var after = str.slice(from + matchStr.length);
              var reach = pos + str.length;
              if (rematch && reach > rematch.reach) {
                rematch.reach = reach;
              }
              var removeFrom = currentNode.prev;
              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }
              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(
                token,
                inside ? _2.tokenize(matchStr, inside) : matchStr,
                alias,
                matchStr
              );
              currentNode = addAfter(tokenList, removeFrom, wrapped);
              if (after) {
                addAfter(tokenList, currentNode, after);
              }
              if (removeCount > 1) {
                var nestedRematch = {
                  cause: token + "," + j2,
                  reach,
                };
                matchGrammar(
                  text,
                  tokenList,
                  grammar,
                  currentNode.prev,
                  pos,
                  nestedRematch
                );
                if (rematch && nestedRematch.reach > rematch.reach) {
                  rematch.reach = nestedRematch.reach;
                }
              }
            }
          }
        }
      }
      function LinkedList() {
        var head = { value: null, prev: null, next: null };
        var tail = { value: null, prev: head, next: null };
        head.next = tail;
        this.head = head;
        this.tail = tail;
        this.length = 0;
      }
      function addAfter(list, node, value) {
        var next = node.next;
        var newNode = { value, prev: node, next };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      function removeRange(list, node, count) {
        var next = node.next;
        for (var i2 = 0; i2 < count && next !== list.tail; i2++) {
          next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i2;
      }
      function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }
        return array;
      }
      if (!_self2.document) {
        if (!_self2.addEventListener) {
          return _2;
        }
        if (!_2.disableWorkerMessageHandler) {
          _self2.addEventListener(
            "message",
            function (evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code2 = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(
                _2.highlight(code2, _2.languages[lang2], lang2)
              );
              if (immediateClose) {
                _self2.close();
              }
            },
            false
          );
        }
        return _2;
      }
      var script = _2.util.currentScript();
      if (script) {
        _2.filename = script.src;
        if (script.hasAttribute("data-manual")) {
          _2.manual = true;
        }
      }
      function highlightAutomaticallyCallback() {
        if (!_2.manual) {
          _2.highlightAll();
        }
      }
      if (!_2.manual) {
        var readyState = document.readyState;
        if (
          readyState === "loading" ||
          (readyState === "interactive" && script && script.defer)
        ) {
          document.addEventListener(
            "DOMContentLoaded",
            highlightAutomaticallyCallback
          );
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }
      return _2;
    })(_self);
    if (typeof module2 !== "undefined" && module2.exports) {
      module2.exports = Prism4;
    }
    if (typeof global !== "undefined") {
      global.Prism = Prism4;
    }
    Prism4.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true,
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true,
      },
      doctype: {
        pattern:
          /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null,
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true,
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/,
        },
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true,
      },
      tag: {
        pattern:
          /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/,
            },
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals",
                },
                /"|'/,
              ],
            },
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/,
            },
          },
        },
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity",
        },
        /&#x?[\da-f]{1,8};/i,
      ],
    };
    Prism4.languages.markup["tag"].inside["attr-value"].inside["entity"] =
      Prism4.languages.markup["entity"];
    Prism4.languages.markup["doctype"].inside["internal-subset"].inside =
      Prism4.languages.markup;
    Prism4.hooks.add("wrap", function (env) {
      if (env.type === "entity") {
        env.attributes["title"] = env.content.replace(/&amp;/, "&");
      }
    });
    Object.defineProperty(Prism4.languages.markup.tag, "addInlined", {
      value: function addInlined2(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside["language-" + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism4.languages[lang],
        };
        includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside,
          },
        };
        inside["language-" + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism4.languages[lang],
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return tagName;
              }
            ),
            "i"
          ),
          lookbehind: true,
          greedy: true,
          inside,
        };
        Prism4.languages.insertBefore("markup", "cdata", def);
      },
    });
    Object.defineProperty(Prism4.languages.markup.tag, "addAttribute", {
      value: function (attrName, lang) {
        Prism4.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              "(?:" +
              attrName +
              ")" +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [lang, "language-" + lang],
                  inside: Prism4.languages[lang],
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals",
                  },
                  /"|'/,
                ],
              },
            },
          },
        });
      },
    });
    Prism4.languages.html = Prism4.languages.markup;
    Prism4.languages.mathml = Prism4.languages.markup;
    Prism4.languages.svg = Prism4.languages.markup;
    Prism4.languages.xml = Prism4.languages.extend("markup", {});
    Prism4.languages.ssml = Prism4.languages.xml;
    Prism4.languages.atom = Prism4.languages.xml;
    Prism4.languages.rss = Prism4.languages.xml;
    (function (Prism5) {
      var string =
        /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      Prism5.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern:
                /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector",
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true,
            },
          },
        },
        url: {
          pattern: RegExp(
            "\\burl\\((?:" +
              string.source +
              "|" +
              /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
              ")\\)",
            "i"
          ),
          greedy: true,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + string.source + "$"),
              alias: "url",
            },
          },
        },
        selector: {
          pattern: RegExp(
            `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
              string.source +
              ")*(?=\\s*\\{)"
          ),
          lookbehind: true,
        },
        string: {
          pattern: string,
          greedy: true,
        },
        property: {
          pattern:
            /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true,
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true,
        },
        punctuation: /[(){};:,]/,
      };
      Prism5.languages.css["atrule"].inside.rest = Prism5.languages.css;
      var markup = Prism5.languages.markup;
      if (markup) {
        markup.tag.addInlined("style", "css");
        markup.tag.addAttribute("style", "css");
      }
    })(Prism4);
    Prism4.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true,
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true,
        },
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true,
      },
      "class-name": {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          punctuation: /[.\\]/,
        },
      },
      keyword:
        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/,
    };
    Prism4.languages.javascript = Prism4.languages.extend("clike", {
      "class-name": [
        Prism4.languages.clike["class-name"],
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: true,
        },
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: true,
        },
        {
          pattern:
            /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true,
        },
      ],
      function:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source +
            "(?:" +
            (/NaN|Infinity/.source +
              "|" +
              /0[bB][01]+(?:_[01]+)*n?/.source +
              "|" +
              /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
              "|" +
              /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
              "|" +
              /\d+(?:_\d+)*n/.source +
              "|" +
              /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                .source) +
            ")" +
            /(?![\w$])/.source
        ),
        lookbehind: true,
      },
      operator:
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
    });
    Prism4.languages.javascript["class-name"][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    Prism4.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern:
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: Prism4.languages.regex,
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/,
        },
      },
      "function-variable": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function",
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: true,
          inside: Prism4.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: true,
          inside: Prism4.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: Prism4.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: Prism4.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    });
    Prism4.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment",
      },
      "template-string": {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string",
          },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation",
              },
              rest: Prism4.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      "string-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property",
      },
    });
    Prism4.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property",
      },
    });
    if (Prism4.languages.markup) {
      Prism4.languages.markup.tag.addInlined("script", "javascript");
      Prism4.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        "javascript"
      );
    }
    Prism4.languages.js = Prism4.languages.javascript;
    (function () {
      if (typeof Prism4 === "undefined" || typeof document === "undefined") {
        return;
      }
      if (!Element.prototype.matches) {
        Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector;
      }
      var LOADING_MESSAGE = "Loading\u2026";
      var FAILURE_MESSAGE = function (status, message) {
        return "\u2716 Error " + status + " while fetching file: " + message;
      };
      var FAILURE_EMPTY_MESSAGE =
        "\u2716 Error: File does not exist or is empty";
      var EXTENSIONS = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex",
      };
      var STATUS_ATTR = "data-src-status";
      var STATUS_LOADING = "loading";
      var STATUS_LOADED = "loaded";
      var STATUS_FAILED = "failed";
      var SELECTOR =
        "pre[data-src]:not([" +
        STATUS_ATTR +
        '="' +
        STATUS_LOADED +
        '"]):not([' +
        STATUS_ATTR +
        '="' +
        STATUS_LOADING +
        '"])';
      function loadFile(src, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", src, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status < 400 && xhr.responseText) {
              success(xhr.responseText);
            } else {
              if (xhr.status >= 400) {
                error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
              } else {
                error(FAILURE_EMPTY_MESSAGE);
              }
            }
          }
        };
        xhr.send(null);
      }
      function parseRange(range) {
        var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
        if (m) {
          var start = Number(m[1]);
          var comma = m[2];
          var end = m[3];
          if (!comma) {
            return [start, start];
          }
          if (!end) {
            return [start, void 0];
          }
          return [start, Number(end)];
        }
        return void 0;
      }
      Prism4.hooks.add("before-highlightall", function (env) {
        env.selector += ", " + SELECTOR;
      });
      Prism4.hooks.add("before-sanity-check", function (env) {
        var pre = env.element;
        if (pre.matches(SELECTOR)) {
          env.code = "";
          pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
          var code2 = pre.appendChild(document.createElement("CODE"));
          code2.textContent = LOADING_MESSAGE;
          var src = pre.getAttribute("data-src");
          var language = env.language;
          if (language === "none") {
            var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
            language = EXTENSIONS[extension] || extension;
          }
          Prism4.util.setLanguage(code2, language);
          Prism4.util.setLanguage(pre, language);
          var autoloader = Prism4.plugins.autoloader;
          if (autoloader) {
            autoloader.loadLanguages(language);
          }
          loadFile(
            src,
            function (text) {
              pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
              var range = parseRange(pre.getAttribute("data-range"));
              if (range) {
                var lines = text.split(/\r\n?|\n/g);
                var start = range[0];
                var end = range[1] == null ? lines.length : range[1];
                if (start < 0) {
                  start += lines.length;
                }
                start = Math.max(0, Math.min(start - 1, lines.length));
                if (end < 0) {
                  end += lines.length;
                }
                end = Math.max(0, Math.min(end, lines.length));
                text = lines.slice(start, end).join("\n");
                if (!pre.hasAttribute("data-start")) {
                  pre.setAttribute("data-start", String(start + 1));
                }
              }
              code2.textContent = text;
              Prism4.highlightElement(code2);
            },
            function (error) {
              pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
              code2.textContent = error;
            }
          );
        }
      });
      Prism4.plugins.fileHighlight = {
        highlight: function highlight(container) {
          var elements = (container || document).querySelectorAll(SELECTOR);
          for (var i2 = 0, element; (element = elements[i2++]); ) {
            Prism4.highlightElement(element);
          }
        },
      };
      var logged = false;
      Prism4.fileHighlight = function () {
        if (!logged) {
          console.warn(
            "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
          );
          logged = true;
        }
        Prism4.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  },
});

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports, module2) {
    module2.exports = function shallowEqual(
      objA,
      objB,
      compare,
      compareContext
    ) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (
        typeof objA !== "object" ||
        !objA ||
        typeof objB !== "object" ||
        !objB
      ) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare
          ? compare.call(compareContext, valueA, valueB, key)
          : void 0;
        if (ret === false || (ret === void 0 && valueA !== valueB)) {
          return false;
        }
      }
      return true;
    };
  },
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
    exports,
    module2
  ) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true,
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true,
    };
    var FORWARD_REF_STATICS = {
      $$typeof: true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
    };
    var MEMO_STATICS = {
      $$typeof: true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true,
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(
              targetComponent,
              inheritedComponent,
              blacklist
            );
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i2 = 0; i2 < keys.length; ++i2) {
          var key = keys[i2];
          if (
            !KNOWN_STATICS[key] &&
            !(blacklist && blacklist[key]) &&
            !(sourceStatics && sourceStatics[key]) &&
            !(targetStatics && targetStatics[key])
          ) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e2) {}
          }
        }
      }
      return targetComponent;
    }
    module2.exports = hoistNonReactStatics;
  },
});

// src/ReactMdEditor/index.jsx
var ReactMdEditor_exports = {};
__export(ReactMdEditor_exports, {
  default: () => ReactMdEditor_default,
});
module.exports = __toCommonJS(ReactMdEditor_exports);
var import_react15 = __toESM(require("react"));
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2
      ? ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i2) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e2;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2) break;
    }
  } catch (err) {
    _d = true;
    _e2 = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e2;
    }
  }
  return _arr;
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i2) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i2) ||
    _unsupportedIterableToArray(arr, i2) ||
    _nonIterableRest()
  );
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/@uiw/react-md-editor/lib/esm/Editor.js
var import_react12 = __toESM(require("react"));

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray2(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray2(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray2(o2, minLen);
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
function _createForOfIteratorHelper(o2, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o2[Symbol.iterator] == null) {
    if (
      Array.isArray(o2) ||
      (it = _unsupportedIterableToArray2(o2)) ||
      (allowArrayLike && o2 && typeof o2.length === "number")
    ) {
      if (it) o2 = it;
      var i2 = 0;
      var F2 = function F3() {};
      return {
        s: F2,
        n: function n2() {
          if (i2 >= o2.length)
            return {
              done: true,
            };
          return {
            done: false,
            value: o2[i2++],
          };
        },
        e: function e2(_e2) {
          throw _e2;
        },
        f: F2,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s2() {
      it = o2[Symbol.iterator]();
    },
    n: function n2() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e2(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray2(arr);
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray2(arr) ||
    _nonIterableSpread()
  );
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys2(Object(source), true).forEach(function (key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self2 = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@uiw/react-markdown-preview/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/@uiw/react-markdown-preview/lib/esm/index.js
var import_regenerator2 = __toESM(require_regenerator());
var import_react = __toESM(require("react"));
var import_react_markdown = __toESM(require_react_markdown());
var import_remark_gfm = __toESM(require_remark_gfm());
var import_prismjs = __toESM(require_prism());

// node_modules/prismjs/components/prism-markup.js
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true,
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true,
  },
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null,
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true,
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true,
  },
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/,
        },
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals",
            },
            /"|'/,
          ],
        },
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/,
        },
      },
    },
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity",
    },
    /&#x?[\da-f]{1,8};/i,
  ],
};
Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] =
  Prism.languages.markup["entity"];
Prism.languages.markup["doctype"].inside["internal-subset"].inside =
  Prism.languages.markup;
Prism.hooks.add("wrap", function (env) {
  if (env.type === "entity") {
    env.attributes["title"] = env.content.replace(/&amp;/, "&");
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside["language-" + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang],
    };
    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside,
      },
    };
    inside["language-" + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang],
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(
        /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
          /__/g,
          function () {
            return tagName;
          }
        ),
        "i"
      ),
      lookbehind: true,
      greedy: true,
      inside,
    };
    Prism.languages.insertBefore("markup", "cdata", def);
  },
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  value: function (attrName, lang) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source +
          "(?:" +
          attrName +
          ")" +
          /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: true,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, "language-" + lang],
              inside: Prism.languages[lang],
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals",
              },
              /"|'/,
            ],
          },
        },
      },
    });
  },
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

// node_modules/@uiw/react-markdown-preview/lib/esm/langs.js
var import_regenerator = __toESM(require_regenerator());
var langData = {
  meta: {},
  markup: {
    a: ["html", "xml", "svg", "mathml"],
  },
  css: {
    p: "markup",
  },
  clike: {},
  javascript: {
    p: "markup",
    r: "clike",
    a: "js",
  },
  abap: {},
  abnf: {},
  actionscript: {
    p: "markup",
    r: "javascript",
  },
  ada: {},
  apacheconf: {},
  apl: {},
  applescript: {},
  arduino: {
    r: "cpp",
  },
  arff: {},
  asciidoc: {
    a: "adoc",
  },
  asm6502: {},
  aspnet: {
    r: ["markup", "csharp"],
  },
  autohotkey: {},
  autoit: {},
  bash: {
    a: "shell",
  },
  basic: {},
  batch: {},
  bison: {
    r: "c",
  },
  bnf: {
    a: "rbnf",
  },
  brainfuck: {},
  bro: {},
  c: {
    r: "clike",
  },
  csharp: {
    r: "clike",
    a: ["cs", "dotnet"],
  },
  cpp: {
    r: "c",
  },
  cil: {},
  coffeescript: {
    r: "javascript",
    a: "coffee",
  },
  cmake: {},
  clojure: {},
  crystal: {
    r: "ruby",
  },
  csp: {},
  "css-extras": {
    r: "css",
  },
  d: {
    r: "clike",
  },
  dart: {
    r: "clike",
  },
  diff: {},
  django: {
    r: "markup-templating",
    a: "jinja2",
  },
  "dns-zone-file": {
    a: "dns-zone",
  },
  docker: {
    a: "dockerfile",
  },
  ebnf: {},
  eiffel: {},
  ejs: {
    r: ["javascript", "markup-templating"],
  },
  elixir: {},
  elm: {},
  erb: {
    r: ["ruby", "markup-templating"],
  },
  erlang: {},
  fsharp: {
    r: "clike",
  },
  flow: {
    r: "javascript",
  },
  fortran: {},
  gcode: {},
  gedcom: {},
  gherkin: {},
  git: {},
  glsl: {
    r: "clike",
  },
  gml: {
    r: "clike",
    a: "gamemakerlanguage",
  },
  go: {
    r: "clike",
  },
  graphql: {},
  groovy: {
    r: "clike",
  },
  haml: {
    p: [
      "css",
      "coffeescript",
      "erb",
      "javascript",
      "less",
      "markdown",
      "ruby",
      "scss",
      "textile",
    ],
    r: "ruby",
  },
  handlebars: {
    r: "markup-templating",
  },
  haskell: {
    a: "hs",
  },
  haxe: {
    r: "clike",
  },
  hcl: {},
  http: {
    p: ["javascript", "markup"],
  },
  hpkp: {},
  hsts: {},
  ichigojam: {},
  icon: {},
  inform7: {},
  ini: {},
  io: {},
  j: {},
  java: {
    r: "clike",
  },
  javadoc: {
    p: ["scala"],
    r: ["markup", "java", "javadoclike"],
  },
  javadoclike: {
    p: ["java", "javascript", "php"],
  },
  javastacktrace: {},
  jolie: {
    r: "clike",
  },
  jq: {},
  jsdoc: {
    p: ["actionscript", "coffeescript"],
    r: ["javascript", "javadoclike"],
  },
  "js-extras": {
    p: ["actionscript", "coffeescript", "flow", "n4js", "typescript"],
    r: "javascript",
  },
  "js-templates": {
    p: ["css", "css-extras", "graphql", "markdown", "markup"],
    r: "javascript",
  },
  json: {},
  jsonp: {
    r: "json",
  },
  json5: {
    r: "json",
  },
  julia: {},
  keyman: {},
  kotlin: {
    r: "clike",
  },
  latex: {
    a: ["tex", "context"],
  },
  less: {
    r: "css",
  },
  lilypond: {
    r: "scheme",
    a: "ly",
  },
  liquid: {},
  lisp: {
    a: ["emacs", "elisp", "emacs-lisp"],
  },
  livescript: {},
  lolcode: {},
  lua: {},
  makefile: {},
  markdown: {
    r: "markup",
    a: "md",
  },
  "markup-templating": {
    r: "markup",
  },
  matlab: {},
  mel: {},
  mizar: {},
  monkey: {},
  n1ql: {},
  n4js: {
    p: ["jsdoc"],
    r: "javascript",
    a: "n4jsd",
  },
  "nand2tetris-hdl": {},
  nasm: {},
  nginx: {
    r: "clike",
  },
  nim: {},
  nix: {},
  nsis: {},
  objectivec: {
    r: "c",
  },
  ocaml: {},
  opencl: {
    p: ["c", "cpp"],
    r: "cpp",
  },
  oz: {},
  parigp: {},
  parser: {
    r: "markup",
  },
  pascal: {
    a: "objectpascal",
  },
  pascaligo: {},
  pcaxis: {
    a: "px",
  },
  perl: {},
  php: {
    r: ["clike", "markup-templating"],
  },
  phpdoc: {
    r: ["php", "javadoclike"],
  },
  "php-extras": {
    r: "php",
  },
  plsql: {
    r: "sql",
  },
  powershell: {},
  processing: {
    r: "clike",
  },
  prolog: {},
  properties: {},
  protobuf: {
    r: "clike",
  },
  pug: {
    p: [
      "coffeescript",
      "ejs",
      "handlebars",
      "less",
      "livescript",
      "markdown",
      "scss",
      "stylus",
      "twig",
    ],
    r: ["markup", "javascript"],
  },
  puppet: {},
  pure: {
    p: ["c", "cpp", "fortran"],
  },
  python: {
    a: "py",
  },
  q: {},
  qore: {
    r: "clike",
  },
  r: {},
  jsx: {
    p: ["jsdoc", "js-extras", "js-templates"],
    r: ["markup", "javascript"],
  },
  tsx: {
    r: ["jsx", "typescript"],
  },
  renpy: {},
  reason: {
    r: "clike",
  },
  regex: {
    p: [
      "actionscript",
      "coffeescript",
      "flow",
      "javascript",
      "typescript",
      "vala",
    ],
  },
  rest: {},
  rip: {},
  roboconf: {},
  ruby: {
    r: "clike",
    a: "rb",
  },
  rust: {},
  sas: {},
  sass: {
    r: "css",
  },
  scss: {
    r: "css",
  },
  scala: {
    r: "java",
  },
  scheme: {},
  "shell-session": {
    r: "bash",
  },
  smalltalk: {},
  smarty: {
    r: "markup-templating",
  },
  soy: {
    r: "markup-templating",
  },
  "splunk-spl": {},
  sql: {},
  stylus: {},
  swift: {
    r: "clike",
  },
  tap: {
    r: "yaml",
  },
  tcl: {},
  textile: {
    p: "css",
    r: "markup",
  },
  toml: {},
  tt2: {
    r: ["clike", "markup-templating"],
  },
  twig: {
    r: "markup",
  },
  typescript: {
    p: "js-templates",
    r: "javascript",
    a: "ts",
  },
  "t4-cs": {
    r: ["t4-templating", "csharp"],
    a: "t4",
  },
  "t4-vb": {
    r: ["t4-templating", "visual-basic"],
  },
  "t4-templating": {},
  vala: {
    r: "clike",
  },
  vbnet: {
    r: "basic",
  },
  velocity: {
    r: "markup",
  },
  verilog: {},
  vhdl: {},
  vim: {},
  "visual-basic": {
    a: "vb",
  },
  wasm: {},
  wiki: {
    r: "markup",
  },
  xeora: {
    r: "markup",
    a: "xeoracube",
  },
  xojo: {},
  xquery: {
    r: "markup",
  },
  yaml: {
    a: "yml",
  },
};
function loadLang(_x) {
  return _loadLang.apply(this, arguments);
}
function _loadLang() {
  _loadLang = _asyncToGenerator(
    /* @__PURE__ */ import_regenerator.default.mark(function _callee(ext) {
      var langs;
      return import_regenerator.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                langs = [];
                Object.keys(langData).forEach(function (item) {
                  var _langData$item = langData[item],
                    alias = _langData$item.a,
                    require2 = _langData$item.r;
                  if (
                    alias &&
                    (Array.isArray(alias) ? alias : [alias]).includes(ext)
                  ) {
                    if (require2) {
                      langs = Array.from(
                        new Set(
                          [].concat(
                            _toConsumableArray(langs),
                            _toConsumableArray(
                              Array.isArray(require2) ? require2 : [require2]
                            )
                          )
                        )
                      );
                    }
                  }
                  if (ext === item) {
                    if (require2) {
                      langs = Array.from(
                        new Set(
                          [].concat(
                            _toConsumableArray(langs),
                            _toConsumableArray(
                              Array.isArray(require2) ? require2 : [require2]
                            )
                          )
                        )
                      );
                    }
                    langs.push(ext);
                  }
                });
                _context.prev = 2;
                if (!(langs.length > 0)) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt(
                  "return",
                  Promise.all(
                    langs.map(function (key) {
                      return import("prismjs/components/prism-".concat(key));
                    })
                  )
                );
              case 5:
                _context.next = 9;
                break;
              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](2);
              case 9:
              case "end":
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[2, 7]]
      );
    })
  );
  return _loadLang.apply(this, arguments);
}

// node_modules/@uiw/react-markdown-preview/lib/esm/index.js
var _excluded = ["className", "source", "style", "onScroll", "onMouseOver"];
var esm_default = /* @__PURE__ */ import_react.default.forwardRef(function (
  props,
  ref
) {
  var _ref = props || {},
    className = _ref.className,
    source = _ref.source,
    style = _ref.style,
    onScroll = _ref.onScroll,
    onMouseOver = _ref.onMouseOver,
    other = _objectWithoutProperties2(_ref, _excluded);
  var mdp = /* @__PURE__ */ import_react.default.createRef();
  var loadedLang = import_react.default.useRef(["markup"]);
  (0, import_react.useEffect)(
    function () {
      highlight();
    },
    [source]
  );
  function highlight() {
    return _highlight.apply(this, arguments);
  }
  function _highlight() {
    _highlight = _asyncToGenerator(
      /* @__PURE__ */ import_regenerator2.default.mark(function _callee() {
        var codes, _iterator, _step, val, tag, lang;
        return import_regenerator2.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  if (mdp.current) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  codes = mdp.current.getElementsByTagName("code");
                  _iterator = _createForOfIteratorHelper(codes);
                  _context.prev = 4;
                  _iterator.s();
                case 6:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 24;
                    break;
                  }
                  val = _step.value;
                  tag = val.parentNode;
                  if (
                    !(
                      tag &&
                      tag.tagName === "PRE" &&
                      /^language-/.test(val.className.trim())
                    )
                  ) {
                    _context.next = 22;
                    break;
                  }
                  lang = val.className.trim().replace(/^language-/, "");
                  _context.prev = 11;
                  if (loadedLang.current.includes(lang)) {
                    _context.next = 16;
                    break;
                  }
                  loadedLang.current.push(lang);
                  _context.next = 16;
                  return loadLang(lang);
                case 16:
                  _context.next = 18;
                  return import_prismjs.default.highlightElement(val);
                case 18:
                  _context.next = 22;
                  break;
                case 20:
                  _context.prev = 20;
                  _context.t0 = _context["catch"](11);
                case 22:
                  _context.next = 6;
                  break;
                case 24:
                  _context.next = 29;
                  break;
                case 26:
                  _context.prev = 26;
                  _context.t1 = _context["catch"](4);
                  _iterator.e(_context.t1);
                case 29:
                  _context.prev = 29;
                  _iterator.f();
                  return _context.finish(29);
                case 32:
                case "end":
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [
            [4, 26, 29, 32],
            [11, 20],
          ]
        );
      })
    );
    return _highlight.apply(this, arguments);
  }
  (0, import_react.useImperativeHandle)(
    ref,
    function () {
      return _objectSpread22(
        _objectSpread22({}, props),
        {},
        {
          lang: loadedLang.current,
          mdp,
        }
      );
    },
    [mdp, props]
  );
  var cls = "wmde-markdown wmde-markdown-color ".concat(className || "");
  var reactMarkdownProps = _objectSpread22(
    _objectSpread22(
      {
        allowDangerousHtml: true,
        allowNode: function allowNode(node, index2, parent) {
          if (node.type === "html" && reactMarkdownProps.allowDangerousHtml) {
            node.value = node.value.replace(
              /<((style|script|link|input|form)|\/(style|script|link|input|form))(\s?[^>]*>)/gi,
              function (a2) {
                return a2.replace(/[<>]/g, function (e2) {
                  return {
                    "<": "&lt;",
                    ">": "&gt;",
                  }[e2];
                });
              }
            );
          }
          return true;
        },
      },
      other
    ),
    {},
    {
      plugins: [import_remark_gfm.default].concat(
        _toConsumableArray(other.plugins || [])
      ),
      source: source || "",
    }
  );
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      ref: mdp,
      onScroll,
      onMouseOver,
      className: cls,
      style,
    },
    /* @__PURE__ */ import_react.default.createElement(
      import_react_markdown.default,
      reactMarkdownProps
    )
  );
});

// node_modules/@uiw/react-md-editor/lib/esm/components/TextArea/index.js
var import_react8 = __toESM(require("react"));

// node_modules/prismjs/components/prism-markdown.js
(function (Prism4) {
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
  }
  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
    .source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
    /__/g,
    function () {
      return tableCell;
    }
  );
  var tableLine =
    /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
      .source;
  Prism4.languages.markdown = Prism4.languages.extend("markup", {});
  Prism4.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: Prism4.languages.yaml,
        },
      },
    },
    blockquote: {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation",
    },
    table: {
      pattern: RegExp(
        "^" + tableRow + tableLine + "(?:" + tableRow + ")*",
        "m"
      ),
      inside: {
        "table-data-rows": {
          pattern: RegExp(
            "^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"
          ),
          lookbehind: true,
          inside: {
            "table-data": {
              pattern: RegExp(tableCell),
              inside: Prism4.languages.markdown,
            },
            punctuation: /\|/,
          },
        },
        "table-line": {
          pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
          lookbehind: true,
          inside: {
            punctuation: /\||:?-{3,}:?/,
          },
        },
        "table-header-row": {
          pattern: RegExp("^" + tableRow + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(tableCell),
              alias: "important",
              inside: Prism4.languages.markdown,
            },
            punctuation: /\|/,
          },
        },
      },
    },
    code: [
      {
        pattern:
          /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: true,
        alias: "keyword",
      },
      {
        pattern: /^```[\s\S]*?^```$/m,
        greedy: true,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: true,
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: true,
          },
          punctuation: /```/,
        },
      },
    ],
    title: [
      {
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/,
        },
      },
      {
        pattern: /(^\s*)#.+/m,
        lookbehind: true,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/,
        },
      },
    ],
    hr: {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: "punctuation",
    },
    list: {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: "punctuation",
    },
    "url-reference": {
      pattern:
        /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true,
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/,
      },
      alias: "url",
    },
    bold: {
      pattern: createInline(
        /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
          .source
      ),
      lookbehind: true,
      greedy: true,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {},
        },
        punctuation: /\*\*|__/,
      },
    },
    italic: {
      pattern: createInline(
        /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
          .source
      ),
      lookbehind: true,
      greedy: true,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {},
        },
        punctuation: /[*_]/,
      },
    },
    strike: {
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {},
        },
        punctuation: /~~?/,
      },
    },
    "code-snippet": {
      pattern:
        /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ["code", "keyword"],
    },
    url: {
      pattern: createInline(
        /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
          .source
      ),
      lookbehind: true,
      greedy: true,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {},
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true,
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true,
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true,
        },
      },
    },
  });
  ["url", "bold", "italic", "strike"].forEach(function (token) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (
      inside
    ) {
      if (token !== inside) {
        Prism4.languages.markdown[token].inside.content.inside[inside] =
          Prism4.languages.markdown[inside];
      }
    });
  });
  Prism4.hooks.add("after-tokenize", function (env) {
    if (env.language !== "markdown" && env.language !== "md") {
      return;
    }
    function walkTokens(tokens) {
      if (!tokens || typeof tokens === "string") {
        return;
      }
      for (var i2 = 0, l2 = tokens.length; i2 < l2; i2++) {
        var token = tokens[i2];
        if (token.type !== "code") {
          walkTokens(token.content);
          continue;
        }
        var codeLang = token.content[1];
        var codeBlock2 = token.content[3];
        if (
          codeLang &&
          codeBlock2 &&
          codeLang.type === "code-language" &&
          codeBlock2.type === "code-block" &&
          typeof codeLang.content === "string"
        ) {
          var lang = codeLang.content
            .replace(/\b#/g, "sharp")
            .replace(/\b\+\+/g, "pp");
          lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
          var alias = "language-" + lang;
          if (!codeBlock2.alias) {
            codeBlock2.alias = [alias];
          } else if (typeof codeBlock2.alias === "string") {
            codeBlock2.alias = [codeBlock2.alias, alias];
          } else {
            codeBlock2.alias.push(alias);
          }
        }
      }
    }
    walkTokens(env.tokens);
  });
  Prism4.hooks.add("wrap", function (env) {
    if (env.type !== "code-block") {
      return;
    }
    var codeLang = "";
    for (var i2 = 0, l2 = env.classes.length; i2 < l2; i2++) {
      var cls = env.classes[i2];
      var match = /language-(.+)/.exec(cls);
      if (match) {
        codeLang = match[1];
        break;
      }
    }
    var grammar = Prism4.languages[codeLang];
    if (!grammar) {
      if (codeLang && codeLang !== "none" && Prism4.plugins.autoloader) {
        var id =
          "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
        env.attributes["id"] = id;
        Prism4.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);
          if (ele) {
            ele.innerHTML = Prism4.highlight(
              ele.textContent,
              Prism4.languages[codeLang],
              codeLang
            );
          }
        });
      }
    } else {
      env.content = Prism4.highlight(
        textContent(env.content),
        grammar,
        codeLang
      );
    }
  });
  var tagPattern = RegExp(Prism4.languages.markup.tag.pattern.source, "gi");
  var KNOWN_ENTITY_NAMES = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
  };
  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  function textContent(html) {
    var text = html.replace(tagPattern, "");
    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code2) {
      code2 = code2.toLowerCase();
      if (code2[0] === "#") {
        var value;
        if (code2[1] === "x") {
          value = parseInt(code2.slice(2), 16);
        } else {
          value = Number(code2.slice(1));
        }
        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code2];
        if (known) {
          return known;
        }
        return m;
      }
    });
    return text;
  }
  Prism4.languages.md = Prism4.languages.markdown;
})(Prism);

// node_modules/@uiw/react-md-editor/lib/esm/Context.js
var import_react2 = __toESM(require("react"));
function reducer(state, action) {
  return _objectSpread2(_objectSpread2({}, state), action);
}
var EditorContext = /* @__PURE__ */ import_react2.default.createContext({
  markdown: "",
});

// node_modules/@uiw/react-md-editor/lib/esm/components/TextArea/Markdown.js
var import_react3 = __toESM(require("react"));
var import_prismjs2 = __toESM(require_prism());
function Markdown(props) {
  var prefixCls = props.prefixCls,
    other = _objectWithoutProperties(props, ["prefixCls"]);
  var _useContext = (0, import_react3.useContext)(EditorContext),
    markdown = _useContext.markdown,
    highlightEnable = _useContext.highlightEnable,
    dispatch = _useContext.dispatch;
  var preRef = /* @__PURE__ */ import_react3.default.createRef();
  (0, import_react3.useEffect)(function () {
    if (preRef.current && dispatch) {
      dispatch({
        textareaPre: preRef.current,
      });
    }
  }, []);
  var highlight = function highlight2() {
    if (!preRef.current) return;
    if (highlightEnable) {
      var html = import_prismjs2.default.highlight(
        markdown,
        import_prismjs2.default.languages.markdown,
        "markdown"
      );
      preRef.current.innerHTML = "".concat(html);
    } else {
      preRef.current.innerText = "".concat(markdown);
    }
  };
  (0, import_react3.useEffect)(
    function () {
      highlight();
    },
    [markdown, preRef.current, highlightEnable]
  );
  return (0, import_react3.useMemo)(
    function () {
      return /* @__PURE__ */ import_react3.default.createElement(
        "pre",
        _extends({}, other, {
          ref: preRef,
          className: "".concat(prefixCls, "-text-pre wmde-markdown-color"),
        })
      );
    },
    [other, preRef, prefixCls]
  );
}

// node_modules/@uiw/react-md-editor/lib/esm/components/TextArea/Textarea.js
var import_react7 = __toESM(require("react"));

// node_modules/@uiw/react-md-editor/lib/esm/commands/index.js
var commands_exports = {};
__export(commands_exports, {
  TextAreaCommandOrchestrator: () => TextAreaCommandOrchestrator,
  TextAreaTextApi: () => TextAreaTextApi,
  bold: () => bold,
  checkedListCommand: () => checkedListCommand,
  code: () => code,
  codeBlock: () => codeBlock,
  codeEdit: () => codeEdit,
  codeLive: () => codeLive,
  codePreview: () => codePreview,
  divider: () => divider,
  fullscreen: () => fullscreen,
  getCommands: () => getCommands,
  getStateFromTextArea: () => getStateFromTextArea,
  group: () => group,
  hr: () => hr,
  image: () => image,
  italic: () => italic,
  link: () => link,
  orderedListCommand: () => orderedListCommand,
  quote: () => quote,
  strikethrough: () => strikethrough,
  title: () => title,
  title1: () => title1,
  title2: () => title2,
  title3: () => title3,
  title4: () => title4,
  title5: () => title5,
  title6: () => title6,
  unorderedListCommand: () => unorderedListCommand,
});

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/@uiw/react-md-editor/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false,
  });
  return Constructor;
}

// node_modules/@uiw/react-md-editor/lib/esm/commands/bold.js
var React4 = __toESM(require("react"));

// node_modules/@uiw/react-md-editor/lib/esm/utils/getSurroundingWord.js
function getSurroundingWord(text, position) {
  if (!text) throw Error("Argument 'text' should be truthy");
  var isWordDelimiter = function isWordDelimiter2(c2) {
    return c2 === " " || c2.charCodeAt(0) === 10;
  };
  var start = 0;
  var end = text.length;
  for (var i2 = position; i2 - 1 > -1; i2--) {
    if (isWordDelimiter(text[i2 - 1])) {
      start = i2;
      break;
    }
  }
  for (var _i = position; _i < text.length; _i++) {
    if (isWordDelimiter(text[_i])) {
      end = _i;
      break;
    }
  }
  return {
    start,
    end,
  };
}

// node_modules/@uiw/react-md-editor/lib/esm/utils/markdownUtils.js
function selectWord(_ref) {
  var text = _ref.text,
    selection = _ref.selection;
  if (text && text.length && selection.start === selection.end) {
    return getSurroundingWord(text, selection.start);
  }
  return selection;
}
function getBreaksNeededForEmptyLineBefore() {
  var text =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var startPosition = arguments.length > 1 ? arguments[1] : void 0;
  if (startPosition === 0) return 0;
  var neededBreaks = 2;
  var isInFirstLine = true;
  for (var i2 = startPosition - 1; i2 >= 0 && neededBreaks >= 0; i2--) {
    switch (text.charCodeAt(i2)) {
      case 32:
        continue;
      case 10:
        neededBreaks--;
        isInFirstLine = false;
        break;
      default:
        return neededBreaks;
    }
  }
  return isInFirstLine ? 0 : neededBreaks;
}
function getBreaksNeededForEmptyLineAfter() {
  var text =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var startPosition = arguments.length > 1 ? arguments[1] : void 0;
  if (startPosition === text.length - 1) return 0;
  var neededBreaks = 2;
  var isInLastLine = true;
  for (var i2 = startPosition; i2 < text.length && neededBreaks >= 0; i2++) {
    switch (text.charCodeAt(i2)) {
      case 32:
        continue;
      case 10: {
        neededBreaks--;
        isInLastLine = false;
        break;
      }
      default:
        return neededBreaks;
    }
  }
  return isInLastLine ? 0 : neededBreaks;
}

// node_modules/@uiw/react-md-editor/lib/esm/commands/bold.js
var bold = {
  name: "bold",
  keyCommand: "bold",
  shortcuts: "ctrlcmd+b",
  buttonProps: {
    "aria-label": "Add bold text",
    title: "Add bold text",
  },
  icon: /* @__PURE__ */ React4.createElement(
    "svg",
    {
      role: "img",
      width: "12",
      height: "12",
      viewBox: "0 0 384 512",
    },
    /* @__PURE__ */ React4.createElement("path", {
      fill: "currentColor",
      d: "M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z",
    })
  ),
  execute: function execute(state, api) {
    var newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var state2 = api.replaceSelection("**".concat(state1.selectedText, "**"));
    api.setSelectionRange({
      start: state2.selection.end - 2 - state1.selectedText.length,
      end: state2.selection.end - 2,
    });
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/code.js
var React5 = __toESM(require("react"));
var code = {
  name: "code",
  keyCommand: "code",
  shortcuts: "ctrlcmd+j",
  buttonProps: {
    "aria-label": "Insert code",
  },
  icon: /* @__PURE__ */ React5.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      role: "img",
      viewBox: "0 0 640 512",
    },
    /* @__PURE__ */ React5.createElement("path", {
      fill: "currentColor",
      d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z",
    })
  ),
  execute: function execute2(tate, api) {
    var newSelectionRange = selectWord({
      text: tate.text,
      selection: tate.selection,
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    if (state1.selectedText.indexOf("\n") === -1) {
      api.replaceSelection("`".concat(state1.selectedText, "`"));
      var _selectionStart = state1.selection.start + 1;
      var _selectionEnd = _selectionStart + state1.selectedText.length;
      api.setSelectionRange({
        start: _selectionStart,
        end: _selectionEnd,
      });
      return;
    }
    var breaksBeforeCount = getBreaksNeededForEmptyLineBefore(
      state1.text,
      state1.selection.start
    );
    var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
    var breaksAfterCount = getBreaksNeededForEmptyLineAfter(
      state1.text,
      state1.selection.end
    );
    var breaksAfter = Array(breaksAfterCount + 1).join("\n");
    api.replaceSelection(
      ""
        .concat(breaksBefore, "```\n")
        .concat(state1.selectedText, "\n```")
        .concat(breaksAfter)
    );
    var selectionStart = state1.selection.start + breaksBeforeCount + 4;
    var selectionEnd = selectionStart + state1.selectedText.length;
    api.setSelectionRange({
      start: selectionStart,
      end: selectionEnd,
    });
  },
};
var codeBlock = {
  name: "codeBlock",
  keyCommand: "codeBlock",
  shortcuts: "ctrlcmd+shift+j",
  execute: function execute3(tate, api) {
    var newSelectionRange = selectWord({
      text: tate.text,
      selection: tate.selection,
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var breaksBeforeCount = getBreaksNeededForEmptyLineBefore(
      state1.text,
      state1.selection.start
    );
    var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
    var breaksAfterCount = getBreaksNeededForEmptyLineAfter(
      state1.text,
      state1.selection.end
    );
    var breaksAfter = Array(breaksAfterCount + 1).join("\n");
    api.replaceSelection(
      ""
        .concat(breaksBefore, "```\n")
        .concat(state1.selectedText, "\n```")
        .concat(breaksAfter)
    );
    var selectionStart = state1.selection.start + breaksBeforeCount + 4;
    var selectionEnd = selectionStart + state1.selectedText.length;
    api.setSelectionRange({
      start: selectionStart,
      end: selectionEnd,
    });
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/italic.js
var React6 = __toESM(require("react"));
var italic = {
  name: "italic",
  keyCommand: "italic",
  shortcuts: "ctrlcmd+i",
  buttonProps: {
    "aria-label": "Add italic text",
    title: "Add italic text",
  },
  icon: /* @__PURE__ */ React6.createElement(
    "svg",
    {
      "data-name": "italic",
      width: "12",
      height: "12",
      role: "img",
      viewBox: "0 0 320 512",
    },
    /* @__PURE__ */ React6.createElement("path", {
      fill: "currentColor",
      d: "M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704 12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16 0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z",
    })
  ),
  execute: function execute4(state, api) {
    var newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var state2 = api.replaceSelection("*".concat(state1.selectedText, "*"));
    api.setSelectionRange({
      start: state2.selection.end - 1 - state1.selectedText.length,
      end: state2.selection.end - 1,
    });
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/link.js
var React7 = __toESM(require("react"));
var link = {
  name: "link",
  keyCommand: "link",
  shortcuts: "ctrlcmd+k",
  buttonProps: {
    "aria-label": "Add a link",
    title: "Add a link",
  },
  icon: /* @__PURE__ */ React7.createElement(
    "svg",
    {
      "data-name": "italic",
      width: "12",
      height: "12",
      role: "img",
      viewBox: "0 0 520 520",
    },
    /* @__PURE__ */ React7.createElement("path", {
      fill: "currentColor",
      d: "M331.751196,182.121107 C392.438214,241.974735 391.605313,337.935283 332.11686,396.871226 C332.005129,396.991316 331.873084,397.121413 331.751196,397.241503 L263.493918,464.491645 C203.291404,523.80587 105.345257,523.797864 45.151885,464.491645 C-15.0506283,405.187427 -15.0506283,308.675467 45.151885,249.371249 L82.8416853,212.237562 C92.836501,202.39022 110.049118,208.9351 110.56511,222.851476 C111.223305,240.5867 114.451306,258.404985 120.407566,275.611815 C122.424812,281.438159 120.983487,287.882964 116.565047,292.23621 L103.272145,305.332975 C74.8052033,333.379887 73.9123737,379.047937 102.098973,407.369054 C130.563883,435.969378 177.350591,436.139505 206.033884,407.879434 L274.291163,340.6393 C302.9257,312.427264 302.805844,266.827265 274.291163,238.733318 C270.531934,235.036561 266.74528,232.16442 263.787465,230.157924 C259.544542,227.2873 256.928256,222.609848 256.731165,217.542518 C256.328935,206.967633 260.13184,196.070508 268.613213,187.714278 L289.998463,166.643567 C295.606326,161.118448 304.403592,160.439942 310.906317,164.911276 C318.353355,170.034591 325.328531,175.793397 331.751196,182.121107 Z M240.704978,55.4828366 L172.447607,122.733236 C172.325719,122.853326 172.193674,122.983423 172.081943,123.103513 C117.703294,179.334654 129.953294,261.569283 185.365841,328.828764 C191.044403,335.721376 198.762988,340.914712 206.209732,346.037661 C212.712465,350.509012 221.510759,349.829503 227.117615,344.305363 L248.502893,323.234572 C256.984277,314.87831 260.787188,303.981143 260.384957,293.406218 C260.187865,288.338869 257.571576,283.661398 253.328648,280.790763 C250.370829,278.78426 246.58417,275.912107 242.824936,272.215337 C214.310216,244.121282 206.209732,204.825874 229.906702,179.334654 L298.164073,112.094263 C326.847404,83.8340838 373.633159,84.0042113 402.099123,112.604645 C430.285761,140.92587 429.393946,186.594095 400.92595,214.641114 L387.63303,227.737929 C383.214584,232.091191 381.773257,238.536021 383.790506,244.362388 C389.746774,261.569283 392.974779,279.387637 393.632975,297.122928 C394.149984,311.039357 411.361608,317.584262 421.356437,307.736882 L459.046288,270.603053 C519.249898,211.29961 519.249898,114.787281 459.047304,55.4828366 C398.853851,-3.82360914 300.907572,-3.83161514 240.704978,55.4828366 Z",
    })
  ),
  execute: function execute5(state, api) {
    var newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var state2 = api.replaceSelection(
      "[".concat(state1.selectedText, "](url)")
    );
    api.setSelectionRange({
      start: state2.selection.end - 6 - state1.selectedText.length,
      end: state2.selection.end - 6,
    });
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/list.js
var React8 = __toESM(require("react"));
function insertBeforeEachLine(selectedText, insertBefore) {
  var lines = selectedText.split(/\n/);
  var insertionLength = 0;
  var modifiedText = lines
    .map(function (item, index2) {
      if (typeof insertBefore === "string") {
        insertionLength += insertBefore.length;
        return insertBefore + item;
      } else if (typeof insertBefore === "function") {
        var insertionResult = insertBefore(item, index2);
        insertionLength += insertionResult.length;
        return insertBefore(item, index2) + item;
      }
      throw Error("insertion is expected to be either a string or a function");
    })
    .join("\n");
  return {
    modifiedText,
    insertionLength,
  };
}
var makeList = function makeList2(state, api, insertBefore) {
  var newSelectionRange = selectWord({
    text: state.text,
    selection: state.selection,
  });
  var state1 = api.setSelectionRange(newSelectionRange);
  var breaksBeforeCount = getBreaksNeededForEmptyLineBefore(
    state1.text,
    state1.selection.start
  );
  var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
  var breaksAfterCount = getBreaksNeededForEmptyLineAfter(
    state1.text,
    state1.selection.end
  );
  var breaksAfter = Array(breaksAfterCount + 1).join("\n");
  var modifiedText = insertBeforeEachLine(state1.selectedText, insertBefore);
  api.replaceSelection(
    ""
      .concat(breaksBefore)
      .concat(modifiedText.modifiedText)
      .concat(breaksAfter)
  );
  var oneLinerOffset =
    state1.selectedText.indexOf("\n") === -1 ? modifiedText.insertionLength : 0;
  var selectionStart =
    state1.selection.start + breaksBeforeCount + oneLinerOffset;
  var selectionEnd =
    selectionStart + modifiedText.modifiedText.length - oneLinerOffset;
  api.setSelectionRange({
    start: selectionStart,
    end: selectionEnd,
  });
};
var unorderedListCommand = {
  name: "unordered-list",
  keyCommand: "list",
  shortcuts: "ctrl+shift+l",
  buttonProps: {
    "aria-label": "Add unordered list",
    title: "Add unordered list",
  },
  icon: /* @__PURE__ */ React8.createElement(
    "svg",
    {
      "data-name": "unordered-list",
      width: "12",
      height: "12",
      viewBox: "0 0 512 512",
    },
    /* @__PURE__ */ React8.createElement("path", {
      fill: "currentColor",
      d: "M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    })
  ),
  execute: function execute6(state, api) {
    makeList(state, api, "- ");
  },
};
var orderedListCommand = {
  name: "ordered-list",
  keyCommand: "list",
  shortcuts: "ctrl+shift+o",
  buttonProps: {
    "aria-label": "Add ordered list",
    title: "Add ordered list",
  },
  icon: /* @__PURE__ */ React8.createElement(
    "svg",
    {
      "data-name": "ordered-list",
      width: "12",
      height: "12",
      role: "img",
      viewBox: "0 0 512 512",
    },
    /* @__PURE__ */ React8.createElement("path", {
      fill: "currentColor",
      d: "M3.263 139.527c0-7.477 3.917-11.572 11.573-11.572h15.131V88.078c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.938C32.815 33.602 36.732 32 42.785 32H54.89c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572H14.836c-7.656 0-11.573-4.095-11.573-11.572v-8.902zM2.211 304.591c0-47.278 50.955-56.383 50.955-69.165 0-7.18-5.954-8.755-9.28-8.755-3.153 0-6.479 1.051-9.455 3.852-5.079 4.903-10.507 7.004-16.111 2.451l-8.579-6.829c-5.779-4.553-7.18-9.805-2.803-15.409C13.592 201.981 26.025 192 47.387 192c19.437 0 44.476 10.506 44.476 39.573 0 38.347-46.753 46.402-48.679 56.909h39.049c7.529 0 11.557 4.027 11.557 11.382v8.755c0 7.354-4.028 11.382-11.557 11.382h-67.94c-7.005 0-12.083-4.028-12.083-11.382v-4.028zM5.654 454.61l5.603-9.28c3.853-6.654 9.105-7.004 15.584-3.152 4.903 2.101 9.63 3.152 14.359 3.152 10.155 0 14.358-3.502 14.358-8.23 0-6.654-5.604-9.106-15.934-9.106h-4.728c-5.954 0-9.28-2.101-12.258-7.88l-1.05-1.926c-2.451-4.728-1.226-9.806 2.801-14.884l5.604-7.004c6.829-8.405 12.257-13.483 12.257-13.483v-.35s-4.203 1.051-12.608 1.051H16.685c-7.53 0-11.383-4.028-11.383-11.382v-8.755c0-7.53 3.853-11.382 11.383-11.382h58.484c7.529 0 11.382 4.027 11.382 11.382v3.327c0 5.778-1.401 9.806-5.079 14.183l-17.509 20.137c19.611 5.078 28.716 20.487 28.716 34.845 0 21.363-14.358 44.126-48.503 44.126-16.636 0-28.192-4.728-35.896-9.455-5.779-4.202-6.304-9.805-2.626-15.934zM144 132h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    })
  ),
  execute: function execute7(state, api) {
    makeList(state, api, function (item, index2) {
      return "".concat(index2 + 1, ". ");
    });
  },
};
var checkedListCommand = {
  name: "checked-list",
  keyCommand: "list",
  shortcuts: "ctrl+shift+c",
  buttonProps: {
    "aria-label": "Add checked list",
    title: "Add checked list",
  },
  icon: /* @__PURE__ */ React8.createElement(
    "svg",
    {
      "data-name": "checked-list",
      width: "12",
      height: "12",
      role: "img",
      viewBox: "0 0 512 512",
    },
    /* @__PURE__ */ React8.createElement("path", {
      fill: "currentColor",
      d: "M208 132h288c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zM64 368c-26.5 0-48.6 21.5-48.6 48s22.1 48 48.6 48 48-21.5 48-48-21.5-48-48-48zm92.5-299l-72.2 72.2-15.6 15.6c-4.7 4.7-12.9 4.7-17.6 0L3.5 109.4c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.3c4.7-4.7 12.3-4.7 17 0l17 16.5c4.6 4.7 4.6 12.3-.1 17zm0 159.6l-72.2 72.2-15.7 15.7c-4.7 4.7-12.9 4.7-17.6 0L3.5 269c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.7c4.7-4.7 12.3-4.7 17 0l17 17c4.6 4.6 4.6 12.2-.1 16.9z",
    })
  ),
  execute: function execute8(state, api) {
    makeList(state, api, function (item, index2) {
      return "- [ ] ";
    });
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/quote.js
var React9 = __toESM(require("react"));
var quote = {
  name: "quote",
  keyCommand: "quote",
  shortcuts: "ctrlcmd+q",
  buttonProps: {
    "aria-label": "Insert a quote",
    title: "Insert a quote",
  },
  icon: /* @__PURE__ */ React9.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 520 520",
    },
    /* @__PURE__ */ React9.createElement("path", {
      fill: "currentColor",
      d: "M520,95.75 L520,225.75 C520,364.908906 457.127578,437.050625 325.040469,472.443125 C309.577578,476.586875 294.396016,464.889922 294.396016,448.881641 L294.396016,414.457031 C294.396016,404.242891 300.721328,395.025078 310.328125,391.554687 C377.356328,367.342187 414.375,349.711094 414.375,274.5 L341.25,274.5 C314.325781,274.5 292.5,252.674219 292.5,225.75 L292.5,95.75 C292.5,68.8257812 314.325781,47 341.25,47 L471.25,47 C498.174219,47 520,68.8257812 520,95.75 Z M178.75,47 L48.75,47 C21.8257813,47 0,68.8257812 0,95.75 L0,225.75 C0,252.674219 21.8257813,274.5 48.75,274.5 L121.875,274.5 C121.875,349.711094 84.8563281,367.342187 17.828125,391.554687 C8.22132813,395.025078 1.89601563,404.242891 1.89601563,414.457031 L1.89601563,448.881641 C1.89601563,464.889922 17.0775781,476.586875 32.5404687,472.443125 C164.627578,437.050625 227.5,364.908906 227.5,225.75 L227.5,95.75 C227.5,68.8257812 205.674219,47 178.75,47 Z",
    })
  ),
  execute: function execute9(state, api) {
    var newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var breaksBeforeCount = getBreaksNeededForEmptyLineBefore(
      state1.text,
      state1.selection.start
    );
    var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
    var breaksAfterCount = getBreaksNeededForEmptyLineAfter(
      state1.text,
      state1.selection.end
    );
    var breaksAfter = Array(breaksAfterCount + 1).join("\n");
    api.replaceSelection(
      ""
        .concat(breaksBefore, "> ")
        .concat(state1.selectedText)
        .concat(breaksAfter)
    );
    var selectionStart = state1.selection.start + breaksBeforeCount + 2;
    var selectionEnd = selectionStart + state1.selectedText.length;
    api.setSelectionRange({
      start: selectionStart,
      end: selectionEnd,
    });
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/hr.js
var React10 = __toESM(require("react"));
var hr = {
  name: "hr",
  keyCommand: "hr",
  shortcuts: "ctrlcmd+h",
  buttonProps: {
    "aria-label": "Insert HR",
    title: "Insert HR",
  },
  icon: /* @__PURE__ */ React10.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 175 175",
    },
    /* @__PURE__ */ React10.createElement("path", {
      fill: "currentColor",
      d: "M0,129 L175,129 L175,154 L0,154 L0,129 Z M3,9 L28.2158203,9 L28.2158203,47.9824219 L55.7695313,47.9824219 L55.7695313,9 L81.0966797,9 L81.0966797,107.185547 L55.7695313,107.185547 L55.7695313,68.0214844 L28.2158203,68.0214844 L28.2158203,107.185547 L3,107.185547 L3,9 Z M93.1855469,100.603516 L93.1855469,19 L135.211914,19 C143.004922,19 148.960917,19.6679621 153.080078,21.0039063 C157.199239,22.3398504 160.520495,24.8168764 163.043945,28.4350586 C165.567395,32.0532407 166.829102,36.459935 166.829102,41.6552734 C166.829102,46.1826398 165.864267,50.0883625 163.93457,53.3725586 C162.004873,56.6567547 159.351579,59.3193257 155.974609,61.3603516 C153.822255,62.6591862 150.872089,63.7353473 147.124023,64.5888672 C150.129898,65.5908253 152.319329,66.5927684 153.692383,67.5947266 C154.620122,68.2626987 155.965323,69.6913953 157.728027,71.8808594 C159.490731,74.0703234 160.668942,75.7587831 161.262695,76.9462891 L173,100.603516 L144.953125,100.603516 L131.482422,75.6660156 C129.775382,72.4374839 128.253913,70.3408251 126.917969,69.3759766 C125.0996,68.1142515 123.040051,67.4833984 120.739258,67.4833984 L118.512695,67.4833984 L118.512695,100.603516 L93.1855469,100.603516 Z M118.512695,52.0644531 L129.144531,52.0644531 C130.294928,52.0644531 132.521468,51.6933631 135.824219,50.9511719 C137.494149,50.6171858 138.857905,49.7636787 139.915527,48.390625 C140.97315,47.0175713 141.501953,45.4404386 141.501953,43.6591797 C141.501953,41.0244009 140.667001,39.0019602 138.99707,37.5917969 C137.32714,36.1816336 134.191429,35.4765625 129.589844,35.4765625 L117.512695,35.4765625 L118.512695,52.0644531 Z",
      transform: "translate(0 9)",
    })
  ),
  execute: function execute10(state, api) {
    api.replaceSelection("".concat(state.selectedText, "\n\n----------\n\n"));
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/title.js
var import_react4 = __toESM(require("react"));

// node_modules/@uiw/react-md-editor/lib/esm/commands/title2.js
var React11 = __toESM(require("react"));
var title2 = {
  name: "title2",
  keyCommand: "title2",
  shortcuts: "ctrlcmd+2",
  buttonProps: {
    "aria-label": "Insert title2",
    title: "Insert title 2",
  },
  icon: /* @__PURE__ */ React11.createElement(
    "div",
    {
      style: {
        fontSize: 16,
        textAlign: "left",
      },
    },
    "Title 2"
  ),
  execute: function execute11(state, api) {
    var modifyText = "## ".concat(state.selectedText, "\n");
    if (!state.selectedText) {
      modifyText = "## ";
    }
    api.replaceSelection(modifyText);
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/title.js
var title = _objectSpread2(
  _objectSpread2({}, title2),
  {},
  {
    icon: /* @__PURE__ */ import_react4.default.createElement(
      "svg",
      {
        width: "12",
        height: "12",
        viewBox: "0 0 520 520",
      },
      /* @__PURE__ */ import_react4.default.createElement("path", {
        fill: "currentColor",
        d: "M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z",
      })
    ),
  }
);

// node_modules/@uiw/react-md-editor/lib/esm/commands/title1.js
var import_react5 = __toESM(require("react"));
var title1 = {
  name: "title1",
  keyCommand: "title1",
  shortcuts: "ctrlcmd+1",
  buttonProps: {
    "aria-label": "Insert title 1",
    title: "Insert title 1",
  },
  icon: /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      style: {
        fontSize: 18,
        textAlign: "left",
      },
    },
    "Title 1"
  ),
  execute: function execute12(state, api) {
    var modifyText = "# ".concat(state.selectedText, "\n");
    if (!state.selectedText) {
      modifyText = "# ";
    }
    api.replaceSelection(modifyText);
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/title3.js
var React14 = __toESM(require("react"));
var title3 = {
  name: "title3",
  keyCommand: "title3",
  shortcuts: "ctrlcmd+3",
  buttonProps: {
    "aria-label": "Insert title3",
    title: "Insert title 3",
  },
  icon: /* @__PURE__ */ React14.createElement(
    "div",
    {
      style: {
        fontSize: 15,
        textAlign: "left",
      },
    },
    "Title 3"
  ),
  execute: function execute13(state, api) {
    var modifyText = "### ".concat(state.selectedText, "\n");
    if (!state.selectedText) {
      modifyText = "### ";
    }
    api.replaceSelection(modifyText);
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/title4.js
var React15 = __toESM(require("react"));
var title4 = {
  name: "title4",
  keyCommand: "title4",
  shortcuts: "ctrlcmd+4",
  buttonProps: {
    "aria-label": "Insert title4",
    title: "Insert title 4",
  },
  icon: /* @__PURE__ */ React15.createElement(
    "div",
    {
      style: {
        fontSize: 14,
        textAlign: "left",
      },
    },
    "Title 4"
  ),
  execute: function execute14(state, api) {
    var modifyText = "#### ".concat(state.selectedText, "\n");
    if (!state.selectedText) {
      modifyText = "#### ";
    }
    api.replaceSelection(modifyText);
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/title5.js
var React16 = __toESM(require("react"));
var title5 = {
  name: "title5",
  keyCommand: "title5",
  shortcuts: "ctrlcmd+5",
  buttonProps: {
    "aria-label": "Insert title5",
    title: "Insert title 5",
  },
  icon: /* @__PURE__ */ React16.createElement(
    "div",
    {
      style: {
        fontSize: 12,
        textAlign: "left",
      },
    },
    "Title 5"
  ),
  execute: function execute15(state, api) {
    var modifyText = "##### ".concat(state.selectedText, "\n");
    if (!state.selectedText) {
      modifyText = "##### ";
    }
    api.replaceSelection(modifyText);
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/title6.js
var React17 = __toESM(require("react"));
var title6 = {
  name: "title6",
  keyCommand: "title6",
  shortcuts: "ctrlcmd+6",
  buttonProps: {
    "aria-label": "Insert title6",
    title: "Insert title 6",
  },
  icon: /* @__PURE__ */ React17.createElement(
    "div",
    {
      style: {
        fontSize: 12,
        textAlign: "left",
      },
    },
    "Title 6"
  ),
  execute: function execute16(state, api) {
    var modifyText = "###### ".concat(state.selectedText, "\n");
    if (!state.selectedText) {
      modifyText = "###### ";
    }
    api.replaceSelection(modifyText);
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/comment.js
var comment = {
  name: "comment",
  keyCommand: "comment",
  shortcuts: "ctrlcmd+/",
  execute: function execute17(state, api) {
    var newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var state2 = api.replaceSelection(
      "<!-- ".concat(state1.selectedText, " -->")
    );
    api.setSelectionRange({
      start: state2.selection.end - 4 - state1.selectedText.length,
      end: state2.selection.end - 4,
    });
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/group.js
var import_react6 = __toESM(require("react"));
var group = function group2(arr, options) {
  return _objectSpread2(
    _objectSpread2(
      {
        children: arr,
        icon: /* @__PURE__ */ import_react6.default.createElement(
          "svg",
          {
            width: "12",
            height: "12",
            viewBox: "0 0 520 520",
          },
          /* @__PURE__ */ import_react6.default.createElement("path", {
            fill: "currentColor",
            d: "M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z",
          })
        ),
        execute: function execute24() {},
      },
      options
    ),
    {},
    {
      keyCommand: "group",
    }
  );
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/divider.js
var divider = {
  keyCommand: "divider",
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/preview.js
var React19 = __toESM(require("react"));
var codePreview = {
  name: "preview",
  keyCommand: "preview",
  value: "preview",
  buttonProps: {
    "aria-label": "Preview code",
    title: "Preview code",
  },
  icon: /* @__PURE__ */ React19.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 520 520",
    },
    /* @__PURE__ */ React19.createElement("polygon", {
      fill: "currentColor",
      points:
        "0 71.293 0 122 38.023 123 38.023 398 0 397 0 449.707 91.023 450.413 91.023 72.293",
    }),
    /* @__PURE__ */ React19.createElement("polygon", {
      fill: "currentColor",
      points:
        "148.023 72.293 520 71.293 520 122 200.023 124 200.023 397 520 396 520 449.707 148.023 450.413",
    })
  ),
  execute: function execute18() {},
};
var codeEdit = {
  name: "edit",
  keyCommand: "preview",
  value: "edit",
  buttonProps: {
    "aria-label": "Edit code",
    title: "Edit code",
  },
  icon: /* @__PURE__ */ React19.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 520 520",
    },
    /* @__PURE__ */ React19.createElement("polygon", {
      fill: "currentColor",
      points:
        "0 71.293 0 122 319 122 319 397 0 397 0 449.707 372 449.413 372 71.293",
    }),
    /* @__PURE__ */ React19.createElement("polygon", {
      fill: "currentColor",
      points:
        "429 71.293 520 71.293 520 122 481 123 481 396 520 396 520 449.707 429 449.413",
    })
  ),
  execute: function execute19() {},
};
var codeLive = {
  name: "live",
  keyCommand: "preview",
  value: "live",
  buttonProps: {
    "aria-label": "Live code",
    title: "Live code",
  },
  icon: /* @__PURE__ */ React19.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 520 520",
    },
    /* @__PURE__ */ React19.createElement("polygon", {
      fill: "currentColor",
      points:
        "0 71.293 0 122 179 122 179 397 0 397 0 449.707 232 449.413 232 71.293",
    }),
    /* @__PURE__ */ React19.createElement("polygon", {
      fill: "currentColor",
      points:
        "289 71.293 520 71.293 520 122 341 123 341 396 520 396 520 449.707 289 449.413",
    })
  ),
  execute: function execute20() {},
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/fullscreen.js
var React20 = __toESM(require("react"));
var fullscreen = {
  name: "fullscreen",
  keyCommand: "fullscreen",
  buttonProps: {
    "aria-label": "fullscreen",
    title: "fullscreen",
  },
  icon: /* @__PURE__ */ React20.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 520 520",
    },
    /* @__PURE__ */ React20.createElement("path", {
      fill: "currentColor",
      d: "M118 171.133334L118 342.200271C118 353.766938 126.675 365.333605 141.133333 365.333605L382.634614 365.333605C394.201281 365.333605 405.767948 356.658605 405.767948 342.200271L405.767948 171.133334C405.767948 159.566667 397.092948 148 382.634614 148L141.133333 148C126.674999 148 117.999999 156.675 118 171.133334zM465.353591 413.444444L370 413.444444 370 471.222222 474.0221 471.222222C500.027624 471.222222 520.254143 451 520.254143 425L520.254143 321 462.464089 321 462.464089 413.444444 465.353591 413.444444zM471.0221 43L367 43 367 100.777778 462.353591 100.777778 462.353591 196.111111 520.143647 196.111111 520.143647 89.2222219C517.254144 63.2222219 497.027624 43 471.0221 43zM57.7900547 100.777778L153.143646 100.777778 153.143646 43 46.2320439 43C20.2265191 43 0 63.2222219 0 89.2222219L0 193.222222 57.7900547 193.222222 57.7900547 100.777778zM57.7900547 321L0 321 0 425C0 451 20.2265191 471.222222 46.2320439 471.222223L150.254143 471.222223 150.254143 413.444445 57.7900547 413.444445 57.7900547 321z",
    })
  ),
  execute: function execute21() {},
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/image.js
var React21 = __toESM(require("react"));
var image = {
  name: "image",
  keyCommand: "image",
  shortcuts: "ctrlcmd+i",
  buttonProps: {
    "aria-label": "Add image",
    title: "Add image",
  },
  icon: /* @__PURE__ */ React21.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 20 20",
    },
    /* @__PURE__ */ React21.createElement("path", {
      fill: "currentColor",
      d: "M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z",
    })
  ),
  execute: function execute22(state, api) {
    var newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var imageTemplate =
      state1.selectedText || "https://example.com/your-image.png";
    api.replaceSelection("![](".concat(imageTemplate, ")"));
    api.setSelectionRange({
      start: 4 + state1.selection.start,
      end: 4 + state1.selection.start + imageTemplate.length,
    });
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/strikeThrough.js
var React22 = __toESM(require("react"));
var strikethrough = {
  name: "strikethrough",
  keyCommand: "strikethrough",
  shortcuts: "ctrl+shift+x",
  buttonProps: {
    "aria-label": "Add strikethrough text",
    title: "Add strikethrough text",
  },
  icon: /* @__PURE__ */ React22.createElement(
    "svg",
    {
      "data-name": "strikethrough",
      width: "12",
      height: "12",
      role: "img",
      viewBox: "0 0 512 512",
    },
    /* @__PURE__ */ React22.createElement("path", {
      fill: "currentColor",
      d: "M496 288H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16zm-214.666 16c27.258 12.937 46.524 28.683 46.524 56.243 0 33.108-28.977 53.676-75.621 53.676-32.325 0-76.874-12.08-76.874-44.271V368c0-8.837-7.164-16-16-16H113.75c-8.836 0-16 7.163-16 16v19.204c0 66.845 77.717 101.82 154.487 101.82 88.578 0 162.013-45.438 162.013-134.424 0-19.815-3.618-36.417-10.143-50.6H281.334zm-30.952-96c-32.422-13.505-56.836-28.946-56.836-59.683 0-33.92 30.901-47.406 64.962-47.406 42.647 0 64.962 16.593 64.962 32.985V136c0 8.837 7.164 16 16 16h45.613c8.836 0 16-7.163 16-16v-30.318c0-52.438-71.725-79.875-142.575-79.875-85.203 0-150.726 40.972-150.726 125.646 0 22.71 4.665 41.176 12.777 56.547h129.823z",
    })
  ),
  execute: function execute23(state, api) {
    var newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var state2 = api.replaceSelection("~~".concat(state1.selectedText, "~~"));
    api.setSelectionRange({
      start: state2.selection.end - 2 - state1.selectedText.length,
      end: state2.selection.end - 2,
    });
  },
};

// node_modules/@uiw/react-md-editor/lib/esm/utils/InsertTextAtPosition.js
var browserSupportsTextareaTextNodes;
function canManipulateViaTextNodes(input) {
  if (input.nodeName !== "TEXTAREA") {
    return false;
  }
  if (typeof browserSupportsTextareaTextNodes === "undefined") {
    var textarea = document.createElement("textarea");
    textarea.value = "1";
    browserSupportsTextareaTextNodes = !!textarea.firstChild;
  }
  return browserSupportsTextareaTextNodes;
}
var InsertTextAtPosition_default = function (input, text) {
  input.focus();
  if (document.selection) {
    var ieRange = document.selection.createRange();
    ieRange.text = text;
    ieRange.collapse(false);
    ieRange.select();
    return;
  }
  var isSuccess = document.execCommand("insertText", false, text);
  if (!isSuccess) {
    var start = input.selectionStart;
    var end = input.selectionEnd;
    if (typeof input.setRangeText === "function") {
      input.setRangeText(text);
    } else {
      var range = document.createRange();
      var textNode = document.createTextNode(text);
      if (canManipulateViaTextNodes(input)) {
        var node = input.firstChild;
        if (!node) {
          input.appendChild(textNode);
        } else {
          var offset = 0;
          var startNode = null;
          var endNode = null;
          while (node && (startNode === null || endNode === null)) {
            var nodeLength = node.nodeValue.length;
            if (start >= offset && start <= offset + nodeLength) {
              range.setStart((startNode = node), start - offset);
            }
            if (end >= offset && end <= offset + nodeLength) {
              range.setEnd((endNode = node), end - offset);
            }
            offset += nodeLength;
            node = node.nextSibling;
          }
          if (start !== end) {
            range.deleteContents();
          }
        }
      }
      if (
        canManipulateViaTextNodes(input) &&
        range.commonAncestorContainer.nodeName === "#text"
      ) {
        range.insertNode(textNode);
      } else {
        var value = input.value;
        input.value = value.slice(0, start) + text + value.slice(end);
      }
    }
    input.setSelectionRange(start + text.length, start + text.length);
    var e2 = document.createEvent("UIEvent");
    e2.initEvent("input", true, false);
    input.dispatchEvent(e2);
  }
};

// node_modules/@uiw/react-md-editor/lib/esm/commands/index.js
var getCommands = function getCommands2() {
  return [
    comment,
    bold,
    italic,
    strikethrough,
    hr,
    title,
    divider,
    link,
    quote,
    code,
    codeBlock,
    image,
    divider,
    unorderedListCommand,
    orderedListCommand,
    checkedListCommand,
    divider,
    codeEdit,
    codeLive,
    codePreview,
    divider,
    fullscreen,
  ];
};
function getStateFromTextArea(textArea) {
  return {
    selection: {
      start: textArea.selectionStart,
      end: textArea.selectionEnd,
    },
    text: textArea.value,
    selectedText: textArea.value.slice(
      textArea.selectionStart,
      textArea.selectionEnd
    ),
  };
}
var TextAreaTextApi = /* @__PURE__ */ (function () {
  function TextAreaTextApi2(textArea) {
    _classCallCheck(this, TextAreaTextApi2);
    this.textArea = void 0;
    this.textArea = textArea;
  }
  _createClass(TextAreaTextApi2, [
    {
      key: "replaceSelection",
      value: function replaceSelection(text) {
        InsertTextAtPosition_default(this.textArea, text);
        return getStateFromTextArea(this.textArea);
      },
    },
    {
      key: "setSelectionRange",
      value: function setSelectionRange(selection) {
        this.textArea.focus();
        this.textArea.selectionStart = selection.start;
        this.textArea.selectionEnd = selection.end;
        return getStateFromTextArea(this.textArea);
      },
    },
  ]);
  return TextAreaTextApi2;
})();
var TextAreaCommandOrchestrator = /* @__PURE__ */ (function () {
  function TextAreaCommandOrchestrator2(textArea) {
    _classCallCheck(this, TextAreaCommandOrchestrator2);
    this.textArea = void 0;
    this.textApi = void 0;
    this.textArea = textArea;
    this.textApi = new TextAreaTextApi(textArea);
  }
  _createClass(TextAreaCommandOrchestrator2, [
    {
      key: "getState",
      value: function getState() {
        if (!this.textArea) return false;
        return getStateFromTextArea(this.textArea);
      },
    },
    {
      key: "executeCommand",
      value: function executeCommand(command) {
        command.execute &&
          command.execute(getStateFromTextArea(this.textArea), this.textApi);
      },
    },
  ]);
  return TextAreaCommandOrchestrator2;
})();

// node_modules/@uiw/react-md-editor/lib/esm/components/TextArea/handleKeyDown.js
function stopPropagation(e2) {
  e2.stopPropagation();
  e2.preventDefault();
}
function handleKeyDown(e2) {
  var tabSize =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  var target = e2.target;
  var starVal = target.value.substr(0, target.selectionStart);
  var valArr = starVal.split("\n");
  var currentLineStr = valArr[valArr.length - 1];
  var textArea = new TextAreaTextApi(target);
  if (e2.code && e2.code.toLowerCase() === "tab") {
    stopPropagation(e2);
    var space = new Array(tabSize + 1).join("  ");
    if (target.selectionStart !== target.selectionEnd) {
      var _star = target.value.substring(0, target.selectionStart).split("\n");
      var _end = target.value.substring(0, target.selectionEnd).split("\n");
      var modifiedTextLine = [];
      _end.forEach(function (item, idx) {
        if (item !== _star[idx]) {
          modifiedTextLine.push(item);
        }
      });
      var modifiedText = modifiedTextLine.join("\n");
      var oldSelectText = target.value.substring(
        target.selectionStart,
        target.selectionEnd
      );
      var newStarNum = target.value.substring(0, target.selectionStart).length;
      textArea.setSelectionRange({
        start: target.value.indexOf(modifiedText),
        end: target.selectionEnd,
      });
      var modifiedTextObj = insertBeforeEachLine(
        modifiedText,
        e2.shiftKey ? "" : space
      );
      var text = modifiedTextObj.modifiedText;
      if (e2.shiftKey) {
        text = text
          .split("\n")
          .map(function (item) {
            return item.replace(new RegExp("^".concat(space)), "");
          })
          .join("\n");
      }
      textArea.replaceSelection(text);
      var startTabSize = e2.shiftKey ? -tabSize : tabSize;
      var endTabSize = e2.shiftKey
        ? -modifiedTextLine.length * tabSize
        : modifiedTextLine.length * tabSize;
      textArea.setSelectionRange({
        start: newStarNum + startTabSize,
        end: newStarNum + oldSelectText.length + endTabSize,
      });
    } else {
      return InsertTextAtPosition_default(target, space);
    }
  } else if (
    e2.code &&
    e2.code.toLowerCase() === "enter" &&
    (/^(-|\*)\s/.test(currentLineStr) || /^\d+.\s/.test(currentLineStr))
  ) {
    stopPropagation(e2);
    var startStr = "\n- ";
    if (currentLineStr.startsWith("*")) {
      startStr = "\n* ";
    }
    if (/^\d+.\s/.test(currentLineStr)) {
      startStr = "\n".concat(parseInt(currentLineStr) + 1, ". ");
    }
    return InsertTextAtPosition_default(target, startStr);
  }
}

// node_modules/@uiw/react-md-editor/lib/esm/components/TextArea/shortcuts.js
function getCommands3() {
  var data =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var resulte =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  data.forEach(function (item) {
    if (item.children && Array.isArray(item.children)) {
      resulte = _objectSpread2(
        _objectSpread2({}, resulte),
        getCommands3(item.children || [])
      );
    } else if (item.keyCommand && item.shortcuts && item.execute) {
      resulte[item.shortcuts.toLocaleLowerCase()] = item;
    }
  });
  return resulte;
}
function shortcutsHandle(e2) {
  var commands =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var commandOrchestrator = arguments.length > 2 ? arguments[2] : void 0;
  var data = getCommands3(commands || []);
  var shortcuts = [];
  if (e2.altKey) {
    shortcuts.push("alt");
  }
  if (e2.shiftKey) {
    shortcuts.push("shift");
  }
  if (e2.metaKey) {
    shortcuts.push("cmd");
  }
  if (e2.ctrlKey) {
    shortcuts.push("ctrl");
  }
  if (
    shortcuts.length > 0 &&
    !/(control|alt|meta|shift)/.test(e2.key.toLocaleLowerCase())
  ) {
    shortcuts.push(e2.key.toLocaleLowerCase());
  }
  if (shortcuts.length < 2) {
    return;
  }
  var equal = !!data[shortcuts.join("+")];
  var command = equal ? data[shortcuts.join("+")] : void 0;
  Object.keys(data).forEach(function (item) {
    var isequal = item.split("+").every(function (v2) {
      if (/ctrlcmd/.test(v2)) {
        return shortcuts.includes("ctrl") || shortcuts.includes("cmd");
      }
      return shortcuts.includes(v2);
    });
    if (isequal) {
      command = data[item];
    }
  });
  if (command && commandOrchestrator) {
    e2.stopPropagation();
    e2.preventDefault();
    commandOrchestrator.executeCommand(command);
    return;
  }
}

// node_modules/@uiw/react-md-editor/lib/esm/components/TextArea/Textarea.js
function Textarea(props) {
  var prefixCls = props.prefixCls,
    other = _objectWithoutProperties(props, ["prefixCls"]);
  var _useContext = (0, import_react7.useContext)(EditorContext),
    markdown = _useContext.markdown,
    commands = _useContext.commands,
    commandOrchestrator = _useContext.commandOrchestrator,
    tabSize = _useContext.tabSize,
    _onChange = _useContext.onChange,
    dispatch = _useContext.dispatch;
  var textRef = /* @__PURE__ */ import_react7.default.createRef();
  var executeRef = import_react7.default.useRef();
  (0, import_react7.useEffect)(function () {
    if (textRef.current && dispatch) {
      var _commandOrchestrator = new TextAreaCommandOrchestrator(
        textRef.current
      );
      executeRef.current = _commandOrchestrator;
      dispatch({
        textarea: textRef.current,
        commandOrchestrator: _commandOrchestrator,
      });
    }
  }, []);
  return (0, import_react7.useMemo)(
    function () {
      return /* @__PURE__ */ import_react7.default.createElement(
        "textarea",
        _extends({}, other, {
          ref: textRef,
          className: "".concat(prefixCls, "-text-input"),
          value: markdown,
          onScroll: props.onScroll,
          onKeyDown: function onKeyDown(e2) {
            handleKeyDown(e2, tabSize);
            shortcutsHandle(e2, commands, executeRef.current);
          },
          onChange: function onChange(e2) {
            dispatch &&
              dispatch({
                markdown: e2.target.value,
              });
            _onChange && _onChange(e2.target.value);
          },
        })
      );
    },
    [markdown]
  );
}

// node_modules/@uiw/react-md-editor/lib/esm/components/TextArea/index.js
function TextArea(props) {
  var _ref = props || {},
    prefixCls = _ref.prefixCls,
    className = _ref.className,
    onScroll = _ref.onScroll;
  var _useContext = (0, import_react8.useContext)(EditorContext),
    scrollTop = _useContext.scrollTop,
    dispatch = _useContext.dispatch;
  var warp = /* @__PURE__ */ import_react8.default.createRef();
  (0, import_react8.useEffect)(function () {
    var state = {};
    if (warp.current) {
      state.textareaWarp = warp.current || void 0;
      warp.current.scrollTop = scrollTop || 0;
    }
    if (dispatch) {
      dispatch(_objectSpread2({}, state));
    }
  }, []);
  return (0, import_react8.useMemo)(function () {
    return /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        ref: warp,
        className: "".concat(prefixCls, "-aree ").concat(className || ""),
        onScroll,
      },
      /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          className: "".concat(prefixCls, "-text"),
        },
        /* @__PURE__ */ import_react8.default.createElement(Markdown, {
          prefixCls,
        }),
        /* @__PURE__ */ import_react8.default.createElement(Textarea, {
          prefixCls,
        })
      )
    );
  }, []);
}

// node_modules/@uiw/react-md-editor/lib/esm/components/Toolbar/index.js
var import_react10 = __toESM(require("react"));

// node_modules/@uiw/react-md-editor/lib/esm/components/Toolbar/Child.js
var import_react9 = __toESM(require("react"));
function Child(props) {
  var _ref = props || {},
    prefixCls = _ref.prefixCls,
    groupName = _ref.groupName,
    commands = _ref.commands,
    children = _ref.children;
  var _useContext = (0, import_react9.useContext)(EditorContext),
    _useContext$barPopup = _useContext.barPopup,
    barPopup = _useContext$barPopup === void 0 ? {} : _useContext$barPopup;
  return (0, import_react9.useMemo)(
    function () {
      return /* @__PURE__ */ import_react9.default.createElement(
        "div",
        {
          className: ""
            .concat(prefixCls, "-toolbar-child ")
            .concat(groupName && barPopup[groupName] ? "active" : ""),
          onClick: function onClick(e2) {
            return e2.stopPropagation();
          },
        },
        Array.isArray(commands)
          ? /* @__PURE__ */ import_react9.default.createElement(
              Toolbar,
              _extends(
                {
                  commands,
                },
                props
              )
            )
          : children
      );
    },
    [commands, barPopup, groupName, prefixCls]
  );
}

// node_modules/@uiw/react-md-editor/lib/esm/components/Toolbar/index.js
function Toolbar() {
  var props =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var prefixCls = props.prefixCls;
  var _useContext = (0, import_react10.useContext)(EditorContext),
    commands = _useContext.commands,
    fullscreen2 = _useContext.fullscreen,
    preview = _useContext.preview,
    _useContext$barPopup = _useContext.barPopup,
    barPopup = _useContext$barPopup === void 0 ? {} : _useContext$barPopup,
    commandOrchestrator = _useContext.commandOrchestrator,
    dispatch = _useContext.dispatch;
  function handleClick(command, name) {
    if (!dispatch) return;
    var state = {
      barPopup: _objectSpread2({}, barPopup),
    };
    if (command.keyCommand === "preview") {
      state.preview = command.value;
    }
    if (command.keyCommand === "fullscreen") {
      state.fullscreen = !fullscreen2;
      document.body.style.overflow = fullscreen2 ? "initial" : "hidden";
    }
    if (commands && command.keyCommand === "group") {
      commands.forEach(function (item) {
        if (name === item.groupName) {
          state.barPopup[name] = true;
        } else if (item.keyCommand) {
          state.barPopup[item.groupName] = false;
        }
      });
    } else if (name) {
      Object.keys(state.barPopup || {}).forEach(function (keyName) {
        state.barPopup[keyName] = false;
      });
    }
    if (Object.keys(state).length) {
      dispatch(_objectSpread2({}, state));
    }
    commandOrchestrator && commandOrchestrator.executeCommand(command);
  }
  return /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      className: "".concat(prefixCls, "-toolbar"),
    },
    /* @__PURE__ */ import_react10.default.createElement(
      "ul",
      null,
      (props.commands || commands || []).map(function (item, idx) {
        if (item.keyCommand === "divider") {
          return /* @__PURE__ */ import_react10.default.createElement(
            "li",
            _extends(
              {
                key: idx,
              },
              item.liProps,
              {
                className: "".concat(prefixCls, "-toolbar-divider"),
              }
            )
          );
        }
        if (!item.keyCommand)
          return /* @__PURE__ */ import_react10.default.createElement(
            import_react10.Fragment,
            null
          );
        var activeBtn =
          (fullscreen2 && item.keyCommand === "fullscreen") ||
          (item.keyCommand === "preview" && preview === item.value);
        var childNode =
          typeof item.children === "function"
            ? item.children({
                getState: function getState() {
                  return commandOrchestrator.getState();
                },
                textApi: commandOrchestrator
                  ? commandOrchestrator.textApi
                  : void 0,
                close: function close() {
                  return handleClick({}, item.groupName);
                },
                execute: function execute24() {
                  return handleClick({
                    execute: item.execute,
                  });
                },
              })
            : void 0;
        var disabled =
          barPopup &&
          preview &&
          preview === "preview" &&
          !/(preview|fullscreen)/.test(item.keyCommand);
        return /* @__PURE__ */ import_react10.default.createElement(
          "li",
          _extends(
            {
              key: idx,
            },
            item.liProps,
            {
              className: activeBtn ? "active" : "",
            }
          ),
          !item.buttonProps && item.icon,
          item.buttonProps &&
            /* @__PURE__ */ import_react10.default.createElement(
              "button",
              _objectSpread2(
                _objectSpread2(
                  {
                    type: "button",
                    disabled,
                    "data-name": item.name,
                  },
                  item.buttonProps
                ),
                {},
                {
                  onClick: function onClick(evn) {
                    evn.stopPropagation();
                    handleClick(item, item.groupName);
                  },
                }
              ),
              item.icon
            ),
          item.children &&
            /* @__PURE__ */ import_react10.default.createElement(Child, {
              groupName: item.groupName,
              prefixCls,
              children: childNode,
              commands:
                Array.isArray(item.children) &&
                typeof item.children !== "function"
                  ? item.children
                  : void 0,
            })
        );
      })
    )
  );
}

// node_modules/@uiw/react-md-editor/lib/esm/components/DragBar/index.js
var import_react11 = __toESM(require("react"));
var DragBar = function DragBar2(props) {
  var _ref = props || {},
    prefixCls = _ref.prefixCls,
    onChange = _ref.onChange;
  var dragRef = (0, import_react11.useRef)();
  function handleMouseMove(event) {
    if (dragRef.current) {
      var newHeight =
        dragRef.current.height + event.clientY - dragRef.current.dragY;
      if (newHeight >= props.minHeight && newHeight <= props.maxHeight) {
        onChange &&
          onChange(
            dragRef.current.height + (event.clientY - dragRef.current.dragY)
          );
      }
    }
  }
  function handleMouseUp() {
    dragRef.current = void 0;
  }
  function handleMouseDown(event) {
    dragRef.current = {
      height: props.height,
      dragY: event.clientY,
    };
  }
  (0, import_react11.useEffect)(function () {
    if (document) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return function () {
      if (document) {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, []);
  var svg = (0, import_react11.useMemo)(function () {
    return /* @__PURE__ */ import_react11.default.createElement(
      "svg",
      {
        viewBox: "0 0 512 512",
        height: "100%",
      },
      /* @__PURE__ */ import_react11.default.createElement("path", {
        fill: "currentColor",
        d: "M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z",
      })
    );
  }, []);
  return /* @__PURE__ */ import_react11.default.createElement(
    "div",
    {
      className: "".concat(prefixCls, "-bar"),
      onMouseDown: handleMouseDown,
    },
    svg
  );
};
var DragBar_default = DragBar;

// node_modules/@uiw/react-md-editor/lib/esm/Editor.js
function setGroupPopFalse() {
  var data =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Object.keys(data).forEach(function (keyname) {
    data[keyname] = false;
  });
  return data;
}
var InternalMDEditor = function InternalMDEditor2(props, ref) {
  var _ref = props || {},
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? "w-md-editor" : _ref$prefixCls,
    className = _ref.className,
    propsValue = _ref.value,
    _ref$commands = _ref.commands,
    commands = _ref$commands === void 0 ? getCommands() : _ref$commands,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 200 : _ref$height,
    _ref$visiableDragbar = _ref.visiableDragbar,
    visiableDragbar =
      _ref$visiableDragbar === void 0 ? true : _ref$visiableDragbar,
    _ref$highlightEnable = _ref.highlightEnable,
    highlightEnable =
      _ref$highlightEnable === void 0 ? true : _ref$highlightEnable,
    _ref$preview = _ref.preview,
    previewType = _ref$preview === void 0 ? "live" : _ref$preview,
    _ref$fullscreen = _ref.fullscreen,
    fullscreen2 = _ref$fullscreen === void 0 ? false : _ref$fullscreen,
    _ref$previewOptions = _ref.previewOptions,
    previewOptions = _ref$previewOptions === void 0 ? {} : _ref$previewOptions,
    textareaProps = _ref.textareaProps,
    _ref$maxHeight = _ref.maxHeight,
    maxHeight = _ref$maxHeight === void 0 ? 1200 : _ref$maxHeight,
    _ref$minHeight = _ref.minHeight,
    minHeight = _ref$minHeight === void 0 ? 100 : _ref$minHeight,
    autoFocus = _ref.autoFocus,
    _ref$tabSize = _ref.tabSize,
    tabSize = _ref$tabSize === void 0 ? 2 : _ref$tabSize,
    onChange = _ref.onChange,
    hideToolbar = _ref.hideToolbar,
    other = _objectWithoutProperties(_ref, [
      "prefixCls",
      "className",
      "value",
      "commands",
      "height",
      "visiableDragbar",
      "highlightEnable",
      "preview",
      "fullscreen",
      "previewOptions",
      "textareaProps",
      "maxHeight",
      "minHeight",
      "autoFocus",
      "tabSize",
      "onChange",
      "hideToolbar",
    ]);
  var _useReducer = (0, import_react12.useReducer)(reducer, {
      markdown: propsValue,
      preview: previewType,
      height,
      highlightEnable,
      tabSize,
      scrollTop: 0,
      scrollTopPreview: 0,
      commands,
      fullscreen: fullscreen2,
      onChange,
      barPopup: {},
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var container = (0, import_react12.useRef)(null);
  var previewRef = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(function () {
    var stateInit = {};
    if (container.current) {
      stateInit.container = container.current || void 0;
    }
    stateInit.markdown = propsValue || "";
    stateInit.barPopup = {};
    if (dispatch) {
      dispatch(_objectSpread2(_objectSpread2({}, state), stateInit));
    }
  }, []);
  var cls = [
    className,
    prefixCls,
    state.preview ? "".concat(prefixCls, "-show-").concat(state.preview) : null,
    state.fullscreen ? "".concat(prefixCls, "-fullscreen") : null,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();
  (0, import_react12.useMemo)(
    function () {
      return (
        propsValue !== state.markdown &&
        dispatch({
          markdown: propsValue,
        })
      );
    },
    [propsValue]
  );
  (0, import_react12.useMemo)(
    function () {
      return (
        previewType !== state.preview &&
        dispatch({
          preview: previewType,
        })
      );
    },
    [previewType]
  );
  (0, import_react12.useMemo)(
    function () {
      return (
        height !== state.height &&
        dispatch({
          height,
        })
      );
    },
    [height]
  );
  (0, import_react12.useMemo)(
    function () {
      return (
        tabSize !== state.tabSize &&
        dispatch({
          tabSize,
        })
      );
    },
    [tabSize]
  );
  (0, import_react12.useMemo)(
    function () {
      return (
        highlightEnable !== state.highlightEnable &&
        dispatch({
          highlightEnable,
        })
      );
    },
    [highlightEnable]
  );
  (0, import_react12.useMemo)(
    function () {
      return (
        autoFocus !== state.autoFocus &&
        dispatch({
          autoFocus,
        })
      );
    },
    [autoFocus]
  );
  (0, import_react12.useMemo)(
    function () {
      return (
        fullscreen2 !== state.fullscreen &&
        dispatch({
          fullscreen: fullscreen2,
        })
      );
    },
    [fullscreen2]
  );
  var textareaDomRef = (0, import_react12.useRef)();
  var previewDomRef = (0, import_react12.useRef)();
  var active = (0, import_react12.useRef)();
  (0, import_react12.useMemo)(
    function () {
      if (previewRef.current) {
        previewDomRef.current = previewRef.current.mdp.current || void 0;
      }
    },
    [previewRef.current]
  );
  (0, import_react12.useMemo)(
    function () {
      textareaDomRef.current = state.textareaWarp;
      if (state.textareaWarp) {
        state.textareaWarp.addEventListener("mouseover", function () {
          active.current = "text";
        });
        state.textareaWarp.addEventListener("mouseleave", function () {
          active.current = "preview";
        });
      }
    },
    [state.textareaWarp]
  );
  function handleScroll(e2) {
    var textareaDom = textareaDomRef.current;
    var previewDom = previewDomRef.current;
    if (textareaDom && previewDom) {
      var scale =
        (textareaDom.scrollHeight - textareaDom.offsetHeight) /
        (previewDom.scrollHeight - previewDom.offsetHeight);
      if (e2.target === textareaDom && active.current === "text") {
        previewDom.scrollTop = textareaDom.scrollTop / scale;
      }
      if (e2.target === previewDom && active.current === "preview") {
        textareaDom.scrollTop = previewDom.scrollTop * scale;
      }
      var scrollTop = 0;
      if (active.current === "text") {
        scrollTop = textareaDom.scrollTop || 0;
      } else if (active.current === "preview") {
        scrollTop = previewDom.scrollTop || 0;
      }
      dispatch({
        scrollTop,
      });
    }
  }
  return /* @__PURE__ */ import_react12.default.createElement(
    EditorContext.Provider,
    {
      value: _objectSpread2(
        _objectSpread2({}, state),
        {},
        {
          dispatch,
        }
      ),
    },
    /* @__PURE__ */ import_react12.default.createElement(
      "div",
      _extends(
        {
          ref: container,
          className: cls,
          onClick: function onClick() {
            dispatch({
              barPopup: _objectSpread2({}, setGroupPopFalse(state.barPopup)),
            });
          },
          style: {
            height: state.fullscreen
              ? "100%"
              : hideToolbar
              ? Number(state.height) - 29
              : state.height,
          },
        },
        other
      ),
      !hideToolbar &&
        /* @__PURE__ */ import_react12.default.createElement(Toolbar, {
          prefixCls,
        }),
      /* @__PURE__ */ import_react12.default.createElement(
        "div",
        {
          className: "".concat(prefixCls, "-content"),
          style: {
            height: state.fullscreen
              ? "calc(100% - 29px)"
              : Number(state.height) - 29,
          },
        },
        /(edit|live)/.test(state.preview || "") &&
          /* @__PURE__ */ import_react12.default.createElement(
            TextArea,
            _extends(
              {
                className: "".concat(prefixCls, "-input"),
                prefixCls,
                autoFocus,
              },
              textareaProps,
              {
                onScroll: handleScroll,
              }
            )
          ),
        /(live|preview)/.test(state.preview || "") &&
          /* @__PURE__ */ import_react12.default.createElement(
            esm_default,
            _extends({}, previewOptions, {
              onScroll: handleScroll,
              ref: previewRef,
              source: state.markdown || "",
              className: "".concat(prefixCls, "-preview"),
            })
          )
      ),
      visiableDragbar &&
        !state.fullscreen &&
        /* @__PURE__ */ import_react12.default.createElement(DragBar_default, {
          prefixCls,
          height: state.height,
          maxHeight,
          minHeight,
          onChange: function onChange2(newHeight) {
            dispatch({
              height: newHeight,
            });
          },
        })
    )
  );
};
var MDEditor =
  /* @__PURE__ */ import_react12.default.forwardRef(InternalMDEditor);
MDEditor.Markdown = esm_default;
var Editor_default = MDEditor;

// node_modules/@uiw/react-md-editor/lib/esm/index.js
var esm_default2 = Editor_default;

// src/MediaLib/index.jsx
var import_react13 = __toESM(require("react"));
var import_helper_plugin = require("@strapi/helper-plugin");
var import_prop_types = __toESM(require_prop_types());
var MediaLib = ({ isOpen, onChange, onToggle }) => {
  const { components } = (0, import_helper_plugin.useLibrary)();
  const MediaLibraryDialog = components["media-library"];
  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: (0, import_helper_plugin.prefixFileUrlWithBackendUrl)(f.url),
      mime: f.mime,
    }));
    onChange(formattedFiles);
  };
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ import_react13.default.createElement(
    MediaLibraryDialog,
    {
      onClose: onToggle,
      onSelectAssets: handleSelectAssets,
    }
  );
};
MediaLib.defaultProps = {
  isOpen: false,
  onChange: () => {},
  onToggle: () => {},
};
MediaLib.propTypes = {
  isOpen: import_prop_types.default.bool,
  onChange: import_prop_types.default.func,
  onToggle: import_prop_types.default.func,
};
var MediaLib_default = MediaLib;

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_react_is = __toESM(require_react_is());
var import_react14 = __toESM(require("react"));
var import_shallowequal = __toESM(require_shallowequal());

// node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min(W2) {
  function M2(d2, c2, e2, h2, a2) {
    for (
      var m = 0,
        b2 = 0,
        v2 = 0,
        n2 = 0,
        q2,
        g2,
        x2 = 0,
        K2 = 0,
        k2,
        u2 = (k2 = q2 = 0),
        l2 = 0,
        r2 = 0,
        I2 = 0,
        t2 = 0,
        B3 = e2.length,
        J2 = B3 - 1,
        y2,
        f = "",
        p = "",
        F3 = "",
        G3 = "",
        C;
      l2 < B3;

    ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 &&
        0 !== b2 + n2 + v2 + m &&
        (0 !== b2 && (g2 = 47 === b2 ? 10 : 47), (n2 = v2 = m = 0), B3++, J2++);
      if (0 === b2 + n2 + v2 + m) {
        if (
          l2 === J2 &&
          (0 < r2 && (f = f.replace(N2, "")), 0 < f.trim().length)
        ) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f = f.trim();
            q2 = f.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch ((g2 = e2.charCodeAt(l2))) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch ((g2 = e2.charCodeAt(l2 + 1))) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (
                                42 === g2 &&
                                42 === e2.charCodeAt(u2 - 1) &&
                                l2 + 2 !== u2
                              ) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g2) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {}
              }
              if (0 === k2) break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            0 === q2 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f = f.replace(N2, ""));
                g2 = f.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O;
                }
                k2 = M2(c2, r2, k2, g2, a2 + 1);
                t2 = k2.length;
                0 < A2 &&
                  ((r2 = X2(O, f, I2)),
                  (C = H2(3, k2, r2, c2, D2, z2, t2, g2, a2, h2)),
                  (f = r2.join("")),
                  void 0 !== C &&
                    0 === (t2 = (k2 = C.trim()).length) &&
                    ((g2 = 0), (k2 = "")));
                if (0 < t2)
                  switch (g2) {
                    case 115:
                      f = f.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f + "{" + k2 + "}";
                      break;
                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k2 = f + "{" + k2 + "}";
                      k2 =
                        1 === w2 || (2 === w2 && L2("@" + k2, 3))
                          ? "@-webkit-" + k2 + "@" + k2
                          : "@" + k2;
                      break;
                    default:
                      (k2 = f + k2), 112 === h2 && (k2 = ((p += k2), ""));
                  }
                else k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f, I2), k2, h2, a2 + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f = (0 < r2 ? f.replace(N2, "") : f).trim();
            if (1 < (t2 = f.length))
              switch (
                (0 === u2 &&
                  ((q2 = f.charCodeAt(0)),
                  45 === q2 || (96 < q2 && 123 > q2)) &&
                  (t2 = (f = f.replace(" ", ":")).length),
                0 < A2 &&
                  void 0 !==
                    (C = H2(1, f, c2, d2, D2, z2, p.length, h2, a2, h2)) &&
                  0 === (t2 = (f = C.trim()).length) &&
                  (f = "\0\0"),
                (q2 = f.charCodeAt(0)),
                (g2 = f.charCodeAt(1)),
                q2)
              ) {
                case 0:
                  break;
                case 64:
                  if (105 === g2 || 99 === g2) {
                    G3 += f + e2.charAt(l2);
                    break;
                  }
                default:
                  58 !== f.charCodeAt(t2 - 1) &&
                    (p += P2(f, q2, g2, f.charCodeAt(2)));
              }
            I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          47 === b2
            ? (b2 = 0)
            : 0 === 1 + q2 &&
              107 !== h2 &&
              0 < f.length &&
              ((r2 = 1), (f += "\0"));
          0 < A2 * Y2 && H2(0, f, c2, d2, D2, z2, p.length, h2, a2, h2);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (0 === b2 + n2 + v2 + m) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (0 === n2 + m + b2)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    32 !== g2 && (y2 = " ");
                }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              0 === n2 + b2 + m && ((r2 = I2 = 1), (y2 = "\f" + y2));
              break;
            case 108:
              if (0 === n2 + b2 + m + E2 && 0 < u2)
                switch (l2 - u2) {
                  case 2:
                    112 === x2 && 58 === e2.charCodeAt(l2 - 3) && (E2 = x2);
                  case 8:
                    111 === K2 && (E2 = K2);
                }
              break;
            case 58:
              0 === n2 + b2 + m && (u2 = l2);
              break;
            case 44:
              0 === b2 + v2 + n2 + m && ((r2 = 1), (y2 += "\r"));
              break;
            case 34:
            case 39:
              0 === b2 && (n2 = n2 === g2 ? 0 : 0 === n2 ? g2 : n2);
              break;
            case 91:
              0 === n2 + b2 + v2 && m++;
              break;
            case 93:
              0 === n2 + b2 + v2 && m--;
              break;
            case 41:
              0 === n2 + b2 + m && v2--;
              break;
            case 40:
              if (0 === n2 + b2 + m) {
                if (0 === q2)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              0 === b2 + v2 + n2 + m + u2 + k2 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m + v2))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        (t2 = l2), (b2 = 42);
                    }
                    break;
                  case 42:
                    47 === g2 &&
                      42 === x2 &&
                      t2 + 2 !== l2 &&
                      (33 === e2.charCodeAt(t2 + 2) &&
                        (p += e2.substring(t2, l2 + 1)),
                      (y2 = ""),
                      (b2 = 0));
                }
          }
          0 === b2 && (f += y2);
      }
      K2 = x2;
      x2 = g2;
      l2++;
    }
    t2 = p.length;
    if (0 < t2) {
      r2 = c2;
      if (
        0 < A2 &&
        ((C = H2(2, p, r2, d2, D2, z2, t2, h2, a2, h2)),
        void 0 !== C && 0 === (p = C).length)
      )
        return G3 + p + F3;
      p = r2.join(",") + "{" + p + "}";
      if (0 !== w2 * E2) {
        2 !== w2 || L2(p, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;
          case 112:
            p =
              p.replace(Q2, "::-webkit-input-$1") +
              p.replace(Q2, "::-moz-$1") +
              p.replace(Q2, ":-ms-input-$1") +
              p;
        }
        E2 = 0;
      }
    }
    return G3 + p + F3;
  }
  function X2(d2, c2, e2) {
    var h2 = c2.trim().split(ia);
    c2 = h2;
    var a2 = h2.length,
      m = d2.length;
    switch (m) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = 0 === m ? "" : d2[0] + " "; b2 < a2; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v2 = (b2 = 0);
        for (c2 = []; b2 < a2; ++b2) {
          for (var n2 = 0; n2 < m; ++n2) {
            c2[v2++] = Z2(d2[n2] + " ", h2[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h2 = c2.charCodeAt(0);
    33 > h2 && (h2 = (c2 = c2.trim()).charCodeAt(0));
    switch (h2) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f"))
          return c2.replace(
            F2,
            (58 === d2.charCodeAt(0) ? "" : "$1") + d2.trim()
          );
    }
    return d2 + c2;
  }
  function P2(d2, c2, e2, h2) {
    var a2 = d2 + ";",
      m = 2 * c2 + 3 * e2 + 4 * h2;
    if (944 === m) {
      d2 = a2.indexOf(":", 9) + 1;
      var b2 = a2.substring(d2, a2.length - 1).trim();
      b2 = a2.substring(0, d2).trim() + b2 + ";";
      return 1 === w2 || (2 === w2 && L2(b2, 1)) ? "-webkit-" + b2 + b2 : b2;
    }
    if (0 === w2 || (2 === w2 && !L2(a2, 1))) return a2;
    switch (m) {
      case 1015:
        return 97 === a2.charCodeAt(10) ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return 116 === a2.charCodeAt(3) ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return 110 === a2.charCodeAt(5) ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (100 !== a2.charCodeAt(4)) break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (45 === a2.charCodeAt(8)) return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11))
          return a2.replace(ja, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (45 === a2.charCodeAt(4))
          switch (a2.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                a2.replace("-grow", "") +
                "-webkit-" +
                a2 +
                "-ms-" +
                a2.replace("grow", "positive") +
                a2
              );
            case 115:
              return (
                "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2
              );
            case 98:
              return (
                "-webkit-" +
                a2 +
                "-ms-" +
                a2.replace("basis", "preferred-size") +
                a2
              );
          }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (99 !== a2.charCodeAt(8)) break;
        b2 = a2
          .substring(a2.indexOf(":", 15))
          .replace("flex-", "")
          .replace("space-between", "justify");
        return (
          "-webkit-box-pack" + b2 + "-webkit-" + a2 + "-ms-flex-pack" + b2 + a2
        );
      case 1005:
        return ka.test(a2)
          ? a2.replace(aa, ":-webkit-") + a2.replace(aa, ":-moz-") + a2
          : a2;
      case 1e3:
        b2 = a2.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a2.replace(G2, "tb");
            break;
          case 232:
            b2 = a2.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a2.replace(G2, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b2 + a2;
      case 1017:
        if (-1 === a2.indexOf("sticky", 9)) break;
      case 975:
        c2 = (a2 = d2).length - 10;
        b2 = (33 === a2.charCodeAt(c2) ? a2.substring(0, c2) : a2)
          .substring(d2.indexOf(":", 7) + 1)
          .trim();
        switch ((m = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0))) {
          case 203:
            if (111 > b2.charCodeAt(8)) break;
          case 115:
            a2 = a2.replace(b2, "-webkit-" + b2) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 =
              a2.replace(b2, "-webkit-" + (102 < m ? "inline-" : "") + "box") +
              ";" +
              a2.replace(b2, "-webkit-" + b2) +
              ";" +
              a2.replace(b2, "-ms-" + b2 + "box") +
              ";" +
              a2;
        }
        return a2 + ";";
      case 938:
        if (45 === a2.charCodeAt(5))
          switch (a2.charCodeAt(6)) {
            case 105:
              return (
                (b2 = a2.replace("-items", "")),
                "-webkit-" + a2 + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a2
              );
            case 115:
              return (
                "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba, "") + a2
              );
            default:
              return (
                "-webkit-" +
                a2 +
                "-ms-flex-line-pack" +
                a2.replace("align-content", "").replace(ba, "") +
                a2
              );
          }
        break;
      case 973:
      case 989:
        if (45 !== a2.charCodeAt(3) || 122 === a2.charCodeAt(4)) break;
      case 931:
      case 953:
        if (true === la.test(d2))
          return 115 === (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0)
            ? P2(d2.replace("stretch", "fill-available"), c2, e2, h2).replace(
                ":fill-available",
                ":stretch"
              )
            : a2.replace(b2, "-webkit-" + b2) +
                a2.replace(b2, "-moz-" + b2.replace("fill-", "")) +
                a2;
        break;
      case 962:
        if (
          ((a2 =
            "-webkit-" +
            a2 +
            (102 === a2.charCodeAt(5) ? "-ms-" + a2 : "") +
            a2),
          211 === e2 + h2 &&
            105 === a2.charCodeAt(13) &&
            0 < a2.indexOf("transform", 10))
        )
          return (
            a2
              .substring(0, a2.indexOf(";", 27) + 1)
              .replace(ma, "$1-webkit-$2") + a2
          );
    }
    return a2;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(1 === c2 ? ":" : "{"),
      h2 = d2.substring(0, 3 !== c2 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R2(2 !== c2 ? h2 : h2.replace(na, "$1"), e2, c2);
  }
  function ea(d2, c2) {
    var e2 = P2(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";"
      ? e2.replace(oa, " or ($1)").substring(4)
      : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h2, a2, m, b2, v2, n2, q2) {
    for (var g2 = 0, x2 = c2, w3; g2 < A2; ++g2) {
      switch ((w3 = S2[g2].call(B2, d2, x2, e2, h2, a2, m, b2, v2, n2, q2))) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c2) return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if ("function" === typeof d2) S2[A2++] = d2;
        else if ("object" === typeof d2)
          for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
            T2(d2[c2]);
          }
        else Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    void 0 !== d2 &&
      ((R2 = null),
      d2
        ? "function" !== typeof d2
          ? (w2 = 1)
          : ((w2 = 2), (R2 = d2))
        : (w2 = 0));
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A2) {
      var h2 = H2(-1, c2, e2, e2, D2, z2, 0, 0, 0, 0);
      void 0 !== h2 && "string" === typeof h2 && (c2 = h2);
    }
    var a2 = M2(O, e2, c2, 0, 0);
    0 < A2 &&
      ((h2 = H2(-2, a2, e2, e2, D2, z2, a2.length, 0, 0, 0)),
      void 0 !== h2 && (a2 = h2));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a2;
  }
  var ca = /^\0+/g,
    N2 = /[\0\r\f]/g,
    aa = /: */g,
    ka = /zoo|gra/,
    ma = /([,: ])(transform)/g,
    ia = /,\r+?/g,
    F2 = /([\t\r\n ])*\f?&/g,
    fa = /@(k\w+)\s*(\S*)\s*/,
    Q2 = /::(place)/g,
    ha = /:(read-only)/g,
    G2 = /[svh]\w+-[tblr]{2}/,
    da = /\(\s*(.*)\s*\)/g,
    oa = /([\s\S]*?);/g,
    ba = /-self|flex-/g,
    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    la = /stretch|:\s*\w+\-(?:conte|avail)/,
    ja = /([^-])(image-set\()/,
    z2 = 1,
    D2 = 1,
    E2 = 0,
    w2 = 1,
    O = [],
    S2 = [],
    A2 = 0,
    R2 = null,
    Y2 = 0,
    V2 = "";
  B2.use = T2;
  B2.set = U2;
  void 0 !== W2 && U2(W2);
  return B2;
}
var stylis_browser_esm_default = stylis_min;

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var memoize_browser_esm_default = memoize;

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var reactPropsRegex =
  /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index = memoize_browser_esm_default(function (prop) {
  return (
    reactPropsRegex.test(prop) ||
    (prop.charCodeAt(0) === 111 &&
      prop.charCodeAt(1) === 110 &&
      prop.charCodeAt(2) < 91)
  );
});
var is_prop_valid_browser_esm_default = index;

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_hoist_non_react_statics = __toESM(
  require_hoist_non_react_statics_cjs()
);
function v() {
  return (v =
    Object.assign ||
    function (e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }).apply(this, arguments);
}
var g = function (e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1)
    n2.push(t2[r2], e2[r2 + 1]);
  return n2;
};
var S = function (t2) {
  return (
    null !== t2 &&
    "object" == typeof t2 &&
    "[object Object]" ===
      (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) &&
    !(0, import_react_is.typeOf)(t2)
  );
};
var w = Object.freeze([]);
var E = Object.freeze({});
function b(e2) {
  return "function" == typeof e2;
}
function _(e2) {
  return (
    ("string" == typeof e2 && e2) || e2.displayName || e2.name || "Component"
  );
}
function N(e2) {
  return e2 && "string" == typeof e2.styledComponentId;
}
var A =
  ("undefined" != typeof process &&
    (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
  "data-styled";
var I = "undefined" != typeof window && "HTMLElement" in window;
var P = Boolean(
  "boolean" == typeof SC_DISABLE_SPEEDY
    ? SC_DISABLE_SPEEDY
    : "undefined" != typeof process &&
      void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
      "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
    ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
      process.env.REACT_APP_SC_DISABLE_SPEEDY
    : "undefined" != typeof process &&
      void 0 !== process.env.SC_DISABLE_SPEEDY &&
      "" !== process.env.SC_DISABLE_SPEEDY
    ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY
    : true
);
var R = true
  ? {
      1: "Cannot create styled-component for component: %s.\n\n",
      2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
      3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
      4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
      5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
      6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
      7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
      8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
      9: "Missing document `<head>`\n\n",
      10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
      11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
      12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
      13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
      14: 'ThemeProvider: "theme" prop is required.\n\n',
      15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
      16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
      17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
    }
  : {};
function D() {
  for (
    var e2 = arguments.length <= 0 ? void 0 : arguments[0],
      t2 = [],
      n2 = 1,
      r2 = arguments.length;
    n2 < r2;
    n2 += 1
  )
    t2.push(n2 < 0 || arguments.length <= n2 ? void 0 : arguments[n2]);
  return (
    t2.forEach(function (t3) {
      e2 = e2.replace(/%[a-z]/, t3);
    }),
    e2
  );
}
function j(e2) {
  for (
    var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1;
    r2 < t2;
    r2++
  )
    n2[r2 - 1] = arguments[r2];
  throw false
    ? new Error(
        "An error occurred. See https://git.io/JUIaE#" +
          e2 +
          " for more information." +
          (n2.length > 0 ? " Args: " + n2.join(", ") : "")
      )
    : new Error(D.apply(void 0, [R[e2]].concat(n2)).trim());
}
var T = (function () {
  function e2(e3) {
    (this.groupSizes = new Uint32Array(512)),
      (this.length = 512),
      (this.tag = e3);
  }
  var t2 = e2.prototype;
  return (
    (t2.indexOfGroup = function (e3) {
      for (var t3 = 0, n2 = 0; n2 < e3; n2++) t3 += this.groupSizes[n2];
      return t3;
    }),
    (t2.insertRules = function (e3, t3) {
      if (e3 >= this.groupSizes.length) {
        for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; )
          (o2 <<= 1) < 0 && j(16, "" + e3);
        (this.groupSizes = new Uint32Array(o2)),
          this.groupSizes.set(n2),
          (this.length = o2);
        for (var s2 = r2; s2 < o2; s2++) this.groupSizes[s2] = 0;
      }
      for (
        var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length;
        a2 < c2;
        a2++
      )
        this.tag.insertRule(i2, t3[a2]) && (this.groupSizes[e3]++, i2++);
    }),
    (t2.clearGroup = function (e3) {
      if (e3 < this.length) {
        var t3 = this.groupSizes[e3],
          n2 = this.indexOfGroup(e3),
          r2 = n2 + t3;
        this.groupSizes[e3] = 0;
        for (var o2 = n2; o2 < r2; o2++) this.tag.deleteRule(n2);
      }
    }),
    (t2.getGroup = function (e3) {
      var t3 = "";
      if (e3 >= this.length || 0 === this.groupSizes[e3]) return t3;
      for (
        var n2 = this.groupSizes[e3],
          r2 = this.indexOfGroup(e3),
          o2 = r2 + n2,
          s2 = r2;
        s2 < o2;
        s2++
      )
        t3 += this.tag.getRule(s2) + "/*!sc*/\n";
      return t3;
    }),
    e2
  );
})();
var x = /* @__PURE__ */ new Map();
var k = /* @__PURE__ */ new Map();
var V = 1;
var B = function (e2) {
  if (x.has(e2)) return x.get(e2);
  for (; k.has(V); ) V++;
  var t2 = V++;
  return (
    ((0 | t2) < 0 || t2 > 1 << 30) && j(16, "" + t2),
    x.set(e2, t2),
    k.set(t2, e2),
    t2
  );
};
var z = function (e2) {
  return k.get(e2);
};
var M = function (e2, t2) {
  t2 >= V && (V = t2 + 1), x.set(e2, t2), k.set(t2, e2);
};
var G = "style[" + A + '][data-styled-version="5.3.3"]';
var L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var F = function (e2, t2, n2) {
  for (var r2, o2 = n2.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++)
    (r2 = o2[s2]) && e2.registerName(t2, r2);
};
var Y = function (e2, t2) {
  for (
    var n2 = (t2.textContent || "").split("/*!sc*/\n"),
      r2 = [],
      o2 = 0,
      s2 = n2.length;
    o2 < s2;
    o2++
  ) {
    var i2 = n2[o2].trim();
    if (i2) {
      var a2 = i2.match(L);
      if (a2) {
        var c2 = 0 | parseInt(a2[1], 10),
          u2 = a2[2];
        0 !== c2 &&
          (M(u2, c2), F(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)),
          (r2.length = 0);
      } else r2.push(i2);
    }
  }
};
var q = function () {
  return "undefined" != typeof window && void 0 !== window.__webpack_nonce__
    ? window.__webpack_nonce__
    : null;
};
var H = function (e2) {
  var t2 = document.head,
    n2 = e2 || t2,
    r2 = document.createElement("style"),
    o2 = (function (e3) {
      for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
        var r3 = t3[n3];
        if (r3 && 1 === r3.nodeType && r3.hasAttribute(A)) return r3;
      }
    })(n2),
    s2 = void 0 !== o2 ? o2.nextSibling : null;
  r2.setAttribute(A, "active"), r2.setAttribute("data-styled-version", "5.3.3");
  var i2 = q();
  return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
};
var $ = (function () {
  function e2(e3) {
    var t3 = (this.element = H(e3));
    t3.appendChild(document.createTextNode("")),
      (this.sheet = (function (e4) {
        if (e4.sheet) return e4.sheet;
        for (
          var t4 = document.styleSheets, n2 = 0, r2 = t4.length;
          n2 < r2;
          n2++
        ) {
          var o2 = t4[n2];
          if (o2.ownerNode === e4) return o2;
        }
        j(17);
      })(t3)),
      (this.length = 0);
  }
  var t2 = e2.prototype;
  return (
    (t2.insertRule = function (e3, t3) {
      try {
        return this.sheet.insertRule(t3, e3), this.length++, true;
      } catch (e4) {
        return false;
      }
    }),
    (t2.deleteRule = function (e3) {
      this.sheet.deleteRule(e3), this.length--;
    }),
    (t2.getRule = function (e3) {
      var t3 = this.sheet.cssRules[e3];
      return void 0 !== t3 && "string" == typeof t3.cssText ? t3.cssText : "";
    }),
    e2
  );
})();
var W = (function () {
  function e2(e3) {
    var t3 = (this.element = H(e3));
    (this.nodes = t3.childNodes), (this.length = 0);
  }
  var t2 = e2.prototype;
  return (
    (t2.insertRule = function (e3, t3) {
      if (e3 <= this.length && e3 >= 0) {
        var n2 = document.createTextNode(t3),
          r2 = this.nodes[e3];
        return this.element.insertBefore(n2, r2 || null), this.length++, true;
      }
      return false;
    }),
    (t2.deleteRule = function (e3) {
      this.element.removeChild(this.nodes[e3]), this.length--;
    }),
    (t2.getRule = function (e3) {
      return e3 < this.length ? this.nodes[e3].textContent : "";
    }),
    e2
  );
})();
var U = (function () {
  function e2(e3) {
    (this.rules = []), (this.length = 0);
  }
  var t2 = e2.prototype;
  return (
    (t2.insertRule = function (e3, t3) {
      return (
        e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true)
      );
    }),
    (t2.deleteRule = function (e3) {
      this.rules.splice(e3, 1), this.length--;
    }),
    (t2.getRule = function (e3) {
      return e3 < this.length ? this.rules[e3] : "";
    }),
    e2
  );
})();
var J = I;
var X = { isServer: !I, useCSSOMInjection: !P };
var Z = (function () {
  function e2(e3, t3, n2) {
    void 0 === e3 && (e3 = E),
      void 0 === t3 && (t3 = {}),
      (this.options = v({}, X, {}, e3)),
      (this.gs = t3),
      (this.names = new Map(n2)),
      (this.server = !!e3.isServer),
      !this.server &&
        I &&
        J &&
        ((J = false),
        (function (e4) {
          for (
            var t4 = document.querySelectorAll(G), n3 = 0, r2 = t4.length;
            n3 < r2;
            n3++
          ) {
            var o2 = t4[n3];
            o2 &&
              "active" !== o2.getAttribute(A) &&
              (Y(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
          }
        })(this));
  }
  e2.registerId = function (e3) {
    return B(e3);
  };
  var t2 = e2.prototype;
  return (
    (t2.reconstructWithOptions = function (t3, n2) {
      return (
        void 0 === n2 && (n2 = true),
        new e2(
          v({}, this.options, {}, t3),
          this.gs,
          (n2 && this.names) || void 0
        )
      );
    }),
    (t2.allocateGSInstance = function (e3) {
      return (this.gs[e3] = (this.gs[e3] || 0) + 1);
    }),
    (t2.getTag = function () {
      return (
        this.tag ||
        (this.tag =
          ((n2 = (t3 = this.options).isServer),
          (r2 = t3.useCSSOMInjection),
          (o2 = t3.target),
          (e3 = n2 ? new U(o2) : r2 ? new $(o2) : new W(o2)),
          new T(e3)))
      );
      var e3, t3, n2, r2, o2;
    }),
    (t2.hasNameForId = function (e3, t3) {
      return this.names.has(e3) && this.names.get(e3).has(t3);
    }),
    (t2.registerName = function (e3, t3) {
      if ((B(e3), this.names.has(e3))) this.names.get(e3).add(t3);
      else {
        var n2 = /* @__PURE__ */ new Set();
        n2.add(t3), this.names.set(e3, n2);
      }
    }),
    (t2.insertRules = function (e3, t3, n2) {
      this.registerName(e3, t3), this.getTag().insertRules(B(e3), n2);
    }),
    (t2.clearNames = function (e3) {
      this.names.has(e3) && this.names.get(e3).clear();
    }),
    (t2.clearRules = function (e3) {
      this.getTag().clearGroup(B(e3)), this.clearNames(e3);
    }),
    (t2.clearTag = function () {
      this.tag = void 0;
    }),
    (t2.toString = function () {
      return (function (e3) {
        for (
          var t3 = e3.getTag(), n2 = t3.length, r2 = "", o2 = 0;
          o2 < n2;
          o2++
        ) {
          var s2 = z(o2);
          if (void 0 !== s2) {
            var i2 = e3.names.get(s2),
              a2 = t3.getGroup(o2);
            if (i2 && a2 && i2.size) {
              var c2 = A + ".g" + o2 + '[id="' + s2 + '"]',
                u2 = "";
              void 0 !== i2 &&
                i2.forEach(function (e4) {
                  e4.length > 0 && (u2 += e4 + ",");
                }),
                (r2 += "" + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n');
            }
          }
        }
        return r2;
      })(this);
    }),
    e2
  );
})();
var K = /(a)(d)/gi;
var Q = function (e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function ee(e2) {
  var t2,
    n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = (t2 / 52) | 0) n2 = Q(t2 % 52) + n2;
  return (Q(t2 % 52) + n2).replace(K, "$1-$2");
}
var te = function (e2, t2) {
  for (var n2 = t2.length; n2; ) e2 = (33 * e2) ^ t2.charCodeAt(--n2);
  return e2;
};
var ne = function (e2) {
  return te(5381, e2);
};
function re(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (b(n2) && !N(n2)) return false;
  }
  return true;
}
var oe = ne("5.3.3");
var se = (function () {
  function e2(e3, t2, n2) {
    (this.rules = e3),
      (this.staticRulesId = ""),
      (this.isStatic = false),
      (this.componentId = t2),
      (this.baseHash = te(oe, t2)),
      (this.baseStyle = n2),
      Z.registerId(t2);
  }
  return (
    (e2.prototype.generateAndInjectStyles = function (e3, t2, n2) {
      var r2 = this.componentId,
        o2 = [];
      if (
        (this.baseStyle &&
          o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)),
        this.isStatic && !n2.hash)
      )
        if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId))
          o2.push(this.staticRulesId);
        else {
          var s2 = Ne(this.rules, e3, t2, n2).join(""),
            i2 = ee(te(this.baseHash, s2) >>> 0);
          if (!t2.hasNameForId(r2, i2)) {
            var a2 = n2(s2, "." + i2, void 0, r2);
            t2.insertRules(r2, i2, a2);
          }
          o2.push(i2), (this.staticRulesId = i2);
        }
      else {
        for (
          var c2 = this.rules.length,
            u2 = te(this.baseHash, n2.hash),
            l2 = "",
            d2 = 0;
          d2 < c2;
          d2++
        ) {
          var h2 = this.rules[d2];
          if ("string" == typeof h2) (l2 += h2), (u2 = te(u2, h2 + d2));
          else if (h2) {
            var p = Ne(h2, e3, t2, n2),
              f = Array.isArray(p) ? p.join("") : p;
            (u2 = te(u2, f + d2)), (l2 += f);
          }
        }
        if (l2) {
          var m = ee(u2 >>> 0);
          if (!t2.hasNameForId(r2, m)) {
            var y2 = n2(l2, "." + m, void 0, r2);
            t2.insertRules(r2, m, y2);
          }
          o2.push(m);
        }
      }
      return o2.join(" ");
    }),
    e2
  );
})();
var ie = /^\s*\/\/.*$/gm;
var ae = [":", "[", ".", "#"];
function ce(e2) {
  var t2,
    n2,
    r2,
    o2,
    s2 = void 0 === e2 ? E : e2,
    i2 = s2.options,
    a2 = void 0 === i2 ? E : i2,
    c2 = s2.plugins,
    u2 = void 0 === c2 ? w : c2,
    l2 = new stylis_browser_esm_default(a2),
    d2 = [],
    h2 = (function (e3) {
      function t3(t4) {
        if (t4)
          try {
            e3(t4 + "}");
          } catch (e4) {}
      }
      return function (n3, r3, o3, s3, i3, a3, c3, u3, l3, d3) {
        switch (n3) {
          case 1:
            if (0 === l3 && 64 === r3.charCodeAt(0)) return e3(r3 + ";"), "";
            break;
          case 2:
            if (0 === u3) return r3 + "/*|*/";
            break;
          case 3:
            switch (u3) {
              case 102:
              case 112:
                return e3(o3[0] + r3), "";
              default:
                return r3 + (0 === d3 ? "/*|*/" : "");
            }
          case -2:
            r3.split("/*|*/}").forEach(t3);
        }
      };
    })(function (e3) {
      d2.push(e3);
    }),
    f = function (e3, r3, s3) {
      return (0 === r3 && -1 !== ae.indexOf(s3[n2.length])) || s3.match(o2)
        ? e3
        : "." + t2;
    };
  function m(e3, s3, i3, a3) {
    void 0 === a3 && (a3 = "&");
    var c3 = e3.replace(ie, ""),
      u3 = s3 && i3 ? i3 + " " + s3 + " { " + c3 + " }" : c3;
    return (
      (t2 = a3),
      (n2 = s3),
      (r2 = new RegExp("\\" + n2 + "\\b", "g")),
      (o2 = new RegExp("(\\" + n2 + "\\b){2,}")),
      l2(i3 || !s3 ? "" : s3, u3)
    );
  }
  return (
    l2.use(
      [].concat(u2, [
        function (e3, t3, o3) {
          2 === e3 &&
            o3.length &&
            o3[0].lastIndexOf(n2) > 0 &&
            (o3[0] = o3[0].replace(r2, f));
        },
        h2,
        function (e3) {
          if (-2 === e3) {
            var t3 = d2;
            return (d2 = []), t3;
          }
        },
      ])
    ),
    (m.hash = u2.length
      ? u2
          .reduce(function (e3, t3) {
            return t3.name || j(15), te(e3, t3.name);
          }, 5381)
          .toString()
      : ""),
    m
  );
}
var ue = import_react14.default.createContext();
var le = ue.Consumer;
var de = import_react14.default.createContext();
var he = (de.Consumer, new Z());
var pe = ce();
function fe() {
  return (0, import_react14.useContext)(ue) || he;
}
function me() {
  return (0, import_react14.useContext)(de) || pe;
}
function ye(e2) {
  var t2 = (0, import_react14.useState)(e2.stylisPlugins),
    n2 = t2[0],
    s2 = t2[1],
    c2 = fe(),
    u2 = (0, import_react14.useMemo)(
      function () {
        var t3 = c2;
        return (
          e2.sheet
            ? (t3 = e2.sheet)
            : e2.target &&
              (t3 = t3.reconstructWithOptions({ target: e2.target }, false)),
          e2.disableCSSOMInjection &&
            (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })),
          t3
        );
      },
      [e2.disableCSSOMInjection, e2.sheet, e2.target]
    ),
    l2 = (0, import_react14.useMemo)(
      function () {
        return ce({
          options: { prefix: !e2.disableVendorPrefixes },
          plugins: n2,
        });
      },
      [e2.disableVendorPrefixes, n2]
    );
  return (
    (0, import_react14.useEffect)(
      function () {
        (0, import_shallowequal.default)(n2, e2.stylisPlugins) ||
          s2(e2.stylisPlugins);
      },
      [e2.stylisPlugins]
    ),
    import_react14.default.createElement(
      ue.Provider,
      { value: u2 },
      import_react14.default.createElement(
        de.Provider,
        { value: l2 },
        true ? import_react14.default.Children.only(e2.children) : e2.children
      )
    )
  );
}
var ve = (function () {
  function e2(e3, t2) {
    var n2 = this;
    (this.inject = function (e4, t3) {
      void 0 === t3 && (t3 = pe);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) ||
        e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
    }),
      (this.toString = function () {
        return j(12, String(n2.name));
      }),
      (this.name = e3),
      (this.id = "sc-keyframes-" + e3),
      (this.rules = t2);
  }
  return (
    (e2.prototype.getName = function (e3) {
      return void 0 === e3 && (e3 = pe), this.name + e3.hash;
    }),
    e2
  );
})();
var ge = /([A-Z])/;
var Se = /([A-Z])/g;
var we = /^ms-/;
var Ee = function (e2) {
  return "-" + e2.toLowerCase();
};
function be(e2) {
  return ge.test(e2) ? e2.replace(Se, Ee).replace(we, "-ms-") : e2;
}
var _e = function (e2) {
  return null == e2 || false === e2 || "" === e2;
};
function Ne(e2, n2, r2, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i2 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1)
      "" !== (s2 = Ne(e2[a2], n2, r2, o2)) &&
        (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (_e(e2)) return "";
  if (N(e2)) return "." + e2.styledComponentId;
  if (b(e2)) {
    if (
      "function" != typeof (l2 = e2) ||
      (l2.prototype && l2.prototype.isReactComponent) ||
      !n2
    )
      return e2;
    var u2 = e2(n2);
    return (
      (0, import_react_is.isElement)(u2) &&
        console.warn(
          _(e2) +
            " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."
        ),
      Ne(u2, n2, r2, o2)
    );
  }
  var l2;
  return e2 instanceof ve
    ? r2
      ? (e2.inject(r2, o2), e2.getName(o2))
      : e2
    : S(e2)
    ? (function e3(t2, n3) {
        var r3,
          o3,
          s3 = [];
        for (var i3 in t2)
          t2.hasOwnProperty(i3) &&
            !_e(t2[i3]) &&
            ((Array.isArray(t2[i3]) && t2[i3].isCss) || b(t2[i3])
              ? s3.push(be(i3) + ":", t2[i3], ";")
              : S(t2[i3])
              ? s3.push.apply(s3, e3(t2[i3], i3))
              : s3.push(
                  be(i3) +
                    ": " +
                    ((r3 = i3),
                    null == (o3 = t2[i3]) || "boolean" == typeof o3 || "" === o3
                      ? ""
                      : "number" != typeof o3 ||
                        0 === o3 ||
                        r3 in unitless_browser_esm_default
                      ? String(o3).trim()
                      : o3 + "px") +
                    ";"
                ));
        return n3 ? [n3 + " {"].concat(s3, ["}"]) : s3;
      })(e2)
    : e2.toString();
}
var Ae = function (e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ce(e2) {
  for (
    var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1;
    r2 < t2;
    r2++
  )
    n2[r2 - 1] = arguments[r2];
  return b(e2) || S(e2)
    ? Ae(Ne(g(w, [e2].concat(n2))))
    : 0 === n2.length && 1 === e2.length && "string" == typeof e2[0]
    ? e2
    : Ae(Ne(g(e2, n2)));
}
var Ie = /invalid hook call/i;
var Pe = /* @__PURE__ */ new Set();
var Oe = function (e2, t2) {
  if (true) {
    var n2 =
        "The component " +
        e2 +
        (t2 ? ' with the id of "' + t2 + '"' : "") +
        " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
      r2 = console.error;
    try {
      var o2 = true;
      (console.error = function (e3) {
        if (Ie.test(e3)) (o2 = false), Pe.delete(n2);
        else {
          for (
            var t3 = arguments.length,
              s2 = new Array(t3 > 1 ? t3 - 1 : 0),
              i2 = 1;
            i2 < t3;
            i2++
          )
            s2[i2 - 1] = arguments[i2];
          r2.apply(void 0, [e3].concat(s2));
        }
      }),
        (0, import_react14.useRef)(),
        o2 && !Pe.has(n2) && (console.warn(n2), Pe.add(n2));
    } catch (e3) {
      Ie.test(e3.message) && Pe.delete(n2);
    } finally {
      console.error = r2;
    }
  }
};
var Re = function (e2, t2, n2) {
  return (
    void 0 === n2 && (n2 = E),
    (e2.theme !== n2.theme && e2.theme) || t2 || n2.theme
  );
};
var De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var je = /(^-|-$)/g;
function Te(e2) {
  return e2.replace(De, "-").replace(je, "");
}
var xe = function (e2) {
  return ee(ne(e2) >>> 0);
};
function ke(e2) {
  return "string" == typeof e2 && e2.charAt(0) === e2.charAt(0).toLowerCase();
}
var Ve = function (e2) {
  return (
    "function" == typeof e2 ||
    ("object" == typeof e2 && null !== e2 && !Array.isArray(e2))
  );
};
var Be = function (e2) {
  return "__proto__" !== e2 && "constructor" !== e2 && "prototype" !== e2;
};
function ze(e2, t2, n2) {
  var r2 = e2[n2];
  Ve(t2) && Ve(r2) ? Me(r2, t2) : (e2[n2] = t2);
}
function Me(e2) {
  for (
    var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1;
    r2 < t2;
    r2++
  )
    n2[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (Ve(i2)) for (var a2 in i2) Be(a2) && ze(e2, i2[a2], a2);
  }
  return e2;
}
var Ge = import_react14.default.createContext();
var Le = Ge.Consumer;
var Ye = {};
function qe(e2, t2, n2) {
  var o2 = N(e2),
    i2 = !ke(e2),
    a2 = t2.attrs,
    c2 = void 0 === a2 ? w : a2,
    d2 = t2.componentId,
    h2 =
      void 0 === d2
        ? (function (e3, t3) {
            var n3 = "string" != typeof e3 ? "sc" : Te(e3);
            Ye[n3] = (Ye[n3] || 0) + 1;
            var r2 = n3 + "-" + xe("5.3.3" + n3 + Ye[n3]);
            return t3 ? t3 + "-" + r2 : r2;
          })(t2.displayName, t2.parentComponentId)
        : d2,
    p = t2.displayName,
    f =
      void 0 === p
        ? (function (e3) {
            return ke(e3) ? "styled." + e3 : "Styled(" + _(e3) + ")";
          })(e2)
        : p,
    g2 =
      t2.displayName && t2.componentId
        ? Te(t2.displayName) + "-" + t2.componentId
        : t2.componentId || h2,
    S2 =
      o2 && e2.attrs
        ? Array.prototype.concat(e2.attrs, c2).filter(Boolean)
        : c2,
    A2 = t2.shouldForwardProp;
  o2 &&
    e2.shouldForwardProp &&
    (A2 = t2.shouldForwardProp
      ? function (n3, r2, o3) {
          return (
            e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3)
          );
        }
      : e2.shouldForwardProp);
  var C,
    I2 = new se(n2, g2, o2 ? e2.componentStyle : void 0),
    P2 = I2.isStatic && 0 === c2.length,
    O = function (e3, t3) {
      return (function (e4, t4, n3, r2) {
        var o3 = e4.attrs,
          i3 = e4.componentStyle,
          a3 = e4.defaultProps,
          c3 = e4.foldedComponentIds,
          d3 = e4.shouldForwardProp,
          h3 = e4.styledComponentId,
          p2 = e4.target;
        (0, import_react14.useDebugValue)(h3);
        var f2 = (function (e5, t5, n4) {
            void 0 === e5 && (e5 = E);
            var r3 = v({}, t5, { theme: e5 }),
              o4 = {};
            return (
              n4.forEach(function (e6) {
                var t6,
                  n5,
                  s2,
                  i4 = e6;
                for (t6 in (b(i4) && (i4 = i4(r3)), i4))
                  r3[t6] = o4[t6] =
                    "className" === t6
                      ? ((n5 = o4[t6]),
                        (s2 = i4[t6]),
                        n5 && s2 ? n5 + " " + s2 : n5 || s2)
                      : i4[t6];
              }),
              [r3, o4]
            );
          })(Re(t4, (0, import_react14.useContext)(Ge), a3) || E, t4, o3),
          y2 = f2[0],
          g3 = f2[1],
          S3 = (function (e5, t5, n4, r3) {
            var o4 = fe(),
              s2 = me(),
              i4 = t5
                ? e5.generateAndInjectStyles(E, o4, s2)
                : e5.generateAndInjectStyles(n4, o4, s2);
            return (
              (0, import_react14.useDebugValue)(i4), !t5 && r3 && r3(i4), i4
            );
          })(i3, r2, y2, true ? e4.warnTooManyClasses : void 0),
          w2 = n3,
          _2 = g3.$as || t4.$as || g3.as || t4.as || p2,
          N2 = ke(_2),
          A3 = g3 !== t4 ? v({}, t4, {}, g3) : t4,
          C2 = {};
        for (var I3 in A3)
          "$" !== I3[0] &&
            "as" !== I3 &&
            ("forwardedAs" === I3
              ? (C2.as = A3[I3])
              : (d3
                  ? d3(I3, is_prop_valid_browser_esm_default, _2)
                  : !N2 || is_prop_valid_browser_esm_default(I3)) &&
                (C2[I3] = A3[I3]));
        return (
          t4.style &&
            g3.style !== t4.style &&
            (C2.style = v({}, t4.style, {}, g3.style)),
          (C2.className = Array.prototype
            .concat(c3, h3, S3 !== h3 ? S3 : null, t4.className, g3.className)
            .filter(Boolean)
            .join(" ")),
          (C2.ref = w2),
          (0, import_react14.createElement)(_2, C2)
        );
      })(C, e3, t3, P2);
    };
  return (
    (O.displayName = f),
    ((C = import_react14.default.forwardRef(O)).attrs = S2),
    (C.componentStyle = I2),
    (C.displayName = f),
    (C.shouldForwardProp = A2),
    (C.foldedComponentIds = o2
      ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId)
      : w),
    (C.styledComponentId = g2),
    (C.target = o2 ? e2.target : e2),
    (C.withComponent = function (e3) {
      var r2 = t2.componentId,
        o3 = (function (e4, t3) {
          if (null == e4) return {};
          var n3,
            r3,
            o4 = {},
            s3 = Object.keys(e4);
          for (r3 = 0; r3 < s3.length; r3++)
            (n3 = s3[r3]), t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
          return o4;
        })(t2, ["componentId"]),
        s2 = r2 && r2 + "-" + (ke(e3) ? e3 : Te(_(e3)));
      return qe(e3, v({}, o3, { attrs: S2, componentId: s2 }), n2);
    }),
    Object.defineProperty(C, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (t3) {
        this._foldedDefaultProps = o2 ? Me({}, e2.defaultProps, t3) : t3;
      },
    }),
    Oe(f, g2),
    (C.warnTooManyClasses = (function (e3, t3) {
      var n3 = {},
        r2 = false;
      return function (o3) {
        if (!r2 && ((n3[o3] = true), Object.keys(n3).length >= 200)) {
          var s2 = t3 ? ' with the id of "' + t3 + '"' : "";
          console.warn(
            "Over 200 classes were generated for component " +
              e3 +
              s2 +
              ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"
          ),
            (r2 = true),
            (n3 = {});
        }
      };
    })(f, g2)),
    (C.toString = function () {
      return "." + C.styledComponentId;
    }),
    i2 &&
      (0, import_hoist_non_react_statics.default)(C, e2, {
        attrs: true,
        componentStyle: true,
        displayName: true,
        foldedComponentIds: true,
        shouldForwardProp: true,
        styledComponentId: true,
        target: true,
        withComponent: true,
      }),
    C
  );
}
var He = function (e2) {
  return (function e3(t2, r2, o2) {
    if (
      (void 0 === o2 && (o2 = E), !(0, import_react_is.isValidElementType)(r2))
    )
      return j(1, String(r2));
    var s2 = function () {
      return t2(r2, o2, Ce.apply(void 0, arguments));
    };
    return (
      (s2.withConfig = function (n2) {
        return e3(t2, r2, v({}, o2, {}, n2));
      }),
      (s2.attrs = function (n2) {
        return e3(
          t2,
          r2,
          v({}, o2, {
            attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean),
          })
        );
      }),
      s2
    );
  })(qe, e2);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e2) {
  He[e2] = He(e2);
});
var $e = (function () {
  function e2(e3, t3) {
    (this.rules = e3),
      (this.componentId = t3),
      (this.isStatic = re(e3)),
      Z.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return (
    (t2.createStyles = function (e3, t3, n2, r2) {
      var o2 = r2(Ne(this.rules, t3, n2, r2).join(""), ""),
        s2 = this.componentId + e3;
      n2.insertRules(s2, s2, o2);
    }),
    (t2.removeStyles = function (e3, t3) {
      t3.clearRules(this.componentId + e3);
    }),
    (t2.renderStyles = function (e3, t3, n2, r2) {
      e3 > 2 && Z.registerId(this.componentId + e3),
        this.removeStyles(e3, n2),
        this.createStyles(e3, t3, n2, r2);
    }),
    e2
  );
})();
var Je = (function () {
  function e2() {
    var e3 = this;
    (this._emitSheetCSS = function () {
      var t3 = e3.instance.toString();
      if (!t3) return "";
      var n2 = q();
      return (
        "<style " +
        [
          n2 && 'nonce="' + n2 + '"',
          A + '="true"',
          'data-styled-version="5.3.3"',
        ]
          .filter(Boolean)
          .join(" ") +
        ">" +
        t3 +
        "</style>"
      );
    }),
      (this.getStyleTags = function () {
        return e3.sealed ? j(2) : e3._emitSheetCSS();
      }),
      (this.getStyleElement = function () {
        var t3;
        if (e3.sealed) return j(2);
        var n2 =
            (((t3 = {})[A] = ""),
            (t3["data-styled-version"] = "5.3.3"),
            (t3.dangerouslySetInnerHTML = { __html: e3.instance.toString() }),
            t3),
          o2 = q();
        return (
          o2 && (n2.nonce = o2),
          [
            import_react14.default.createElement(
              "style",
              v({}, n2, { key: "sc-0-0" })
            ),
          ]
        );
      }),
      (this.seal = function () {
        e3.sealed = true;
      }),
      (this.instance = new Z({ isServer: true })),
      (this.sealed = false);
  }
  var t2 = e2.prototype;
  return (
    (t2.collectStyles = function (e3) {
      return this.sealed
        ? j(2)
        : import_react14.default.createElement(
            ye,
            { sheet: this.instance },
            e3
          );
    }),
    (t2.interleaveWithNodeStream = function (e3) {
      return j(3);
    }),
    e2
  );
})();
"undefined" != typeof navigator &&
  "ReactNative" === navigator.product &&
  console.warn(
    "It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"
  ),
  "undefined" != typeof window &&
    ((window["__styled-components-init__"] =
      window["__styled-components-init__"] || 0),
    1 === window["__styled-components-init__"] &&
      console.warn(
        "It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."
      ),
    (window["__styled-components-init__"] += 1));
var styled_components_browser_esm_default = He;

// src/ReactMdEditor/index.jsx
var import_Stack = require("@strapi/design-system/Stack");
var import_Box = require("@strapi/design-system/Box");
var import_Typography = require("@strapi/design-system/Typography");
var import_react_intl = require("react-intl");
var Wrapper = styled_components_browser_esm_default.div`
  > div:nth-child(2) {
    display: none;
  }
  .w-md-editor-bar {
    display: none;
  }
  .w-md-editor {
    border: 1px solid #dcdce4;
    border-radius: 4px;
    box-shadow: none;
    &:focus-within {
      border: 1px solid #4945ff;
      box-shadow: #4945ff 0px 0px 0px 2px;
    }
    min-height: 400px;
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
    }
    .w-md-editor-preview {
      display: block;
      strong {
        font-weight: bold;
      }
      em {
        font-style: italic;
      }
    }
  }
  .w-md-editor-content {
    flex: 1 1 auto;
  }
  .w-md-editor-fullscreen {
    z-index: 3;
  }
  .w-md-editor-text {
    margin: 0;
  }
  .wmde-markdown {
    display: none;
  }
  .w-md-editor-preview ol {
    list-style: auto;
  }
`;
var Editor = ({
  name,
  onChange,
  value,
  intlLabel,
  disabled,
  error,
  description,
  required,
}) => {
  const { formatMessage } = (0, import_react_intl.useIntl)();
  const [mediaLibVisible, setMediaLibVisible] = (0, import_react15.useState)(
    false
  );
  const [mediaLibSelection, setMediaLibSelection] = (0,
  import_react15.useState)(-1);
  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);
  const handleChangeAssets = (assets) => {
    let newValue = value ? value : "";
    assets.map((asset) => {
      if (asset.mime.includes("image")) {
        const imgTag = ` ![](${asset.url}) `;
        if (mediaLibSelection > -1) {
          newValue =
            value.substring(0, mediaLibSelection) +
            imgTag +
            value.substring(mediaLibSelection);
        } else {
          newValue = `${newValue}${imgTag}`;
        }
      }
    });
    onChange({ target: { name, value: newValue || "" } });
    handleToggleMediaLib();
  };
  return /* @__PURE__ */ import_react15.default.createElement(
    import_Stack.Stack,
    { size: 1 },
    /* @__PURE__ */ import_react15.default.createElement(
      import_Box.Box,
      null,
      /* @__PURE__ */ import_react15.default.createElement(
        import_Typography.Typography,
        { variant: "pi", fontWeight: "bold" },
        formatMessage(intlLabel)
      ),
      required &&
        /* @__PURE__ */ import_react15.default.createElement(
          import_Typography.Typography,
          { variant: "pi", fontWeight: "bold", textColor: "danger600" },
          "*"
        )
    ),
    /* @__PURE__ */ import_react15.default.createElement(
      Wrapper,
      null,
      /* @__PURE__ */ import_react15.default.createElement(esm_default2, {
        disabled,
        commands: [
          commands_exports.title2,
          commands_exports.title3,
          commands_exports.title4,
          commands_exports.title5,
          commands_exports.title6,
          commands_exports.divider,
          commands_exports.bold,
          commands_exports.codeBlock,
          commands_exports.italic,
          commands_exports.strikethrough,
          commands_exports.hr,
          commands_exports.group,
          commands_exports.divider,
          commands_exports.link,
          commands_exports.quote,
          commands_exports.code,
          {
            name: "image",
            keyCommand: "image",
            buttonProps: { "aria-label": "Insert title3" },
            icon: /* @__PURE__ */ import_react15.default.createElement(
              "svg",
              { width: "12", height: "12", viewBox: "0 0 20 20" },
              /* @__PURE__ */ import_react15.default.createElement("path", {
                fill: "currentColor",
                d: "M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z",
              })
            ),
            execute: (state, api) => {
              setMediaLibSelection(state.selection.end);
              handleToggleMediaLib();
            },
          },
          commands_exports.unorderedListCommand,
          commands_exports.orderedListCommand,
          commands_exports.checkedListCommand,
          commands_exports.divider,
          commands_exports.codeEdit,
          commands_exports.codeLive,
          commands_exports.codePreview,
          commands_exports.divider,
          commands_exports.fullscreen,
        ],
        value: value || "",
        onChange: (newValue) => {
          onChange({ target: { name, value: newValue || "" } });
        },
      }),
      /* @__PURE__ */ import_react15.default.createElement("div", {
        style: { padding: "50px 0 0 0" },
      }),
      /* @__PURE__ */ import_react15.default.createElement(
        esm_default2.Markdown,
        { source: value || "" }
      ),
      /* @__PURE__ */ import_react15.default.createElement(MediaLib_default, {
        isOpen: mediaLibVisible,
        onChange: handleChangeAssets,
        onToggle: handleToggleMediaLib,
      })
    ),
    error &&
      /* @__PURE__ */ import_react15.default.createElement(
        import_Typography.Typography,
        { variant: "pi", textColor: "danger600" },
        formatMessage({ id: error, defaultMessage: error })
      ),
    description &&
      /* @__PURE__ */ import_react15.default.createElement(
        import_Typography.Typography,
        { variant: "pi" },
        formatMessage(description)
      )
  );
};
Editor.propTypes = {
  onChange: import_prop_types2.default.func.isRequired,
  name: import_prop_types2.default.string.isRequired,
  value: import_prop_types2.default.string.isRequired,
};
var ReactMdEditor_default = Editor;
//# sourceMappingURL=index.js.map
