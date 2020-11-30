import * as React from "react";
import { PureComponent } from "react";
import { SignInThemeProps } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export default class SignInTheme extends PureComponent<SignInThemeProps> {
    static contextType: React.Context<{
        [x: string]: import("@emotion/serialize").CSSObject;
        palette: import("supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/types").NormalisedPalette;
    }>;
    render(): JSX.Element;
}
