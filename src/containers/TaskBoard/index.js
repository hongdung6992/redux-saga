import { Button, Grid, withStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from './../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants/index';
import styles from './styles';

var listTask = [
  {
    id: 1,
    title: 'Read books',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play football',
    description: 'with my friends',
    status: 2,
  },
  {
    id: 3,
    title: 'Play game',
    description: '',
    status: 1,
  },
];

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(task => {
            return task.status === status.value;
          });
          return (
            <TaskList taskFiltered={taskFiltered} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  renderForm = () => {
    let xhtml = null;
    let { open } = this.state;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <Icon>add_icon</Icon>
          Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
