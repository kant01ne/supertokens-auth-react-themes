"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getThemeStyles = getThemeStyles;
exports.themePalette = void 0;

var _styles = require("supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/styles/styles");

var _helpers = require("../../common/helpers");

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
 * Palette
 */

/** @jsx jsx */
var themePalette = {
    colors: {
        background: "#ffffff",
        inputBackground: "#fafbfb",
        generalErrorBackground: "#fdf3f2",
        primary: "#54BD7E",
        error: "#ff1717",
        textTitle: "#6e7d94",
        textLabel: "#415574",
        textPrimary: "#6e7d94",
        textLink: "#54BD7E"
    },
    fonts: {
        size: [".5rem", ".8rem", ".9rem", "1.2rem", "1.8rem"]
    }
};
exports.themePalette = themePalette;

function getThemeStyles(palette) {
    var defaultStyles = (0, _styles.getDefaultStyles)(palette);
    var themeStyles = {
        page: {
            lineHeight: 1,
            minHeight: "100vh",
            minWidth: "100vw",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "calc(13.5px + (650vw - 5850px)/1100)",
            WebkitFontSmoothing: "antialiased"
        },
        pageBackgroundImg: {
            margin: "0 auto",
            width: "90%",
            justifyContent: "center"
        },
        pageLogo: {
            width: "2rem",
            height: "2rem",
            top: "-10px",
            "@media (max-width: 440px)": {
                margin: "0 auto",
                width: "30%"
            },
            display: "block",
            position: "relative",
            "@media (min-width: 440px)": {
                left: "1rem"
            }
        },
        pageLogoImg: {
            maxHeight: "50px",
            maxWidth: "200px"
        },
        pageIllustration: {
            flex: "1 1 50%",
            position: "relative",
            maxWidth: "50%",
            "@media (max-width: 800px)": {
                display: "none"
            },
            display: "flex"
        },
        pageFormWrapper: {
            zIndex: 2,
            flex: "3 3 50%",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            "@media (max-width: 800px)": {
                width: "100%"
            },
            boxShadow: "0 32px 40px -2px rgba(10, 22, 70, 0.12),0 0 1px 0 rgba(10, 22, 70, 0.06);"
        },
        pageHeader: {
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "row",
            height: "65px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 15px 1px rgba(10,22,70,0.12), 0 0 1px 0 rgba(10,22,70,0.06)",
            marginBottom: "3rem"
        },
        pageForm: {
            minHeight: "80vh",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "10px",
            marginRight: "10px",
            display: "flex",
            maxWidth: "50rem",
            alignItems: "stretch",
            color: "#494854",
            marginBottom: "2rem",
            margin: "0 auto",
            "@media (max-width: 440px)": {
                margin: "12px auto",
                minWidth: "90%"
            }
        },
        container: {
            width: "100%",
            margin: "inherit",
            border: "inherit",
            boxShadow: "inherit",
            maxWidth: "inherit",
            fontFamily: "'Quicksand', sans-serif;",
            textAlign: "center"
        },
        header: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center"
        },
        headerSubtitle: {
            fontSize: palette.fonts.size[2],
            opacity: "0.8",
            lineHeight: 1.5
        },
        headerTitle: {
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: "1.25rem",
            color: palette.colors.textTitle
        },
        headerToggle: {
            fontSize: palette.fonts.size[5],
            fontWeight: 400,
            marginBottom: "1.25rem"
        },
        headerTogglePrimary: {
            position: "absolute",
            right: "1rem",
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: "0.8em",
            "@media (max-width: 440px)": {
                fontSize: "1.2em"
            },
            color: palette.colors.textLink
        },
        row: {
            width: "90%"
        },
        generalError: {
            backgroundColor: palette.colors.generalErrorBackground,
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "18px",
            paddingRight: "18px",
            letterSpacing: "0.2px",
            fontSize: palette.fonts.size[3],
            borderRadius: "12px",
            color: palette.colors.error
        },
        input: {
            flex: 1,
            height: "0px",
            border: "1px solid #c8ced7",
            borderRadius: "2px",
            outline: "none",
            padding: "1rem",
            fontSize: "1rem",
            lineHeight: "18px",
            boxShadow: "none",
            textAlign: "center",
            transition: "border 200ms ease 0ms,box-shadow 200ms ease 0ms",
            width: "90%",
            backgroundColor: palette.colors.inputBackground,
            letterSpacing: "1.2px",
            "&:focus": {
                border: "1px solid ".concat(palette.colors.primary),
                outline: "none"
            }
        },
        button: {
            marginTop: "15px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".08rem",
            width: "100%",
            color: "#fff",
            borderRadius: "4px",
            padding: ".7rem 1.4rem",
            border: "none",
            fontSize: palette.fonts.size[2],
            backgroundColor: palette.colors.primary,
            borderWidth: "0px"
        },
        inputErrorMessage: {
            paddingLeft: "5px",
            fontSize: palette.fonts.size[2]
        },
        formRow: {
            paddingBottom: "36px"
        },
        forgotPasswordLink: {
            marginTop: "10px",
            textDecoration: "underline"
        },
        headerSubTitle: {
            marginTop: "9px",
            marginBottom: "21px"
        },
        successMessage: {
            marginBottom: "15px"
        },
        successMessageSubmitNewPassword: {
            marginTop: "15px",
            marginBottom: "15px"
        },
        privacyPolicyAndTermsAndConditions: {
            fontSize: palette.fonts.size[1],
            lineHeight: "1.5",
            display: "block",
            alignItems: "start",
            marginTop: "10px"
        }
    };
    return (0, _helpers.getMergedStyles)(defaultStyles, themeStyles);
}
