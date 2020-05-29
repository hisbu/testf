import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';

function ModalDefault(props) {
    const { show, title, size } = props
    return (
        <Dialog open={show} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={size || 'md'}>
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            {props.children}
        </Dialog>
    )
}

export default ModalDefault
