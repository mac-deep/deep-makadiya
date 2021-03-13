import { withStyles, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const outerShadow = "3px 3px 3px #222327, -3px -3px 3px #363636";
const innerShadow = "inset 3px 3px 3px #222327, inset -3px -3px 3px #363636";

export const HoverButton = withStyles({
    root: {
        boxShadow: outerShadow,
        transform: "all 0.3s ease",

        "&:hover": {
            boxShadow: innerShadow,
            color: "blue",
        },
    },
})(IconButton);
