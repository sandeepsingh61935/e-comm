import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        // "space-around" | "space-between" | "space-evenly" | "stretch"
        justifyContent: "space-between",
    },
    media: {
        height: 0,
        paddingTop: "100%", // 16:9
        backgroundPosition: "center"
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row"
    }
}));