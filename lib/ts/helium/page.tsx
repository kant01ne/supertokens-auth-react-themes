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
import StyleContext from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";
import React, { useContext } from "react";

/*
 * Props.
 */

type PageProps = {
    form: JSX.Element;
    header?: JSX.Element;
    toggle?: JSX.Element;
    logo?: string;
};

/*
 * Component.
 */

export default function Page({ form, header, toggle, logo }: PageProps): JSX.Element {
    const styles = useContext(StyleContext);
    return (
        <div>
            <div>
                {toggle !== undefined && (
                    <div className="pageToggle" css={styles.pageToggle}>
                        {toggle}
                    </div>
                )}
                {logo !== undefined && (
                    <a href="/" className="pageLogo" css={styles.pageLogo}>
                        <img className="pageLogoImg" css={styles.pageLogoImg} src={logo} />
                    </a>
                )}
            </div>
            <div className="page" css={styles.page}>
                {header !== undefined && (
                    <div className="pageHeader" css={styles.pageHeader}>
                        {header}
                    </div>
                )}
                <div className="pageForm" css={styles.pageForm}>
                    {form}
                </div>
            </div>
        </div>
    );
}
