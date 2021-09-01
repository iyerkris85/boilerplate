/**
 * Styles for Footer
 */
import { makeStyles } from '@material-ui/core/styles';

const mainStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export default mainStyles;
