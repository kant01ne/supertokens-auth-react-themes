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

import { Styles } from "supertokens-auth-react/lib/build/types";
import * as React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

/*
 * Styles.
 */
export function getStyles(backgroundUrlFromUser?: string): Styles {
    // TODO Store image in our cloudfront.
    const backgroundUrl: string =
        backgroundUrlFromUser !== undefined
            ? backgroundUrlFromUser
            : "https://dbd6j53uzcole.cloudfront.net/assets/images/auth/background.dabff70d179a0bd98ed5a141d44d27cb.svg";
    return {
        root: {
            background: `#4949e4 url(${backgroundUrl}) no-repeat`,
            backgroundSize: "cover",
            margin: "-26px",
            position: "relative",
            width: "100vw",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column"
        }
    };
}

/*
 * Component.
 */

export default function BaseTheme({
    backgroundUrl,
    children
}: {
    backgroundUrl?: string;
    children: JSX.Element;
}): JSX.Element {
    const styles = getStyles(backgroundUrl);
    return (
        <div css={styles.root}>
            {children}
            <link
                href="https://dbd6j53uzcole.cloudfront.net/assets/fonts/brown/lineto-brown-pro-regular.8ddac50caed418f66b3bb7e9a7699c78.woff2"
                rel="stylesheet"
                type="text/css"></link>
            <link
                href="https://dbd6j53uzcole.cloudfront.net/assets/fonts/brown/lineto-brown-pro-bold.12a9490e63e36f045babfda4b9dcd2de.woff2"
                rel="stylesheet"
                type="text/css"></link>
            <link
                href="https://dbd6j53uzcole.cloudfront.net/assets/fonts/brown/lineto-brown-pro-light.a45b6351d33a8798d2eca810f727ad71.woff2"
                rel="stylesheet"
                type="text/css"></link>
        </div>
    );
}
