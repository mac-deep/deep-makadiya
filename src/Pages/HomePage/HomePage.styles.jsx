import { withStyles, Fab, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const outerShadow = "3px 3px 3px #222327, -3px -3px 3px #363636";
const innerShadow = "inset 3px 3px 3px #222327, inset -3px -3px 3px #363636";

export const CustomFab = withStyles({
    root: {
        boxShadow: outerShadow,
        transform: "all 0.3s ease",
        color: "white",
        background: "transparent",

        "&:hover": {
            boxShadow: innerShadow,
            color: "white",
            background: "transparent",
        },
    },
})(Fab);

export default makeStyles((theme) => ({
    homepage: {
        background: "#353535",
        minHeight: "100vh",
    },
    fullHeight: {
        height: "100vh",
    },
    profileImg: {
        width: theme.spacing(50),
        height: theme.spacing(50),
        boxShadow: outerShadow,
        padding: "10px",
    },
    imageBox: {
        boxShadow: innerShadow,
        padding: "15px",
    },
}));
