import { CSSObject } from "@emotion/core";
import React from "react";
import { Styles } from "supertokens-auth-react/lib/build/types";
import { NormalisedPalette } from "../types";
declare type NormalisedStyle = {
    palette: NormalisedPalette;
    [x: string]: CSSObject;
};
export declare function StyleProvider({ children, styleFromInit }: {
    children: JSX.Element;
    styleFromInit?: Styles;
}): JSX.Element;
export declare const StyleConsumer: React.ExoticComponent<React.ConsumerProps<NormalisedStyle>>;
export {};
