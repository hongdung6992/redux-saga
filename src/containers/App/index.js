import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import TaskBoard from '../TaskBoard/index';
import theme from '../../commons/Themes/index';

class App extends Component {
  render() {
    // const {theme} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
