/// <reference types="react" />
declare type PageProps = {
    backgroundUrl?: string;
    form: JSX.Element;
    header?: JSX.Element;
    toggle?: JSX.Element;
    logo?: string;
};
export default function Page({ form, header, logo, backgroundUrl }: PageProps): JSX.Element;
export {};
