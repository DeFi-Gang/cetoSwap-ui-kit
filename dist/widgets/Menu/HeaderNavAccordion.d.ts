import React, { PropsWithChildren } from "react";
interface Props extends PropsWithChildren<unknown> {
    label: string;
    className?: string;
    isOpen: boolean;
    handleClick: () => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
