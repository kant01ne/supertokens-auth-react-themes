import * as React from "react";
import { PureComponent } from "react";
import { FormFieldState, SignUpThemeProps } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export default class SignUpTheme extends PureComponent<SignUpThemeProps, {
    formFields: FormFieldState[];
}> {
    static contextType: React.Context<{
        [x: string]: import("@emotion/serialize").CSSObject;
        palette: import("supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/types").NormalisedPalette;
    }>;
    constructor(props: SignUpThemeProps);
    render(): JSX.Element;
}
