import React from 'react';
import {SignInAndUp, ResetPasswordUsingToken} from 'supertokens-auth-react/recipe/emailpassword';
import {
  Lithium,
} from 'supertokens-react-themes/';
import {getQueryParams} from "../utils";

const backgroundId = getQueryParams("backgroundId") || Math.floor(Math.random() * 9) +1;


const backgroundUrl = `/lithium/background${backgroundId}.svg`;
const logo = "/logo-dark.png"

function Auth() {
  return (
    <SignInAndUp>
        <Lithium.SignInAndUpTheme
            backgroundUrl={backgroundUrl}
            logo={logo}
        />
    </SignInAndUp>
  );
}

function ResetPassword() {
  return (
      <ResetPasswordUsingToken>
          <Lithium.ResetPasswordUsingTokenTheme
            logo={logo}
            backgroundUrl={backgroundUrl}
          />
      </ResetPasswordUsingToken>
  );
}

export default class LithiumComponents {
    static Auth = Auth
    static ResetPassword = ResetPassword
}