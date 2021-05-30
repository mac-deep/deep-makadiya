import { withStyles, InputBase } from '@material-ui/core';
import { outerShadow, innerShadow } from '../Theme/Colors';

const CustomTextArea = withStyles((theme) => ({
  root: {
    border: 'none',
    height: 200,
    boxShadow: innerShadow,
    borderRadius: 20,
    padding: 20,
    // '&:hover': {
    //   boxShadow: ,
    // },
    '&:focus': {
      outline: 'none',
    },
  },
}))(InputBase);

export default CustomTextArea;
