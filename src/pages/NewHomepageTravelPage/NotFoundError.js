import React from "react";
import { makeStyles } from "@mui/styles";
import NewAppBar from "./NewAppBar";
import withRoot from "../../modules/withRoot";
import AppFooter from "../../modules/views/AppFooter";
import NotFound from "./OtherPageContent/NotFound";


const useStyles = makeStyles((theme) => ({
    main: {
        background: 'linear-gradient(to right bottom,#f9fafb , #f8eeec)',
        backgroundPosition: 1,
        [theme.breakpoints.down("sm")]: {
            width: "100% !important",
            height: "100% !important",

        },
    }
}));
const NotFoundError = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <NewAppBar />
            <NotFound />
            <AppFooter />
        </div>
    );
}

export default withRoot(NotFoundError);