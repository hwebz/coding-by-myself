import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {Card, 
    CardActions, 
    Button,
    TextField,
    Typography,
    Icon,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    CardContent} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {create} from './api-user'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
    }
})

class Signup extends Component {
    state = {
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    clickSubmit = () => {
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }
        create(user).then(data => {
            if (data.error) this.setState({error: data.error})
            else this.setState({error: '', open: true})
        })
    }

    render() {
        const {classes} = this.props
        return(
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Sign Up
                    </Typography>
                    <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')}></TextField><br />
                    <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')}></TextField><br />
                    <TextField id="password" type="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')}></TextField><br />
                    {this.state.error && (<Typography component="p" color="error">
                                            <Icon color="error" className={classes.error}>error</Icon>
                                            {this.state.error}
                                        </Typography>)}

                </CardContent>
                <CardActions>
                    <Button color="primary" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
                </CardActions>
                <Dialog open={this.state.open} disableBackdropClick={true}>
                    <DialogTitle>New Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            New account successfully created.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/signin">
                            <Button color="primary" autoFocus="autoFocus">Sign In</Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </Card>
        )
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Signup)