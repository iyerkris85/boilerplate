/**
 * Styles for Header
 */
import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.primary.dark,
  },
  activelink: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.grey[900],
  },
  icon: {
    paddingRight: '5px',
  },
}));

export default headerStyles;
