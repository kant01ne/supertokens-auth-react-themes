import { PureComponent } from "react";
import { FormFieldState, SignUpThemeProps } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export default class SignUpTheme extends PureComponent<SignUpThemeProps, {
    formFields: FormFieldState[];
}> {
    constructor(props: SignUpThemeProps);
    render(): JSX.Element;
}
