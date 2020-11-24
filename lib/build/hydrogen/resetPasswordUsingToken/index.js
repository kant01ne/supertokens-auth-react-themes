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

var _styleContext = require("supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext");

var _baseTheme = _interopRequireDefault(require("../baseTheme"));

var _page = _interopRequireDefault(require("../page"));

var _styles = require("../styles/styles");

var _enterEmail = _interopRequireDefault(require("./enterEmail"));

var _submitNewPassword = _interopRequireDefault(require("./submitNewPassword"));

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

/*
 * Component.
 */
function ResetPasswordUsingTokenTheme(props) {
    /*
     * Render.
     */
    // If no token, return SubmitNewPassword.
    if (props.hasToken) {
        return /*#__PURE__*/ React.createElement(
            _styleContext.StyleProvider,
            {
                defaultPalette: _styles.defaultPalette,
                getDefaultStyles: _styles.getDefaultStyles,
                styleFromInit: props.enterEmailForm.styleFromInit
            },
            /*#__PURE__*/ React.createElement(_page["default"], {
                form: /*#__PURE__*/ React.createElement(_submitNewPassword["default"], props.submitNewPasswordForm),
                logo: props.logo
            })
        );
    } // Otherwise, return EnterEmail.

    return /*#__PURE__*/ React.createElement(
        _styleContext.StyleProvider,
        {
            defaultPalette: _styles.defaultPalette,
            getDefaultStyles: _styles.getDefaultStyles,
            styleFromInit: props.enterEmailForm.styleFromInit
        },
        /*#__PURE__*/ React.createElement(_page["default"], {
            form: /*#__PURE__*/ React.createElement(_enterEmail["default"], props.enterEmailForm),
            logo: props.logo
        })
    );
}

function ResetPasswordUsingTokenThemeWrapper(props) {
    var submitNewPasswordForm = props.submitNewPasswordForm,
        enterEmailForm = props.enterEmailForm,
        hasToken = props.hasToken,
        logo = props.logo;
    return /*#__PURE__*/ React.createElement(
        _baseTheme["default"],
        {
            backgroundUrl: props.backgroundUrl
        },
        /*#__PURE__*/ React.createElement(ResetPasswordUsingTokenTheme, {
            logo: logo,
            submitNewPasswordForm: submitNewPasswordForm,
            enterEmailForm: enterEmailForm,
            hasToken: hasToken
        })
    );
}

var _default = ResetPasswordUsingTokenThemeWrapper;
exports["default"] = _default;
