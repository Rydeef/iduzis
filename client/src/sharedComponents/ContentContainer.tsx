import {FC, ReactNode} from "react";
import cn from "classnames";

interface Props {
    children?: ReactNode;
    className?: string
}

const ContentContainer:FC<Props> = ({children, className}) => {
    return (
        <div className={cn("w-full xl:w-[80%] mx-auto  px-6", className)}>
            {children}
        </div>
    )
}
export default ContentContainer;