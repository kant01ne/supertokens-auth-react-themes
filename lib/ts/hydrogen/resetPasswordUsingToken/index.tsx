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
import * as React from "react";
import { StyleProvider } from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";
import BaseTheme from "../baseTheme";
import Page from "../page";
import { defaultPalette, getDefaultStyles } from "../styles/styles";
import { ResetPasswordUsingTokenThemeProps, ResetPasswordUsingTokenThemeWrapperProps } from "../types";

import EnterEmail from "./enterEmail";
import SubmitNewPassword from "./submitNewPassword";

/*
 * Component.
 */

function ResetPasswordUsingTokenTheme(props: ResetPasswordUsingTokenThemeProps): JSX.Element {
    /*
     * Render.
     */

    // If no token, return SubmitNewPassword.
    if (props.hasToken) {
        return (
            <StyleProvider
                defaultPalette={defaultPalette}
                getDefaultStyles={getDefaultStyles}
                styleFromInit={props.enterEmailForm.styleFromInit}>
                <Page form={<SubmitNewPassword {...props.submitNewPasswordForm} />} logo={props.logo} />
            </StyleProvider>
        );
    }

    // Otherwise, return EnterEmail.
    return (
        <StyleProvider
            defaultPalette={defaultPalette}
            getDefaultStyles={getDefaultStyles}
            styleFromInit={props.enterEmailForm.styleFromInit}>
            <Page form={<EnterEmail {...props.enterEmailForm} />} logo={props.logo} />
        </StyleProvider>
    );
}

function ResetPasswordUsingTokenThemeWrapper(props: ResetPasswordUsingTokenThemeWrapperProps): JSX.Element {
    return (
        <BaseTheme backgroundUrl={props.backgroundUrl}>
            <ResetPasswordUsingTokenTheme {...props} />
        </BaseTheme>
    );
}

export default ResetPasswordUsingTokenThemeWrapper;
