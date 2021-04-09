import ModalElement from '../Modal/ModalElement';
import {useState} from 'react';

const IntroModal = ({isOpen, close, openLocationModal}) => {
    
    return (
        <div>
            <ModalElement isOpen={isOpen} close={close}>
                <h1>App Title</h1>
                <button onClick={() => {
                    // navigator.geolocation.getCurrentPosition(updateUserPosition)
                    close()
                    openLocationModal()
                    // getDetails();
                    // const showPosition = (loc) => console.log(loc)
                }}>Food</button>
                <h3>Explore</h3>
                <h3>Events</h3>
            </ModalElement>
            
        </div>
    )
}

export default IntroModal
