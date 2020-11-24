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
exports.getStyles = getStyles;
exports["default"] = BaseTheme;

var React = _interopRequireWildcard(require("react"));

var _core = require("@emotion/core");

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

/* Copyright (c) 2020, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/*
 * Imports.
 */

/** @jsx jsx */

/*
 * Styles.
 */
function getStyles(backgroundUrlFromUser) {
    // TODO Store image in our cloudfront.
    var backgroundUrl =
        backgroundUrlFromUser !== undefined
            ? backgroundUrlFromUser
            : "https://dbd6j53uzcole.cloudfront.net/assets/images/auth/background.dabff70d179a0bd98ed5a141d44d27cb.svg";
    return {
        root: {
            fontFamily:
                "brown,-apple-system,BlinkMacSystemFont,avenir,lucida grande,gill sans,helvetica neue,helvetica,sans-serif",
            background: "#4949e4 url(".concat(backgroundUrl, ") no-repeat"),
            backgroundSize: "cover",
            position: "relative",
            width: "100vw",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column"
        }
    };
}
/*
 * Component.
 */

function BaseTheme(_ref) {
    var backgroundUrl = _ref.backgroundUrl,
        children = _ref.children;
    var styles = getStyles(backgroundUrl);
    return (0, _core.jsx)(
        "div",
        {
            css: styles.root
        },
        children,
        (0, _core.jsx)("link", {
            href:
                "https://dbd6j53uzcole.cloudfront.net/assets/fonts/brown/lineto-brown-pro-regular.8ddac50caed418f66b3bb7e9a7699c78.woff2",
            rel: "stylesheet",
            type: "text/css"
        }),
        (0, _core.jsx)("link", {
            href:
                "https://dbd6j53uzcole.cloudfront.net/assets/fonts/brown/lineto-brown-pro-bold.12a9490e63e36f045babfda4b9dcd2de.woff2",
            rel: "stylesheet",
            type: "text/css"
        }),
        (0, _core.jsx)("link", {
            href:
                "https://dbd6j53uzcole.cloudfront.net/assets/fonts/brown/lineto-brown-pro-light.a45b6351d33a8798d2eca810f727ad71.woff2",
            rel: "stylesheet",
            type: "text/css"
        })
    );
}
