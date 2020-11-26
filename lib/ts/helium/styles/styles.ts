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
import { jsx, keyframes } from "@emotion/core";
import {
    NormalisedPalette,
    NormalisedDefaultStyles
} from "supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/types";

export const defaultPalette: NormalisedPalette = {
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

/*
 * Default styles.
 */
const slideTop = keyframes`
    0% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const swingIn = keyframes`
0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}
@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
`;

export function getDefaultStyles(palette: NormalisedPalette): NormalisedDefaultStyles {
    return {
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
            textAlign: "center",
            minWidth: "440px",
            "@media (max-width: 440px)": {
                margin: "12px",
                minWidth: "320px"
            },
            "@media (max-width: 340px)": {
                minWidth: "260px"
            },
            "@media (max-width: 300px)": {
                minWidth: "220px"
            }
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
            margin: "0 auto",
            width: "80%",
            paddingTop: "25px",
            paddingBottom: "20px"
        },

        generalError: {
            backgroundColor: palette.colors.generalErrorBackground,
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "18px",
            paddingRight: "18px",
            letterSpacing: "0.2px",
            fontSize: palette.fonts.size[1],
            borderRadius: "12px",
            color: palette.colors.error,
            animation: `${swingIn} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both`
        },

        inputWrapper: {
            float: "left",
            width: "100%"
        },

        inputError: {
            border: `1px solid ${palette.colors.error}`
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
            marginBottom: "1rem",
            width: "90%",
            backgroundColor: palette.colors.inputBackground,
            lineHeight: "normal",
            letterSpacing: "1.2px",
            "&:focus": {
                border: `1px solid ${palette.colors.primary}`,
                outline: "none"
            },
            height: "25px"
        },

        inputErrorMessage: {
            color: palette.colors.error,
            lineHeight: "24px",
            fontWeight: 400,
            fontSize: "14px",
            textAlign: "left",
            animation: `${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
        },

        inputErrorSymbol: {
            marginRight: "5px",
            top: "1px",
            position: "relative",
            left: "2px"
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
            height: "42px",
            backgroundColor: palette.colors.primary,
            borderWidth: "0px",
            "&:disabled": {
                cursor: "no-drop",
                opacity: ".7"
            },
            "&:active": {
                outline: "none",
                border: "none"
            },
            "&:hover": {
                opacity: ".8"
            },
            cursor: "pointer"
        },

        label: {
            textAlign: "left",
            lineHeight: "24px",
            color: palette.colors.textLabel,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".08rem",
            fontSize: palette.fonts.size[1],
            marginBottom: ".5rem",
            display: "block"
        },

        formRow: {
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
            paddingBottom: "5px"
        },

        primaryText: {
            fontSize: palette.fonts.size[1],
            fontWeight: 400,
            letterSpacing: "0.4px",
            color: palette.colors.textLabel
        },

        secondaryText: {
            fontSize: palette.fonts.size[1],
            fontWeight: 300,
            letterSpacing: "0.4px",
            color: palette.colors.textPrimary
        },

        link: {
            paddingLeft: "3px",
            paddingRight: "3px",
            color: palette.colors.textLink,
            cursor: "pointer",
            letterSpacing: "0.16px",
            lineHeight: "26px",
            textDecoration: "none"
        },

        divider: {
            marginTop: "1em",
            marginBottom: "1em",
            borderBottom: "0.3px solid #dddddd",
            display: "flex",
            alignItems: "center"
        }
    };
}
