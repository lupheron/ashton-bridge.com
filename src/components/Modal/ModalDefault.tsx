import { Box, Modal } from '@mui/material'
import React from 'react'
import QuoteForm from '../Forms/GetQuote/QuoteForm'
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 520,
    maxWidth: '92vw',
    maxHeight: '90vh',
    bgcolor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    p: 0,
};

const ModalDefault = ({ open, handleClose }: { open: boolean, handleClose: () => void }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="[&_.MuiBackdrop-root]:backdrop-blur-md [&_.MuiBackdrop-root]:bg-black/50"
        >
            <Box
                sx={style}
                className="!w-[520px] !bg-primary !border-0 liquid-button rounded-2xl shadow-2xl shadow-black/40 overflow-y-auto modal-enter"
            >
                <div className="sticky top-0 z-20 flex justify-end px-4 pt-4">
                    <CancelIcon onClick={handleClose} className="cursor-pointer text-white/80 hover:text-white transition-colors" />
                </div>
                <QuoteForm onSuccess={handleClose} />
            </Box>
        </Modal>
    )
}

export default ModalDefault