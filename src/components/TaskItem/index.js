import React, { Component } from 'react';
import styles from './styles';
import {
  withStyles,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Fab,
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

class TaskItem extends Component {
  render() {
    var { task, status, classes } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="edit"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
