/// <reference types="react" />
import { Styles } from "supertokens-auth-react/lib/build/types";
export declare function getStyles(backgroundUrlFromUser?: string): Styles;
export default function BaseTheme({ backgroundUrl, children }: {
    backgroundUrl?: string;
    children: JSX.Element;
}): JSX.Element;
