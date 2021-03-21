import { withStyles, InputBase } from '@material-ui/core';
import { outerShadow, innerShadow } from '../../Theme/Colors';

export const CustomTextField = withStyles((theme) => ({
  root: {
    border: 'none',
    height: 50,
    boxShadow: outerShadow,
    borderRadius: 30,
    padding: 20,
    margin: '10px 0',
    '&:hover': {
      boxShadow: innerShadow,
    },
    '&:focus': {
      outline: 'none',
    },
  },
}))(InputBase);

export const CustomTextArea = withStyles((theme) => ({
  root: {
    border: 'none',
    height: 200,
    boxShadow: outerShadow,
    borderRadius: 30,
    padding: 20,
    '&:hover': {
      boxShadow: innerShadow,
    },
    '&:focus': {
      outline: 'none',
    },
  },
}))(InputBase);
