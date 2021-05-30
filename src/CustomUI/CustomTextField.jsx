import { withStyles, InputBase } from '@material-ui/core';
import { innerShadow } from '../Theme/Colors';

const CustomTextField = withStyles((theme) => ({
  root: {
    border: 'none',
    height: 50,
    boxShadow: innerShadow,
    borderRadius: '1em',
    padding: 20,
    margin: '10px 0',
    // '&:hover': {
    //   boxShadow: ,
    // },
    '&:focus': {
      outline: 'none',
    },
  },
}))(InputBase);

export default CustomTextField;
