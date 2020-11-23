import { CSSObject } from "@emotion/core";
import { ResetPasswordUsingTokenThemeProps, SignInAndUpThemeProps } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export declare enum paletteColorOptions {
    BACKGROUND = "background",
    INPUTBACKGROUND = "inputBackground",
    GENERALERRORBACKGROUND = "generalErrorBackground",
    PRIMARY = "primary",
    ERROR = "error",
    TEXTTITLE = "textTitle",
    TEXTLABEL = "textLabel",
    TEXTPRIMARY = "textPrimary",
    TEXTLINK = "textLink"
}
export declare type NormalisedPalette = {
    colors: Record<paletteColorOptions, string>;
    fonts: {
        size: string[];
    };
};
export declare enum defaultStylesOptions {
    PAGE = "page",
    PAGETOGGLE = "pageToggle",
    PAGETOGGLEPRIMARY = "pageTogglePrimary",
    PAGEHEADER = "pageHeader",
    PAGEFORM = "pageForm",
    PAGETETSTIMONIALANDFORM = "pageTestimonialAndForm",
    PAGETETSTIMONIAL = "pageTestimonial",
    PAGETETSTIMONIALQUOTE = "pageTestimonialQuote",
    PAGETETSTIMONIALATTRIBUTION = "pageTestimonialAttribution",
    PAGETETSTIMONIALPHOTO = "pageTestimonialPhoto",
    PAGETETSTIMONIALNAMEANDTITLE = "pageTestimonialNameAndTitle",
    PAGETETSTIMONIALNAME = "pageTestimonialName",
    PAGETETSTIMONIALTITLE = "pageTestimonialTitle",
    PAGETESTIMONIAL = "pageTestimonial",
    FORMCONTAINER = "formContainer",
    HEADERTOGGLE = "headerToggle",
    HEADERTOGGLEPRIMARY = "headerTogglePrimary",
    HEADER = "header",
    HEADERTITLE = "headerTitle",
    HEADERSUBTITLE = "headerSubtitle",
    ROW = "row",
    GENERALERROR = "generalError",
    INPUTWRAPPER = "inputWrapper",
    INPUT = "input",
    INPUTERROR = "inputError",
    INPUTADORNMENT = "inputAdornment",
    INPUTERRORMESSAGE = "inputErrorMessage",
    BUTTON = "button",
    LABEL = "label",
    FORMROW = "formRow",
    PRIMARYTEXT = "primaryText",
    SECONDARYTEXT = "secondaryText",
    LINK = "link",
    DIVIDER = "divider"
}
export declare type Testimonial = {
    quote: string;
    name: string;
    title: string;
    company: string;
    picture: string;
};
export declare type NormalisedDefaultStyles = Record<defaultStylesOptions, CSSObject>;
export declare type SignInAndUpThemeWrapperProps = SignInAndUpThemeProps & {
    logo?: string;
    testimonial?: Testimonial;
    backgroundUrl?: string;
};
export declare type ResetPasswordUsingTokenThemeWrapperProps = ResetPasswordUsingTokenThemeProps & {
    backgroundUrl?: string;
    logo?: string;
};
export declare type SignInAndUpFullPageThemeProps = SignInAndUpThemeProps & {
    logo?: string;
    testimonial?: Testimonial;
};
export declare type ResetPasswordUsingTokenFullPageThemeProps = ResetPasswordUsingTokenThemeProps & {
    logo?: string;
};
