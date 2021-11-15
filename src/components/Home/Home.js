import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Client from '../Client/Client';
import ContactForm from '../Contact/Contact';
import Shop from '../Shop/Shop';
import ShowReview from '../ShowReview/ShowReview';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Carousel>
            <Carousel.Item className="img-fluid">
                <img className="d-block" src="https://i.ibb.co/StMKsZ7/92568.jpg" alt=""/>
            <Carousel.Caption className="pb-5">
                <h3 >Honda CB125F (21MY)</h3>
                <Link to="/review" className="btn p-2">Explore More</Link>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="img-fluid">
                <img className="d-block" src="https://i.ibb.co/18Ky5xp/92642.jpg" alt=""/>
            <Carousel.Caption className="pb-5" >
                <h3 >Honda MSX125</h3>
                <Link to="/review" className="btn p-2">Explore More</Link>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="img-fluid">
                <img className="d-block" src="https://i.ibb.co/jgp7pwB/92641.jpg" alt=""/>
            <Carousel.Caption className="pb-5">
                <h3 >Honda Z1</h3>
                <Link to="/review" className="btn p-2">Explore More</Link>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <div>
                <Shop></Shop>
            </div>
            <div className="py-4">
                <ShowReview></ShowReview>
            </div>
            <div className="d-flex justify-content-around">
                <div>
                <ContactForm></ContactForm>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rDYdeq3JW_E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div>
                <Client></Client>
            </div>
        </div>

    );
};

export default Home;