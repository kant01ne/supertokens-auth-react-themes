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
import React, { useContext } from "react";
import { Styles } from "supertokens-auth-react/lib/build/types";
import StyleProvider from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";
import { Testimonial } from "./types";

/*
 * Props.
 */

type PageProps = {
    form: JSX.Element;
    header?: JSX.Element;
    toggle?: JSX.Element;
    testimonial?: Testimonial;
    logo?: string;
};

/*
 * Styles.
 */
function getComponentStyle({ testimonial }: { testimonial?: Testimonial }): Styles {
    let testimonialStyles: Record<string, CSSObject> = {};
    if (testimonial === undefined) {
        testimonialStyles = {
            pageForm: {
                width: "100%",
                borderRadius: "5px",
                minWidth: "330px",
                "@media (max-width: 440px)": {
                    minWidth: "300px"
                },
                "@media (max-width: 340px)": {
                    minWidth: "260px"
                },
                "@media (max-width: 300px)": {
                    minWidth: "200px"
                }
            } as CSSObject
        };
    }

    return {
        ...testimonialStyles,
        pageLogo: {
            width: "2rem",
            height: "2rem",
            "@media (max-width: 440px)": {
                display: "none"
            },
            display: "block",
            position: "absolute",
            left: "3.5rem",
            top: "2.5rem"
        } as CSSObject,
        pageLogoImg: {
            maxHeight: "80px",
            maxWidth: "200px"
        } as CSSObject
    };
}

/*
 * Component.
 */

export default function Page({ form, header, toggle, testimonial, logo }: PageProps): JSX.Element {
    const styles = useContext(StyleProvider);
    const componentStyle = getComponentStyle({ testimonial });
    return (
        <div>
            <div>
                {toggle !== undefined && (
                    <div className="pageToggle" css={styles.pageToggle}>
                        {toggle}
                    </div>
                )}
                {logo !== undefined && (
                    <a href="/" className="pageLogo" css={[componentStyle.pageLogo, styles.pageLogo]}>
                        <img
                            className="pageLogoImg"
                            css={[componentStyle.pageLogoImg, styles.pageLogoImg]}
                            src={logo}
                        />
                    </a>
                )}
            </div>
            <div className="page" css={styles.page}>
                {header !== undefined && (
                    <div className="pageHeader" css={styles.pageHeader}>
                        {header}
                    </div>
                )}
                <div className="pageTestimonialAndForm" css={styles.pageTestimonialAndForm}>
                    {testimonial && (
                        <div className="pageTestimonial" css={styles.pageTestimonial}>
                            <div className="pageTestimonialQuote" css={styles.pageTestimonialQuote}>
                                “{testimonial.quote}”
                            </div>

                            <div className="pageTestimonialAttribution" css={styles.pageTestimonialAttribution}>
                                <img
                                    className="pageTestimonialPhoto"
                                    css={styles.pageTestimonialPhoto}
                                    src={testimonial.picture}
                                />
                                <div className="pageTestimonialNameAndTitle" css={styles.pageTestimonialNameAndTitle}>
                                    <div className="pageTestimonialName" css={styles.pageTestimonialName}>
                                        {testimonial.name}
                                    </div>
                                    <div className="pageTestimonialTitle" css={styles.pageTestimonialTitle}>
                                        {testimonial.title},<br />
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="pageForm" css={[styles.pageForm, componentStyle.pageForm]}>
                        {form}
                    </div>
                </div>
            </div>
        </div>
    );
}
