import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#D32F2F',
    secondaty: '#00BCD4',
    error: '#FFCDD2',
  },
  typoraphy: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#BDBDBD',
    color: '#fff',
    borderColor: '#ccc',
  },
});

export default theme;
