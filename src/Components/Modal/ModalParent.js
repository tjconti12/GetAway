import IntroModal from './IntroModal';
import LocationModal from './LocationModal';


const ModalParent = ({ introModalOpen, setIntroModalOpen, locationModalOpen, setLocationModalOpen, getUserLocation, viewport, setViewport, setSearchViewport, mapRef, containerRef, closeLocationModal, setSearchCategory, setSearchType }) => {
    

    function closeIntroModal(){
        setIntroModalOpen(false);
      }

    // const [locationModalOpen, setLocationModalOpen] = useState(false);

    const openLocationModal = () => {
        setLocationModalOpen(true);
    }
    
    return (
        <div>
            <IntroModal isOpen={introModalOpen} close={closeIntroModal} openLocationModal={openLocationModal} setSearchCategory={setSearchCategory} setSearchType={setSearchType}></IntroModal>
            <LocationModal isOpen={locationModalOpen} close={closeLocationModal} getUserLocation={getUserLocation} viewport={viewport} setViewport={setViewport} setSearchViewport={setSearchViewport} mapRef={mapRef} containerRef={containerRef}></LocationModal>
        </div>
    )
}

export default ModalParent
