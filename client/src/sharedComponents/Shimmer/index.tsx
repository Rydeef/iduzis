import {DetailedHTMLProps, HTMLAttributes} from "react";
import cn from 'classnames';
import style from './Shimmer.module.css';

export type Props = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
    >;

export const ShimmerBlock = (props: Props) => {
    return (
        <div
            aria-hidden
            role="presentation"
            className={cn(style.shimmer, props.className)}
            style={props.style}
        >
            {props.children}
        </div>
    );
};
export default ShimmerBlock