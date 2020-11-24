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
exports["default"] = Page;

var _core = require("@emotion/core");

var React = _interopRequireWildcard(require("react"));

var _styleContext = require("supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext");

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

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}

/*
 * Styles.
 */
function getComponentStyle(_ref) {
    var logo = _ref.logo;
    var logoStyles = {};

    if (logo !== undefined) {
        logoStyles = {
            pageLogo: {
                width: "2rem",
                height: "2rem",
                "@media (max-width: 440px)": {
                    top: "5.5rem",
                    margin: "0 auto",
                    width: "100%"
                },
                display: "block",
                position: "absolute",
                "@media (min-width: 440px)": {
                    top: "2.5rem",
                    left: "3.5rem"
                }
            },
            pageLogoImg: {
                maxHeight: "80px",
                maxWidth: "200px"
            }
        };

        if (logo.endsWith(".svg")) {
            logoStyles.pageLogo.background = "url(".concat(logo, ") no-repeat");
            logoStyles.pageLogo.backgroundSize = "contain";
        }
    }

    return _objectSpread({}, logoStyles);
}
/*
 * Component.
 */

function Page(_ref2) {
    var form = _ref2.form,
        header = _ref2.header,
        toggle = _ref2.toggle,
        logo = _ref2.logo;
    var componentStyle = getComponentStyle({
        logo: logo
    });
    return (0, _core.jsx)(_styleContext.StyleConsumer, null, function(styles) {
        return (0, _core.jsx)(
            "div",
            null,
            (0, _core.jsx)(
                "div",
                null,
                toggle !== undefined &&
                    (0, _core.jsx)(
                        "div",
                        {
                            className: "pageToggle",
                            css: styles.pageToggle
                        },
                        toggle
                    ),
                logo !== undefined &&
                    (0, _core.jsx)(
                        "a",
                        {
                            href: "/",
                            className: "pageLogo",
                            css: [componentStyle.pageLogo, styles.pageLogo]
                        },
                        !logo.endsWith(".svg") &&
                            (0, _core.jsx)("img", {
                                className: "pageLogoImg",
                                css: [componentStyle.pageLogoImg, styles.pageLogoImg],
                                src: logo
                            })
                    )
            ),
            (0, _core.jsx)(
                "div",
                {
                    className: "page",
                    css: styles.page
                },
                header !== undefined &&
                    (0, _core.jsx)(
                        "div",
                        {
                            className: "pageHeader",
                            css: styles.pageHeader
                        },
                        header
                    ),
                (0, _core.jsx)(
                    "div",
                    {
                        className: "pageForm",
                        css: [styles.pageForm, componentStyle.pageForm]
                    },
                    form
                )
            )
        );
    });
}
