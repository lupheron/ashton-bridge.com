import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import QuoteForm from '../Forms/GetQuote/QuoteForm'
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalDefault = ({ open, handleClose }: { open: boolean, handleClose: () => void }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='backdrop-blur-xs'
        >
            <Box
                sx={style}
                className='!w-200 !bg-primary !border-none liquid-button rounded-[35px]'
            >
                <CancelIcon onClick={handleClose} className='absolute top-5 right-5 cursor-pointer text-white' />
                <QuoteForm />
            </Box>
        </Modal>
    )
}

export default ModalDefault