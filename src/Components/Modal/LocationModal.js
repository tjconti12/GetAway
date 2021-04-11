import ModalElement from './ModalElement';
import {useState, useRef, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Modal.css';



const LocationModal = ({ isOpen, close, setIntroModalOpen, getUserLocation, viewport, setViewport, setSearchViewport, mapRef, containerRef }) => {
    // const containerRef = useRef();
    // const inputEl = useRef(null)
    // console.log(inputEl);
    // useEffect(() => {
    //     // Unfortantely no other way to add place holder text without making new component
    //     const input = document.querySelector('.react-geocoder input');
    //     if(isOpen) {
    //         input.setAttribute('placeholder', 'Search For City')
    //     }
    // })
    

    return (
        <div>
            
            <ModalElement isOpen={isOpen} close={close}>
                <h1>Where Do You Want To Search?</h1>
                <div id="search-container" ref={containerRef}></div>
                <p>Or</p>
                <button className="search-by-location-btn" onClick={() => {
                    close()
                    getUserLocation()
                }}>Current Location</button>
                <Link to="/"><button className="back-btn" onClick={() => {
                    close();
                    setIntroModalOpen(true);
                }}>Back</button></Link>
            </ModalElement>
            
        </div>
    )
}

export default LocationModal
