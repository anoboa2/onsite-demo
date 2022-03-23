import Typewriter from "typewriter-effect";


const TypewriterEffectTwo = () => {
    return (
        <h1>

            <Typewriter onInit={(typewriter) => {
                typewriter.pauseFor(5000).typeString("Get the most of your  travel by \n leaving the planning to us")
                    .start()
            }} />
        </h1>
    );
}

export default TypewriterEffectTwo;