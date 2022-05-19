import {FC, ReactNode} from "react";

interface Props {
    className?: string;
    onClick?: VoidFunction
    children: ReactNode
}

const IconWrapper: FC<Props> = ({className, onClick, children}) => {
    return (
      <div className={className}>
          <div className='p-2 rounded-full cursor-pointer hover:bg-lightGray' onClick={onClick}>
              {children}
          </div>
      </div>
    )
}

export default IconWrapper