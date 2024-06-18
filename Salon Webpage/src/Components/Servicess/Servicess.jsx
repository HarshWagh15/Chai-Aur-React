import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Servicess() {
    return (
        <div className="container5 px-4 py-5" id="hanging-icons">
            <h2 id="services" className="our-services">Our Services</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col d-flex align-items-start">
                    <div
                        className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <svg className="bi jam jam-unordered-list" width="1em" height="1em" fill="#000000" viewBox="-5 -7 24 24"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M4 0h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 8h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0-4h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zM1 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <h3 className="fs-2 text-body-emphasis">Hair</h3>
                        <p className="about-service">Indulge in our comprehensive hair services, featuring expert haircuts and
                            rejuvenating hair spa treatments. Elevate your style and pamper your looks with our skilled professionals
                            for a transformative experience. </p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div
                        className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <svg className="bi jam jam-unordered-list" width="1em" height="1em" fill="#000000" viewBox="-5 -7 24 24"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M4 0h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 8h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0-4h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zM1 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <h3 className="fs-2 text-body-emphasis">Makeup</h3>
                        <p className="about-service">We specialize in makeup services, offering everything from exquisite bridal makeup
                            to a range of other professional makeup options. Let our skilled artists enhance your beauty for any
                            occasion.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div
                        className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <svg className="bi jam jam-unordered-list" width="1em" height="1em" fill="#000000" viewBox="-5 -7 24 24"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M4 0h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 8h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0-4h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zM1 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <h3 className="fs-2 text-body-emphasis">Skin</h3>
                        <p className="about-service">Discover a range of skin services at our establishment, including rejuvenating
                            facials, refreshing bleaching treatments, and luxurious spa experiences. Pamper your skin with our expert
                            services for a radiant glow.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
