import { makeStyles } from "@material-ui/core/styles";

const outerShadow = "3px 3px 3px #222327, -3px -3px 3px #363636";
const innerShadow = "inset 3px 3px 3px #222327, inset -3px -3px 3px #363636";

export default makeStyles((theme) => ({
    profile: {
        width: "310px",
        height: "310px",
        padding: "10px",
        boxShadow: outerShadow,
    },

    mainContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#2b2c2f",
    },
    myInfo_container: {
        margin: "40px 0px",
        display: "flex",
        width: "1340px",
    },
    myInfo_profileImg: {
        width: "360px",
        height: "360px",
        boxShadow: innerShadow,
        padding: "15px",
        marginBottom: "10px",
    },
    myInfo_bio: {
        margin: " 0 20px",
        color: "#bbbbbb",
    },
    infoTabs_container: {
        minHeight: "90vh",
    },
}));
