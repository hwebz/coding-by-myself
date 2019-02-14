import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {Paper, 
        List, 
        ListItem, 
        ListItemAvatar, 
        ListItemSecondaryAction, 
        ListItemText, 
        Avatar, 
        IconButton,
        Typography} from '@material-ui/core'
import { Person, ArrowForward } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import {list} from './api-user'

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing.unit,
        margin: theme.spacing.unit * 5
    }),
    title: {
        margin: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
        color: theme.palette.openTitle
    }
})

class Users extends Component {
    state = { 
        users: [] 
    }

    componentDidMount() {
        list().then(data => {
            if (data.error) console.log(data.error)
            else this.setState({
                users: data
            })
        })
    }

    render() {
        const {classes} = this.props
        return(
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>
                    All Users
                </Typography>
                <List dense>
                    {this.state.users.map((item, i) => (
                        <Link to={'/user/' + item._id} key={i}>
                            <ListItem button={true}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Person/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.name}></ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <ArrowForward/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Paper>
        )
    }
}

Users.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Users)