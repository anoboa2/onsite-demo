import React from "react";
import HeroImage from "./HeroImage/HeroImage";
import { makeStyles } from "@mui/styles";
import NewAppBar from "./NewAppBar";
import withRoot from "../../modules/withRoot";
import AppFooter from "../../modules/views/AppFooter";

import {Faqss} from "../../Constants"
import TravelersFaqs from "../TravelersFaqs";
import Faqhero from "./HeroImage/Faqhero";
import SpecialistsFaqs from "./HeroImage/SpecialistsFaqs";
import AboutOnsiteFaqs from "./HeroImage/AboutOnsiteFaqs";

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
const FaqsPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <NewAppBar />
            {/* <Faqhero details={Faqss} /> */}
            <TravelersFaqs/>
            <SpecialistsFaqs/>
            <AboutOnsiteFaqs/>
            <AppFooter />
        </div>
    );
}

export default withRoot(FaqsPage);