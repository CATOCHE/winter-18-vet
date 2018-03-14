import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

const Resources = props => {
  // props.resources

  return (
    <div>
      <h1>Resources</h1>
      <div>
        <ol>
          {map(r => {
            return (
              <div>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>{r.name.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={r.name} secondary={r.shortDesc} />
                  </ListItem>
                </List>
              </div>
            )
          }, props.resources)}
        </ol>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}

const connector = connect(mapStateToProps)

export default connector(Resources)
