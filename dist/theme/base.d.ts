import { MediaQueries, Breakpoints, Spacing } from "./types";
export declare const breakpointMap: {
    [key: string]: number;
};
export declare const shadows: {
    default: string;
    level1: string;
    active: string;
    success: string;
    warning: string;
    focus: string;
    inset: string;
    disabled: string;
};
declare const _default: {
    siteWidth: number;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    shadows: {
        default: string;
        level1: string;
        active: string;
        success: string;
        warning: string;
        focus: string;
        inset: string;
        disabled: string;
    };
    radii: {
        small: string;
        default: string;
        card: string;
        circle: string;
    };
    zIndices: {
        dropdown: number;
        modal: number;
    };
};
export default _default;
