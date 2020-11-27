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
import { Fragment, useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { SignInAndUpThemeProps } from "../types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../page";
import SuperTokens from "supertokens-auth-react/lib/build/superTokens";
import {
    StyleConsumer,
    StyleProvider
} from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";
import BaseTheme from "../baseTheme";
import { themePalette, getThemeStyles } from "../styles/styles";

/*
 * Component.
 */

function SignInAndUpTheme(props: SignInAndUpThemeProps): JSX.Element {
    /*
     * State.
     */

    const [isSignUp, setSignUp] = useState(props.defaultToSignUp);

    /*
     * Render.
     */

    // If not isSignUp, return Sign In.
    if (isSignUp === false) {
        return (
            <StyleProvider
                defaultPalette={themePalette}
                getDefaultStyles={getThemeStyles}
                styleFromInit={props.signInForm.styleFromInit}>
                <StyleConsumer>
                    {styles => (
                        <Page
                            logo={props.logo}
                            toggle={
                                <Fragment>
                                    Not a customer?{" "}
                                    <span
                                        className="headerTogglePrimary"
                                        css={styles.headerTogglePrimary}
                                        onClick={() => setSignUp(true)}>
                                        Get started for free
                                    </span>
                                </Fragment>
                            }
                            header={
                                <Fragment>
                                    <span className="headerTitle" css={styles.headerTitle}>
                                        Sign in to {SuperTokens.getAppInfo().appName}
                                    </span>
                                </Fragment>
                            }
                            form={<SignIn {...props.signInForm} />}
                        />
                    )}
                </StyleConsumer>
            </StyleProvider>
        );
    }

    // Otherwise, return SignUp.
    return (
        <StyleProvider
            defaultPalette={themePalette}
            getDefaultStyles={getThemeStyles}
            styleFromInit={props.signUpForm.styleFromInit}>
            <StyleConsumer>
                {styles => (
                    <Page
                        logo={props.logo}
                        toggle={
                            <div className="headerTogglePrimary" css={styles.headerTogglePrimary}>
                                <span onClick={() => setSignUp(false)}>Sign in</span>
                            </div>
                        }
                        header={
                            <Fragment>
                                <span className="headerTitle" css={styles.headerTitle}>
                                    Get started for free.
                                </span>
                                <span className="headerSubtitle" css={styles.headerSubtitle}>
                                    No credit card required.
                                </span>
                            </Fragment>
                        }
                        form={<SignUp {...props.signUpForm} />}
                    />
                )}
            </StyleConsumer>
        </StyleProvider>
    );
}

function SignInAndUpThemeWrapper(props: SignInAndUpThemeProps): JSX.Element {
    return (
        <StyleProvider defaultPalette={themePalette} getDefaultStyles={getThemeStyles}>
            <BaseTheme>
                <SignInAndUpTheme {...props} />
            </BaseTheme>
        </StyleProvider>
    );
}

export default SignInAndUpThemeWrapper;
