/// <reference types="react" />
import { Testimonial } from "../types";
declare type PageProps = {
    form: JSX.Element;
    header?: JSX.Element;
    toggle?: JSX.Element;
    testimonial?: Testimonial;
    logo?: string;
};
export default function Page({ form, header, toggle, testimonial, logo }: PageProps): JSX.Element;
export {};
