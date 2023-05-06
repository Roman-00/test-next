import { FC, PropsWithChildren } from "react";

const DefaultLayout: FC<PropsWithChildren<unknown>> = ({ children }) => (
    <div className="default-layouts">
        { children }
    </div>
);

export default DefaultLayout;
