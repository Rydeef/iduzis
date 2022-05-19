import {FC} from 'react'
import {Checkbox} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconWrapper from "../../../../sharedComponents/IconWrapper";
import CustomButton from "../../../../sharedComponents/formComponent/CustomButton";
import ListLoading from "./ListLoading";

export interface HandleActions {
    handleChecked?: VoidFunction;
    handleDelete?: VoidFunction
}

export interface ElementProps extends HandleActions {
    text: string
    isComplete?: boolean
}

const ListElement: FC<ElementProps> = ({text, isComplete, handleChecked, handleDelete}) => {
    return (
        <div className="flex w-full justify-between items-center border-b-2">
            <span>{text}</span>
            <div className="flex items-center">
                <Checkbox checked={isComplete} onClick={handleChecked}/>
                <IconWrapper className="pb-0.5" onClick={handleDelete}>
                    <DeleteOutlineIcon />
                </IconWrapper>
            </div>

        </div>
    )
}

interface Props extends HandleActions {
    listToMap: ElementProps[]
    loading?: boolean
}

const List: FC<Props> = ({listToMap, loading}) => {
    const handleChecked = () => {

    }
    const handleDelete = () => {

    }

    if (loading){
        return <ListLoading/>
    }

    return (
        <div className="w-full mt-3">
            {listToMap.map((element) =>
                <ListElement key={element.text} {...element}
                             handleChecked={handleChecked}
                             handleDelete={handleDelete}
                />
            )}
        </div>
    )
}
export default List
