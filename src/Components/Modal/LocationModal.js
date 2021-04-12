import ModalElement from './ModalElement';

import {Link} from 'react-router-dom';

import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Modal.css';



const LocationModal = ({ isOpen, close, setIntroModalOpen, getUserLocation, containerRef }) => {
    
    return (
        <div>
            
            <ModalElement isOpen={isOpen} close={close}>
                <div className="location-modal-container">
                    <h1 className="location-h1">Where Do You Want To Search?</h1>
                    <div id="search-container" ref={containerRef}></div>
                    <p className="location-or">Or</p>
                    <div className="location-modal-btn-container">
                        <button className="search-by-location-btn" onClick={() => {
                            close()
                            getUserLocation()
                        }}>Current Location</button>
                        <Link to="/"><button className="back-btn" onClick={() => {
                            close();
                            setIntroModalOpen(true);
                        }}>Back</button></Link>
                    </div>
                    
                </div>
                
            </ModalElement>
            
        </div>
    )
}

export default LocationModal
