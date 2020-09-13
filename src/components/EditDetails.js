import React, { Component } from 'react';

// MUI Form
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// MUI stuff
import CustomButton from './CustomButton';
import EditIcon from '@material-ui/icons/Edit';

export default class EditDetails extends Component {
    constructor(){
        super();
        
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render(){
        return (
            <div>
                <CustomButton
                    tip="Edit profile picture"
                    onClick={this.handleClickOpen}
                    btnClassName="button"
                >
                    <EditIcon color="primary" />
                </CustomButton>

                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                        </DialogContentText>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                        Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}