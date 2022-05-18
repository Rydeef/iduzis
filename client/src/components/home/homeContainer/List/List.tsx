import {FC} from 'react'
import {Checkbox} from '@mui/material'

interface ElementProps {
    text: string
    isComplete: boolean
}

const ListElement: FC<ElementProps> = ({text, isComplete}) => {
    return (
        <div className="flex w-full justify-between items-center">
            <span>{text}</span>
            <Checkbox checked={isComplete}/>
        </div>
    )
}

interface Props {
}

const List: FC<Props> = ({}) => {
    const listToMap = [
        {text: '232', isComplete: true},
        {text: '232', isComplete: true}
    ];
    return (
        <div>
            {listToMap.map((element) => <ListElement key={element.text} {...element}/>)}
        </div>
    )
}
export default List
