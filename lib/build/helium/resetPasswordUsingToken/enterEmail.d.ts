import { PureComponent } from "react";
import { EnterEmailThemeProps, EnterEmailThemeState } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export default class EnterEmailTheme extends PureComponent<EnterEmailThemeProps, EnterEmailThemeState> {
    constructor(props: EnterEmailThemeProps);
    onSuccess: () => void;
    resend: () => void;
    render(): JSX.Element;
}
