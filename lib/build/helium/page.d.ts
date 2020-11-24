/// <reference types="react" />
declare type PageProps = {
    form: JSX.Element;
    header?: JSX.Element;
    toggle?: JSX.Element;
    logo?: string;
};
export default function Page({ form, header, toggle, logo }: PageProps): JSX.Element;
export {};
