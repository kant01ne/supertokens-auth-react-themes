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
import {
    EnterEmailThemeProps,
    EnterEmailThemeState
} from "supertokens-auth-react/lib/build/recipe/emailpassword/types";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import FormBase from "supertokens-auth-react/lib/build/recipe/emailpassword/components/library/FormBase";
import StyleContext from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";
/*
 * Component.
 */

export default class EnterEmailTheme extends PureComponent<EnterEmailThemeProps, EnterEmailThemeState> {
    static contextType = StyleContext;
    /*
     * Constructor.
     */
    constructor(props: EnterEmailThemeProps) {
        super(props);

        this.state = {
            emailSent: false
        };
    }

    /*
     * Methods.
     */

    onSuccess = (): void => {
        this.setState(oldState => ({
            ...oldState,
            emailSent: true
        }));
        if (this.props.onSuccess !== undefined) {
            this.props.onSuccess();
        }
    };

    resend = (): void => {
        this.setState(oldState => ({
            ...oldState,
            emailSent: false
        }));
    };

    /*
     * Render.
     */
    render(): JSX.Element {
        const styles = this.context;
        const { callAPI, formFields } = this.props;
        const { emailSent } = this.state;
        // If email sent, show success UI.
        if (emailSent === true) {
            return (
                <div className="container" css={styles.container}>
                    <div className="row" css={styles.row}>
                        <div
                            className="primaryText successMessageEnterEmail"
                            css={[styles.primaryText, styles.successMessageEnterEmail]}>
                            Please check your email for the password recovery link.{" "}
                            <span className="link" css={styles.link} onClick={this.resend}>
                                Resend
                            </span>
                        </div>
                    </div>
                </div>
            );
        }

        // Otherwise, return Form.
        return (
            <FormBase
                formFields={formFields}
                buttonLabel={"Email me"}
                onSuccess={this.onSuccess}
                callAPI={callAPI}
                showLabels={false}
                validateOnBlur={true}
                header={
                    <Fragment>
                        <div className="headerTitle" css={styles.headerTitle}>
                            Reset your password
                        </div>
                        <div className="headerSubtitle" css={styles.headerSubtitle}>
                            <div className="secondaryText" css={styles.secondaryText}>
                                We will send you an email to reset your password
                            </div>
                        </div>
                    </Fragment>
                }
            />
        );
    }
}
