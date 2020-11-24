import { PureComponent } from "react";
import { SubmitNewPasswordThemeProps, SubmitNewPasswordThemeState } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export default class SubmitNewPasswordTheme extends PureComponent<SubmitNewPasswordThemeProps, SubmitNewPasswordThemeState> {
    constructor(props: SubmitNewPasswordThemeProps);
    onSuccess: () => void;
    render(): JSX.Element;
}
