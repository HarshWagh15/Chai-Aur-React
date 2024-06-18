
    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';

    export default function About() {
        return (
            <>
                <div className="start text-center border-bottom" >
                <h1 className="display-4 text-body-emphasis">Tanushree<br />Beauty Salon</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="para">
                        Exceptional beauty for the exceptional face. <br />
                        We create styles for the way you look and the way you live! <br />
                        As urban as you can get in the suburbs. <br />
                        Start a reaction. <br />
                        Treat yourself to great service. <br />
                    </p>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: '100vh' }}>
                    <div className="container4 px-5">
                        <img
                            src="./2004.i126.015_makeup beautician stilist.jpg"
                            className="img-fluid border rounded-3 shadow-lg mb-4"
                            alt="Example image"
                            width="450"
                            height="450"
                            loading="lazy"
                        />
                    </div>
                </div>
                </div>

                <div className="about">
                    <h2 id="about-us" className="About-h2">About</h2>
                    <div>
                        <p>
                            Welcome to our exclusive Beauty Services Oasis, where beauty is an art and self-care is a celebration. <br />
                            Step into a sanctuary of indulgence, where our skilled professionals are committed to enhancing your natural allure. <br />
                            From revitalizing facials to on-trend hair transformations, our services are tailored to bring out your distinct charm. <br />
                            Immerse yourself in the luxury of our spa treatments and embrace the latest makeup trends in our stylish salon setting. <br />
                            Your journey to radiant confidence begins here, where each service is a brushstroke in the masterpiece of your beauty. <br />
                            Welcome to a world where you are the canvas, and we are the artists, dedicated to unveiling your most beautiful self. <br />
                            At our beauty salon, we believe in the power of self-care, and our services are tailored to help you look and feel your best. <br />
                            Step into a world of beauty, where skillful artistry and a welcoming atmosphere converge to create an unforgettable experience.
                        </p>
                    </div>
                </div>
            </>
        );
    }
