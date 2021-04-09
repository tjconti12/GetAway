import Modal from 'react-modal';
import {useState} from 'react';


const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '90vh',
      width: '90vw',
      backgroundColor: 'rgba(255,255,255,0.5',
      textAlign: 'center'
    }
  };

// The following line is for accessiblity per the documentation https://www.npmjs.com/package/react-modal
Modal.setAppElement('#root');

const ModalElement = ({ isOpen, close, children }) => {
    

    

    return (
        <div>
            <Modal
                isOpen={isOpen}
                // onRequestClose={close}
                style={customStyles}
                contentLabel="Example Modal"
                >
              {children}
            </Modal>
        </div>
    )
}

export default ModalElement;
