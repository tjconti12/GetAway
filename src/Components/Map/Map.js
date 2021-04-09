import { useState, useCallback } from 'react';
import ReactMapGL, {Marker, Popup, GeolocateControl} from 'react-map-gl';

// import DeckGL, { GeoJsonLayer } from 'deck.gl';
import SearchMarkers from '../SearchMarkers/SearchMarkers';
import PopupComponent from '../Popup/PopupComponent';


const geolocateControlStyle= {
    right: 10,
    bottom: 25
}

const Map = ({ searchData, viewport, setViewport, mapRef, children, searchType, searchCategory }) => {
    

    const [selected, setSelected] = useState(null);


    

    return (
        <div>
            
            <ReactMapGL 
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            {...viewport}
            height="90vh"
            width="100vw"
            ref={mapRef}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
            onViewportChange={(viewport) => {
            setViewport(viewport);
            }} >
            
            <GeolocateControl style={geolocateControlStyle}  />    {/*positionOptions={{enableHighAccuracy: true}} trackUserLocation={true} showUserLocation={true} auto */}
            
            <SearchMarkers searchData={searchData} setSelected={setSelected} searchType={searchType} searchCategory={searchCategory}></SearchMarkers>
            <PopupComponent selected={selected} setSelected={setSelected} searchType={searchType}></PopupComponent>
            {children}
            </ReactMapGL>
        </div>
        
        
    )
}

export default Map