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
import BaseTheme from "../baseTheme";
import Page from "../library/page";
import { ResetPasswordUsingTokenFullPageThemeProps, ResetPasswordUsingTokenThemeWrapperProps } from "../types";

import EnterEmail from "./enterEmail";
import SubmitNewPassword from "./submitNewPassword";

/*
 * Component.
 */

function ResetPasswordUsingTokenTheme(props: ResetPasswordUsingTokenFullPageThemeProps): JSX.Element {
    /*
     * Render.
     */

    // If no token, return SubmitNewPassword.
    if (props.hasToken) {
        return <Page form={<SubmitNewPassword {...props.submitNewPassword} />} logo={props.logo} />;
    }

    // Otherwise, return EnterEmail.
    return <Page form={<EnterEmail {...props.enterEmail} />} logo={props.logo} />;
}

function ResetPasswordUsingTokenThemeWrapper(props: ResetPasswordUsingTokenThemeWrapperProps): JSX.Element {
    const { submitNewPasswordForm, enterEmailForm, hasToken, logo } = props;

    return (
        <BaseTheme backgroundUrl={props.backgroundUrl}>
            <ResetPasswordUsingTokenTheme
                logo={logo}
                submitNewPassword={submitNewPasswordForm}
                enterEmail={enterEmailForm}
                hasToken={hasToken}
            />
        </BaseTheme>
    );
}

export default ResetPasswordUsingTokenThemeWrapper;
