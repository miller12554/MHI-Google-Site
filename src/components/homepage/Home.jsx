import React from 'react'
import BathPic from '../PhotoGallery/BathroomGallery/HomeBath.webp';
import KitchenPic from '../PhotoGallery/KitchenGallery/Kitchen.webp';
import smallPH from '../../assets/Placeholder/200x133PH.webp'
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

        <>
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
                                className='cursor-pointer border-white border-double border-4'
                                onClick={() => navigate("/bathrooms")} />
                            <p className="text-white text-center xxl:text-3xl
                            xl:text-3xl lg:text-2xl md:text-2xl  sm:text-2xl " >Bathroom Remodeling</p>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 pb-2">
                            <img src={KitchenPic}
                                alt=""
                                className='cursor-pointer border-white border-double border-4'
                                onClick={() => navigate("/kitchens")}
                            />
                            <p className="text-white text-center xxl:text-3xl
                            xl:text-3xl lg:text-2xl md:text-2xl  sm:text-2xl">Kitchens</p>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 pb-2">
                            <img src={KitchenPic}
                                alt=""
                                className='cursor-pointer border-white border-double border-4'
                                onClick={() => navigate("/basements")}
                            />
                            <p className="text-white text-center xxl:text-3xl
                            xl:text-3xl lg:text-2xl md:text-2xl  sm:text-2xl">Basements</p>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                            <img src={KitchenPic}
                                alt=""
                                className='cursor-pointer border-white border-double border-4'
                                onClick={() => navigate("/otherremodeling")}
                                border
                            />
                            <p className="text-white text-center xxl:text-3xl
                            xl:text-3xl lg:text-2xl md:text-2xl  sm:text-2xl">Interior / Exterior</p>
                        </div>

                    </div>
                </div>



                <div className=' row  bg-[#d4d4d8] xl:w-[75%] mx-auto '>
                    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
    xl:grid-cols-6 xl:flex  xl:w-full xl:place-content-evenly  
      gap-1  ">
                        <div className='row text-white mx-auto '>
                            <div className=' col-6 py-3 px-3  '>
                                <img src={smallPH} alt=""
                                    className='border-double border-4 border-red-700' />
                                <p className='text-center text-[#ff0000] text-lg font-semibold'>A fat pussy goes here</p>
                                <img src={smallPH} alt=""
                                    className='border-double border-4 border-red-700' />
                                <p className='text-center text-[#ff0000] text-lg font-semibold'>A fat pussy goes here</p>

                            </div>
                            <div className=' col-6 py-3 px-3 '>
                                <img src={smallPH} alt=""
                                    className='border-double border-4 border-red-700' />
                                <p className='text-center text-[#ff0000] text-lg font-semibold'>A fat pussy goes here</p>
                                <img src={smallPH} alt=""
                                    className='border-double border-4 border-red-700' />
                                <p className='text-center text-[#ff0000] text-lg font-semibold'>A fat pussy goes here</p>

                            </div>


                        </div>


                        <div className="sm-col-3 md-col-12 text-center mx-auto">
                            <p className='text-[#ff0000] text-2xl text-center'>Handy-Man Services</p>
                            <div className="max-w-sm"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus. Cumque cum explicabo alias reiciendis aliquam! Animi distinctio quaerat porro alias quasi architecto quas autem qui aut! Alias, beatae. Expedita asperiores accusantium soluta.</p></div>

                            <button onClick={() => navigate("/handyman")} className='bg-[#ff0000] text-white w-full rounded-lg hover:bg-blue-700 ' >More about Handy-Man Services</button>

                        </div>


                        <div className='row text-white text-center mx-auto'>
                            <div className=' col-6 py-3 px-3 '>
                                <img src={smallPH} alt=""
                                    className='border-double border-4 border-red-700' />
                                <p className='text-center text-[#ff0000] text-lg font-semibold'>A fat cock goes here</p>
                                <img src={smallPH} alt=""
                                    className='border-double border-4 border-red-700' />
                                <p className='text-center text-[#ff0000] text-lg font-semibold'>A fat cock goes here</p>

                            </div>
                            <div className=' col-6 py-3 px-3 '>
                                <img src={smallPH} alt=""
                                    className='border-double border-4 border-red-700' />
                                <p className='text-center text-[#ff0000] text-lg font-semibold '>A fat cock goes here</p>
                                <img src={smallPH} alt=""
                                    className='border-double border-4 border-red-700' />
                                <p className='text-center text-[#ff0000] text-lg font-semibold'>A fat cock goes here</p>

                            </div>


                        </div>



                    </div>


                    <div className="pb-4 text-center">
                        <button onClick={() => setModalShow(true)}
                            className='w-75 h-[32px] bg-gray-400  hover:bg-blue-700 mx-auto rounded-xl text-[#ff0000]  xl:text-2xl text-sm sm:text-base  '
                        >Click here to schedule a repair</button>
                    </div>

                    <div className="bg-[#ff0000] h-20"></div>
                </div>



            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 sm-12 pb-5">
                        <p className='text-[#ff0000] text-center text-3xl text-bold'>Bathrooms</p>
                        <div className="row">
                            <div className="col"><img src={BathPic}
                                alt=""
                                className='img-fluid border-double border-4 border-white'
                            /></div>
                            <div className="col"><img src={BathPic}
                                alt=""
                                className='img-fluid '
                            /></div>
                            <div className="row w-80 text-center "><p className='font-semibold	'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate obcaecati ad ullam harum, vel magnam voluptatem sit eius quo accusamus reiciendis repellendus porro voluptatum assumenda nemo numquam fugiat facilis enim aut consequuntur magni.</p></div>
                        </div>



                        <div className="row w-full bg-[#ff0000] rounded-xl mx-auto py-3">
                            <div className="col-6  ">
                                <ul className='text-white text-xs md:text-base -mx-5' style={{ listStyleType: 'square' }}>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                </ul>
                            </div>


                            <div className="col-6 ">
                                <ul className='text-white text-xs md:text-base -mx-5' style={{ listStyleType: 'square' }}>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <button onClick={() => navigate("/bathrooms")} className='w-75 bg-slate-300 rounded-lg '>Visit our bathroom page</button>
                            </div>
                        </div>

                    </div>



                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 sm-12 border-double border-4 border-red-700 ">
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



                        <div>
                            <iframe src="https://embedsocial.com/api/pro_hashtag/194ac0083cd9c54fe933e4813137204d5e3e437c" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>



                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 sm-12">
                        <p className='text-[#ff0000] text-center text-3xl text-bold'>Kitchens</p>
                        <div className="row">
                            <div className="col"><img src={BathPic}
                                alt=""
                                className='img-fluid '
                            /></div>
                            <div className="col"><img src={BathPic}
                                alt=""
                                className='img-fluid '
                            /></div>
                            <div className="row w-80 text-center "><p className='font-semibold	'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate obcaecati ad ullam harum, vel magnam voluptatem sit eius quo accusamus reiciendis repellendus porro voluptatum assumenda nemo numquam fugiat facilis enim aut consequuntur magni.</p></div>
                        </div>



                        <div className="row w-full bg-[#ff0000] rounded-xl mx-auto py-3">
                            <div className="col-6  ">
                                <ul className='text-white text-xs md:text-base -mx-5' style={{ listStyleType: 'square' }}>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                </ul>
                            </div>


                            <div className="col-6 ">
                                <ul className='text-white text-xs md:text-base -mx-5' style={{ listStyleType: 'square' }}>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                    <li>content goes here</li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <button onClick={() => navigate("/bathrooms")} className='w-75 bg-slate-300 rounded-lg '>Visit our bathroom page</button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>


            {/* ================================================================old stuff ============================================================ */}
            {/* <div className="row flex justify-center mt-4 px-3">


                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 sm-12 ">
                    <div className="row flex justify-center mt-4 px-3">
                        <div className=' col-6 py-3 px-3'>
                            
                        </div>
                        <div className=' col-6 py-3 px-3'>
                            <img src={BathPic}
                                alt=""
                                className='img-fluid rounded-2xl'
                            />

                        </div>
                        <p className='text-center text-2xl'>How can we help with your new bathroom</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae nihil magnam fugiat facere vitae odio modi fuga? Amet consectetur expedita, dolore, nulla odio cumque deleniti veritatis ex tenetur porro facilis voluptatum et?</p>
                    </div>
                    <p className='text-center text-white text-xl1'>Features and Ideas</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
    xl:grid-cols-6 xl:flex  xl:w-full xl:place-content-evenly  
      gap-1">
                        <div className="row bg-[#ff0000] text-white w-full  rounded-2xl">
                            <div className='col-3 mx-auto  '>
                                <ul className='' style={{ listStyleType: 'square' }}>
                                    <li>Content </li>
                                    <li>Content </li>
                                    <li>Content </li>
                                    <li>Content </li>
                                    <li>Content </li>
                                    <li>Content </li>
                                </ul>
                            </div>
                            <div className='col-3 '>
                                <ul className='' style={{ listStyleType: 'square' }}>
                                    <li>Content </li>
                                    <li>Content </li>
                                    <li>Content </li>
                                    <li>Content </li>
                                    <li>Content </li>
                                    <li>Content </li>
                                </ul>
                            </div>
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



            </div> */}








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

        </>
    )
}
