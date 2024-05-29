import React from 'react';
import vg from '../assets/2.webp'
import {
   AiFillAmazonCircle,
   AiFillYoutube,
   AiFillGoogleCircle,
   AiFillInstagram
} from 'react-icons/ai';

function Home() {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every
                        day. We are leading tech company whose aim
                        is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Non repudiandae nam consequuntur
                     voluptas adipisci autem voluptatem libero 
                     suscipit necessitatibus dolor beatae, minus
                      ullam. Aliquam fugit soluta officiis vel
                       dolor tenetur labore error nisi esse
                        eligendi assumenda nulla voluptatem 
                        quaerat consectetur laudantium doloribus,
                         perferendis odio omnis exercitationem ut 
                         excepturi? Quas, excepturi.</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay:"0.3s",}}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay:"0.5s",}}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay:"0.7s",}}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{animationDelay:"1s",}}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home
