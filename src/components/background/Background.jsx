import './background.css'
import FirstBackground from './FirstBackground';
import { FirstBackgroundPreload, SecondBackgroundPreload, ThirdBackgroundPreload } from './BackgroundPreloads';
import Leafs from './Leafs';

const Background = () => {
    return (
        <div className='Background'>
            {/* Make sure CSS has all of the images for the background animation before starting the animation. */}
            <>
                <FirstBackgroundPreload/>
                <SecondBackgroundPreload/>
                <ThirdBackgroundPreload/>
            </>
            <FirstBackground/>
            <Leafs/>
        </div>
    );
}

export default Background