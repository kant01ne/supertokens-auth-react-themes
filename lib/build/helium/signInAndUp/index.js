"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };
    }
    return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _SignUp = _interopRequireDefault(require("./SignUp"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

var _core = require("@emotion/core");

var _page = _interopRequireDefault(require("../page"));

var _superTokens = _interopRequireDefault(require("supertokens-auth-react/lib/build/superTokens"));

var _styleContext = require("supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext");

var _baseTheme = _interopRequireDefault(require("../baseTheme"));

var _styles = require("../styles/styles");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (_typeof(obj) !== "object" && typeof obj !== "function")) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj["default"] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

function _slicedToArray(arr, i) {
    return (
        _arrayWithHoles(arr) ||
        _iterableToArrayLimit(arr, i) ||
        _unsupportedIterableToArray(arr, i) ||
        _nonIterableRest()
    );
}

function _nonIterableRest() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr;
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}

/*
 * Component.
 */
function SignInAndUpTheme(props) {
    /*
     * State.
     */
    var _useState = (0, React.useState)(true),
        _useState2 = _slicedToArray(_useState, 2),
        isSignIn = _useState2[0],
        setSignIn = _useState2[1];
    /*
     * Render.
     */
    // If isSignIn, return signIn.

    if (isSignIn) {
        return (0, _core.jsx)(
            _styleContext.StyleProvider,
            {
                defaultPalette: _styles.defaultPalette,
                getDefaultStyles: _styles.getDefaultStyles,
                styleFromInit: props.signInForm.styleFromInit
            },
            (0, _core.jsx)(_styleContext.StyleConsumer, null, function(styles) {
                return (0, _core.jsx)(_page["default"], {
                    logo: props.logo,
                    toggle: (0, _core.jsx)(
                        React.Fragment,
                        null,
                        "Not a customer?",
                        " ",
                        (0, _core.jsx)(
                            "span",
                            {
                                className: "headerTogglePrimary",
                                css: styles.headerTogglePrimary,
                                onClick: function onClick() {
                                    return setSignIn(false);
                                }
                            },
                            "Get started for free"
                        )
                    ),
                    header: (0, _core.jsx)(
                        React.Fragment,
                        null,
                        (0, _core.jsx)(
                            "span",
                            {
                                className: "headerTitle",
                                css: styles.headerTitle
                            },
                            "Sign in to ",
                            _superTokens["default"].getAppInfo().appName
                        )
                    ),
                    form: (0, _core.jsx)(_SignIn["default"], props.signInForm)
                });
            })
        );
    } // Otherwise, return SignUp.

    return (0, _core.jsx)(
        _styleContext.StyleProvider,
        {
            defaultPalette: _styles.defaultPalette,
            getDefaultStyles: _styles.getDefaultStyles,
            styleFromInit: props.signUpForm.styleFromInit
        },
        (0, _core.jsx)(_styleContext.StyleConsumer, null, function(styles) {
            return (0, _core.jsx)(_page["default"], {
                logo: props.logo,
                toggle: (0, _core.jsx)(
                    "div",
                    {
                        className: "headerTogglePrimary",
                        css: styles.headerTogglePrimary
                    },
                    (0, _core.jsx)(
                        "span",
                        {
                            onClick: function onClick() {
                                return setSignIn(true);
                            }
                        },
                        "Sign in"
                    )
                ),
                header: (0, _core.jsx)(
                    React.Fragment,
                    null,
                    (0, _core.jsx)(
                        "span",
                        {
                            className: "headerTitle",
                            css: styles.headerTitle
                        },
                        "Get started for free."
                    ),
                    (0, _core.jsx)(
                        "span",
                        {
                            className: "headerSubtitle",
                            css: styles.headerSubtitle
                        },
                        "No credit card required."
                    )
                ),
                form: (0, _core.jsx)(_SignUp["default"], props.signUpForm)
            });
        })
    );
}

function SignInAndUpThemeWrapper(props) {
    return (0, _core.jsx)(
        _styleContext.StyleProvider,
        {
            defaultPalette: _styles.defaultPalette,
            getDefaultStyles: _styles.getDefaultStyles
        },
        (0, _core.jsx)(_baseTheme["default"], null, (0, _core.jsx)(SignInAndUpTheme, props))
    );
}

var _default = SignInAndUpThemeWrapper;
exports["default"] = _default;
