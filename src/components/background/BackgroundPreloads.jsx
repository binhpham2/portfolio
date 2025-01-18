import './background.css'
import latern_1 from '../../images/laterns/latern_1.png';
import latern_2 from '../../images/laterns/latern_2.png';
import latern_3 from '../../images/laterns/latern_3.png';

export const FirstBackgroundPreload = () => {
    return (
        <img src={latern_1} alt='latern_1' className='BackgroundPreload'/>
    );
}

export const SecondBackgroundPreload = () => {
    return (
        <img src={latern_2} alt='latern_2' className='BackgroundPreload'/>
    );
}

export const ThirdBackgroundPreload = () => {
    return (
        <img src={latern_3} alt='latern_3' className='BackgroundPreload'/>
    );
}