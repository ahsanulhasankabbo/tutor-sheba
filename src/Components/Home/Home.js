import UseServices from '../../UseServices';
import banner from '../Home/image/banner.png'
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services] = UseServices();
    return (
        <div className='banner-image'>
            <img className='w-full'  src={banner} alt="" />
            <p>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </p>
        </div>
    );
};

export default Home;