import ModalElement from './ModalElement';
import {useState, useRef, useEffect, useCallback} from 'react';

import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Modal.css';



const LocationModal = ({ isOpen, close, getUserLocation, viewport, setViewport, setSearchViewport, mapRef, containerRef }) => {
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
                <button onClick={() => {
                    close()
                    getUserLocation()
                }}>Current Location</button>
                <button onClick={close}>Close</button>
                
                
                    
                    
                
                
                
                
                {/* <Geocoder
                    
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
                    onSelected={(viewport) => {
                    setSearchViewport(viewport);
                    setViewport(viewport);
                    close();
                    }}
                    viewport={viewport}
                    hideOnSelect={false}
                    value=""
                >
                </Geocoder> */}

            </ModalElement>
            
        </div>
    )
}

export default LocationModal
