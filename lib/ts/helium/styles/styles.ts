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
import { jsx } from "@emotion/core";
import {
    NormalisedPalette,
    NormalisedDefaultStyles
} from "supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/types";
import { getDefaultStyles } from "supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/styles/styles";
import { getMergedStyles } from "../../common/helpers";

export const themePalette: NormalisedPalette = {
    colors: {
        background: "#1a1925",
        inputBackground: "rgba(0, 0, 0, 0.10)",
        generalErrorBackground: "#fdf3f2",
        primary: "#6333FF",
        error: "#ff1717",
        textTitle: "#fff",
        textLabel: "#010d47",
        textPrimary: "#aeaeae",
        textLink: "#4949e4"
    },
    fonts: {
        size: [".5rem", ".8rem", ".9rem", "1.2rem", "1.8rem"]
    }
};

export function getThemeStyles(palette: NormalisedPalette): NormalisedDefaultStyles {
    const defaultStyles = getDefaultStyles(palette);
    const themeStyles = {
        root: {
            fontFamily:
                "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
            background: palette.colors.background,
            backgroundSize: "cover",
            position: "relative",
            width: "100vw",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column"
        },
        page: {
            lineHeight: 1,
            paddingTop: "5rem",
            minHeight: "100vh",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "calc(13.5px + (650vw - 5850px)/1100)",
            WebkitFontSmoothing: "antialiased"
        },
        pageHeader: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginBottom: "3rem",
            "@media (max-width: 440px)": {
                marginTop: "7rem"
            }
        },
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
        },

        pageToggle: {
            position: "absolute",
            right: "3.5rem",
            top: "2.5rem",
            color: "#9c9c9c",
            fontWeight: 600,
            textDecoration: "none"
        },
        pageTogglePrimary: {
            color: "#fff"
        },
        pageTestimonialAndForm: {},
        pageForm: {
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
            fontFamily:
                "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;",
            textAlign: "center"
        },

        headerSubTitle: {
            marginTop: "9px",
            marginBottom: "21px"
        },

        successMessageEnterEmail: {
            marginBottom: "15px"
        },

        forgotPasswordLink: {
            marginTop: "10px"
        },

        successMessageSubmitNewPassword: {
            marginTop: "15px",
            marginBottom: "15px"
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
            fontWeight: 300,
            marginBottom: "1.25rem"
        },

        headerTogglePrimary: {
            cursor: "pointer",
            color: "#fff"
        },

        row: {
            width: "80%",
            paddingTop: "25px"
        },

        generalError: {
            fontSize: palette.fonts.size[1]
        },

        input: {
            flex: 1,
            color: "#e9e9e9",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            outline: "none",
            padding: "1rem",
            fontSize: "1.25rem",
            boxShadow: "none",
            textAlign: "center",
            transition: "border 200ms ease 0ms,box-shadow 200ms ease 0ms",
            borderRadius: "5px",
            width: "90%",
            lineHeight: "normal",
            height: "25px"
        },

        inputError: {
            width: "90%"
        },

        inputErrorMessage: {
            width: "90%",
            fontSize: "14px",
            textAlign: "center"
        },

        button: {
            marginTop: "15px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".08rem",
            borderRadius: "4px",
            padding: ".7rem 1.4rem",
            border: "none",
            fontSize: palette.fonts.size[2]
        },

        formRow: {
            paddingBottom: "35px"
        },

        privacyPolicyAndTermsAndConditions: {
            fontSize: palette.fonts.size[1],
            lineHeight: "1.5",
            display: "block",
            alignItems: "start",
            marginTop: "15px"
        }
    } as NormalisedDefaultStyles;

    return getMergedStyles(defaultStyles, themeStyles);
}
