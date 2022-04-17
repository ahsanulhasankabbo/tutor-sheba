import UseServices from '../../UseServices';
import banner from '../Home/image/banner.png'
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services] = UseServices();
    return (
        <div>
            <div className='banner-image'>
                <img className='w-full' src={banner} alt="" />
            </div>
            <div className='service-card mt-3 container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Home;