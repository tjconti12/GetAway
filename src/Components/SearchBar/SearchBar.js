import Geocoder from 'react-map-gl-geocoder';
import {useCallback, useEffect} from 'react';
import IntroModal from '../Modal/IntroModal';

const SearchBar = ({ setViewport, viewport, setSearchViewport, mapRef, containerRef, closeLocationModal, introModalOpen }) => {

    const handleSearchViewport = (newViewport) => {
        setSearchViewport(newViewport);
        console.log('yes', newViewport)
    }

    const handleViewportChange = useCallback(
        (newViewport) => {
            setViewport(newViewport);
        },
        []
      );
    
    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            handleSearchViewport(newViewport);
            const geocoderDefaultOverrides = { transitionDuration: 1000 };
          
    
          return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides,
          });
        },
        [handleViewportChange]
      );


    useEffect(() => {
        handleGeocoderViewportChange();
    }, [])

    if(introModalOpen) {
        return null;
    }
    
    return (
        <div>
            <Geocoder
          {...viewport}
          mapRef={mapRef}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
          containerRef={containerRef}
          onViewportChange={handleGeocoderViewportChange}
          onResult={closeLocationModal}
          onError={(error) => {
              console.log(error)
          }}
          />
        </div>
    )
}

export default SearchBar
