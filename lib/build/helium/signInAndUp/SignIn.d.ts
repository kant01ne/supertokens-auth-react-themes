import { PureComponent } from "react";
import { SignInThemeProps, FormFieldState } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export default class SignInTheme extends PureComponent<SignInThemeProps, {
    formFields: FormFieldState[];
}> {
    constructor(props: SignInThemeProps);
    render(): JSX.Element;
}
