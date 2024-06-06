import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return (
        <div className='Loader'>
        <Spinner animation="grow" />;
        </div>
    )
}

export default Loader;