import * as React from "react";
import { PureComponent } from "react";
import { SignInThemeProps, FormFieldState } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export default class SignInTheme extends PureComponent<SignInThemeProps, {
    formFields: FormFieldState[];
}> {
    static contextType: React.Context<{
        [x: string]: import("@emotion/serialize").CSSObject;
        palette: import("supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/types").NormalisedPalette;
    }>;
    constructor(props: SignInThemeProps);
    render(): JSX.Element;
}
