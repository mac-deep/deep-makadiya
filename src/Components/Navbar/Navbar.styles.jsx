import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    navbar: {
        position: "fixed",
        zIndex: "100",
        top: "0",
        left: "0",
        background: "#2b2c2f",
        width: "100vw",
        height: "100vh",
    },
    navlist: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
}));
