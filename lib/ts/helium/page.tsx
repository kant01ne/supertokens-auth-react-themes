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
import { CSSObject, jsx } from "@emotion/core";
import * as React from "react";
import { Styles } from "supertokens-auth-react/lib/build/types";
import { StyleConsumer } from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";

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
 * Styles.
 */
function getComponentStyle({ logo }: { logo?: string }): Styles {
    let logoStyles: Record<string, CSSObject> = {};
    if (logo !== undefined) {
        logoStyles = {
            pageLogo: {
                width: "2rem",
                height: "2rem",
                "@media (max-width: 440px)": {
                    top: "5.5rem",
                    margin: "0 auto",
                    width: "100%"
                },
                display: "block",
                position: "absolute",
                "@media (min-width: 440px)": {
                    top: "2.5rem",
                    left: "3.5rem"
                }
            } as CSSObject,
            pageLogoImg: {
                maxHeight: "80px",
                maxWidth: "200px"
            }
        };
        if (logo.endsWith(".svg")) {
            logoStyles.pageLogo.background = `url(${logo}) no-repeat`;
            logoStyles.pageLogo.backgroundSize = "contain";
        }
    }

    return {
        ...logoStyles
    };
}

/*
 * Component.
 */

export default function Page({ form, header, toggle, logo }: PageProps): JSX.Element {
    const componentStyle = getComponentStyle({ logo });
    return (
        <StyleConsumer>
            {styles => (
                <div>
                    <div>
                        {toggle !== undefined && (
                            <div className="pageToggle" css={styles.pageToggle}>
                                {toggle}
                            </div>
                        )}
                        {logo !== undefined && (
                            <a href="/" className="pageLogo" css={[componentStyle.pageLogo, styles.pageLogo]}>
                                {!logo.endsWith(".svg") && (
                                    <img
                                        className="pageLogoImg"
                                        css={[componentStyle.pageLogoImg, styles.pageLogoImg]}
                                        src={logo}
                                    />
                                )}
                            </a>
                        )}
                    </div>
                    <div className="page" css={styles.page}>
                        {header !== undefined && (
                            <div className="pageHeader" css={styles.pageHeader}>
                                {header}
                            </div>
                        )}
                        <div className="pageForm" css={[styles.pageForm, componentStyle.pageForm]}>
                            {form}
                        </div>
                    </div>
                </div>
            )}
        </StyleConsumer>
    );
}
