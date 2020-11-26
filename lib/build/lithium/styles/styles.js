"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDefaultStyles = getDefaultStyles;
exports.defaultPalette = void 0;

var _core = require("@emotion/core");

function _templateObject2() {
    var data = _taggedTemplateLiteral([
        "\n0% {\n    -webkit-transform: rotateX(-100deg);\n            transform: rotateX(-100deg);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    opacity: 1;\n  }\n}\n@keyframes swing-in-top-fwd {\n  0% {\n    -webkit-transform: rotateX(-100deg);\n            transform: rotateX(-100deg);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    opacity: 1;\n  }\n"
    ]);

    _templateObject2 = function _templateObject2() {
        return data;
    };

    return data;
}

function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n    0% {\n        transform: translateY(-5px);\n    }\n    100% {\n        transform: translateY(0px);\n    }\n"
    ]);

    _templateObject = function _templateObject() {
        return data;
    };

    return data;
}

function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var defaultPalette = {
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
/*
 * Default styles.
 */

exports.defaultPalette = defaultPalette;
var slideTop = (0, _core.keyframes)(_templateObject());
var swingIn = (0, _core.keyframes)(_templateObject2());

function getDefaultStyles(palette) {
    return {
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
            margin: "0 auto",
            width: "90%",
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
            animation: "".concat(swingIn, " 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both")
        },
        inputWrapper: {
            float: "left",
            width: "100%"
        },
        inputError: {
            border: "1px solid ".concat(palette.colors.error)
        },
        input: {
            flex: 1,
            height: "0px",
            color: palette.colors.primary,
            border: "1px solid #c8ced7",
            borderRadius: "2px",
            outline: "none",
            padding: "1rem",
            fontSize: "1rem",
            lineHeight: "18px",
            boxShadow: "none",
            textAlign: "center",
            transition: "border 200ms ease 0ms,box-shadow 200ms ease 0ms",
            marginBottom: "1rem",
            width: "90%",
            backgroundColor: palette.colors.inputBackground,
            letterSpacing: "1.2px",
            "&:focus": {
                border: "1px solid ".concat(palette.colors.primary),
                outline: "none"
            }
        },
        inputErrorMessage: {
            color: palette.colors.error,
            lineHeight: "24px",
            fontWeight: 400,
            fontSize: "14px",
            textAlign: "left",
            animation: "".concat(slideTop, " 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both")
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
            lineHeight: "20px",
            color: palette.colors.textLabel,
            fontWeight: 500,
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
        },
        forgotPasswordLink: {
            textDecoration: "underline"
        }
    };
}
