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
import { PureComponent, Fragment } from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
    SubmitNewPasswordThemeProps,
    SubmitNewPasswordThemeState
} from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
import StyleContext from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";
import { FormRow, Button } from "supertokens-auth-react/lib/build/recipe/emailpassword/components/library";
import FormBase from "supertokens-auth-react/lib/build/recipe/emailpassword/components/library/FormBase";

/*
 * Component.
 */

export default class SubmitNewPasswordTheme extends PureComponent<
    SubmitNewPasswordThemeProps,
    SubmitNewPasswordThemeState
> {
    static contextType = StyleContext;
    /*
     * Constructor.
     */
    constructor(props: SubmitNewPasswordThemeProps) {
        super(props);

        this.state = {
            hasNewPassword: false
        };
    }

    onSuccess = (): void => {
        this.setState(oldState => ({
            ...oldState,
            hasNewPassword: true
        }));

        if (this.props.onSuccess !== undefined) {
            this.props.onSuccess();
        }
    };

    /*
     * Render.
     */

    render(): JSX.Element {
        const styles = this.context;
        const { callAPI, onSignInClicked, formFields } = this.props;
        const { hasNewPassword } = this.state;

        if (hasNewPassword === true) {
            return (
                <div className="container" css={styles.container}>
                    <div className="row" css={styles.row}>
                        <div className="headerTitle" css={styles.headerTitle}>
                            Success!
                        </div>
                        <FormRow key="form-button">
                            <Fragment>
                                <div
                                    className="primaryText successMessageSubmitNewPassword"
                                    css={[styles.primaryText, styles.successMessageSubmitNewPassword]}>
                                    Your password has been updated successfully
                                </div>
                                <Button
                                    disabled={false}
                                    isLoading={false}
                                    type="button"
                                    onClick={onSignInClicked}
                                    label={"SIGN IN"}
                                />
                            </Fragment>
                        </FormRow>
                    </div>
                </div>
            );
        }

        // Otherwise, dispaly reset password form.
        return (
            <FormBase
                formFields={formFields}
                buttonLabel={"Change password"}
                onSuccess={this.onSuccess}
                callAPI={callAPI}
                showLabels={false}
                validateOnBlur={true}
                header={
                    <Fragment>
                        <div className="headerTitle" css={styles.headerTitle}>
                            Change your password
                        </div>
                        <div className="headerSubtitle" css={styles.headerSubTitle}>
                            <div className="secondaryText" css={styles.secondaryText}>
                                Enter a new password below to change your password
                            </div>
                        </div>
                    </Fragment>
                }
            />
        );
    }
}
