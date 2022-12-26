import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Google(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header className='bg-[#3f413f]' >
                <Modal.Title id="contained-modal-title-vcenter">
                    <p className='text-white '>Millers Home Improvements Google Reviews</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe src="https://embedsocial.com/api/pro_hashtag/350d38ada922f4ce3a35d71865471b1489f18114" width="100%" height="350px" frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </Modal.Body>
            <Modal.Footer >
                <button className='w-full bg-[#ff0000] pt-2 ' onClick={props.onHide}><p className='text-white text-xl'>Close Review Window</p></button>
            </Modal.Footer>
        </Modal>
    );
}



export default Google;