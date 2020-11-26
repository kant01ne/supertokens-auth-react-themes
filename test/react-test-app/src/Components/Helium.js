import React from 'react';
import {SignInAndUp, ResetPasswordUsingToken} from 'supertokens-auth-react/recipe/emailpassword';
import {
  Helium,
} from 'supertokens-auth-react-themes/';
const logo = "/logo.png"

function Auth() {
  return (
    <SignInAndUp>
        <Helium.SignInAndUpTheme
            logo={logo}
        />
    </SignInAndUp>
  );
}

function ResetPassword() {
  return (
      <ResetPasswordUsingToken>
          <Helium.ResetPasswordUsingTokenTheme
            logo={logo}
          />
      </ResetPasswordUsingToken>
  );
}

export default class HeliumComponents {
    static Auth = Auth
    static ResetPassword = ResetPassword
}