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

export default function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    const [googleShow, setGoogleShow] = React.useState(false);

    return (
        // GPage

        <section>
            <div class=" home-background">
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
                                className='img-fluid'
                            />

                        </div>
                        <p className='text-center text-2xl'>How can we help with your new bathroom</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae nihil magnam fugiat facere vitae odio modi fuga? Amet consectetur expedita, dolore, nulla odio cumque deleniti veritatis ex tenetur porro facilis voluptatum et?</p>
                    </div>
                    <div className='row flex justify-center'>
                        <div className='col-xxl-5 col-lg-5 col-lg-5
                        col-md-5 col-sm-12'>
                            <ul class="list-disc">
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                            </ul>
                        </div>

                        <div className='col-xxl-5 col-lg-5 col-lg-5
                        col-md-5 col-sm-12'>
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
                    <p className='text-xl text-center '>Why Us</p>
                    <div className=" px-3"><p className='text-left  text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste optio sunt neque distinctio sapiente nisi, magni omnis! Officia tenetur fugiat velit aperiam accusantium earum quae ipsum eius atque porro repellat eaque fugit assumenda itaque libero necessitatibus eos sapiente, fuga quam sequi. Reprehenderit est animi impedit necessitatibus, recusandae voluptates aliquid cumque laborum id libero corporis, minus minima fugit neque obcaecati? Possimus, reiciendis. Cumque architecto enim reprehenderit qui iusto in voluptates illum! Quibusdam ad placeat eum animi.</p></div>
                    <div className="">
                        <button onClick={() => setModalShow(true)} className='w-full h-[33px] bg-[red] text-white'>Click here to send us an e-mail with any questions</button>
                    </div>
                    <ContactModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                    <div onClick={() => setGoogleShow(true)}
                        className="pt-4 flex justify-content-center reviews-badges cursor-pointer" >
                        <img src="https://embedsocial.com/api/source_image_badges/svg-badge-4-g/en/google/71407" /></div>

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
                        <p className='text-center text-2xl'>How can we help with your new bathroom</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae nihil magnam fugiat facere vitae odio modi fuga? Amet consectetur expedita, dolore, nulla odio cumque deleniti veritatis ex tenetur porro facilis voluptatum et?</p>
                    </div>
                    <div className='row flex justify-center'>
                        <div className='col-xxl-5 col-lg-5 col-lg-5
                        col-md-5 col-sm-12'>
                            <ul class="list-disc">
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                                <li>this is a thing</li>
                            </ul>
                        </div>

                        <div className='col-xxl-5 col-lg-5 col-lg-5
                        col-md-5 col-sm-12'>
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
