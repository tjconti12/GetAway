import { useState, useCallback } from 'react';
import ReactMapGL, {Marker, Popup, GeolocateControl} from 'react-map-gl';

// import DeckGL, { GeoJsonLayer } from 'deck.gl';
import SearchMarkers from '../SearchMarkers/SearchMarkers';
import PopupComponent from '../Popup/PopupComponent';


const geolocateControlStyle= {
    right: 10,
    bottom: 25
}

const Map = ({ searchData, useUserLocation, viewport, setViewport, mapRef, containerRef, children }) => {
    

    const [selected, setSelected] = useState(null);


    

    return (
        <div>
            
            <ReactMapGL 
            {...viewport}
            height="90vh"
            width="100vw"
            ref={mapRef}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
            onViewportChange={(viewport) => {
            setViewport(viewport);
            }} >
            
            <GeolocateControl style={geolocateControlStyle}  />    {/*positionOptions={{enableHighAccuracy: true}} trackUserLocation={true} showUserLocation={true} auto */}
            
            <SearchMarkers searchData={searchData} setSelected={setSelected}></SearchMarkers>
            <PopupComponent selected={selected} setSelected={setSelected}></PopupComponent>
            {children}
            </ReactMapGL>
        </div>
        
        
    )
}

export default Map