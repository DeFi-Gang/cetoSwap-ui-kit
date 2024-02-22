import React, { PropsWithChildren } from "react";
import { InjectedProps } from "./types";
interface Props extends InjectedProps, PropsWithChildren<any> {
    title: string;
    hideCloseButton?: boolean;
    onBack?: () => void;
    bodyPadding?: string;
}
declare const Modal: React.FC<Props>;
export default Modal;
