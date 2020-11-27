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

/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { StyleConsumer } from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";

/*
 * Props.
 */

type PageProps = {
    backgroundUrl?: string;
    form: JSX.Element;
    header?: JSX.Element;
    toggle?: JSX.Element;
    logo?: string;
};

/*
 * Component.
 */

export default function Page({ form, header, logo, backgroundUrl }: PageProps): JSX.Element {
    return (
        <StyleConsumer>
            {styles => (
                <div>
                    <div className="page" css={styles.page}>
                        <div className="pageIllustration" css={styles.pageIllustration}>
                            {backgroundUrl !== undefined && (
                                <img className="pageBackgroundImg" css={styles.pageBackgroundImg} src={backgroundUrl} />
                            )}
                        </div>
                        <div className="pageFormWrapper" css={styles.pageFormWrapper}>
                            {header !== undefined && (
                                <div className="pageHeader" css={styles.pageHeader}>
                                    {header}
                                    {logo !== undefined && (
                                        <a href="/" className="pageLogo" css={styles.pageLogo}>
                                            <img className="pageLogoImg" css={styles.pageLogoImg} src={logo} />
                                        </a>
                                    )}
                                </div>
                            )}
                            <div className="pageForm" css={styles.pageForm}>
                                {form}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </StyleConsumer>
    );
}
