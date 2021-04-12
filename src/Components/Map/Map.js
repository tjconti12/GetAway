import { useState} from 'react';
import ReactMapGL, {GeolocateControl} from 'react-map-gl';
import SearchMarkers from '../SearchMarkers/SearchMarkers';
import PopupComponent from '../Popup/PopupComponent';


const geolocateControlStyle= {
    right: 10,
    bottom: 25
}

const Map = ({ searchData, viewport, setViewport, mapRef, children, searchType, searchCategory, introModalOpen, locationModalOpen, setResultData, handleMapDetailClick }) => {
    

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
            
            <GeolocateControl style={geolocateControlStyle}  />    
            
            <SearchMarkers searchData={searchData} setSelected={setSelected} searchType={searchType} searchCategory={searchCategory} introModalOpen={introModalOpen} locationModalOpen={locationModalOpen}></SearchMarkers>
            <PopupComponent selected={selected} setSelected={setSelected} searchType={searchType} setResultData={setResultData} handleMapDetailClick={handleMapDetailClick}></PopupComponent>
            {children}
            </ReactMapGL>
        </div>
        
        
    )
}

export default Map