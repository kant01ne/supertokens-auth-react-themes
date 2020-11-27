import * as React from "react";
import { PureComponent } from "react";
import { EnterEmailThemeProps, EnterEmailThemeState } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export default class EnterEmailTheme extends PureComponent<EnterEmailThemeProps, EnterEmailThemeState> {
    static contextType: React.Context<{
        [x: string]: import("@emotion/serialize").CSSObject;
        palette: import("supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/types").NormalisedPalette;
    }>;
    constructor(props: EnterEmailThemeProps);
    onSuccess: () => void;
    resend: () => void;
    render(): JSX.Element;
}
