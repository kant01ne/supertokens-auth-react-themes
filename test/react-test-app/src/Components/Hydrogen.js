import React from 'react';
import {SignInAndUp, ResetPasswordUsingToken} from 'supertokens-auth-react/recipe/emailpassword';
import {
  Hydrogen,
} from 'supertokens-react-themes/';
import {getQueryParams} from "../utils";

const backgroundId = getQueryParams("backgroundId") || Math.floor(Math.random() * 20) +1;
const backgroundUrl = `/backgrounds/background${backgroundId}.svg`;
const logo = "/logo.png"

function Auth() {
  return (
    <SignInAndUp>
        <Hydrogen.SignInAndUpTheme
            backgroundUrl={backgroundUrl}
            logo={logo}
            testimonial={{
                quote: "Use SuperTokens themes to increase convertion to your product!",
                name: "Kevin Antoine",
                title: "Software Engineer",
                company: "SuperTokens",
                picture:
                    "https://media-exp1.licdn.com/dms/image/C4E03AQGdxygrLo8PLQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=ixyXoqGsdpQ7BPzBWXVXdlebrYvd8l0ZFtad_ebCITM"
            }}
        />
    </SignInAndUp>
  );
}

function ResetPassword() {
  return (
      <ResetPasswordUsingToken>
          <Hydrogen.ResetPasswordUsingTokenTheme
            logo={logo}
            backgroundUrl={backgroundUrl}
          />
      </ResetPasswordUsingToken>
  );
}

export default class HydrogenComponents {
    static Auth = Auth
    static ResetPassword = ResetPassword
}