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
    NormalisedDefaultStyles,
    NormalisedPalette
} from "supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/types";
import { getDefaultStyles } from "supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/styles/styles";
import { getMergedStyles } from "../../common/helpers";

export const themePalette: NormalisedPalette = {
    colors: {
        background: "white",
        inputBackground: "#fff",
        generalErrorBackground: "#fdf3f2",
        primary: "#4949e4",
        error: "#ff1717",
        textTitle: "#222222",
        textLabel: "#010d47",
        textPrimary: "#aeaeae",
        textLink: "#4949e4"
    },
    fonts: {
        size: [".5rem", ".7rem", ".8rem", ".9rem", "1.2rem", "1.8rem"]
    }
};

/*
 * Theme styles.
 */

export function getThemeStyles(palette: NormalisedPalette): NormalisedDefaultStyles {
    const defaultStyles = getDefaultStyles(palette);
    const themeStyles = {
        page: {
            lineHeight: 1,
            paddingTop: "5rem",
            minHeight: "100vh",
            fontFamily:
                "brown,-apple-system,BlinkMacSystemFont,avenir,lucida grande,gill sans,helvetica neue,helvetica,sans-serif",
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
            marginBottom: "3rem"
        },
        pageToggle: {
            position: "absolute",
            right: "3.5rem",
            top: "2.5rem",
            color: "#9c9c9c",
            textDecoration: "none",
            "@media (max-width: 360px)": {
                left: "1rem",
                right: "1rem"
            }
        },
        pageTogglePrimary: {
            color: "#fff"
        },
        pageTestimonialAndForm: {
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "10px",
            display: "flex",
            background: "#fff",
            maxWidth: "50rem",
            borderRadius: "5px",
            alignItems: "stretch",
            boxShadow: "0 0 40px rgba(0,0,0,.3)",
            color: "#494854",
            margin: "0 auto",
            "@media (max-width: 800px)": {
                margin: "26px auto",
                minWidth: "50%"
            },
            "@media (max-width: 440px)": {
                margin: "12px auto",
                minWidth: "90%"
            }
        },
        pageForm: {
            borderRadius: "0 5px 5px 0",
            flexShrink: 0,
            flexGrow: 0,
            width: "50%",
            margin: 0,
            "@media (max-width: 800px)": {
                width: "100%"
            }
        },

        pageTestimonial: {
            background: "#f2f2f4",
            flexShrink: 0,
            flexGrow: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "40%",
            borderRadius: "5px 0 0 5px",
            padding: "2rem",
            "@media (max-width: 800px)": {
                display: "none"
            }
        },
        pageTestimonialQuote: {
            fontSize: palette.fonts.size[2],
            fontWeight: 300,
            marginBottom: "2rem",
            lineHeight: "2rem",
            background:
                "url(https://dbd6j53uzcole.cloudfront.net/assets/images/auth/accent-shapes.0b7b6f87af1a0da7734fc1068f9f41a4.svg) no-repeat 0 0",
            paddingTop: "2.5rem"
        },
        pageTestimonialAttribution: {
            display: "flex"
        },
        pageTestimonialPhoto: {
            borderRadius: "50% 50%",
            overflow: "hidden",
            display: "block",
            width: "2.25rem",
            height: "2.25rem",
            flexGrow: 0,
            flexShrink: 0,
            marginRight: "1rem"
        },
        pageTestimonialName: {
            marginBottom: ".5rem"
        },
        pageTestimonialTitle: {
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".08rem",
            fontSize: palette.fonts.size[0],
            color: "#a5a5ac",
            lineHeight: "1rem"
        },
        header: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginBottom: "3rem"
        },
        headerSubtitle: {
            fontSize: palette.fonts.size[2],
            opacity: "0.8",
            lineHeight: 1.5
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
            paddingTop: "45px",
            paddingBottom: "0px"
        },

        input: {
            fontSize: palette.fonts.size[3],
            borderRadius: "4px",
            border: "1px solid #d8d8db",
            padding: ".4rem .5rem",
            lineHeight: "normal",
            height: "20px"
        },

        inputErrorMessage: {
            fontSize: palette.fonts.size[2]
        },

        formRow: {
            paddingBottom: "36px"
        },

        button: {
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".08rem",
            borderRadius: "4px",
            padding: ".7rem 1.4rem",
            border: "none",
            fontSize: palette.fonts.size[2],
            height: "38px"
        },

        label: {
            lineHeight: "24px",
            color: palette.colors.textLabel,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".08rem",
            marginBottom: ".5rem",
            paddingBottom: "0px",
            display: "block"
        },

        headerTitle: {
            lineHeight: "40px",
            letterSpacing: "0.58px",
            color: palette.colors.textTitle,
            fontSize: palette.fonts.size[5],
            fontWeight: 300,
            marginBottom: "1.25rem"
        },

        mainTitle: {
            lineHeight: "40px",
            letterSpacing: "0.58px",
            color: "#fff",
            fontSize: palette.fonts.size[5],
            fontWeight: 300,
            marginBottom: "1.25rem"
        },

        headerSubTitle: {
            marginTop: "9px",
            marginBottom: "21px"
        },

        forgotPasswordLink: {
            marginTop: "10px"
        },

        successMessageSubmitNewPassword: {
            marginTop: "15px",
            marginBottom: "15px"
        },

        successMessageEnterEmail: {
            marginTop: "15px"
        },

        privacyPolicyAndTermsAndConditions: {
            fontSize: palette.fonts.size[1],
            lineHeight: "1.5",
            display: "block",
            alignItems: "start",
            marginTop: "10px"
        },

        container: {
            width: "100%",
            margin: "inherit",
            border: "inherit",
            boxShadow: "inherit",
            minWidth: "inherit",
            maxWidth: "inherit",
            fontFamily:
                "brown,-apple-system,BlinkMacSystemFont,avenir,lucida grande,gill sans,helvetica neue,helvetica,sans-serif"
        },

        secondaryText: {
            marginBottom: "10px"
        }
    } as NormalisedDefaultStyles;

    return getMergedStyles(defaultStyles, themeStyles);
}
