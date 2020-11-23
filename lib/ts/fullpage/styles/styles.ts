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
import { NormalisedDefaultStyles, NormalisedPalette } from "../types";

export const defaultPalette: NormalisedPalette = {
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
            textDecoration: "none"
        },
        pageTogglePrimary: {
            color: "#fff"
        },
        pageTestimonialAndForm: {
            marginLeft: "10px",
            marginRight: "10px",
            display: "flex",
            background: "#fff",
            maxWidth: "50rem",
            borderRadius: "5px",
            alignItems: "stretch",
            boxShadow: "0 0 40px rgba(0,0,0,.3)",
            color: "#494854",
            marginBottom: "2rem",
            margin: "0 auto",
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
            "@media (max-width: 440px)": {
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
            "@media (max-width: 440px)": {
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
        pageTestimonialNameAndTitle: {},
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
        formContainer: {
            textAlign: "center",
            borderRadius: "5px",
            backgroundColor: palette.colors.background,
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
            textAlign: "center",
            marginBottom: "3rem"
        },
        headerSubtitle: {
            fontSize: palette.fonts.size[2],
            opacity: "0.8",
            lineHeight: 1.5
        },
        headerTitle: {
            fontSize: palette.fonts.size[5],
            fontWeight: 300,
            marginBottom: "1.25rem"
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
            fontSize: palette.fonts.size[3],
            width: "94%",
            backgroundColor: palette.colors.inputBackground,
            borderRadius: "4px",
            border: "1px solid #d8d8db",
            padding: ".4rem .5rem",
            lineHeight: "normal",
            letterSpacing: "1.2px",
            "&:focus": {
                border: `1px solid ${palette.colors.primary}`,
                outline: "none"
            },
            height: "20px",
            backgroundPosition: "90% 50% !important", // Password manager backgrounds.
            "@media (max-width: 800px)": {
                backgroundPosition: "87% 50% !important"
            },
            "@media (max-width: 440px)": {
                backgroundPosition: "84% 50% !important"
            }
        },

        inputAdornment: {
            float: "right",
            left: "-2%",
            top: "-19px",
            position: "relative",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            height: "0px"
        },

        inputErrorMessage: {
            paddingTop: "10px",
            color: palette.colors.error,
            lineHeight: "24px",
            fontWeight: 400,
            textAlign: "left",
            animation: `${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
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
                cursor: "no-drop"
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
