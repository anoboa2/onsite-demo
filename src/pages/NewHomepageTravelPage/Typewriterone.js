import Typewriter from "typewriter-effect";
import Typography from "../../modules/components/Typography";


const TypewriterEffectOne = () => {
    const text = <Typography>Travel Booking, Reinvented </Typography>
    return (
        <h1>

            <Typewriter onInit={(typewriter) => {
                typewriter.typeString("Travel Booking, Reinvented ")
                    .start()
            }} />
        </h1>
    );
}

export default TypewriterEffectOne;