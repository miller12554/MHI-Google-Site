import React from 'react'
import Modal1 from "./Modal";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import BathPic from '../PhotoGallery/BathroomGallery/HomeBath.webp';
import KitchenPic from '../PhotoGallery/KitchenGallery/Kitchen.webp';
import './Home.css'
import ContactModal from '../pages/Contact-Us/ContactModal';
import TextButton from './Home-Modal/Text-Modal-btn'
import GoogleModalPage from './ReviewModal/GoogleModalPage';
import Content from './ReadMore';
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    const [googleShow, setGoogleShow] = React.useState(false);
    const navigate = useNavigate();

    return (
        // GPage

        <section>
            <div class=" home-background img-fluid">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-9 col-sm-12 text-center">
                        <TextButton
                            style={{ maxWidth: '200px' }}
                        />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-9 col-sm-12" >

                    </div>
                </div>

            </div>

            {/* ==============================================End Of Top of Page========================================================== */}
            <div className="bg-[#ff0000] mx-auto  ">
                <div className="row flex justify-center ">
                    <p className="text-center text-white text-3xl ">Services we have to offer</p>
                    <div className="row ">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
                            <img src={KitchenPic}
                                alt=""
                                className='cursor-pointer'
                                onClick={() => navigate("/bathrooms")} />
                            <p className="text-white text-center xxl:text-3xl
                            xl:text-3xl lg:text-2xl md:text-2xl  sm:text-2xl " >Bathroom Remodeling</p>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 pb-2">
                            <img src={KitchenPic}
                                alt=""
                                className='cursor-pointer'
                                onClick={() => navigate("/kitchens")}
                            />
                            <p className="text-white text-center xxl:text-3xl
                            xl:text-3xl lg:text-2xl md:text-2xl  sm:text-2xl">Kitchens</p>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 pb-2">
                            <img src={KitchenPic}
                                alt=""
                                className='cursor-pointer'
                                onClick={() => navigate("/basements")}
                            />
                            <p className="text-white text-center xxl:text-3xl
                            xl:text-3xl lg:text-2xl md:text-2xl  sm:text-2xl">Basements</p>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                            <img src={KitchenPic}
                                alt=""
                                className='cursor-pointer'
                                onClick={() => navigate("/otherremodeling")}
                            />
                            <p className="text-white text-center xxl:text-3xl
                            xl:text-3xl lg:text-2xl md:text-2xl  sm:text-2xl">Interior / Exterior</p>
                        </div>

                    </div>
                </div>
                <p class=" text-[#f6e30b] text-base  sm:text-1xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-6xl  ... text-center ">Handy-man Services.</p>


            </div>
            <div className="row flex justify-center mt-4 px-3">


                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 sm-12 ">
                    <div className="row flex justify-center mt-4 px-3">
                        <div className='col-6'>
                            <img src={BathPic}
                                alt=""
                                className='img-fluid'
                            />
                        </div>
                        <div className='col-6'>
                            <img src={BathPic}
                                alt=""
                                className='img-fluid rounded-2xl'
                            />

                        </div>
                        <p className='text-center text-2xl'>How can we help with your new bathroom</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae nihil magnam fugiat facere vitae odio modi fuga? Amet consectetur expedita, dolore, nulla odio cumque deleniti veritatis ex tenetur porro facilis voluptatum et?</p>
                    </div>
                    <div className='row '>
                        <div className='col-xxl-6 col-lg-6 col-lg-6
                        col-md-6 col-sm-6  flex space-x-4 xl:space-x-10 ... '>
                            <ul class="list-disc">
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                            </ul>
                            <ul class="list-disc">
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className="pt-5 col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-12 bg-slate-200  border-double border-4 border-red-700  ">
                    <p className='text-2xl font-bold  text-center text-[#ff0000] '>Why Us</p>

                    <Content />
                    <div className="">
                        <button onClick={() => setModalShow(true)} className='w-full h-[43px] bg-[red] text-white rounded hover:bg-[#9e2626]'>Click here to send us an e-mail with any questions</button>
                    </div>
                    <ContactModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                    <div onClick={() => setGoogleShow(true)}
                        className="pt-4 flex justify-content-center reviews-badges cursor-pointer " >
                        <img src="https://embedsocial.com/api/source_image_badges/svg-badge-4-g/en/google/71407" className='img-fluid' /></div>

                    <GoogleModalPage
                        show={googleShow}
                        onHide={() => setGoogleShow(false)}
                    />



                    <p className='text-center text-2xl text-[#ff0000] '>Click to see our reviews</p>


                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 sm-12 ">
                    <div className="row flex justify-center mt-4 px-3">
                        <div className='col-6'>
                            <img src={KitchenPic}
                                alt=""
                                className='img-fluid'
                            />
                        </div>

                        <div className='col-6'>
                            <img src={KitchenPic}
                                alt=""
                                className='img-fluid'
                            />
                        </div>
                        <p className='text-center text-2xl'>How can we help with your new kitchen</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae nihil magnam fugiat facere vitae odio modi fuga? Amet consectetur expedita, dolore, nulla odio cumque deleniti veritatis ex tenetur porro facilis voluptatum et?</p>
                    </div>
                    <div className='col-xxl-6 col-lg-6 col-lg-6
                        col-md-6 col-sm-6 mx-auto flex space-x-4  ... '>
                        <ul class="list-disc">
                            <li>this is a thing</li>
                            <li>this is a thing</li>
                            <li>this is a thing</li>
                            <li>this is a thing</li>
                            <li>this is a thing</li>
                        </ul>
                        <ul class="list-disc">
                            <li>this is a thing</li>
                            <li>this is a thing</li>
                            <li>this is a thing</li>
                            <li>this is a thing</li>
                            <li>this is a thing</li>
                        </ul>
                    </div>
                </div>



            </div>








            {/* <div className="row flex justify-center mt-4 px-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 sm-12 ">
                    <p className='text-center'>Why Us?</p>

                </div>


                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 sm-12 ">
                    <p className='text-center'>Photo Gallerys</p>
                    <div className=" row">


                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-12'>
                            <img src={HomeBath}
                                alt=""
                                className='img-fluid'
                                onClick={() => setModalShow(true)}
                            />
                            <BathroomModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>


                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-12'><img src={HomeBath} alt="" className='img-fluid' /></div>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-12'><img src={HomeBath} alt="" className='img-fluid' /></div>
                    </div>
                    <div className=" row pt-4">
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-12'><img src={HomeBath} alt="" /></div>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-12'><img src={HomeBath} alt="" /></div>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-12'><img src={HomeBath} alt="" /></div>
                    </div>
                </div>

            </div> */}

        </section >
    )
}
