import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextBTNImage from './Open-Text-Logo.png'
import Jotform from 'react-jotform';

export const TextButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="modal-container " >
                <div className="row  ">
                    <div className="col ">
                        <div>
                            <button class="btn btn-link " onClick={handleShow}>
                                <img className="img-fluid  " src={TextBTNImage} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal

                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header className='bg-[#3f413f]' closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p className='bg-[#3f413f] text-white text-2xl'>Send us a text</p>
                    </Modal.Title>
                </Modal.Header>

                <Jotform
                    src="https://form.jotform.com/222967118089062"

                />
                <Modal.Footer className="bg-[#3f413f]">
                    <button className='w-full bg-[#ff0000]' onClick={handleClose}><p className='text-white pt-2 text-2xl'>Close Window</p></button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TextButton;