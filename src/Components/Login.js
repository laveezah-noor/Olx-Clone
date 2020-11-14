import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from './form'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  
function Login (props) {
  
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      {props.atr.current_user.length ?
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      :
      <>
        <button className="login" onClick={() => setModalShow(true)}>
        Login
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>}
    </>
    );

}

export{
  Login,
  MyVerticallyCenteredModal
};