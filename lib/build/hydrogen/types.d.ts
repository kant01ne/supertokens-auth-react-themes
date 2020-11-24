import { ResetPasswordUsingTokenThemeProps as ResetPasswordUsingTokenDefaultThemeProps, SignInAndUpThemeProps as SignInAndUpDefaultThemeProps } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";
export declare type Testimonial = {
    quote: string;
    name: string;
    title: string;
    company: string;
    picture: string;
};
export declare type SignInAndUpThemeProps = SignInAndUpDefaultThemeProps & {
    logo?: string;
    testimonial?: Testimonial;
};
export declare type SignInAndUpThemeWrapperProps = SignInAndUpThemeProps & {
    backgroundUrl?: string;
};
export declare type ResetPasswordUsingTokenThemeProps = ResetPasswordUsingTokenDefaultThemeProps & {
    logo?: string;
};
export declare type ResetPasswordUsingTokenThemeWrapperProps = ResetPasswordUsingTokenThemeProps & {
    backgroundUrl?: string;
};
