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

import React, { useContext } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import StyleContext from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";

/*
 * Component.
 */

export default function BaseTheme({ children }: { children: JSX.Element }): JSX.Element {
    const styles = useContext(StyleContext);
    return (
        <div css={styles.root}>
            {children}
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
                rel="stylesheet"
                type="text/css"></link>
        </div>
    );
}
