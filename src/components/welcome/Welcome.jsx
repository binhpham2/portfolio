import './welcome.css'
import Name from './Name';
import Introduction from './Introduction';
import EmptyWelcomeGridItem from './EmptyWelcomeGridItem';

const Welcome = () => {
    return (
        <div className='Welcome'>
            <Name/>
            <EmptyWelcomeGridItem/>
            <Introduction/>
        </div>
    );
}

export default Welcome