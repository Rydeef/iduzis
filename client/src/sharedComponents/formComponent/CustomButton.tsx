import {FC, ReactNode} from "react";
import cn from 'classnames';

interface Props {
  className?: string;
  children: ReactNode
  type?: 'button' | "submit" | "reset" | undefined;
}

const CustomButton: FC<Props> = ({children, className, type = 'button'}) => {

  return (
    <button
      type={type}
      className={cn('bg-blue hover:opacity-90 text-white font-bold py-2 px-4 rounded', className)}>
      {children}
    </button>
  );
};
export default CustomButton;