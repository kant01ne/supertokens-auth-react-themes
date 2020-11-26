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
/** @jsx jsx */
import { CSSObject, jsx } from "@emotion/core";
import { StyleConsumer } from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";

/*
 * Styles.
 */
export function getStyles(backgroundColor: string): CSSObject {
    return {
        fontFamily: "'Quicksand', sans-serif;",
        background: backgroundColor,
        backgroundSize: "cover",
        position: "relative",
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column"
    };
}

/*
 * Component.
 */

export default function BaseTheme({ children }: { children: JSX.Element }): JSX.Element {
    return (
        <StyleConsumer>
            {styles => {
                const rootStyles = getStyles(styles.palette.colors.background);
                return (
                    <div css={rootStyles}>
                        {children}
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
                            rel="stylesheet"></link>
                    </div>
                );
            }}
        </StyleConsumer>
    );
}
