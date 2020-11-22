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

import { CSSObject } from "@emotion/core";
import {
    EnterEmailThemeProps,
    ResetPasswordUsingTokenThemeProps,
    SignInAndUpThemeProps,
    SubmitNewPasswordThemeProps
} from "supertokens-auth-react/lib/build/recipe/emailpassword/types";

export enum paletteColorOptions {
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

export type NormalisedPalette = {
    colors: Record<paletteColorOptions, string>;
    fonts: {
        size: string[];
    };
};

export enum defaultStylesOptions {
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

export type Testimonial = {
    quote: string;
    name: string;
    title: string;
    company: string;
    picture: string;
};

export type NormalisedDefaultStyles = Record<defaultStylesOptions, CSSObject>;

export type SignInAndUpThemeWrapperProps = SignInAndUpThemeProps & {
    logo?: string;
    testimonial?: Testimonial;
    backgroundUrl?: string;
};

export type ResetPasswordUsingTokenThemeWrapperProps = {
    // TODO fix in supertokens-auth-react
    enterEmailForm: EnterEmailThemeProps;
    submitNewPasswordForm: SubmitNewPasswordThemeProps;
    hasToken: boolean;
    backgroundUrl?: string;
    logo?: string;
};

export type SignInAndUpFullPageThemeProps = SignInAndUpThemeProps & {
    logo?: string;
    testimonial?: Testimonial;
};

export type ResetPasswordUsingTokenFullPageThemeProps = ResetPasswordUsingTokenThemeProps & {
    logo?: string;
};
