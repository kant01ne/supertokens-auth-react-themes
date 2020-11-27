import * as React from "react";
import { PureComponent } from "react";
import { SubmitNewPasswordThemeProps, SubmitNewPasswordThemeState } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export default class SubmitNewPasswordTheme extends PureComponent<SubmitNewPasswordThemeProps, SubmitNewPasswordThemeState> {
    static contextType: React.Context<{
        [x: string]: import("@emotion/serialize").CSSObject;
        palette: import("supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/types").NormalisedPalette;
    }>;
    constructor(props: SubmitNewPasswordThemeProps);
    onSuccess: () => void;
    render(): JSX.Element;
}
