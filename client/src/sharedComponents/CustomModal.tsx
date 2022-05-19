import {Box} from "@mui/material";
import Modal from "@mui/material/Modal";
import {FC, ReactNode} from "react";
import IconWrapper from "./IconWrapper";
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 5,
    px: 4,
    pb: 3,
};

interface Props {
    isOpen: boolean;
    handleClose: VoidFunction
    children: ReactNode
}

const CustomModal: FC<Props> = ({isOpen, handleClose, children}) => {
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='relative'>
                <IconWrapper className="absolute right-1 top-1" onClick={handleClose}>
                    <CloseIcon/>
                </IconWrapper>
                {children}
            </Box>
        </Modal>
    )
}

export default CustomModal