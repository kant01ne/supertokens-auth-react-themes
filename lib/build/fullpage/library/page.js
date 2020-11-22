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

var _styleContext = require("../styles/styleContext");

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
    var testimonial = _ref.testimonial,
        logo = _ref.logo;
    var testimonialStyles = {};
    var logoStyles = {};

    if (testimonial === undefined) {
        testimonialStyles = {
            pageForm: {
                width: "100%",
                borderRadius: "5px",
                minWidth: "330px",
                "@media (max-width: 440px)": {
                    minWidth: "300px"
                },
                "@media (max-width: 340px)": {
                    minWidth: "260px"
                },
                "@media (max-width: 300px)": {
                    minWidth: "200px"
                }
            }
        };
    }

    if (logo !== undefined) {
        logoStyles = {
            pageLogo: {
                width: "2rem",
                height: "2rem",
                "@media (max-width: 440px)": {
                    display: "none"
                },
                display: "block",
                position: "absolute",
                left: "3.5rem",
                top: "2.5rem"
            }
        };

        if (logo.endsWith(".svg")) {
            logoStyles.pageLogo.background = "url(".concat(logo, ") no-repeat");
            logoStyles.pageLogo.backgroundSize = "contain";
        }
    }

    return _objectSpread(_objectSpread({}, testimonialStyles), logoStyles);
}
/*
 * Component.
 */

function Page(_ref2) {
    var form = _ref2.form,
        header = _ref2.header,
        toggle = _ref2.toggle,
        testimonial = _ref2.testimonial,
        logo = _ref2.logo;
    var componentStyle = getComponentStyle({
        testimonial: testimonial,
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
                            className: "logoStyles",
                            css: [componentStyle.pageLogo, styles.pageLogo]
                        },
                        !logo.endsWith(".svg") &&
                            (0, _core.jsx)("img", {
                                height: "30px",
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
                        className: "pageTestimonialAndForm",
                        css: styles.pageTestimonialAndForm
                    },
                    testimonial &&
                        (0, _core.jsx)(
                            "div",
                            {
                                className: "pageTestimonial",
                                css: styles.pageTestimonial
                            },
                            (0, _core.jsx)(
                                "div",
                                {
                                    className: "pageTestimonialQuote",
                                    css: styles.pageTestimonialQuote
                                },
                                "\u201C",
                                testimonial.quote,
                                "\u201D"
                            ),
                            (0, _core.jsx)(
                                "div",
                                {
                                    className: "pageTestimonialAttribution",
                                    css: styles.pageTestimonialAttribution
                                },
                                (0, _core.jsx)("img", {
                                    className: "pageTestimonialPhoto",
                                    css: styles.pageTestimonialPhoto,
                                    src: testimonial.picture
                                }),
                                (0, _core.jsx)(
                                    "div",
                                    {
                                        className: "pageTestimonialNameAndTitle",
                                        css: styles.pageTestimonialNameAndTitle
                                    },
                                    (0, _core.jsx)(
                                        "div",
                                        {
                                            className: "pageTestimonialName",
                                            css: styles.pageTestimonialName
                                        },
                                        testimonial.name
                                    ),
                                    (0, _core.jsx)(
                                        "div",
                                        {
                                            className: "pageTestimonialTitle",
                                            css: styles.pageTestimonialTitle
                                        },
                                        testimonial.title,
                                        ",",
                                        (0, _core.jsx)("br", null),
                                        testimonial.company
                                    )
                                )
                            )
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
            )
        );
    });
}
