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
import { PureComponent, createRef } from "react";
import { SignInThemeProps, FormFieldState } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
import { CSSObject } from "@emotion/serialize/types";

/** @jsx jsx */
import { jsx } from "@emotion/core";

import FormBase from "../library/FormBase";
import { Styles } from "supertokens-auth-react/lib/build/types";
import { StyleConsumer, StyleProvider } from "../styles/styleContext";
import { NormalisedPalette } from "../types";

/*
 * Styles.
 */

function getStyles(palette: NormalisedPalette): Styles {
    return {
        headerTitle: {
            fontSize: palette.fonts.size[2],
            lineHeight: "40px",
            letterSpacing: "0.58px",
            fontWeight: 800,
            color: palette.colors.textTitle
        } as CSSObject,

        headerSubTitle: {
            marginTop: "9px",
            marginBottom: "21px"
        } as CSSObject,

        forgotPasswordLink: {
            marginTop: "10px"
        } as CSSObject
    };
}

/*
 * Component.
 */

export default class SignInTheme extends PureComponent<SignInThemeProps, { formFields: FormFieldState[] }> {
    /*
     * Constructor.
     */
    constructor(props: SignInThemeProps) {
        super(props);

        const formFields = props.formFields.map(field => {
            return {
                ...field,
                ref: createRef<HTMLInputElement>(),
                validated: false
            };
        });

        this.state = {
            formFields
        };
    }

    /*
     * Render.
     */

    render(): JSX.Element {
        const { forgotPasswordClick, styleFromInit, onSuccess, callAPI } = this.props;
        const { formFields } = this.state;

        return (
            <StyleProvider styleFromInit={styleFromInit}>
                <StyleConsumer>
                    {styles => {
                        const componentStyle = getStyles(styles.palette as NormalisedPalette);
                        return (
                            <FormBase
                                formFields={formFields}
                                buttonLabel={"SIGN IN"}
                                onSuccess={onSuccess}
                                callAPI={callAPI}
                                showLabels={true}
                                footer={
                                    <div
                                        className="link secondaryText forgotPasswordLink"
                                        css={[
                                            styles.link,
                                            styles.secondaryText,
                                            componentStyle.forgotPasswordLink,
                                            styles.forgotPasswordLink
                                        ]}
                                        onClick={forgotPasswordClick}>
                                        Forgot password?
                                    </div>
                                }
                            />
                        );
                    }}
                </StyleConsumer>
            </StyleProvider>
        );
    }
}
