/**
 * Styles for Footer
 */
import { makeStyles } from '@material-ui/core/styles';

const footerStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default footerStyles;
