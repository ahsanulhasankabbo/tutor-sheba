import { Card } from 'react-bootstrap';
import UseServices from '../../UseServices';
import Service from '../Service/Service';
import './Home.css'
import studyPlace from './image/stydy.jpg'
import faculty from './image/falacty1.jpg'
import expert from './image/expart.jpg'

const Home = () => {
    const [services] = UseServices();
    return (
        <div>
            <div className='banner'>
                <div className='banner-info'>
                    <h1 className='text-3xl font-semibold my-5'>TUTOR SHEBA</h1>
                    <hr />
                    <p className='my-3'> HELPING EDUCATORS TAKE CONTROL OVER THEIR OWN   PROFESSIONAL DEVELOPMENT . <br />
                        WE RAISE FUNDS TO ENSURE THAT TEACHERS FROM ALL OVER THE WORLD CAN OVERCOME THE PROBLEM OF INFORMATION ABUNDANCE THROUGH THE PROCESS OF CURATION, ARTIFICIAL INTELLIGENCE AND ONLINE TRAINING.</p>
                </div>
            </div>
            <div className='service-card mt-3 container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='text-center expert-section'>
                <h1 className='text-4xl font-semibold'>Our Feature</h1>
                <p className='text-2xl expert-details my-5'>A feature is a distinctive trait or a special attraction. Feature can also mean to give special attention to something. A feature is a unique quality or characteristic that something has.</p>

                <div className='expert-card'>
                    <div>
                        <Card className='expert-info' style={{ width: '18rem' }}>
                            <Card.Img className='user-image service-image' variant="top" src={studyPlace} />
                            <Card.Body className='service-details'>
                                <Card.Title className='text-lg text-center font-bold'>Awesome study place</Card.Title>
                                <Card.Text> <small>Great workplaces have a unique culture that is their own, often described as fun, congenial, collaborative, positive, passionate, and creative.</small> </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='expert-info' style={{ width: '18rem' }}>
                            <Card.Img className='user-image service-image' variant="top" src={faculty} />
                            <Card.Body className='service-details'>
                                <Card.Title className='text-lg text-center font-bold'>Unlimited facility</Card.Title>
                                <Card.Text> <small>Term faculty members are subject to the rights, responsibilities, and standards of professional conduct for faculty as specified in this Handbook. </small> </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='expert-info' style={{ width: '18rem' }}>
                            <Card.Img className='user-image service-image' variant="top" src={expert} />
                            <Card.Body className='service-details'>
                                <Card.Title className='text-lg text-center font-bold'>Expert teachers</Card.Title>
                                <Card.Text> <small className='feature-details'>An expert teacher listens to students and asks questions to help them make sense of their own understanding of key ideas.</small> </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;