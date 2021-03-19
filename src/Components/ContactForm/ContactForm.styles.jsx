import { withStyles, InputBase } from '@material-ui/core';
import { outerShadow, innerShadow } from '../../Theme/Colors';

export const CustomTextField = withStyles((theme) => ({
  root: {
    border: 'none',
    height: 50,
    boxShadow: outerShadow,
    borderRadius: 30,
    padding: 10,
    margin: 10,
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
    padding: 10,
    margin: 10,
    '&:hover': {
      boxShadow: innerShadow,
    },
    '&:focus': {
      outline: 'none',
    },
  },
}))(InputBase);

// export default makeStyles((theme) => ({
//   input: {
//     border: 'none',
//     width: '100%',
//     height: 50,
//     boxShadow: outerShadow,
//     borderRadius: 30,
//     margin: 20,
//     outline: 'none',
//     '&:hover': {
//       boxShadow: innerShadow,
//     },
//     '&:focus': {
//       outline: 'none',
//       border: 'none',
//       boxShadow: innerShadow,
//     },
//   },
// }));
