import {FC, useMemo, useState} from "react";
import cn from 'classnames';
import List from "./List/List";
import {Tabs, Tab, Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import CustomModal from "../../../sharedComponents/CustomModal";
import IconWrapper from "../../../sharedComponents/IconWrapper";
import NewTaskForm, {SubmitNewTaskForm} from "../../form/NewTaskForm";
import ShimmerBlock from "../../../sharedComponents/Shimmer";
import ListLoading from "./List/ListLoading";

const MOCKED_DATA = [
    {
        text: 'сделать чай'
    },
    {
        text: 'сделать чифир',
        isComplete: true
    },
    {
        text: 'сделать кофе'
    },
    {
        text: 'проиграть игру',
        isComplete: true
    }
]

interface Props {

}

export enum TABS_VALUE {
    ALL = 'All',
    ACTIVE = 'Active',
    COMPLETE = 'Complete'
}


const TabsContainer: FC<Props> = () => {
    const [activeTab, setActiveTab] = useState(TABS_VALUE.ACTIVE);
    const [open, setOpen] = useState(false);

    const list = useMemo(() => {
        switch (activeTab) {
            case TABS_VALUE.ALL:
                return <List listToMap={MOCKED_DATA}/>
            case TABS_VALUE.ACTIVE:
                return <List listToMap={MOCKED_DATA.filter(e => !e.isComplete)}/>
            case TABS_VALUE.COMPLETE:
                return <List listToMap={MOCKED_DATA.filter(e => e.isComplete)}/>
        }

    }, [activeTab])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeTab = (event: React.SyntheticEvent, newValue: TABS_VALUE) => {
        setActiveTab(newValue);
    };

    const onSubmit: SubmitNewTaskForm = (value) =>{
        console.log(value)
    }

    return (
        <div className="w-full">
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <div className="flex justify-between items-center">
                    <Tabs value={activeTab} onChange={handleChangeTab} aria-label="basic tabs example">
                        <Tab label="All" value={TABS_VALUE.ALL}/>
                        <Tab label="Active" value={TABS_VALUE.ACTIVE}/>
                        <Tab label="Complete" value={TABS_VALUE.COMPLETE}/>
                    </Tabs>
                    {(activeTab === TABS_VALUE.ALL || activeTab === TABS_VALUE.ACTIVE) &&
                        <IconWrapper onClick={handleOpen}>
                            <AddIcon fontSize="medium"/>
                        </IconWrapper>
                       }
                </div>

            </Box>
            {list}

            <CustomModal
                isOpen={open}
                handleClose={handleClose}
            >
                <div>
                    <NewTaskForm onSubmit={onSubmit}/>
                </div>
            </CustomModal>
        </div>

    )
}

export default TabsContainer