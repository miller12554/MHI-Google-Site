import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Jotform from 'react-jotform';
function ContactModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='bg-[red]'>
                <Modal.Title id="contained-modal-title-vcenter"
                    className='text-white mx-auto'>
                    Send MHI a email <header>

                    </header>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='mx-auto'>

                    <Jotform
                        src="https://form.jotform.com/222947795498075"

                    />

                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className='bg-[red] h-[33px] w-full pt-1' onClick={props.onHide}><p className='text-white py-auto'>Close Window</p></button>
            </Modal.Footer>
        </Modal>
    );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

export default ContactModal;