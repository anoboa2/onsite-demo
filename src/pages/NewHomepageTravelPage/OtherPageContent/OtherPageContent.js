import BookNow from "./BookNow";
import RatingsSlider from "./RatingsSlider";
import NewHowitWorks from "./NewHowitWorks";
import PhoneMockupThree from "./PhoneMockupThree";
import PhoneMockupOne from "./PhoneMockupOne";
import PhoneMockupTwo from "./PhoneMockupTwo";
import PopularLocationCategories from "./PopularLocationsCategories";
import MessageFromFounder from "./messageFromFounder";


const OtherPageContent = ({img, details}) => {
    return (
        <div>
            <NewHowitWorks />
            <PhoneMockupTwo img={img} details={details}/>
            <PhoneMockupOne />
            <PhoneMockupThree />
            <PopularLocationCategories />
            <MessageFromFounder />
            <BookNow />
            <RatingsSlider />
        </div>
    );
}

export default OtherPageContent;